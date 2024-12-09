# Car Store API

An Express application built with TypeScript, integrating MongoDB using Mongoose to manage a Car Store. The API provides comprehensive functionality for managing cars and customer orders, with robust schema
validation and inventory management.

## Features

- **Car Inventory Management**:

  - Add, update, and delete car records.
  - Manage car stock levels with built-in validations.
  - Automatic `inStock` status update based on inventory quantity.

- **Order Management**:

  - Place orders with quantity and total price calculations.
  - Real-time inventory adjustment upon order placement.
  - Prevents orders exceeding stock availability.

- **Revenue Calculation**:
  - Aggregate total revenue generated from all orders.
- **Error Handling:**:

  - Comprehensive error responses for validation failures and other issues.

- **Responsive API Endpoints:**:
  - Follows RESTful conventions and uses clear structure

## Technologies Used in this Project

- Backend: Node.js, Express.js, TypeScript
- Database: MongoDB with Mongoose
- Other Tools: Postman (for testing), VS Code

## Run the Project Locally

1. **Clone the Repository**:

   ```sh
   git clone https://github.com/razzbabu4/car-store.git
   cd car-store
   ```

2. **Install Dependencies**:

   - If you prefer npm

   ```sh
   npm install or yarn install
   ```

   - If you prefer yarn

   ```sh
   yarn install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables. (**Important!**)

   ```sh
   PORT=5000
   DATABASE_URL=your_mongodb_connection_string
   ```

4. **Start the Server**:
   - For npm
   ```sh
   npm run start:dev
   ```
   - For yarn
   ```sh
   yarn start:dev
   ```

**Video Explanation**: [Add link here]

**Live Deployment**: [Add link here]
