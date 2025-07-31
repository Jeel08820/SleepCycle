# Sleep Calculator App

## Overview

This is a full-stack web application built with React, Express, and TypeScript that helps users calculate optimal sleep times based on sleep cycles. The app uses a modern tech stack with shadcn/ui components, Tailwind CSS for styling, and Drizzle ORM for database operations. It features a sleep-themed dark UI with gradient colors and provides both bedtime and wake-up time calculations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React SPA with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not actively used yet)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend, esbuild for backend

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state, React hooks for local state
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom sleep-themed color palette
- **Build Tool**: Vite with hot reload and development plugins

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database Layer**: Drizzle ORM with PostgreSQL (fully implemented)
- **API Routes**: RESTful endpoints for sleep calculations, tips, and data management
- **Data Models**: Users, SleepCalculations, and SleepTips with proper relations
- **Session Storage**: PostgreSQL sessions with connect-pg-simple
- **Development**: Hot reload with tsx

### Component Structure
- **Pages**: Sleep calculator main page, 404 error page
- **UI Components**: Complete shadcn/ui component library
- **Custom Components**: TimePicker, SleepResultCard with sleep-themed styling
- **Hooks**: Mobile detection, toast notifications

## Data Flow

1. **Sleep Calculation Logic**: Client-side calculations using 90-minute sleep cycles
2. **User Input**: Time picker components for setting wake-up times
3. **Real-time Updates**: Automatic recalculation when inputs change
4. **Results Display**: Visual cards showing optimal sleep times with cycle information
5. **Database Integration**: All calculations automatically saved to PostgreSQL
6. **Sleep Tips System**: Database-backed tips with categorization and management
7. **Monetization**: Google AdSense banner placeholder for advertisement integration

### Current Data Storage
- **PostgreSQL Database**: Fully integrated with Drizzle ORM  
- **Sleep Calculations Tracking**: All calculations automatically saved to database
- **Sleep Tips Management**: Database-backed tips system with categories
- **User Data**: Support for user management and sleep calculation history
- **Monetization Ready**: Google AdSense banner placeholder with integration instructions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, ReactDOM
- **Routing**: wouter
- **Data Fetching**: @tanstack/react-query
- **UI Components**: @radix-ui/* primitives
- **Styling**: tailwindcss, class-variance-authority, clsx
- **Date Utilities**: date-fns
- **Icons**: lucide-react

### Backend Dependencies
- **Server**: express
- **Database**: drizzle-orm, @neondatabase/serverless
- **Session**: express-session, connect-pg-simple
- **Validation**: drizzle-zod, zod
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: vite, esbuild
- **TypeScript**: Full type safety across frontend and backend
- **Database Migrations**: drizzle-kit for schema management

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Configuration
- **Development**: Uses tsx for hot reload, Vite dev server for frontend
- **Production**: Compiled JavaScript with static file serving
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm start`: Production server
- `npm run db:push`: Apply database schema changes

### Hosting Considerations
- **Static Assets**: Served from Express in production
- **Database**: Requires PostgreSQL database (Neon DB compatible)
- **Environment Variables**: DATABASE_URL required for database connection
- **Port**: Configurable via PORT environment variable