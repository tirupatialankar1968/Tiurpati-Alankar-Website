# Tirupati Alankar (TA) - Jewelry Website

A responsive and elegant jewelry business website for Tirupati Alankar, showcasing jewelry designs in an aesthetically pleasing manner.

## Features

- Modern, responsive design optimized for all devices
- Elegant UI with a luxurious color palette (Gold, White, Charcoal Gray)
- Showcase of various jewelry categories
- Live gold and silver rates display (placeholder for now)
- Image gallery with lightbox functionality
- Contact form
- Google Maps integration
- WhatsApp integration

## Tech Stack

- React
- TypeScript
- React Router
- Styled Components
- Framer Motion (for animations)
- React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ta-jewelry
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create image placeholder directories:
   ```bash
   node create-placeholders.js
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173` to see the website

## Project Structure

```
ta-jewelry/
├── public/              # Static assets
│   ├── images/          # Image assets (replace placeholders with real images)
│   └── favicon.svg      # Website favicon
├── src/
│   ├── components/      # Reusable components
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Header/
│   │   └── MetalRates.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   └── Contact.tsx
│   ├── styles/          # Global styles
│   │   └── GlobalStyles.ts
│   ├── App.tsx          # Main App component with routing
│   └── main.tsx         # Entry point
├── create-placeholders.js # Script to create placeholder image directories
└── ... (config files)
```

## Customization

### Adding Real Images

- Replace the placeholder images in the `public/images/` directory with actual jewelry images
- Follow the naming conventions as used in the placeholder text files
- Recommended image sizes are specified in the placeholder text files

### Updating Content

- All website text content can be edited directly in the respective page components
- Company information, contact details, etc., should be updated in the appropriate components

### Implementing Live Gold/Silver Rates

- Currently, the gold and silver rates are static placeholders
- To implement real-time rates, update the `MetalRates.tsx` component to fetch data from an API like Metals-API

## Deployment

To build the project for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory, which can be deployed to any static hosting service.

## License

This project is proprietary and not open for redistribution without permission.

---

Created for Tirupati Alankar (TA) - Where Tradition Meets Elegance.
