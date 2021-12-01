import React from "react";
import { useState } from "react";
const Landing =()=>{

      /*  const [values,setValue] = useState({
        x:"",
        output:[]
    })
    const handelChange=()=>{
        setValue

    }*/

    //blob (Buffer stream)
    const [data ,setData] = useState({
        selectedValue:"",
        img: ""
    })
    const handleFile=(e)=>{

        console.log(e.target.files)
        var temp = e.target.files[0];

        var str = temp.type;
        const Words = str.split('/');
        var ext = Words[1]
        if(ext !=="png" && ext !== "jpg" && ext!=="jpeg"){
            alert("Plsese select an image");
        }
        else{
            setData({...data,['img'] : URL.createObjectURL(e.target.files[0])})
        }
        // console.log(e.target.files);

        // console.log(e.target.files[0]);
        // setData({...data,['img'] : URL.createObjectURL(e.target.files[0])})
        //console.log(URL.createObjectURL(e.target.files))
    }

    const arr=[1,2,3,4,5,6,7]
    return(
    <>
        <input placeholder="Name here"/>
        {arr.map((element,i)=>{
            <h5>{element}</h5>
        })}
        <div class="mb-3" style={{margin:"20px"}}>
           <label for="formFileMultiple" class="form-label">Multiple files input example</label>
            <input onChange={handleFile} style={{width:"300px",marginLeft:"20px"}} class="form-control" type="file" id="formFileMultiple" multiple />
        </div>

        <img src={data.img} style={{width:100,height:100}}/>
     </> 
    )
}
export default Landing