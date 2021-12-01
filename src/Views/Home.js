import React, { Component, useState } from "react";
import About from "./About";
import Button from "@mui/material/Button";
import {mydata} from './Data'
// const Home =()=>{
//     const [state,setState] = useState('green')
//     const [value, setValue] = useState("")
//    // const [value, setValue] = useState("")
   
//     const handleChange=(e)=>{
//         console.log(e.target.value)
//       setValue(e.target.value)
//     }  

//     const priya=()=>{
//         setState('blue')
//     }

//     return (
//         <>
//             <About myColor={value}/> 
//             <button style={{width:"100px",height:"40px",border:"1px solid yellow",marginLeft:200,marginTop:20}} className="btn1" onClick={priya}>Click Me</button>
//             <input placeholder="Enter you name" value={value} onChange={handleChange} />

//             <Button variant="contained" color="primary">
//                Hello World
//            </Button>
//         </>
//     )
// }

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            value :""
        }

    }
    handechange= (e) => {
        this.setState({value : e.target.value})
    }
    render(){
        return(
            <>
                <About myColor={this.state.value}/>
                <h5>This is class Component</h5>
                <input placeholder ="Enter Your Name" value={this.state.value} onChange={this.handechange}/>
            </>
        )
    }
        
}


//----------------------------------------------------------Trial ------------------------------------------------------------------

export default Home