const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve individual pages
app.get('/menus', (req, res) => {
    res.sendFile(path.join(__dirname, 'menus.html'));
});

app.get('/order-catering', (req, res) => {
    res.sendFile(path.join(__dirname, 'order-catering.html'));
});

app.get('/promotions', (req, res) => {
    res.sendFile(path.join(__dirname, 'promotions.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/join-our-team', (req, res) => {
    res.sendFile(path.join(__dirname, 'join-our-team.html'));
});

app.get('/gift-cards', (req, res) => {
    res.sendFile(path.join(__dirname, 'gift-cards.html'));
});

app.get('/reach-out', (req, res) => {
    res.sendFile(path.join(__dirname, 'reach-out.html'));
});

// Email signup endpoint
app.post('/api/signup', async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Here you would typically save to a database
        // For now, we'll just log it and send a success response
        console.log(`New email signup: ${email}`);
        
        // You can configure nodemailer here to send confirmation emails
        // const transporter = nodemailer.createTransporter({...});
        
        res.json({ 
            success: true, 
            message: 'Thank you for signing up for our newsletter!' 
        });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: 'Failed to process signup' });
    }
});

// Online ordering endpoint
app.post('/api/order', (req, res) => {
    // Redirect to actual ordering system or handle order
    res.json({ 
        success: true, 
        message: 'Redirecting to online ordering system...',
        redirect: 'https://your-ordering-system.com' 
    });
});

// Reservation endpoint
app.post('/api/reservation', (req, res) => {
    const { name, phone, date, time, guests } = req.body;
    
    // Here you would integrate with your reservation system
    console.log('New reservation request:', { name, phone, date, time, guests });
    
    res.json({ 
        success: true, 
        message: 'Reservation request received! We will call you to confirm.' 
    });
});

// Gift card endpoint
app.post('/api/giftcard', (req, res) => {
    const { amount, recipientEmail, senderName } = req.body;
    
    // Here you would integrate with your gift card system
    console.log('Gift card purchase:', { amount, recipientEmail, senderName });
    
    res.json({ 
        success: true, 
        message: 'Gift card purchase initiated. Redirecting to payment...',
        redirect: 'https://your-giftcard-system.com'
    });
});

// Menu endpoint
app.get('/api/menu', (req, res) => {
    // Return menu data or redirect to menu page
    res.json({
        success: true,
        message: 'Redirecting to menu...',
        redirect: '/menu.html'
    });
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🍝 Pazzo MMX server running on http://localhost:${PORT}`);
    console.log(`📱 Open your browser and visit: http://localhost:${PORT}`);
});

module.exports = app;
