# Product Filtering (Epic)

## "Initial product loading"

**As a** system  
**I want** to load the product list automatically when the page opens  
**So that** users can immediately see all available products  

* Acceptance Criteria:
  * [ ] Given: The product page is opened
  * [ ] When: The page is rendered
  * [ ] Then: The system loads all products
  * [ ] And: Each product includes id, name, image, category, price, and description

## "Category loading"

**As a** system  
**I want** to load product categories on page open  
**So that** users can filter products using them  

* Acceptance Criteria:
  * [ ] Given: The product page is opened
  * [ ] When: The page is rendered
  * [ ] Then: The system loads all available categories
  * [ ] And: Categories are dynamically generated from an Enum

## "Selecting one or more categories"

**As a** user  
**I want** to select one or more categories  
**So that** I can filter the product list accordingly  

* Acceptance Criteria:
  * [ ] Given: Categories are displayed
  * [ ] When: I click on one or more categories
  * [ ] Then: The local state updates with selected categories
  * [ ] And: Selected categories change color visually

## "Filtering products by category"

**As a** system  
**I want** to filter products based on selected categories  
**So that** users only see matching items  

* Acceptance Criteria:
  * [ ] Given: One or more categories are selected
  * [ ] When: The selection changes
  * [ ] Then: The system updates the product list
  * [ ] And: Products shown match any of the selected categories (OR logic)

## "Dynamic product list update"

**As a** system  
**I want** to update the product list automatically  
**So that** users instantly see matching products  

* Acceptance Criteria:
  * [ ] Given: Categories are selected
  * [ ] When: Filtered products exist
  * [ ] Then: Display the filtered list in the UI

## "No results message display"

**As a** system  
**I want** to show a message if no product matches filters  
**So that** users are informed of no results  

* Acceptance Criteria:
  * [ ] Given: Categories are selected
  * [ ] When: No products match the filters
  * [ ] Then: Display the message "No product matches your search"

## "Resetting filters"

**As a** user  
**I want** to reset all filters  
**So that** I can see the full product list again  

* Acceptance Criteria:
  * [ ] Given: One or more filters are active
  * [ ] When: I click the "Reset" button
  * [ ] Then: All selected filters are cleared
  * [ ] And: The full product list is shown
  * [ ] And: All filter indicators return to default state
