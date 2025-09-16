🎉 Event Management System

A full-stack web application for managing events, registrations, feedback, and contact forms.
Built with React (frontend), Node.js + Express (backend), and MySQL (database).

🚀 Tech Stack

Frontend: React.js (Vite, Hooks, React Router, CSS Modules)

Backend: Node.js + Express

Database: MySQL (using mysql2 for connectivity)

Other Tools: CORS, body-parser

📌 Features

✅ User Registration (stores user data in MySQL)
✅ Feedback Form (saves user feedback in MySQL)
✅ Contact Form (messages saved in MySQL)
✅ Fully connected frontend → backend → database
✅ REST API endpoints (/register, /feedback, /contact)

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Minhalahamed/Event-Management.git
cd Event-Management

2️⃣ Setup Backend
cd backend
npm install


Start backend:

node server.js


Backend runs on 👉 http://localhost:5000

3️⃣ Setup Frontend
cd frontend
npm install
npm run dev


Frontend runs on 👉 http://localhost:5173

🗄️ Database Setup

Open MySQL Workbench (or CLI).

Run the following commands:

CREATE DATABASE event_management;
USE event_management;

-- Registration Table
CREATE TABLE register (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Feedback Table
CREATE TABLE feedback (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  usertypes VARCHAR(50),
  eventattend VARCHAR(50),
  ratting INT,
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Table
CREATE TABLE contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  subject VARCHAR(200),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

🔗 API Endpoints
Method	Endpoint	Description
POST	/register	Register a new user
POST	/feedback	Submit feedback
POST	/contact	Send contact message
📊 ER Diagram
erDiagram
    REGISTER {
        int id PK
        varchar name
        varchar email
        varchar password
        varchar phone
        timestamp created_at
    }

    FEEDBACK {
        int id PK
        varchar name
        varchar email
        varchar usertypes
        varchar eventattend
        int ratting
        text comment
        timestamp created_at
    }

    CONTACT {
        int id PK
        varchar name
        varchar email
        varchar subject
        text message
        timestamp created_at
    }

👨‍💻 Author

Developed by Minhal Ahmed
