# StrataConnect - Strata Management Platform

A modern, comprehensive strata management website built with Next.js, designed to streamline communication and management for property owners, residents, and strata managers.

## 🌟 Overview

StrataConnect is a full-featured strata management platform that brings residents, owners, and strata managers together on one seamless platform. The application provides tools for staying informed, streamlining tasks, and enhancing community living with effortless communication and management capabilities.

## ✨ Features

### 🏠 For Property Owners
- **Personalized Dashboard**: Access levy information, maintenance requests, meetings, and insurance details
- **Online Levy Payments**: Secure payment processing for strata levies
- **Document Access**: Fully digitized access to strata records and documentation
- **Communication Portal**: Direct communication with strata managers via email, phone, or portal
- **Real-time Updates**: Stay informed about community matters and maintenance

### 🏢 For Developers
- **Scheme Setup**: Expert advice on strata scheme setup and structure
- **Documentation**: Registering plans and creating custom by-laws
- **Financial Planning**: Budgeting and striking levies during Initial Period
- **Insurance Coordination**: Strata insurance management and coordination
- **Handover Process**: Managing fit-out bonds and builder defect resolution

### 💰 Financial Management
- **Transparent Budgeting**: Fair and transparent levy calculations
- **Real-time Reporting**: Access financial reports via the portal
- **Flexible Payments**: Multiple payment options for levy management
- **Arrears Control**: Proactive and professional debt management

### 📋 Administrative Services
- **Digital Records**: Fully digitized document management system
- **Meeting Coordination**: Agendas, notices, and minutes management
- **Insurance Handling**: Quotes, renewals, and claims processing
- **Compliance Management**: Fire safety and essential services compliance

## 🛠️ Technology Stack

- **Frontend**: Next.js 15.2.4, React 19.1.0
- **Styling**: Tailwind CSS 4
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **AI Integration**: OpenAI AI SDK
- **Icons**: Lucide React
- **Validation**: Zod
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd strata-connect
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory with your Supabase credentials:
   ```env
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

**Live Demo**: Visit [https://strata-connect-green.vercel.app/](https://strata-connect-green.vercel.app/) to see the deployed application.

## 📁 Project Structure

```
strata-connect/
├── src/
│   ├── app/
│   │   ├── api/                    # API routes
│   │   │   ├── auth/              # Authentication endpoints
│   │   │   ├── buildingInfo/      # Building information
│   │   │   ├── contact-form/      # Contact form handling
│   │   │   ├── levySummary/       # Levy management
│   │   │   ├── maintenance/       # Maintenance requests
│   │   │   └── request-quote/     # Quote requests
│   │   ├── about/                 # About page
│   │   ├── contact/               # Contact page
│   │   ├── dashboard/             # User dashboard
│   │   ├── forgot-password/       # Password recovery
│   │   ├── login-success/         # Login success page
│   │   ├── magic-link/            # Magic link authentication
│   │   ├── owners-login/          # Owner login
│   │   ├── payment/               # Payment processing
│   │   ├── properties/            # Property listings
│   │   ├── resources/             # Resources page
│   │   ├── services/              # Services page
│   │   ├── signup/                # User registration
│   │   └── config/
│   │       └── supabaseClient.js  # Supabase configuration
│   ├── middleware.js              # Next.js middleware
│   └── globals.css                # Global styles
├── public/
│   └── images/                    # Static images
├── package.json                   # Dependencies and scripts
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md                      # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Key Pages

- **Home** (`/`) - Landing page with overview and call-to-action
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information
- **Resources** (`/resources`) - Educational materials and guides
- **Dashboard** (`/dashboard`) - User dashboard (authenticated)
- **Payment** (`/payment`) - Levy payment processing
- **Properties** (`/properties`) - Property management interface

## 🔐 Authentication

The application uses Supabase for authentication with the following features:
- Email/password authentication
- Magic link authentication
- Password reset functionality
- Protected routes and middleware
- User session management

## 💳 Payment Integration

- Secure levy payment processing
- Multiple payment method support
- Transaction history and receipts
- Automated payment reminders

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

**Current Deployment**: This project is currently deployed at [https://strata-connect-green.vercel.app/](https://strata-connect-green.vercel.app/)

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and inquiries:
- **Email**: careers@strataconnect.com.au
- **Website**: [StrataConnect](https://strata-connect-green.vercel.app/)

## 📄 License

This project is proprietary software. All rights reserved.

## 🏢 About StrataConnect

StrataConnect is a leading strata management company in Australia, committed to:
- **Transparency**: Real-time insights and clear reporting
- **Innovation**: Smart technology and cloud-based tools
- **Community**: People-focused management and support
- **Sustainability**: Long-term investment in community wellbeing

Our mission is to redefine strata living by delivering efficient, transparent, and community-first services—empowered by technology, driven by people.
