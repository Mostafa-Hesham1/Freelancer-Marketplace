# Freelancer Marketplace

A full-stack freelancer marketplace platform built with modern web technologies. This application connects freelancers with clients, enabling job posting, bidding, messaging, and profile management.

## 🚀 Project Overview

Freelancer Marketplace is a comprehensive platform designed to facilitate connections between freelancers and clients. The system features a microservices architecture with separate services handling different business domains, providing scalability and maintainability.

## ✨ Features

- **User Authentication & Authorization**: Secure login and signup with JWT-based authentication
- **Job Management**: Create, update, browse, and search for freelance jobs
- **Talent Marketplace**: Browse and filter freelancers by skills and expertise
- **Proposal System**: Freelancers can submit proposals for jobs
- **Messaging System**: Real-time communication between clients and freelancers
- **User Profiles**: Comprehensive user profiles with skills and portfolio
- **Dashboard**: Personalized dashboard for managing jobs and proposals
- **Responsive Design**: Mobile-friendly interface built with Material-UI

## 🏗️ Architecture

The project follows a microservices architecture with the following components:

### Frontend
- **Technology**: React.js with React Router
- **UI Framework**: Material-UI (MUI)
- **Port**: 3000

### Backend Microservices
All microservices are built with NestJS and MongoDB:

1. **User Service** (Port: 3001)
   - User authentication and authorization
   - User profile management
   - JWT token generation and validation

2. **Job Service** (Port: 5000)
   - Job posting and management
   - Job search and filtering
   - Proposal handling

3. **Messaging Service** (Port: 6000)
   - Real-time messaging between users
   - Message history and inbox management

4. **Content Service** (Port: 4000)
   - Content management and storage

## 🛠️ Tech Stack

### Frontend
- React 18.3.1
- React Router DOM 5.3.4
- Material-UI (MUI) 6.1.9
- Axios 1.7.9 for HTTP requests
- Context API for state management

### Backend
- NestJS 10.0.0
- MongoDB with Mongoose 8.8.3
- JWT Authentication
- Bcrypt for password hashing
- TypeScript 5.1.3
- Express.js

### Development Tools
- ESLint for code linting
- Prettier for code formatting
- Jest for testing
- Dotenv for environment configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Mostafa-Hesham1/Freelancer-Marketplace.git
cd Freelancer-Marketplace
```

### 2. Setup Frontend

```bash
cd freelancer-client
npm install
```

Create a `.env` file in the `freelancer-client` directory:
```env
REACT_APP_API_URL=http://localhost:3001
```

**Note**: The frontend communicates with the User Service (port 3001) as the primary API gateway. If you need to access other services directly, you can add additional environment variables like `REACT_APP_JOB_API_URL`, `REACT_APP_MESSAGING_API_URL`, etc.

### 3. Setup Backend Microservices

#### User Service
```bash
cd freelancer-microservices/user-service
npm install
```

Create a `.env` file:
```env
PORT=3001
MONGO_URL=mongodb://localhost:27017/user-service
JWT_SECRET=YOUR_ACTUAL_JWT_SECRET_HERE_REPLACE_WITH_SECURE_VALUE
```

#### Job Service
```bash
cd freelancer-microservices/job-service
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/job-service
```

#### Messaging Service
```bash
cd freelancer-microservices/messaging-service
npm install
```

Create a `.env` file:
```env
PORT=6000
MONGO_URL=mongodb://localhost:27017/messaging-service
```

#### Content Service
```bash
cd freelancer-microservices/content-service
npm install
```

Create a `.env` file:
```env
PORT=4000
MONGO_URL=mongodb://localhost:27017/content-service
```

## 🏃 Running the Application

### Start MongoDB
Ensure MongoDB is running on your local machine or have a cloud MongoDB instance ready.

### Start Backend Services

Open separate terminal windows for each service:

**User Service:**
```bash
cd freelancer-microservices/user-service
npm run start:dev
```

**Job Service:**
```bash
cd freelancer-microservices/job-service
npm run start:dev
```

**Messaging Service:**
```bash
cd freelancer-microservices/messaging-service
npm run start:dev
```

**Content Service:**
```bash
cd freelancer-microservices/content-service
npm run start:dev
```

### Start Frontend
```bash
cd freelancer-client
npm start
```

The application will be available at `http://localhost:3000`

## 🧪 Testing

### Frontend Tests
```bash
cd freelancer-client
npm test
```

### Backend Tests

