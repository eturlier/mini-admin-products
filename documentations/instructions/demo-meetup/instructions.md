# Instruction: Product Filtering by Category

> Please follow this plan using proper rules.

## Goal

Implement dynamic filtering of products by category, with state persistence in URL and error handling.

## Existing files

src/core/product/domain/product.ts
src/core/product/domain/category.ts
src/core/product/use-cases/get-products.use-case.ts
src/core/product/use-cases/get-product-by-id.use-case.ts
src/core/product/gateways/mock-product.gateway.ts
src/core/product/domain/category.ts
src/ui/product/product-list/product-list.component.ts
src/ui/product/product-list/product-list.component.html
src/ui/product/product-list/product-list.component.scss
src/ui/product/product-list/product-list.component.spec.ts

### New file to create

None

## Grouped tasks

### Developer

> Setup logic and validation preconditions

* Ensure mock-product.gateway.ts returns proper products and categories
* Confirm Enum `Category` includes all category values
* Validate expected query param format in routing (`?categories=cat1,cat2`)

### AI Editor

> Frontend behavior implementation

* On page load, call use-cases to fetch both products and categories in parallel
* Bind category filters to UI, preselect based on URL if applicable
* On selection change, update local state and push query params to URL
* Automatically re-run filter logic after each selection change
* Display only products matching one or more selected categories (OR logic)
* Show placeholder message if no product matches
* Show error message if API call fails
* Implement reset button to clear filters and reload full list
* Handle reading initial state from URL to restore selected categories
* Add loader (spinner) during data fetching
* Add unit tests for UI ↔ URL synchronization
* Add timeout fallback for slow responses
* Avoid duplicates in selected filters

## Validation checkpoints

* Categories and products appear on first render
* Category selections reflected in URL
* Filtered results update instantly on selection
* "No results" message shown when applicable
* Reset button restores full list and clears URL
* Errors are displayed clearly on fetch failure
* Spinner is shown while loading
* Unit test covers filter state ↔ URL
* Timeout fallback avoids long waits
* Selected filters are unique
