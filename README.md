# User Management System

## Overview
A user management system developed with React.js, Node.js, and PostgreSQL. It can execute a CRUD while communicating with the frontend and displaying the change of data.

## Technology

Frontend: React.js, React Router, knex, joi

Backend: Node.js, Express, PostgreSQL

## Requirements
- Node.js (18 or superior)
- PostgreSQL
- NPM
- Docker

## Project Structure
---------
frontend/
  ├── src/
  │   ├── components/  
  │   ├── pages/      
  │   ├── routes/    
  │   ├── services/      
  │   ├── utils/    
  │   └── App.js    
backend/                  
  ├── config/  
  ├── controllers/      
  ├── exceptions/    
  ├── middleware/      
  ├── migrations/    
  ├── models/  
  ├── repositories/      
  ├── routes/    
  ├── services/      
  ├── utils/ 

  └── App.js         

---------

## How to use the project

1. Clone the project
   ```bash
   git clone https://github.com/MatheusZago/node-react-restful.git
   ```
2. Enter the project
     ```bash
     cd node-react-restful
    ```

3. Install depencies

    For frontend
     ```bash
     cd frontend
     ```

     ```bash
   npm install
   ```

    For backend
    ```bash
    cd backend
    ```

     ```bash
   npm install
   ```

4. Run with docker in the root of the project.
   ```bash
   docker-compose up
   ```
