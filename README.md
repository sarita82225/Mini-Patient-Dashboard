# 🦷 Dentist Patients App

A minimal **Next.js + RTK Query + TypeScript** web application where a dentist can:
- View a list of patients
- Click on a patient to see their treatment history

Data is **mocked and stored in memory** using Next.js API routes.  
UI is built with **plain CSS**, no Tailwind or UI frameworks.

---

## 🚀 Tech Stack

  - Next.js (Pages Router)
  - React + TypeScript
  - Redux Toolkit + RTK Query
  - Plain CSS

---

## 📦 Prerequisites

- Node.js 18+ (LTS recommended)  
  Download: [https://nodejs.org](https://nodejs.org)

Verify installation:

```bash
node -v
npm -v

---

🛠️ Installation (Step by Step)

 1️⃣ Create Next.js project
    npx create-next-app@latest dentist-app --typescript

 2️⃣ Move into project
    cd dentist-app

 3️⃣ Install required dependencies
    npm install @reduxjs/toolkit react-redux

 4️⃣ Folder Structure
  src/
   ├── pages/
   │    ├── api/
   │    │    ├── patients.ts
   │    │    └── patients/[id]/treatments.ts
   │    ├── patients/
   │    │    ├── index.tsx
   │    │    └── [id].tsx
   │    └── _app.tsx
   ├── store/
   │    ├── api.ts
   │    └── store.ts
   └── styles/
      └── globals.css

 5️⃣ API Endpoints
    GET /api/patients

    Returns a list of patients.

    Example response:

    [
     { "id": "1", "name": "John Doe", "age": 32 },
      { "id": "2", "name": "Maria Rossi", "age": 28 }
   ]

   GET /api/patients/:id/treatments

   Returns treatment history for a patient.

   Example response:

   [
      { "id": 1, "type": "Cleaning", "date": "2024-01-10" },
      { "id": 2, "type": "Filling", "date": "2024-03-05" }
   ]

6️⃣ Frontend Pages

  /patients → List of patients

  /patients/[id] → Treatment history

  Uses RTK Query for data fetching

7️⃣ Plain CSS for styling

    File: src/styles/globals.css

8️⃣ Redux Store Setup

  store/api.ts
  store/store.ts

9️⃣ _app.tsx Setup



🔧 Running the App
   npm run dev

Open in browser:

 http://localhost:3000/patients
   → Patients list

Click a patient → http://localhost:3000/patients/1
   → Treatment history

  - API endpoints for testing:

  - http://localhost:3000/api/patients

  - http://localhost:3000/api/patients/1/treatments


✅ Key Points

  - No Tailwind, plain CSS used

  - Pages Router, not App Router

  - Named exports used correctly for store

  - RTK Query handles fetching and caching

  - Folder [id]/treatments.ts is critical for dynamic routes


🔮 Possible Enhancements

  - Add CRUD functionality for treatments

  - Add authentication for dentist login

  - Role based access control (RBAC)

  - Appointment and Invoice related functionality

  - Persist data in a real database (SQLite, MongoDB)

  - Add unit tests (Jest + React Testing Library)

  - Add a header and dashboard layout

  - Implement searching, sorting and pagination (server side pagination)

  - Server side rendering

  - Deploy to Vercel
