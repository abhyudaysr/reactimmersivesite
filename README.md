# NOVATECH - React Immersive Site

A modern, high-performance React web application built with Vite that showcases an immersive digital experience. This project combines cutting-edge web technologies with stunning visual design to create an engaging portfolio and service showcase website.

## 🚀 Features

- **Modern React 19** - Latest React features with hooks and functional components
- **Vite-powered** - Lightning-fast development server and optimized builds
- **Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **Smooth Animations** - Intersection Observer API for reveal animations and floating particles
- **Interactive Navigation** - Mobile-friendly navigation with hamburger menu
- **Component-based Architecture** - Modular, reusable React components
- **Immersive Hero Section** - Animated particle effects and gradient backgrounds
- **Services Showcase** - Display of digital services with modern styling
- **About Section** - Detailed information about NOVATECH
- **Contact Section** - User engagement and contact information
- **ESLint Integration** - Code quality and consistency checks

## 📁 Project Structure

```
reactimmersivesite/
├── 📄 index.html              # Main HTML entry point
├── 📄 package.json            # Project dependencies and scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 eslint.config.js        # ESLint rules and configuration
├── 📄 README.md               # This file
│
├── 📁 public/                 # Static assets (images, icons, etc.)
│
└── 📁 src/                    # Source code directory
    ├── 📄 main.jsx            # React app entry point
    ├── 📄 App.jsx             # Root component with routing
    ├── 📄 index.css           # Global styles and animations
    ├── 📄 App.css             # Component-specific styles
    │
    ├── 📁 components/         # Reusable React components
    │   ├── Navbar.jsx         # Navigation bar with mobile menu
    │   ├── Hero.jsx           # Hero section with particles
    │   ├── Services.jsx       # Services showcase section
    │   ├── About.jsx          # About company section
    │   ├── Contact.jsx        # Contact form section
    │   └── Footer.jsx         # Footer component
    │
    └── 📁 assets/             # Static resources
        └── (images, logos, fonts, etc.)
```

## 🏗️ Architectural Diagram

### Data Flow Architecture
```
┌─────────────────────────────────────────────────────────┐
│                    Browser / DOM                        │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                   index.html                            │
│              (Root div: id="root")                      │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│              React Application (main.jsx)              │
│          Creates React Root & Renders App               │
└─────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────┐
│                  App Component (App.jsx)               │
│         - Intersection Observer for animations         │
│         - Main layout wrapper                          │
└─────────────────────────────────────────────────────────┘
         ↓          ↓           ↓          ↓          ↓
    ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
    │ Navbar │ │ Hero   │ │Services│ │ About  │ │Contact │
    └────────┘ └────────┘ └────────┘ └────────┘ └────────┘
         ↓          ↓           ↓          ↓          ↓
    [Header]  [Title +  ] [Services] [Company] [Contact]
    [Mobile   Particles  ] [Cards]   [Details]  [Form]
    [Menu]    [CTA Btn]              [Team]
```

### Component Hierarchy
```
App (Root)
├── Navbar
│   ├── Logo ("NOVATECH")
│   ├── Mobile Menu Toggle (hamburger)
│   └── Navigation Menu
│       ├── Home link
│       ├── Services link
│       ├── About link
│       └── Contact link
│
├── Hero
│   ├── Background Particles (2x animated)
│   ├── Hero Content Container
│   │   ├── Main Title (with highlight span)
│   │   ├── Description Text
│   │   └── CTA Button
│   └── Animation Styles
│
├── Services
│   ├── Section Title
│   └── Service Cards (multiple)
│       ├── Service Icon
│       ├── Service Title
│       └── Service Description
│
├── About
│   ├── Section Title
│   ├── Company Information
│   ├── Team Details
│   └── Mission/Values
│
├── Contact
│   ├── Section Title
│   ├── Contact Form
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Message Textarea
│   │   └── Submit Button
│   └── Contact Information
│
└── Footer
    ├── Copyright Notice
    └── NOVATECH Branding
```

