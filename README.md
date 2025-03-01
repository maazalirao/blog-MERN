# BlogSpace - MERN Stack Blog Application

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, blog post management, and a modern UI.

## Features

- User authentication (JWT)
- Create, read, update, and delete blog posts
- User profile management
- Responsive design with Tailwind CSS
- Dark mode support
- Rich text editor for blog posts
- Image upload support
- Tag-based blog categorization

## Tech Stack

### Frontend
- React.js
- React Router DOM for routing
- Tailwind CSS for styling
- Axios for API calls
- React Hot Toast for notifications
- Context API for state management

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Express Validator for input validation
- Bcrypt for password hashing
- CORS for cross-origin resource sharing
- Helmet for security headers

## Project Structure

```
blog-app-MERN/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/      # Context providers
│   │   ├── services/     # API services
│   │   └── assets/       # Static assets
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── models/           # Mongoose models
    ├── routes/           # Express routes
    ├── middleware/       # Custom middleware
    ├── server.js         # Entry point
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-app-MERN
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Create a .env file in the server directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/blog-app
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=30d
NODE_ENV=development
```

4. Install frontend dependencies:
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## API Endpoints

### Authentication
- POST /api/users/register - Register a new user
- POST /api/users/login - Login user
- GET /api/users/me - Get current user profile
- PUT /api/users/me - Update user profile

### Blogs
- GET /api/blogs - Get all blogs
- GET /api/blogs/:id - Get single blog
- POST /api/blogs - Create new blog (protected)
- PUT /api/blogs/:id - Update blog (protected)
- DELETE /api/blogs/:id - Delete blog (protected)

## Deployment

### Frontend
The frontend can be deployed to Vercel or Netlify:
1. Create an account on Vercel or Netlify
2. Connect your repository
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Environment variables: Set API_URL to your backend URL

### Backend
The backend can be deployed to Render or Heroku:
1. Create an account on Render or Heroku
2. Connect your repository
3. Configure environment variables
4. Set up MongoDB Atlas for the database

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 