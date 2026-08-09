const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory database
let products = [
    { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
    { id: 2, name: "Headphones", price: 2500, category: "Accessories" }
];

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve frontend
app.get('/', (req, res) => {
    res.render('index', { title: 'Task 5 - API Integration' });
});

// ===== RESTful API ENDPOINTS =====

// GET all products - READ
app.get('/api/products', (req, res) => {
    res.json({ success: true, data: products });
});

// GET single product - READ
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.json({ success: true, data: product });
});

// POST new product - CREATE
app.post('/api/products', (req, res) => {
    const { name, price, category } = req.body;
    if (!name || !price) return res.status(400).json({ success: false, message: "Name and Price required" });
    
    const newProduct = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name,
        price: parseFloat(price),
        category: category || "General"
    };
    products.push(newProduct);
    res.status(201).json({ success: true, data: newProduct });
});

// PUT update product - UPDATE
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    
    res.json({ success: true, data: product });
});

// DELETE product - DELETE
app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.json({ success: true, message: "Product deleted" });
});

app.listen(PORT, () => console.log(`✅ Server + API running at http://localhost:${PORT}`));