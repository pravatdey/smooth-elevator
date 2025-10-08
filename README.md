Smooth Elevator - React demo

This is a small React (Vite) demo project for "Smooth Elevator - Best Lift Company in Bhubaneswar". It contains 4 pages: Home, About, Services, Contact.

New pages added: Products (listing) and Product detail pages for individual products.

Quick start (PowerShell):

```powershell
cd d:\Personal_projects\Smooth-Elevator
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173).

Notes:
- The `src/assets` folder contains SVG placeholder images created for the demo. Replace them with real images you find on Google if you wish; make sure you have the rights to use them.
- This project uses React Router for navigation.

Routes:
- / -> Home
- /about -> About
- /services -> Services
- /products -> Products (list)
- /product/:id -> Product detail
- /contact -> Contact

ChatBot
------
This project includes a small client-side chatbot widget (SmoothBot). It's a local widget that stores conversation history in your browser's localStorage. Click the floating chat button at the bottom-right to open it. To clear chat history, open DevTools -> Application -> Local Storage and remove the `smooth_chat` key.
