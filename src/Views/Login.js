import React, { useState } from "react";
import Button from "@mui/material/Button";

const Home =()=>{
    const [state,setState] = useState('green')
    const [value, setName] = useState("")
    const [mobile, setMobile] = useState("")
   
  //  const handleChange=(e)=>{
  //      console.log(e.target.value)
  //    setValue(e.target.value)
  //  }  
    // const handleName=(e)=>{
    //     console.log(e.target.value)
    //   setName(e.target.value)
    // }  
    // const handleMobile=(e)=>{
    //     console.log(e.target.value)
    //   setMobile(e.target.value)
    // }  

    // const priya=()=>{
    //     setState('blue')
    // }



  //   const handleName=(e)=>{
  //     setData({...data,['name']: e.target.value})
     
  // }  
  // const handleMobile=(e)=>{
  //   setData({...data,['mobile']: e.target.value})

  // }  

  const handleinput=(e) =>{
    setData({...data,[e.target.name]:e.target.value})
  }
    const [data,setData] = useState({
      name: "",
      mobile:""
    })
    const handleButton = () =>{
      if(data.name === ""){
        alert("Enter Your nname")
      }
      else if(data.mobile.length>10 || data.mobile.length<10){
        alert("Invalid Mobile Number")
      }
      else{
        console.log("All clear",data)
      }
    }

    return (
        <>
            <div style={{width:"500px",height:"400px",marginLeft:200,marginTop:100,padding:"40px" ,backgroundColor:"#3E3A57",color:"white",borderRadius:"20px"}}>
              <h1  style={{ marginBottom:"20px",textAlign:"center"}}>Login</h1>
                <input placeholder="Enter you Name" name="name" value={data.name} onChange={handleinput} style={{Align:"center"}}/> <br/><br/>
                <input placeholder="Enter you Mobile" name="mobile" value={data.mobile} onChange={handleinput} style={{ marginBottom:"20px"}} /><br/>
                <Button variant="contained" style={{backgroundColor: '#EF3F3F',width:"100px",height:"40px",marginLeft:150,marginTop:20}} 
                className="btn1" onClick={handleButton}>Login
                </Button>

            </div>
        </>
    )
}
export default Home