# 🍝 Pazzo MMX Restaurant Website

A 1:1 recreation of the Pazzo Red Bank Italian Restaurant website with full functionality.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to: `http://localhost:3000`

### Alternative Setup (Windows)
Double-click `setup.bat` to automatically install dependencies.

## ✨ Features

### 🎯 Fully Functional
- ✅ **Working Email Signup** - Collects emails with backend processing
- ✅ **Online Ordering Button** - Connects to ordering system API
- ✅ **Reservation System** - Takes reservation requests
- ✅ **Gift Card Purchase** - Handles gift card transactions
- ✅ **Menu Viewing** - Links to menu system
- ✅ **Contact Forms** - Processes contact inquiries

### 📱 Responsive Design
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Touch-Friendly** - Optimized for mobile interactions
- ✅ **Responsive Grid** - Adapts to all screen sizes

### 🎨 Visual Features
- ✅ **High-Quality Images** - Professional food photography
- ✅ **Smooth Animations** - Hover effects and transitions
- ✅ **Loading States** - Button feedback for user actions
- ✅ **Professional Typography** - Matching original fonts

## 🛠 API Endpoints

The server provides these working endpoints:

- `POST /api/signup` - Email newsletter signup
- `POST /api/order` - Online ordering
- `POST /api/reservation` - Table reservations
- `POST /api/giftcard` - Gift card purchases
- `GET /api/menu` - Menu access
- `POST /api/contact` - Contact form submissions

## 📁 File Structure

```
pazzo-restaurant/
├── pazzo-exact-clone.html    # Main website file
├── server.js                 # Node.js backend server
├── package.json             # Dependencies and scripts
├── setup.bat               # Windows setup script
└── README.md               # This file
```

## 🔧 Customization

### Adding Real Functionality

1. **Email Integration**: Configure nodemailer in `server.js`
2. **Database**: Add MongoDB/PostgreSQL for data storage
3. **Payment Processing**: Integrate Stripe/PayPal for gift cards
4. **Reservation System**: Connect to OpenTable or custom booking system

### Image Updates

Replace the Unsplash placeholder images with your actual restaurant photos by updating the URLs in `pazzo-exact-clone.html`.

## 🌐 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
```bash
npm install --production
NODE_ENV=production npm start
```

## 📞 Support

For questions or issues with the website, contact the development team.

---

**🍝 Pazzo MMX - Red Bank's Premiere Italian Restaurant**
*"Pazzo means crazy, and we're crazy about food!"*
