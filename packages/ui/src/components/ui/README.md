# Shadcn Compatibility Layer

This directory contains compatibility wrappers for Shadcn-generated components.
These files serve as a bridge between the standard Shadcn import paths (`@/components/ui/*`)
and the internal library structure of this repository.

## Usage

When importing components in apps, it is recommended to use the canonical package aliases
(e.g., `@buttons`, `@ui`, `@inputs`) instead of these wrappers.

These wrappers are primarily maintained for:
1. Ease of migration for existing Shadcn code.
2. Supporting third-party tools that expect standard Shadcn paths.

## Structure

Each file in this directory typically re-exports the corresponding primitive from the `src/primitives` directory.
