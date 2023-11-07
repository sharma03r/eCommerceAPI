# Ecommerce Platform Admin API - Product Inventory Management

This repository contains the API for an e-commerce platform admin to manage product inventory. The technology stack used for this project includes Node.js and MongoDB. Postman is suggested for testing the APIs.

## Models/Schemas

### Products

- `product_id`: Unique identifier for the product
- `name`: Name of the product
- `quantity`: Current quantity of the product in inventory

## API Endpoints

### Add Products to the Database

- **Method:** POST
- **URL:** `/products/create`
- **Request:**
  ```json
  {
    "product": {
      "name": "laptop",
      "quantity": 10
    }
  }
  ```