For each microservice (replace `user-service` with `job-service`, `messaging-service`, or `content-service` as needed):
```bash
cd freelancer-microservices/user-service
npm test                  # Run tests
npm run test:watch        # Run tests in watch mode
npm run test:cov          # Run tests with coverage
npm run test:e2e          # Run end-to-end tests
```

## 🎨 Code Quality

### Linting
```bash
# Backend (replace 'user-service' with any service name)
cd freelancer-microservices/user-service
npm run lint
```

**Note**: The frontend uses Create React App's built-in ESLint configuration, which runs automatically during development (`npm start`) and build (`npm run build`).

### Formatting
```bash
# Backend (replace 'user-service' with any service name)
cd freelancer-microservices/user-service
npm run format
```

## 📁 Project Structure

```
Freelancer-Marketplace/
├── freelancer-client/              # React frontend application
│   ├── public/                     # Static files
│   ├── src/
│   │   ├── components/            # React components
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── SignUp.js
│   │   │   ├── Dashboard.js
│   │   │   ├── FindWork.js
│   │   │   ├── JobListings.js
│   │   │   ├── AddJob.js
│   │   │   ├── UpdateJob.js
│   │   │   ├── TalentMarketplace.js
│   │   │   ├── ProposeForm.js
│   │   │   ├── Inbox.js
│   │   │   ├── Messages.js
│   │   │   ├── profile.js
│   │   │   └── ...
│   │   ├── context/               # React context providers
│   │   ├── api/                   # API integration
│   │   ├── App.js                 # Main app component
│   │   └── index.js               # Entry point
│   ├── package.json
│   └── .env
│
├── freelancer-microservices/      # Backend microservices
│   ├── user-service/              # User authentication & management
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   ├── modules/
│   │   │   └── main.ts
│   │   ├── test/
│   │   └── package.json
│   │
│   ├── job-service/               # Job management
│   │   ├── src/
│   │   └── package.json
│   │
│   ├── messaging-service/         # Messaging functionality
│   │   ├── src/
│   │   └── package.json
│   │
│   └── content-service/           # Content management
│       ├── src/
│       └── package.json
│
└── README.md                      # This file
```

## 🔑 API Endpoints

### User Service (Port 3001)
- `POST /auth/register` - Register new user
- `POST /auth/login` - User login
- `GET /users/:id` - Get user profile
- `PUT /users/:id` - Update user profile

### Job Service (Port 5000)
- `GET /jobs` - Get all jobs
- `GET /jobs/:id` - Get specific job
- `POST /jobs` - Create new job
- `PUT /jobs/:id` - Update job
- `DELETE /jobs/:id` - Delete job
- `GET /jobs/category/:category` - Get jobs by category
- `POST /jobs/:id/proposals` - Submit proposal

### Messaging Service (Port 6000)
- `GET /messages` - Get user messages
- `POST /messages` - Send message
- `GET /messages/:conversationId` - Get conversation messages

## 🌐 Environment Variables

### Frontend (.env)
```env
REACT_APP_API_URL=http://localhost:3001
```

### Backend Services (.env for each service)
```env
PORT=<service-port>
MONGO_URL=mongodb://localhost:27017/<database-name>
JWT_SECRET=YOUR_ACTUAL_JWT_SECRET_HERE  # Only required for user-service
```

## 🚢 Production Build

### Frontend
```bash
cd freelancer-client
npm run build
```
The build artifacts will be stored in the `build/` directory.

### Backend Services
For each service (replace `user-service` with the specific service name):
```bash
cd freelancer-microservices/user-service
npm run build
npm run start:prod
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Run linting before committing

## 📝 Future Enhancements

- [ ] Docker containerization for easy deployment
- [ ] CI/CD pipeline setup
- [ ] Real-time notifications
- [ ] Payment integration
- [ ] File upload for portfolios
- [ ] Rating and review system
- [ ] Advanced search with filters
- [ ] Email notifications
- [ ] API documentation with Swagger

## 📄 License

This project is licensed under the UNLICENSED License - see the individual package.json files for details.

## 👥 Authors

- Mostafa Hesham - [GitHub](https://github.com/Mostafa-Hesham1)

## 📧 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

## 🙏 Acknowledgments

- NestJS framework for the robust backend architecture
- React and Material-UI for the beautiful frontend
- MongoDB for flexible data storage
- All contributors who help improve this project

---

**Important Security Notes**: 
- Replace all placeholder values (JWT_SECRET, MongoDB URLs, etc.) with your actual secure configuration values
- Use strong, randomly generated secrets for JWT_SECRET (minimum 32 characters)
- Never commit sensitive information or actual credentials to version control
- Add `.env` files to `.gitignore` to prevent accidental commits of secrets
