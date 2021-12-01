import * as React from 'react'; //wildcard routing 
import { Route,Routes ,link } from 'react-router';
import Home from '../Views/Home';
import About from '../Views/About';
import Landing from '../Views/Landing';
import Login from '../Views/Login'
import Table from '../Views/Table'


const Routing=({getdata})=>{
    console.log(getdata)
    return(
        <div className="App">
            <Routes>
                <Route path="/" element ={<Landing/>}/>
                <Route path="/About" element ={<About/>}/>
                <Route path="/Home" element ={<Home />}/>
                <Route path="/Login" element ={<Login/>}/>
                <Route path="/Table" element ={<Table incoming = {getdata}/>}/>
            </Routes>
        </div>
    )
}



export default Routing