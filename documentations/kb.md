---
date: 2025-06-09 21:49:53
---

# Project Specifications "Knowledge Base"

This project specifications will help you understand the project architecture and features.

It might not be update to date, always refer to code as source of truth.

> Important: Some specifications are in french, and might not be implemented yet in the codebase.

# Description du projet

Le projet consiste à développer une application web permettant d'afficher les produits d'une boutique en ligne.

## Contexte

L'application permet de gérer les produits d'une boutique en ligne.

## Objectifs

1. Avoir une interface utilisateur intuitive et agréable
2. Permettre d'avoir une liste des produits
3. Permettre de naviguer dans les produits
4. Permettre de filtrer les produits par catégorie
5. Permettre de filtrer les produits par prix
6. Permettre de rechercher des produits par mot-clé

# Features principales

### User-Stories principales

#### "Liste des produits"

**En tant qu'** utilisateur
**Je veux** voir la liste des produits
**Afin de** pouvoir les consulter

- Critères d'acceptation :
  - [ ] Donné : que je suis sur la page de liste des produits
  - [ ] Quand : je navigue vers la page de liste des produits
  - [ ] Alors : la liste des produits est affichée
  - [ ] Et : la liste des produits est mise à jour en temps réel
  - [ ] Et : Chaque produit est affiché avec son image, sa catégorie, son nom, son prix et sa description
  - [ ] Et : Chaque produit a un bouton cliquable qui mène vers la page de détails

#### "Détails d'un produit"

**En tant qu'** utilisateur
**Je veux** voir les détails d'un produit
**Afin de** pouvoir les consulter

- Critères d'acceptation :
  - [ ] Donné : que je suis sur la page de liste des produits
  - [ ] Quand : je clique sur un produit
  - [ ] Alors : les détails du produit sont affichés
  - [ ] Et : les détails du produit sont mis à jour en temps réel
  - [ ] Et : les détails du produit sont affichés avec son image, son nom, son prix, sa description et usa reference

# Choix initial des technologies

## Main technologies

- Node 22
- TypeScript

### Frontend

- Angular 20

### Backend

- mocks

# Conventional Commit guide

<https://github.com/BryanLomerio/conventional-commit-cheatsheet>

Each commit message follows this structure:

- **type**: Describes the change (e.g., `feat`, `fix`, `chore`)
- **scope**: Optional. Refers to the area of the project being affected (e.g., `api`, `frontend`)
- **description**: A short description of the change.

---

## 📋 Types of Commit

1. **feat**: A new feature for the user or system  
   Example: `feat(auth): add Google login feature`

2. **fix**: A bug fix for the user or system  
   Example: `fix(button): resolve issue with button hover state`

3. **chore**: Routine tasks like maintenance or updating dependencies  
   Example: `chore(deps): update react to version 17.0.2`

4. **docs**: Documentation updates  
   Example: `docs(readme): update installation instructions`

5. **style**: Changes related to code style (e.g., formatting, missing semi-colons)  
   Example: `style(button): fix button alignment in CSS`

6. **refactor**: Code change that neither fixes a bug nor adds a feature  
   Example: `refactor(auth): simplify login form validation logic`

7. **test**: Adding or updating tests  
   Example: `test(auth): add unit tests for login function`

8. **build**: Changes that affect the build system or external dependencies  
   Example: `build(webpack): add webpack config for production build`

9. **ci**: Continuous integration-related changes  
   Example: `ci(gitlab): update CI config for deployment pipeline`

10. **perf**: Code changes that improve performance
    Example: `perf(api): optimize database queries for faster responses`

11. **env**: Changes related to environment setup or configuration
    Example: `env(docker): update Dockerfile for staging environment`

12. **sec**: Security fixes or improvements
    Example: `sec(auth): add encryption for user passwords`

13. **config**: Changes to configuration files
    Example: `config: update .eslint rules for stricter code checks`

14. **api**: Updates to API contracts or integrations
    Example: `api(user): add new endpoint for user profile updates`

### Additional Commit Types

**revert**: Reverts a previous commit

Example: revert(auth): rollback Google login feature

**merge**: Indicates a merge commit

Example: merge: branch 'feature/auth' into 'main'

**deps**: Dependency-specific updates

Example: deps: bump axios from 0.21.1 to 0.24.0

**design**: UI or UX improvements

Example: design(button): update hover effect

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

2025-06-09 21:49:53
