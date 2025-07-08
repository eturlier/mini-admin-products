# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Building & Running
- `npm start` or `ng serve` - Start development server on http://localhost:4200
- `npm run build` - Build for production
- `npm run watch` - Build with watch mode for development

### Testing
- `npm test` - Run all tests with Vitest
- `npm test path/to/file.spec.ts` - Run specific test file
- Tests use Vitest with jsdom environment, not Karma/Jasmine

### Code Quality
- `npm run lint` - Run ESLint
- `npm run lint -- --fix` - Auto-fix linting errors

## Architecture Overview

This is an Angular 20 application following **Clean Architecture** principles with clear separation between core business logic and UI layers.

### Project Structure
```
src/
├── core/              # Business logic (framework-independent)
│   ├── common/        # Shared domain models
│   └── product/       # Product domain
│       ├── domain/    # Entities and models
│       ├── gateways/  # Data access interfaces
│       └── use-cases/ # Application use cases
├── ui/                # Angular UI components
│   ├── common/        # Reusable UI components
│   └── product/       # Product-specific components
└── config/            # App configuration and routing
```

### Key Architectural Patterns
- **Clean Architecture**: Core domain is independent of UI framework
- **Feature-Driven Development**: Code organized by features (product, common)
- **Domain-Driven Design**: Business logic in domain models and use cases
- **Dependency Injection**: Uses Angular's DI with injection tokens
- **SOLID Principles**: Single responsibility, loose coupling

### Data Flow
1. UI components inject use cases
2. Use cases call gateways through interfaces
3. Mock gateways provide static data (no real backend)
4. Components use Angular signals for reactive state management

## Key Technical Details

### State Management
- **Angular Signals**: Used for reactive state (not RxJS observables)
- **Local component state**: No global state management library
- Signal patterns: `signal<T>()` for state, `computed()` for derived values

### Data Layer
- All data is mocked via `MockProductGateway`
- Gateway interfaces allow easy swapping of implementations
- Simulated network delays for realistic behavior
- Provider pattern in `product.providers.ts` for dependency injection

### Testing Strategy
- **Vitest** (not Karma) with jsdom environment
- Mock gateways provide consistent test data
- Unit tests for components and use cases
- Tests use Angular TestBed for component testing

### Path Aliases
- `@core` → `src/core`
- `@ui` → `src/ui`
- `@config` → `src/config`

### Component Patterns
- Standalone components (no NgModules)
- Signal-based reactive patterns
- Control flow syntax: `@if`, `@for`, `@switch`
- Lazy loading for route components

## Domain Models

### Product
- **File**: `src/core/product/domain/product.ts`
- **Properties**: id, name, price, description, image, category, reference

### Category
- **File**: `src/core/product/domain/category.ts`
- **Type**: Enum with French display names
- **Values**: Ordinateurs, Smartphones, Tablettes, Montres

## Development Guidelines

### Adding New Features
1. Create domain models in `src/core/{domain}/domain/`
2. Define gateway interfaces in `src/core/{domain}/gateways/`
3. Implement use cases in `src/core/{domain}/use-cases/`
4. Create UI components in `src/ui/{domain}/`
5. Update providers in `src/core/{domain}/{domain}.providers.ts`

### Gateway Pattern
- Define interface in `{domain}.gateway.ts`
- Create injection token for the interface
- Implement mock version in `mock-{domain}.gateway.ts`
- Register in providers file for dependency injection

### Testing New Components
- Mock use cases in tests, not gateways directly
- Use `MockProductGateway` for consistent test data
- Test reactive behavior with signals
- Include error handling scenarios

### Adding New Use Cases
- Create new use case class in `src/core/{domain}/use-cases/`
- Inject gateway through constructor using `inject()`
- Return domain models, not DTOs
- Handle errors at the use case level

## Current Application Features

### Product List
- **Component**: `src/ui/product/product-list/product-list.ts`
- **Features**: Loading states, error handling, product grid display
- **Routing**: Root path `/`

### Product Detail
- **Component**: `src/ui/product/product-detail/product-detail.ts`
- **Features**: Individual product display with breadcrumbs
- **Routing**: `/product/:id`

### Common Components
- **Breadcrumb**: Navigation component in `src/ui/common/breadcrumb/`
- **Loading State**: Reusable loading component

## Mock Data System

The application uses a complete mock data system with no real backend:
- **Gateway**: `MockProductGateway` provides all product data
- **Delay simulation**: Artificial delays mimic API calls (200-300ms)
- **In-memory data**: Static product array with 15 items across 4 categories
- **Categories**: Derived from CategoryEnum values

### Mock Data Structure
- Products include French names and descriptions
- Image URLs from Unsplash for realistic appearance
- Price ranges from €199 to €1599
- Reference codes for each product

## Angular-Specific Patterns

### Template Syntax
- Uses new Angular control flow: `@if`, `@for`, `@switch`
- Signal interpolation: `{{ signal() }}`
- Event binding to component methods
- Trackby functions for `@for` loops

### Component Architecture
- Standalone components with explicit imports
- Signal-based reactivity instead of RxJS
- Zoneless change detection enabled
- Template and style co-location

### Routing
- Lazy-loaded components
- Route parameters accessed via `ActivatedRoute`
- Navigation via RouterLink directive

When extending this application, maintain the clean architecture principles and ensure all new features follow the established patterns for gateways, use cases, and component structure.

## Standart workflow

1. First think through the problem, read the codebase for relevant files, and write a plan to documentations/instructions/tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them.
3. Before you begin working, check in with me and I will verify the plan.
4. Then, begin working on the todo items, marking them as complete as you go.
5. Please every step of the way just give me a hight level explanation of what changes you made.
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or comple changes. Every change should impact as little code as possible. Everything is about simplicity.
7. Finally, add a review section to the [todo.md](./documentations/instructions/tasks/todo.md) file with a summary of changes you made and other relevant information.
8. Once all tasks are complete, run the tests to ensure everything is working as expected.
