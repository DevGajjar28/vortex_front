// import React from 'react';
// import { useTheme } from './ThemeContext';

// function Toggle() {
//   const { isDarkMode, toggleMode } = useTheme();

//   return (
//     <>
//       <label
//         htmlFor="Toggle1"
//         className={`inline-flex items-center space-x-4 cursor-pointer ${
//           isDarkMode ? 'text-gray-100 dark:text-gray-800' : 'text-gray-800 dark:text-gray-100'
//         }`}
//       >
//         <span>{isDarkMode ? 'Dark' : 'Light'}</span>
//         <span className="relative">
//           <input
//             id="Toggle1"
//             type="checkbox"
//             className="hidden peer"
//             checked={isDarkMode}
//             onChange={toggleMode}
//           />
//           <div className={`w-10 h-6 rounded-full shadow-inner ${isDarkMode ? 'bg-gray-400 dark:bg-gray-600 peer-checked:bg-violet-400 peer-checked:dark:bg-violet-600' : 'bg-gray-200 dark:bg-gray-800 peer-checked:bg-violet-400 peer-checked:dark:bg-violet-600'}`}></div>
//           <div className={`absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow ${isDarkMode ? 'peer-checked:right-0 peer-checked:left-auto bg-gray-800 dark:bg-gray-100' : 'peer-checked:right-0 peer-checked:left-auto bg-gray-100 dark:bg-gray-800'}`}></div>
//         </span>
//         <span>{isDarkMode ? 'Light' : 'Dark'}</span>
//       </label>
//     </>
//   );
// }

// export default Toggle;
