<p align="left">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset=".github/assets/readme-banner_dark.jpg"
    />
    <img
      src=".github/assets/readme-banner_light.jpg"
      alt="Metrics-Core repository banner"
    />
  </picture>
</p>

<p align="right">Metrics-Core a project by REVREBEL</p>

# METRICS-CORE

<div align="left">
  <a href="https://github.com/REVREBEL/Metrics-Core/issues">
    <img src="https://img.shields.io/github/issues/REVREBEL/Metrics-Core?color=163666&style=for-the-badge&logo=github" alt="Issues"/>
  </a>
  <a href="https://github.com/REVREBEL/Metrics-Core/pulls">
    <img src="https://img.shields.io/github/issues-pr/REVREBEL/Metrics-Core?color=71c9c5&style=for-the-badge&logo=github" alt="PRs"/>
  </a>
</div>

<br>
<br>

## **THE PROJECT**

Metrics-Core is the Zenith monorepo implementation for REVREBEL, designed for a single-window workflow across product apps, shared packages, database schema/migrations, docs, and data prep.

Current architecture in this repo:
- `apps/app`: customer-facing Next.js app
- `apps/admin`: admin control Next.js app
- `apps/docs`: Nextra docs app
- `packages/db`: Drizzle + Postgres schema/client/migrations
- `packages/bq-client`: BigQuery client wrapper
- `packages/schema`: shared Zod + TypeScript schema contracts
- `packages/ui`: shared UI package + registry build output
- `data-prep`: Python ingestion/ELT workspace
- `turbo.json`: Turborepo task orchestration
- `pnpm-workspace.yaml`: monorepo workspace wiring
- `.github/workflows/`: deploy/migration/dataform sync workflow scaffolds

<br>
<br>

## **INSTALLATION**

Prerequisites:
- Node.js 20+
- pnpm (Corepack-managed)
- Infisical CLI (for secrets injection)

Install dependencies at repo root:

```bash
pnpm install
```

Initialize Infisical for this project:

```bash
infisical login
infisical init
```

This repo is configured with:
- Project ID: `e88c64cc-b868-4fa2-bf7f-2f3410d38185`
- Project slug: `metrics-core-ba-7p`
- Config file: `.infisical.json`


## **USAGE**

Run all workspace dev tasks (Turbo):

```bash
pnpm dev
```

Run app-specific dev servers with Infisical path-scoped secrets:

```bash
# Customer app
infisical run --path="/apps/app" -- pnpm --filter=@apps/app dev

# Admin app
infisical run --path="/apps/admin" -- pnpm --filter=@apps/admin dev

# Docs app
infisical run --path="/apps/docs" -- pnpm --filter=@apps/docs dev
```

Run full monorepo dev with shared/root secret scope:

```bash
infisical run -- pnpm dev
```

Common root tasks:

```bash
pnpm build
pnpm lint
pnpm db:generate
pnpm db:push
```

<br>
<br>

## **PROJECT TREE**

```text
.
├── .github/
│   └── workflows/
│       ├── dataform-sync.yml
│       ├── database-migrate.yml
│       └── deploy.yml
├── apps/
│   ├── app/
│   ├── admin/
│   └── docs/
├── packages/
│   ├── bq-client/
│   ├── config/
│   ├── db/
│   ├── schema/
│   └── ui/
├── data-prep/
├── .infisical.json
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

<br>
<br>

## **NOTES**

- `apps/*` are intentionally thin wrappers; shared logic belongs in `packages/*`.
- `packages/db` is the source of truth for Postgres schema and migrations.
- `packages/ui` supports both direct workspace imports and generated registry output.
- Dataform sync workflow is scaffolded; requires `DATAFORM_SYNC_TOKEN` GitHub secret and target poly-repo permissions.
- Deployment workflow files are placeholders and should be finalized per environment.

<br>
<br>

## **SCREENSHOTS**

- Add app screenshots after first successful local/dev deployment verification.


<br>
<br>

<table>
  <tbody>
    <tr>
      <td valign="middle" width="1200" height="200" >
          <div>
            <img src="https://raw.githubusercontent.com/REVREBEL/.github/main/assets/get-in-touch_dark.png" alt="Get in Touch" width="150" valign="top" />
            &emsp;
            <a href="https://github.com/REVREBEL" target="_blank"><img src="https://raw.githubusercontent.com/REVREBEL/.github/main/assets/icons/github-outline_dark.png" alt="GitHub" width="36" /></a>
            <a href="mailto:hello@revrebel.io" target="_blank" target="_blank"><img src="https://raw.githubusercontent.com/REVREBEL/.github/main/assets/icons/email-outline_dark.png" alt="Email" width="36" /></a>
            <a href="https://www.linkedin.com/company/revrebel/" target="_blank"><img src="https://raw.githubusercontent.com/REVREBEL/.github/main/assets/icons/linkedin-outline.png" alt="LinkedIn" width="36" /></a>
            <a href="https://www.revrebel.io/blog" target="_blank"><img src="https://raw.githubusercontent.com/REVREBEL/.github/main/assets/icons/blog-outline.png" alt="Blog" width="36" /></a>
            <a href="https://revrebel.io" target="_blank" style="display: inline-block;"><img src="https://img.shields.io/badge/website-163666?style=for-the-badge" alt="Website" height="40" align="right" /></a>
          </div>
      </td>
    </tr>
  </tbody>
</table>
