# Full-stack Authentication App
A full-stack authentication system built with FastAPI (Python) for the backend and React for the frontend. The app is Dockerized and uses PostgreSQL as the database. Features user registration, login, JWT-based authentication, and a protected customer list page.

# Tech Stack
Backend: FastAPI,  Pydantic, SQLAlchemy, PostgreSQL, JWT, Passlib (Argon2)

Frontend: React, React Router, Fetch API

Containerization: Docker, Docker Compose, Nginx (for SPA routing)

Authentication: JWT tokens with HTTPBearer 

# Features
1. User registration and login
2. Password hashing with Argon2
3. JWT token authentication
4. Protected routes for users data
5. React SPA with routing
6. Dockerized backend, frontend, and database
7. SPA support via Nginx (try_files $uri /index.html)
8. CI/CD pipeline using GitHub Actions for automated testing, building, and deployment

# Environment Variables
  Create a .env file in the root:

    POSTGRES_USER=<your_postgres_user>
  
    POSTGRES_PASSWORD=<your_postgres_password>
  
    POSTGRES_DB=<your_database_name>
  
    SECRET_KEY=<your_secret_key>
  
    DATABASE_URL=<your_database_url>

# Running the Project with Docker
This setup runs the backend, frontend, and PostgreSQL database in containers.

# 1. Build and Start Containers
  #  From the project root:
      docker-compose up --build

  #  Services started:
      db → PostgreSQL database
      
      backend → FastAPI app on port 8004

      frontend → React app on port 3004

# 2.  Access the App
      Frontend at : http://localhost:3004

      Login, register, and registered users pages

      Backend (FastAPI): http://localhost:8004/docs

      Swagger UI for testing endpoints: /register, /login, /users

# 3.  Stop Containers
      docker-compose down
 
# Authentication Flow
1. Registration: User signs up with name, email, password.
2. Login: User receives JWT token.
3. Protected Routes: Token required to access users/customers.
4. React SPA: Token is stored in localStorage and sent in the Authorization header.

# Notes / Best Practices
1. CSS imported correctly (App.css) for SPA styling
2. Nginx used to serve React SPA with try_files $uri /index.html
3. Docker Compose simplifies multi-container setup
4. .gitignore excludes sensitive files (.env, node_modules, venv, database dumps)
5. Ready to integrate #AI automation / Generative AI features

# Future Enhancements
Currently, the application displays registered users in a list labeled as customers. In future updates, the system will introduce separate panels for Admin and Users. This separation will improve security, role-based access control, and overall system structure.

1. Admin Panel: Admins will be able to view and manage the list of registered customers.
2. Customer Panel: Regular users will have access only to their own account-related features.
3. LLM and Gen AI
4. Password reset / email verification: 
5. Enhanced UI: 
    

