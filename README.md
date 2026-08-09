# Task 5: API Integration and Front-End Interaction

## Objective
Introduce server-client communication through a RESTful API with full CRUD operations.

## Features
### Backend API - RESTful Endpoints
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product  
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Frontend
- **Fetch API**: Loads products on page load
- **Dynamic UI**: Add, Edit, Delete without page reload
- **Form Handling**: Same form for Create and Update
- **Bootstrap 5**: Responsive and modern UI

## Tech Stack
- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, Bootstrap 5, Vanilla JS Fetch API
- **Data**: In-memory array for temporary storage

## Setup & Run
1. Install dependencies:
   ```bash
   npm install

