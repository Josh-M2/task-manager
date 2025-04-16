# Task Manager App

A modular Task Manager that evolves from a simple to-do list into a real-time task management system — built with React (TypeScript), Node.js (Express), MongoDB, and WebSocket.

**Features**

- Real-time updates via WebSocket (Socket.IO)

- Light/Dark Mode using useContext

- Input Validation (Frontend + Backend)

- Sanitization using:

  - DOMPurify (Frontend)

  - sanitize-html (Backend)

- Edit specific tasks

- Move tasks between categories (e.g. To Do ↔ Doing ↔ Done)

- Sort tasks (custom sort logic)

- Modular, reusable logic components

**Tech Stack**

  - **Frontend**
    - React + TypeScript
    
    - shadcn/ui components
    
    - Socket.IO-client
    
    - DOMPurify
    
    - Modular UI Components & Logic Functions
    
  - **Backend**
    - Node.js + Express
    
    - MongoDB with Mongoose
    
    - Socket.IO
    
    - sanitize-html
    
    - Modular REST APIs

**Project Structure**

  - **Client-side (/client)**
    - components/ – UI and functional components (modularized)
    
    - lib/ – Helper functions like sorting, date formatting, validators
    
    - services/ – Axios instance & API logic
    
    - types/ – TypeScript interfaces for task objects
    
    - pages/ – Main entry point (MainPage)
  
  - **Server-side (/server)**
  
    - config/ – MongoDB, CORS, WebSocket setup
    
    - controller/ – Task-related controller logic
    
    - routes/ – Express routes
    
    - model/ – Mongoose schemas
    
    - utils/ – Validators and helper logic
    
    - server.js – Main server entry

**Architectural Notes**

- **Modular Structure:** All components and utilities are split for clarity and reuse.

- **WebSocket Integration:** Handles real-time sync of task state across clients.

- **Async/Sync Functions:** Clear separation with Promise-based logic.

- **Validation:** Both client and server side for inputs.

- **Reusable Functions:** Common logic moved to shared utility files.

- **Security:** Inputs are sanitized and validated to prevent XSS.

**Upcoming Improvements**

- Add user authentication

- Task due dates and reminders

- Drag & drop UI

**UI Preview**
![image](https://github.com/user-attachments/assets/578a47a3-edb0-4b8f-8b90-651fa4448ef9)

**Getting Started**

- Clone the repository:

        git clone https://github.com/your-username/task-manager.git
    
- Install dependencies:

  - For frontend:

        cd client
    
        npm install
    
  - For backend:

        cd server
    
        npm install
    
- Start development:

  - Frontend
    
        npm run dev

  - Backend
    
        npm run dev

**Environment Variables**

  - Frontend

          VITE_NODE_ENV         # local/development/production
          
          VITE_BE_URL           # server/backend URL
    
  - Backend
      
          PORT = 5174
          
          CLIENT_URL             # Frontend URL
          
          NODE_ENV               # local/development/production
          
          MONGODB_URI            # your openweather API key

This project shows how a simple to-do list can grow into a real-time task manager by using good coding practices like breaking code into smaller parts, reusing logic, managing state, and adding real-time updates.
With a bit of curiosity (and maybe too much coffee), even a basic to-do list can turn into something pretty cool. 
    


