# Zenith Monorepo Architectural Specification

**Version:** 1.1.0

**Target Architecture:** Next.js + Turborepo + Drizzle + Google Cloud Dataform + Infisical

**Audience:** Solo Developer / High-Automation Setup

## 1. Executive Summary & Philosophy

The **Zenith Monorepo** is engineered to enable a single developer to build and operate a high-performance, data-heavy SaaS ecosystem.

### Core Design Principles

1. **Single Window Experience:** Eliminate context-switching by keeping data ingestion (Python), transformation models (Dataform SQLX), shared types, database schemas (Drizzle), application frontends (Next.js), and admin panels in one repository.
2. **Atomic Commits:** Make structural data model changes and instantly deploy the corresponding database migrations and UI updates in a single pull request.
3. **Thin Apps, Heavy Packages:** Move business logic, schemas, and database configurations into shared packages (`packages/*`). Keep the consumer apps (`apps/*`) as lightweight, deployment-ready wrappers.
4. **Push-to-Sync Architecture:** Bridge the gap between GCP Dataform's poly-repo requirements and our centralized codebase via modern, zero-overhead GitHub Actions.
5. **Registry-Driven Design System:** Build UI components using a component-registry paradigm (based on the Vercel Registry Starter), allowing both direct monorepo imports and remote installations.

## 2. Master Directory Tree

