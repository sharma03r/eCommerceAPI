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
      "quantity": 10,
      "product_id": 1
    }
  }
  ```

### List all products

- **Method:** GET
- **URL:** `/products`
- **Response:**
  ```json
  {
    "products": [
      {
        "name": "laptop",
        "quantity": 10,
        "product_id": 1
      },
      {
        "name": "macbook",
        "quantity": 1,
        "product_id": 2
      }
    ]
  }
  ```

### Delete a entry

- **Method:** DELETE
- **URL:** `/products/:id`
- **Response:**
  ```json
  {
    "data": {
      "message": "Product deleted successfully"
    }
  }
  ```

### Update an entry

- **Method:** POST
- **URL:** `/products/:id/update_quantity/?number=10`
- **Response:**
  ```json
  {
    "data": {
      "message": "Product has been updated",
      "product": {
        "name": "laptop",
        "quantity": 10,
        "product_id": 1
      }
    }
  }
  ```

# Cloning and Running a Node.js Project from GitHub

To get started with the Node.js project available on GitHub, follow the steps below:

1. **Clone the GitHub repository:**

   Open your terminal or command prompt and use the following command to clone the repository:

   ```bash
   git clone https://github.com/sharma03r/eCommerceAPI.git
   ```

2. **Navigate to the project directory:**

   After cloning, move into the directory of the cloned repository:

   ```bash
   cd eCommerceAPI
   ```

3. **Install dependencies:**

   Once you are inside the project directory, install the project dependencies using the following command:

   ```bash
   npm install
   ```

4. **Start the project:**

   ```bash
   nodemon index.js
   ```

Make sure you have Git and Node.js installed on your system before performing these steps. This process assumes you have access to the repository and the required permissions to clone it.