### Folder Structure Tree
```
reactimmersivesite/
│
├── Config Files
│   ├── vite.config.js        → Vite build configuration
│   ├── eslint.config.js      → ESLint rules
│   ├── package.json          → Dependencies & scripts
│   └── index.html            → HTML entry point
│
├── public/                   → Static assets
│   └── (served as-is)
│
└── src/                      → Source code
    │
    ├── Entry Points
    │   ├── main.jsx          → React root initialization
    │   └── App.jsx           → Main App component
    │
    ├── Styling
    │   ├── index.css         → Global styles & animations
    │   └── App.css           → App component styles
    │
    ├── components/           → React components
    │   ├── Navbar.jsx        → Navigation (state: isOpen)
    │   ├── Hero.jsx          → Hero section
    │   ├── Services.jsx      → Services display
    │   ├── About.jsx         → About section
    │   ├── Contact.jsx       → Contact section
    │   └── Footer.jsx        → Footer
    │
    └── assets/               → Images & resources
        └── (static files)
```

## 📦 Dependencies

### Production
- **react**: ^19.2.0 - UI library
- **react-dom**: ^19.2.0 - DOM rendering

### Development
- **vite**: ^7.2.4 - Build tool and dev server
- **@vitejs/plugin-react-swc**: ^4.2.2 - Fast React compilation
- **eslint**: ^9.39.1 - Code linting
- **@types/react**: ^19.2.5 - React TypeScript types
- **@types/react-dom**: ^19.2.3 - React DOM TypeScript types
- **eslint-plugin-react-hooks**: ^7.0.1 - React hooks linting
- **eslint-plugin-react-refresh**: ^0.4.24 - React refresh support

## 🎯 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git (for cloning and version control)
- GitHub account (for contributing to the project)

### 📥 GitHub Clone & Setup

#### For New Team Members

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/reactimmersivesite.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd reactimmersivesite
   ```

3. **Configure Git (first time only):**
   ```bash
   git config user.name "Your Name"
   git config user.email "your.email@example.com"
   ```

4. **Check the default branch:**
   ```bash
   git branch -a
   ```

#### Setting Up Your Local Environment

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a new branch for your work:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
   *Branch naming convention: `feature/feature-name`, `bugfix/bug-name`, `hotfix/issue-name`*

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or next available port)

### 📤 Git Workflow for Development

#### Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/add-new-section
   ```

2. **Make your changes and verify:**
   ```bash
   npm run lint
   ```

3. **Stage your changes:**
   ```bash
   git add .
   ```
   Or stage specific files:
   ```bash
   git add src/components/NewComponent.jsx
   ```

4. **Commit with descriptive messages:**
   ```bash
   git commit -m "feat: add new hero animation component"
   ```
   *Commit message format: `type: description`*
   - `feat:` - new feature
   - `fix:` - bug fix
   - `refactor:` - code refactoring
   - `style:` - styling changes
   - `docs:` - documentation updates
   - `test:` - test updates

5. **Push to remote repository:**
   ```bash
   git push origin feature/add-new-section
   ```

#### Creating a Pull Request

