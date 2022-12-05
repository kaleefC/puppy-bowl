import React from 'react';
import {createRoot} from 'react-dom/client';
import Main from './components/Main.js';

// const Main = () => {
//  return (
//       <div>
//      <h1>Hello World</h1>
//       </div>
//    );
// };

createRoot(document.querySelector('#root')).render(<Main />); 