```text
root/
├── .github/
│   └── workflows/
│       ├── deploy.yml            # CI/CD deployment pipeline for Vercel
│       ├── database-migrate.yml  # Auto-run migrations on staging/prod
│       └── dataform-sync.yml     # Auto-sync SQLX definitions to Dataform Poly-Repo
├── apps/
│   ├── app/                      # Customer-Facing Next.js Portal (App Router)
│   │   ├── app/
│   │   │   └── api/              # Thin API routes querying @repo/db & @repo/bq-client
│   │   ├── package.json
│   │   └── next.config.js
│   ├── admin/                    # Mission Control Dashboard (Next.js/Vercel)
│   │   ├── app/
│   │   │   └── api/              # Admin-specific routes
│   │   └── package.json
│   └── docs/                     # Technical Docs (Nextra - shuding/nextra-docs-template)
│       ├── pages/                # Nextra Page-route structures
│       │   ├── _meta.json        # Sidebar layout, order, and page metadata
│       │   └── index.mdx         # Standard MDX-based documentation homepage
│       ├── theme.config.tsx      # Nextra layout, logo, footer, and GitHub link config
│       ├── next.config.js        # Nextra MDX compiler configuration
│       └── package.json
├── packages/
│   ├── db/                       # The PostgreSQL Database Layer
│   │   ├── src/
│   │   │   ├── client.ts         # Connection pooling & Postgres-JS client export
│   │   │   └── schema.ts         # Master Drizzle schema definitions
│   │   ├── migrations/           # Auto-generated SQL files from Drizzle Kit
│   │   ├── drizzle.config.ts     # Drizzle Kit config
│   │   └── package.json
│   ├── bq-client/                # Google Cloud BigQuery Client Wrapper
│   │   ├── src/
│   │   │   └── client.ts         # Cost-monitoring & query execution wrapper
│   │   └── package.json
│   ├── schema/                   # Shared TypeScript Types & Zod Schemas
│   │   ├── src/
│   │   │   ├── generated/        # Types generated from BigQuery/Dataform schemas
│   │   │   └── index.ts          # Consolidated exports
│   │   └── package.json
│   ├── ui/                       # Design System / Component Registry (vercel/registry-starter)
│   │   ├── registry/             # Source files for raw components (e.g., button.tsx, dialog.tsx)
│   │   ├── scripts/              # Registry builder script (compiles code into JSON manifests)
│   │   ├── src/                  # Core direct-import utilities & global styles
│   │   ├── public/               # Served static files (where compiled registry.json lives)
│   │   ├── tailwind.config.ts    # Configured to look inside `apps/*` and packages/ui/*
│   │   └── package.json
│   └── config/                   # Centralized Tool Configurations
│       ├── eslint/
│       ├── typescript/
│       └── tailwind/
├── data-prep/                    # Python Ingestion Layer (Isolated Workspace)
│   ├── models/                   # Pydantic validation structures
│   ├── scripts/                  # Extract-Load-Transform (ELT) ingestion scripts
│   ├── requirements.txt
│   └── pyproject.toml
└── package.json                  # Workspace definitions (pnpm)
```

## 3. Technology Stack & Multi-App Orchestration

### 3.1 Workspace Management: pnpm

We use pnpm workspaces for lightning-fast installs, shared dependencies, and native linking.

**File:** pnpm-workspace.yaml

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

### 3.2 Task Runner: Turborepo (turbo.json)

Turborepo schedules tasks (build, lint, test, database actions) in parallel, caching files when their code dependencies haven't changed.

**File:** turbo.json

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env", "DOPPLER_TOKEN", "INFISICAL_TOKEN"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**", "public/registry/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "db:generate": {
      "cache": false
    },
    "db:push": {
      "cache": false
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

## 4. Secret Management Specifications (Infisical)

We implement **Infisical** with folder-based scoping as our Single Source of Truth (SSOT). This keeps environment variables out of git and removes the requirement for local .env files.

### 4.1 Vault Directory Structure (Infisical Console)

Within your Infisical project, structure your paths exactly like your codebase:

```text
/ (Root)
├── common/               # Injected everywhere (e.g., DATABASE_URL, REGION)
├── apps/
│   ├── app/              # Customer app specifics (STRIPE_SECRET_KEY, NEXT_PUBLIC_ANALYTICS)
│   ├── admin/            # Admin credentials (ADMIN_BYPASS_TOKEN)
│   └── docs/             # Docs configuration
└── packages/
    └── bq-client/        # Google Cloud IAM credentials & Service Account JSON stringified
```

### 4.2 Local Workspace Configuration

**File:** .infisical.json (Root)

This maps local directories to specific Infisical paths.

```json
{
  "project": "zenith-monorepo-id",
  "environments": [
    {
      "env": "dev",
      "path": "/"
    }
  ]
}
```

### 4.3 Execution Commands (Local CLI)

To boot your entire stack with secrets dynamically mapped to their respective folders:

```bash

# Inject into Customer App context
infisical run --path="/apps/app" -- pnpm --filter=@apps/app dev

# Inject into Admin-App context
infisical run --path="/apps/admin" -- pnpm --filter=@apps/admin dev

# Unified dev (using global workspace bindings)
infisical run -- pnpm dev
```

## 5. Database Layer (Drizzle & Postgres)

The PostgreSQL database schema is compiled entirely within packages/db. All tables, indexes, and relations live here.

### 5.1 Drizzle Schema Definition Standard

To maximize performance, every table definition includes explicit typing, schema validation exports, and required database indexes.

**File:** packages/db/src/schema.ts

```ts
import { pgTable, text, serial, timestamp, index } from "drizzle-orm/pg-core";
import { createSelectSchema, createInsertSchema } from "drizzle-zod";

// Table Definition
export const users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    email: text("email").unique().notNull(),
    status: text("status", { enum: ["active", "suspended", "pending"] }).default("pending").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  // Critical for solo-dev performance scaling
  (table) => [
    index("email_idx").on(table.email),
    index("status_idx").on(table.status),
  ]
);

// TypeScript Interface Auto-Inference
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Shared Zod schemas for immediate App-side API and form validations
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
```

### 5.2 Client Connection Pool Export

Ensure a single, performance-optimized pool setup that works transparently across local Node environments and serverless Edge deployments.

**File:** packages/db/src/client.ts

```ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is missing from execution environment.");
}

// Single database client with optimized connection limits for serverless runtimes
export const client = postgres(databaseUrl, { max: 1 });
export const db = drizzle(client, { schema });
```

## 6. GCP Dataform Sync Pipeline

Google Cloud Dataform requires a dedicated, isolated git repository to execute transformations. We treat packages/dataform as the master, and automate deployments through a sync pipeline.

```text
+-------------------------------------------------------------+
|                      ZENITH MONOREPO                        |
|                                                             |
|   packages/dataform/                                        |
|     ├── definitions/ ---> (Developer creates/edits SQLX)     |
|     └── dataform.json                                       |
+------------------------------+------------------------------+
                               |
                               v  Git Push (path: /packages/dataform/**)
+------------------------------+------------------------------+
|                    GITHUB ACTIONS WORKFLOW                  |
|                                                             |
|   1. Clones Monorepo                                        |
|   2. Isolates `packages/dataform`                           |
|   3. Pushes clean structure to Poly-Repo                    |
+------------------------------+------------------------------+
                               |
                               v  Auto-Sync Target
+------------------------------+------------------------------+
|                DATAFORM ISOLATED POLY-REPO                  |
|                                                             |
|   ├── definitions/                                          |
|   └── dataform.json <--- (GCP Dataform Engine Pulls Here)    |
+-------------------------------------------------------------+
```

### 6.1 Git Sync Automator (GitHub Actions)

This workflow detects changes inside packages/dataform and mirror-syncs them instantly to your Dataform Poly-Repo, keeping everything clean of Monorepo noise.

**File:** .github/workflows/dataform-sync.yml

```yaml
name: Dataform Mirror Sync

on:
  push:
    paths:
      - 'packages/dataform/**'
    branches:
      - main

jobs:
  sync-to-polyrepo:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Monorepo
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Sync Directory to Poly-Repo
        uses: andstor/copycat-action@v3
        with:
          personal_token: ${{ secrets.DATAFORM_SYNC_TOKEN }}
          src_path: 'packages/dataform/.'
          dst_path: '/'
          dst_owner: 'REVREBEL'
          dst_repo_name: 'Metrics-Dataform'
          dst_branch: 'main'
          clean: true # Deletes stale files in target repo to keep parity
```

## 7. Operational Naming Conventions

To keep ingestion pipelines, tables, and frontends matching, we enforce these strict semantic patterns:

### 7.1 BigQuery Layout Conventions

* **Ingestion (Python/GCP):** Write RAW data directly to a dataset prefix: raw_ (e.g., raw_users, raw_payment_logs).
* **Staging (Dataform SQLX):** Clean up JSON objects, normalize datatypes, and cast to lowercase strings into prefix: stg_ (e.g., stg_users).
* **Production (Dataform SQLX):** Output high-performance analytical views and tables using prefix: prod_ (e.g., prod_daily_active_customers).

### 7.2 Code Style Guide

* **PostgreSQL (Drizzle):** Write database column names in snake_case. Map them internally to Drizzle structures in camelCase.
* **TypeScript Types:** PascalCase (e.g., UserAnalytics, UserStatus).
* **Zod Schemas:** camelCase ending in "Schema" (e.g., userValidationSchema).

## 8. Specific Subsystem Configurations

### 8.1 UI Registry Starter Setup (packages/ui)

Based on the vercel/registry-starter design, the UI package serves a dual purpose. It functions as a standard, local workspace dependency *and* compiles raw components down to JSON descriptors inside public/registry/. This allows both standard imports and CLI installations (e.g., npx shadcn@latest add ...).

#### How it compiles in Turborepo:

Your registry build runs on a node compile script which crawls packages/ui/registry/ and outputs schemas to packages/ui/public/registry/index.json.

**File:** packages/ui/package.json

```json
{
  "name": "@repo/ui",
  "version": "1.0.0",
  "exports": {
    "./components/*": "./src/components/*.tsx",
    "./utils": "./src/utils.ts",
    "./styles.css": "./src/styles.css"
  },
  "scripts": {
    "build:registry": "tsx ./scripts/build-registry.ts",
    "build": "pnpm build:registry"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "tsx": "^4.19.0",
    "typescript": "^5.0.0"
  }
}
```

### 8.2 Nextra Documentation Setup (apps/docs)

We integrate shuding/nextra-docs-template directly into our pnpm workspace layout under apps/docs. It reads local MDX files and uses Turborepo's shared configs.

#### Nextra Page Configuration Model:

Nextra relies on a theme.config.tsx layout file alongside your next.config.js.

**File:** apps/docs/next.config.js

```js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  reactStrictMode: true,
  // Ensure we transpile local workspace imports in Nextra if it references packages/ui
  transpilePackages: ["@repo/ui"]
})
```

**File:** apps/docs/theme.config.tsx

```tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Zenith Monorepo Docs</span>,
  project: {
    link: 'https://github.com/your-username/zenith-monorepo',
  },
  docsRepositoryBase: 'https://github.com/your-username/zenith-monorepo/tree/main/apps/docs',
  footer: {
    text: 'Zenith Platform Documentation © 2026',
  }
}

export default config
```

## 9. Critical Multi-App Integration Checklist

* [ ] **First Run Prep:** Install pnpm globally (npm i -g pnpm) and run pnpm install from the root directory to automatically wire up local workspace linkages.
* [ ] **Establish Git Secrets:** Add your Personal Access Token (PAT) with repository push permissions inside GitHub secrets under DATAFORM_SYNC_TOKEN to unlock automated syncing. Ensure this token has read/write permissions to the REVREBEL/Metrics-Dataform repository.
* [ ] **Configure Vercel Multi-Root:** On your Vercel Dashboard, create three independent projects mapping back to the same Monorepo:
  * For **Customer App**: Root directory must point to apps/app.
  * For **Admin Control**: Root directory must point to apps/admin.
  * For **Docs Portal**: Root directory must point to apps/docs.
* [ ] **Connect Infisical:** Run infisical init at the root, authenticate your developer system, and map environment keys to completely replace .env files.