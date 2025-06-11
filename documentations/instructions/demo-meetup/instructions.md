# Instruction: Product Filtering by Category

> Please follow this plan using proper rules.

## Goal

Implement dynamic filtering of products by category, with error handling and without state persistence in URL.

## Existing files

src/core/product/domain/product.ts
src/core/product/domain/category.ts
src/core/product/use-cases/get-products.use-case.ts
src/core/product/use-cases/get-product-by-id.use-case.ts
src/core/product/gateways/mock-product.gateway.ts
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

### AI Editor

> Frontend behavior implementation

* On page load, call use-cases to fetch both products and categories in parallel
* On selection change, update local state
* Automatically re-run filter logic after each selection change
* Display only products matching one or more selected categories (OR logic)
* Show placeholder message if no product matches
* Show error message if API call fails
* Implement reset button to clear filters and reload full list
* Add loader (spinner) during data fetching
* Respect the ui style
* Add unit tests for UI

## Validation checkpoints

* Categories and products appear on first render
* Filtered results update instantly on selection
* "No results" message shown when applicable
* Reset button restores full list and clears URL
* Errors are displayed clearly on fetch failure
* Spinner is shown while loading
* Unit test covers filter state
* Selected filters are unique
* Respect the ui style
  