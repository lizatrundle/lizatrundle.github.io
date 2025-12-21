# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and Vite.

## Features

- 🌙 Dark theme inspired by VS Code/Cursor
- 🎨 Beautiful hover effects and glow animations
- ⚪ Clean monochrome color scheme (white, grey, black)
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Smooth scroll navigation
- 📋 Contact form with state management
- 🚀 Easy to customize

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

1. **About Section**: Edit `src/components/About.jsx` to update your bio and skills
2. **Projects Section**: Edit `src/components/Projects.jsx` to add your projects
3. **Contact Form**: Modify `src/components/Contact.jsx` to integrate with your email service
4. **Navigation**: Update `src/components/Header.jsx` to customize menu items

### Styling

- **Dark Theme**: Inspired by VS Code/Cursor dark mode
- **Global styles**: `src/index.css`
- **Component styles**: Each component has its own CSS file
- **Modern fonts**: Clean sans-serif system fonts
- **Monochrome color scheme**: Modify CSS variables in `src/index.css`:
  - `--primary-color`: White (#ffffff)
  - `--text-color`: Light grey (#e4e4e4)
  - `--text-secondary`: Medium grey (#a0a0a0)
  - `--text-dark`: Dark grey (#6b7280)
  - `--bg-primary`, `--bg-secondary`, `--bg-tertiary`: Dark blue backgrounds

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **CSS3**: Styling with modern features (Grid, Flexbox, CSS Variables)

## License

This project is open source and available under the MIT License.

## Contact

Feel free to reach out if you have any questions or suggestions!

