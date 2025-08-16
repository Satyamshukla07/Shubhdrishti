# SHUBHDHRISHTI ENTERTAINMENT Landing Website

## Overview

This project is a modern, responsive landing website for SHUBHDHRISHTI ENTERTAINMENT, a premium entertainment company specializing in event management, live performances, and production services. The website showcases the company's services, portfolio, and provides a contact system for potential clients.

The application is built as a full-stack solution with a React frontend and Express.js backend, featuring a professional design with Royal Blue and Gold branding, smooth animations, and comprehensive contact management functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI components with shadcn/ui design system for consistent, accessible interface components
- **Styling**: Tailwind CSS with custom CSS variables for the entertainment company's brand colors (Royal Blue, Deep Navy, Gold)
- **Animations**: Framer Motion for smooth transitions, parallax scrolling, and hover effects throughout the site
- **Typography**: Poppins and Montserrat fonts for modern, professional appearance
- **State Management**: TanStack React Query for server state management and API interactions
- **Form Handling**: React Hook Form with Zod validation for type-safe form management

### Backend Architecture  
- **Server Framework**: Express.js with TypeScript for the REST API
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence and type-safe database operations
- **Data Storage**: Dual storage approach - in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful endpoints for contact form submissions and data retrieval
- **Error Handling**: Centralized error handling with proper HTTP status codes and user-friendly messages

### Build System
- **Development**: Vite for fast development server with hot module replacement
- **Production Build**: ESBuild for server bundling and Vite for client-side assets
- **TypeScript Configuration**: Shared types between client and server through the `shared` directory
- **Path Aliases**: Configured for clean imports across client, shared, and server code

### Database Schema
- **Users Table**: Basic user management with username/password authentication structure
- **Contacts Table**: Comprehensive contact form data including personal information, event type, and messages
- **Migrations**: Drizzle migrations for database schema versioning and updates

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless database connectivity
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect support
- **drizzle-zod**: Zod schema integration for database validation

### UI and Styling Dependencies
- **@radix-ui/***: Complete set of accessible UI primitives (dialogs, forms, navigation, etc.)
- **tailwindcss**: Utility-first CSS framework with custom design system configuration
- **framer-motion**: Animation library for smooth transitions and interactive effects
- **lucide-react**: Modern icon library for consistent iconography

### Form and Data Management
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers for Zod integration
- **@tanstack/react-query**: Server state management and caching solution
- **zod**: TypeScript-first schema validation library

### Development and Build Tools
- **vite**: Fast build tool and development server
- **tsx**: TypeScript execution for Node.js development
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Development error handling for Replit environment