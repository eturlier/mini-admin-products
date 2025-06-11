---
date: 2025-06-11 14:49:32
---

# Project Specifications "Knowledge Base"

This project specifications will help you understand the project architecture and features.

It might not be update to date, always refer to code as source of truth.

> Important: Some specifications are in french, and might not be implemented yet in the codebase.

# Description du projet

Le projet consiste à développer une application web permettant d'afficher les produits d'une boutique de vente en ligne de matériel tech (ordinateurs, smartphones, etc).

L'application permet de gérer l'affichage des produits ainsi que leur détails.

## Objectifs

1. Avoir une interface utilisateur intuitive et agréable
2. Permettre d'avoir une liste des produits
3. Permettre de naviguer dans les produits

# Features principales

### User-Stories principales

#### "Liste des produits"

- En tant qu'utilisateur Je veux voir la liste des produits Afin de pouvoir les consulter
- En tant qu'utilisateur Je veux que chaque produit soit affiché avec son image, sa catégorie, son nom, son prix et sa description
- En tant qu'utilisateur Je veux que chaque produit a un bouton cliquable qui mène vers la page de détails

#### "Détails d'un produit"

- En tant qu'utilisateur Je veux voir les détails d'un produit Afin de pouvoir les consulter
- En tant qu'utilisateur Je veux que chaque produit soit affiché avec son image, son nom, son prix, sa description et usa reference
- En tant qu'utilisateur Je veux pouvoir revenir à la page de liste des produits

# Choix initial des technologies

## Main technologies

- Node 22
- TypeScript
- Angular 20

### Paradigms

- Clean Architecture → Organize the system into clear layers (application, domain, infrastructure). Maintain modularity to ensure scalability, use-case based!
- Feature-Driven Development (FDD) → Categorize and structure features efficiently, ensuring that they remain self-contained and manageable.
- Domain-Driven Design (DDD) → Focus on business-driven architecture using Entities, Aggregates, Value Objects, Repositories, and Services to enforce domain consistency.
- Behavior-Driven Development (BDD) → When working on user stories, test files, or Gherkin scenarios, focus on real-world user behavior to drive system design.
- SOLID Principles → Maintain single responsibility, modularity, and decoupling to ensure long-term maintainability and flexibility.

# Architecture

## Application Structure

