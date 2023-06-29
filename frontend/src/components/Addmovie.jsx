import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addmovie = (props) => {
  var navigate = useNavigate
  console.log("props data", props.data)
  console.log("props method", props.method)

  var[inp,setInp] = useState(props.data)
  

const inputHandler = (e)=>{
  const {name,value}=e.target;
  setInp((inp)=>({...inp,[name]:value}))
  console.log(inp); 
}

const readHandler =()=>{
  console.log("clicked");
  if(props.method==="post"){
  axios.post("http://localhost:3030/addmovie",inp)
  .then((response)=>{
    alert("Data Added");
    navigate('/')

  })
  .catch(err=>console.log(err));
};
if(props.method==="put"){
  axios.put("http://localhost:3030/edit/"+inp._id,inp)
  .then((response)=>{
    alert("Updated");
    window.location.reload(false)
  })
}
}

  return (
    <div style={{paddingTop:'100px'}}>
      <TextField name='MovieName' value={inp.MovieName} onChange={inputHandler} label="Movie Name"/><br/><br/>
      <TextField name='Actor' value={inp.Actor} onChange={inputHandler} label="Actor"/><br/><br/>
      <TextField name='Actress' value={inp.Actress} onChange={inputHandler} label="Actress"/><br/><br/>
      <TextField name='Director' value={inp.Director} onChange={inputHandler} label="Director"/><br/><br/>
      <TextField name='ReleasedYear' value={inp.ReleasedYear} onChange={inputHandler} label="Released Year"/><br/><br/>
      <TextField name='Camera' value={inp.Camera} onChange={inputHandler} label="Camera"/><br/><br/>
      <TextField name='Producer' value={inp.Producer} onChange={inputHandler} label="Producer"/><br/><br/>
      <TextField name='Language' value={inp.Language} onChange={inputHandler} label="Language"/><br/><br/>
      <Button variant='contained' onClick={readHandler}>Add</Button> 
    </div>
  )
  }

export default Addmovie