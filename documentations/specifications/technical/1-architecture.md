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
