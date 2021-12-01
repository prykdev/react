import React, { Component } from "react";
import Button from "@mui/material/Button";
import "../Css/About.css"

// function About ({myColor}){

//     if(myColor ==='blue')
//     {
//         alert("Nont acc")
//     }
//     return (
//         <>
//         <h1>This is About page</h1>
//         <div style={{width:"200px",height:"200px",border:"1px solid black",marginLeft:200,marginTop:20 ,backgroundColor:myColor}}></div>
//         <div class="mb-3">
//                 <label for="exampleFormControlInput1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
//             </div>
//             <div class="mb-3">
//                 <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//             </div>
//         </>
//     )
// }



// class About extends Comment{
//     constructor(props){
//         super(props)
//         this.state={
//             color:"red"
//         }
//     }
//      render(){
//          return(
//              <>
//              <h1>This is class component</h1>
//              </>
//          )
//      }
// }

class About extends Component{

    constructor(props){
        super(props)
        this.state={
            x:"",
            output:[]
        }
        console.log(props)
    }

    handleinput = (e)=>{
        //console.log(e)

    
            this.setState({x:e.target.value})
    
        

    }
    handleClick = () =>{
        if(this.state.x === ""){
            alert("Please enter a number")
        }
        else{

            var t=[];
            for(let i=1;i<11;i++){
                t.push(`${this.state.x} X ${i} = ${this.state.x * i}`)
            }
            this.setState({output:t})
            console.log(t);

        }

       
    }

    render(){
        return(
            <>
                {/* <div style={{backgroundColor:this.props.myColor,width:"200px",height:"200px",border:"1px solid black",marginLeft:200,marginTop:20 }}></div> */}
            <div id="main"style={{marginLeft:200,marginTop:20,}} >
                <input placeholder="Enter any number" value={this.state.x} onChange={this.handleinput}/>

                <Button variant="contained" color="primary" onClick={this.handleClick}>
                    Click to get table 
                </Button>
            </div>
                {
                    this.state.output.map((data,i)=>
                        <>
                            <h4>{data}</h4>
                        </>
                    )
                }
           
            </>
        )
    }
}



export default About