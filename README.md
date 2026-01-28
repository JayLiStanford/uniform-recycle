# School Uniform Recycling Website

A React-based web application for managing and displaying school uniform recycling items. Built with React, Tailwind CSS, and React Router.

## Features

- **Homepage**: Browse available uniform items with category filtering
- **About Page**: Learn about the recycling program's mission and benefits
- **Admin Interface**: Add, edit, and delete uniform items
- **Categories**: Filter items by category (Blazers, Shirts, Trousers, Skirts, etc.)
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Local Storage**: Items persist in browser localStorage

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd school-uniform-recycling-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
school-uniform-recycling-website/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar with mobile menu
│   │   ├── UniformCard.jsx # Item display card
│   │   └── CategoryFilter.jsx # Category filtering component
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx    # Homepage with items grid
│   │   ├── AboutPage.jsx   # About page
│   │   └── AdminPage.jsx   # Admin dashboard
│   ├── context/            # React context
│   │   └── UniformContext.jsx # State management for items
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles with Tailwind
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## Technologies Used

- **React 18**: UI library
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Build tool and dev server
- **LocalStorage**: Data persistence

## Usage

### Adding Items

1. Navigate to the Admin page
2. Fill in the form with item details (name, category, size, condition, description, image URL)
3. Click "Add Item"

### Editing Items

1. Go to the Admin page
2. Find the item in the table
3. Click "Edit"
4. Modify the form fields
5. Click "Update Item"

### Filtering Items

1. On the Homepage, use the category filter buttons
2. Click a category to filter items
3. Click "All" to show all items

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for educational purposes.
