import React from 'react';
import { rows } from './data/data'
import Thead from './table/thead';
import Tbody from './table/tbody';
// import logo from './logo.svg';
// import './App.css';

const Component: React.FC = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <Thead />
      <Tbody rows={rows}/>
    </table>
  </div>
);

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default Component;
