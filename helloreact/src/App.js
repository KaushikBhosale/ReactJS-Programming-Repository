import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import ConditionalRendering from './Components/ConditionalRendering';
import Useeffect from './Hooks/Useeffect';
import Useref from './Hooks/Useref';
import Usestate from './Hooks/Usestate';
import Eventhandling from './Components/Eventhandling';
import Apicard from './Practice_Question/Apicard';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Usememo from './Hooks/Usememo';


function App() {
  let a = "Props";
  let b = "Arguments to pass teh values";
  const foot = "CopyRight@2024 superCODER";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
    {
      path: "/miniproject",
      element: <><Navbar /><Apicard /></>
    }
  ])

  return (

    <div className="App">


      <h1>Welcome to React JS</h1>
      <RouterProvider router={router} />

      <div className="cards">
        <Cards className="cards" title="JSX" desc="JSX syntax for html and javascrip" />
        <Cards className="cards" title="Components" desc="components used in react" />
        <Cards className="cards" title={a} desc={b} />
        <Eventhandling />
      </div>
      <h1>React Hooks</h1>
      <div className="HOOKS">
        <ul>
          <li><Usestate /></li>
          <li><Useeffect /></li>
          <li><Useref /></li>
          <li><Usememo /></li>
        </ul>
        <ConditionalRendering />



      </div>
      <footer>
        <h2>{foot}</h2>
      </footer>
    </div>
  );
}


export default App;
