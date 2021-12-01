import React from "react";
import Routing from "../Routing/Routing";
import Navbar from '../Views/Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {

  const notify = () => toast("Wow so easy!");

  return (
    <div>

        <ToastContainer />
      <Navbar/>
      <button onClick={notify}>Notify!</button>

      {/* <Routing/> */}
    </div>
  );

}

export default App;