- **src/core/** - Contains business logic, framework-independent

  - **common/** - Shared elements and utilities
  - **product/** - Product domain
    - **domain/** - Entities and models
    - **gateways/** - Interfaces for data access
    - **use-cases/** - Specific use cases

- **src/ui/** - Angular user interface
  - **common/** - Reusable components
  - **product/** - Product-specific components

## Mock System

- Data is mocked via `mock-product.gateway.ts`
- No real backend, all data is in-memory
- The system uses simulated delays to mimic API calls

## Data Flow

1. UI component requests data via use-case
2. Use-case uses the appropriate gateway
3. Mock gateway returns static data
4. Data is transformed if necessary
5. UI displays the data

## State Management

- RxJS for data flow management
- No external state management library
- Local state in components for filters

## Main Entities

### Product

- Definition: `src/core/product/domain/product.ts`
- Represents a product with its attributes (id, name, price, category, etc.)

### Category

- Definition: `src/core/product/domain/category.ts`
- Enum defining the different product categories available

## Additional Files

> ⚠️ **IMPORTANT**: These files must be taken very seriously as they represent the latest up-to-date versions of our codebase. You MUST rely on these versions and their content imperatively.

### package.json

```json
{
  "name": "mini-admin-products",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "vitest",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "20.0.0",
    "@angular/compiler": "20.0.0",
    "@angular/core": "20.0.0",
    "@angular/forms": "20.0.0",
    "@angular/platform-browser": "20.0.0",
    "@angular/router": "20.0.0",
    "rxjs": "7.8.0",
    "tslib": "2.8.1",
    "zone.js": "0.15.0"
  },
  "devDependencies": {
    "@analogjs/platform": "1.17.1",
    "@analogjs/vite-plugin-angular": "1.17.1",
    "@analogjs/vitest-angular": "1.17.1",
    "@angular/build": "20.0.0",
    "@angular/cli": "20.0.0",
    "@angular/compiler-cli": "20.0.0",
    "@nx/vite": "21.0.0",
    "@types/jasmine": "5.1.0",
    "@vitest/ui": "3.2.3",
    "angular-eslint": "20.0.0",
    "eslint": "9.28.0",
    "jasmine-core": "5.7.0",
    "jsdom": "22.0.0",
    "typescript": "5.8.2",
    "typescript-eslint": "8.33.1",
    "vite": "6.0.0",
    "vite-tsconfig-paths": "4.2.0",
    "vitest": "3.0.0"
  }
}
```

### Project Structure

```text
.
./.editorconfig
./.git
./.github
./.github/workflows
./.github/workflows/update-kb.yml
./.gitignore
./.windsurf
./.windsurf/rules
./.windsurf/rules/00-architecture
./.windsurf/rules/00-architecture/0-feature-based-architecture.mdc
./.windsurf/rules/01-standards
./.windsurf/rules/01-standards/1-clean-code-frontend.mdc
./.windsurf/rules/01-standards/1-clean-code.mdc
./.windsurf/rules/01-standards/1-naming-conventions.mdc
./.windsurf/rules/02-programming-languages
./.windsurf/rules/02-programming-languages/2-typescript-naming-conventions.mdc
./.windsurf/rules/02-programming-languages/2-typescript.mdc
./.windsurf/rules/03-frameworks-and-libraries
./.windsurf/rules/03-frameworks-and-libraries/3-angular.mdc
./.windsurf/rules/04-tools-and-configurations
./.windsurf/rules/04-tools-and-configurations/4-package-installation.mdc
./.windsurf/rules/05-workflows-and-processes
./.windsurf/rules/05-workflows-and-processes/5-bug-finder.mdc
./.windsurf/rules/07-quality-assurance
./.windsurf/rules/07-quality-assurance/7-testing-frontend.mdc
./.windsurf/rules/07-quality-assurance/7-testing-standards.mdc
./angular.json
./documentations
./eslint.config.js
./package-lock.json
./package.json
./public
./public/favicon.ico
./README.md
./src
./src/config
./src/config/app.config.ts
./src/config/app.routes.ts
./src/core
./src/core/common
./src/core/common/domain
./src/core/common/domain/breadcrumb.ts
./src/core/common/domain/error.ts
./src/core/product
./src/core/product/domain
./src/core/product/domain/category.ts
./src/core/product/domain/product.ts
./src/core/product/gateways
./src/core/product/gateways/mock-product.gateway.ts
./src/core/product/gateways/product.gateway.ts
./src/core/product/product.providers.ts
./src/core/product/use-cases
./src/core/product/use-cases/get-product-by-id.use-case.ts
./src/core/product/use-cases/get-products.use-case.ts
./src/index.html
./src/main.ts
./src/styles.scss
./src/test-setup.ts
./src/ui
./src/ui/app.html
./src/ui/app.spec.ts
./src/ui/app.ts
./src/ui/common
./src/ui/common/breadcrumb
./src/ui/common/breadcrumb/breadcrumb.html
./src/ui/common/breadcrumb/breadcrumb.scss
./src/ui/common/breadcrumb/breadcrumb.ts
./src/ui/common/loading
./src/ui/common/loading/loading-state.html
./src/ui/common/loading/loading-state.scss
./src/ui/common/loading/loading-state.ts
./src/ui/product
./src/ui/product/product-detail
./src/ui/product/product-detail/product-detail.html
./src/ui/product/product-detail/product-detail.scss
./src/ui/product/product-detail/product-detail.spec.ts
./src/ui/product/product-detail/product-detail.ts
./src/ui/product/product-list
./src/ui/product/product-list/product-list.html
./src/ui/product/product-list/product-list.scss
./src/ui/product/product-list/product-list.spec.ts
./src/ui/product/product-list/product-list.ts
./tsconfig.app.json
./tsconfig.json
./tsconfig.spec.json
./vite.config.mts
./vitest.config.ts

```

2025-06-11 14:49:32
