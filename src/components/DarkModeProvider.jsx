// "use client";

// import { useState, useEffect } from "react";

// export default function DarkModeProvider({ children }) {
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div>
//       {children}
//       {/* Ici tu pourrais mettre un bouton global si besoin */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow-lg"
//       >
//         {darkMode ? "☀️" : "🌙"}
//       </button>
//     </div>
//   );
// }

"use client";

import { createContext, useState, useContext, useEffect } from "react";

// Context pour le dark mode
const DarkModeContext = createContext();

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