1. **Go to GitHub and create a Pull Request** from your branch to `main`
2. **Add a descriptive title and description:**
   - Explain what changes you made
   - Reference any related issues (#123)
   - Add screenshots if UI changes were made

3. **Wait for code review** from team members

4. **Address feedback** if requested

5. **Once approved, merge the PR** into main

#### Updating Your Branch with Latest Changes

If someone else pushes to `main` and you need to update your branch:

```bash
git fetch origin
git rebase origin/main
```

Or use merge if you prefer:
```bash
git pull origin main
```

### 🔄 Pulling Latest Changes

Always pull the latest changes before starting work:

```bash
git checkout main
git pull origin main
```

### 📝 Useful Git Commands

```bash
# View commit history
git log --oneline -10

# Check current status
git status

# View differences
git diff

# Undo last commit (before push)
git reset --soft HEAD~1

# Delete a branch locally
git branch -d feature/branch-name

# Delete a branch remotely
git push origin --delete feature/branch-name

# Sync fork with upstream (if working with a fork)
git fetch upstream
git rebase upstream/main

# View all remote branches
git branch -r

# Switch to existing branch
git checkout main
```

### ⚠️ Important Git Guidelines

- **Never commit directly to `main`** - Always create a feature branch
- **Pull before you push** - Keep your local repository updated
- **Write meaningful commit messages** - Help others understand your changes
- **Keep commits atomic** - One logical change per commit
- **Test before pushing** - Run `npm run lint` and `npm run build`
- **Don't commit node_modules** - Already in `.gitignore`
- **Use `.gitignore`** - Don't commit sensitive files or build artifacts

## 🛠️ Available Scripts

### `npm run dev`
Starts the Vite development server with hot module reloading (HMR).

### `npm run build`
Creates an optimized production build in the `dist/` directory.

### `npm run lint`
Runs ESLint to check code quality and identify issues.

### `npm run preview`
Previews the production build locally.

## 🎨 Styling Architecture

- **Global Styles**: `src/index.css` contains animations (float, reveal transitions)
- **App Styles**: `src/App.css` contains component-specific styling
- **Responsive Design**: Mobile-first approach with media queries
- **Animations**: 
  - Floating particle effects (12s & 18s duration)
  - Intersection Observer for reveal animations
  - Smooth transitions on scroll

## ⚙️ Build Configuration

The project uses **Vite** for fast development and optimized production builds:

- **Dev Server**: Hot module reloading enabled by default
- **Build Output**: Minified and optimized files in `dist/`
- **React Plugin**: Uses SWC for ultra-fast compilation
- **Configuration File**: `vite.config.js`

## 🧪 Code Quality

ESLint is configured for maintaining code quality with rules for:
- React best practices
- React hooks correctness
- React refresh compatibility
- JavaScript standards

Run linting with: `npm run lint`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Component Details

### Navbar Component
- Logo display with "NOVATECH" branding
- Responsive mobile menu with hamburger toggle
- Navigation links: Home, Services, About, Contact
- Auto-close menu on link click (mobile)
- State management for menu open/close

### Hero Component
- Two animated gradient particles with blur effects
- Main headline with highlighted "Digital" text
- Promotional description text
- Call-to-action button ("Get Started")
- Responsive layout with relative positioning

### Services Component
- Showcase of digital services
- Card-based layout
- Organized service information display

### About Component
- Company information section (NOVATECH)
- Team or business details
- Professional content presentation

### Contact Component
- Contact form for user engagement
- Multiple input fields
- Call-to-action for business inquiries

### Footer Component
- Copyright notice (© 2026 NOVATECH DIGITAL)
- All Rights Reserved statement
- Clean, minimal styling

## 🚀 Deployment

To deploy the production build:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service:
   - Vercel
   - Netlify
   - GitHub Pages
   - AWS S3 + CloudFront
   - Any static hosting service

## 📄 License

This project is part of NOVATECH DIGITAL. All Rights Reserved © 2026.

## 🤝 Contributing

For internal development, follow these guidelines:
- Run ESLint before committing: `npm run lint`
- Keep components modular and reusable
- Follow React best practices and hooks conventions
- Test responsive design on multiple devices
- Ensure animations run smoothly on all devices

## 💡 Key Technical Highlights

### Intersection Observer API
The App component implements Intersection Observer for smooth scroll-based animations:
- Observes all elements with `.reveal` class
- Adds `.active` class when element enters viewport
- Threshold set to 0.1 for early trigger
- Properly cleans up observers on unmount

### Animation Strategy
- CSS keyframe animations for particle floating
- Intersection Observer for element reveal animations
- Smooth transitions for interactive elements
- Optimized performance with GPU acceleration

### Mobile-First Design
- Responsive navigation with hamburger menu
- Touch-friendly interactive elements
- Optimized animations for mobile performance
- Viewport-aware media queries

## 📞 Support

For issues or questions, refer to the project documentation or contact the development team.

---

**Built with ❤️ using React 19 and Vite**
