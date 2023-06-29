import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Addmovie from './Addmovie';

const Viewmovies = () => {
    var[movies,setMovies] = useState([]);
    var[edit,setEdit] = useState(false);
    var[singleValue,setSingleValue] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3030/viewmovies")
        .then((response)=>{
            console.log(response.data)
            setMovies(response.data);
        })
    },[])
    var deleteValues =(id)=>{
        console.log(id);
        axios.delete("http://localhost:3030/deletemovies/"+id)
        .then((response)=>{
            alert("Deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }

const editValues = (value)=>{
    console.log("Update Clicked")
    setEdit(true);
    setSingleValue(value)

}

var finalJSX = <TableContainer>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell>Actor</TableCell>
            <TableCell>Actress</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Released Year</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Language</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {movies.map((val,i)=>{
            return(
                <TableRow key={i}>
                    <TableCell>{val.MovieName}</TableCell>
                    <TableCell>{val.Actor}</TableCell>
                    <TableCell>{val.Actress}</TableCell>
                    <TableCell>{val.Director}</TableCell>
                    <TableCell>{val.ReleasedYear}</TableCell>
                    <TableCell>{val.Camera}</TableCell>
                    <TableCell>{val.Producer}</TableCell>
                    <TableCell>{val.Language}</TableCell>
                    <TableCell>
                        <Button onClick={()=>deleteValues(val._id)}>
                            Delete
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button onClick={()=>editValues(val)}>
                            Edit
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })}
    </TableBody>
</Table>
</TableContainer>

if(edit) finalJSX = <Addmovie data={singleValue} method ='put'/>
  return finalJSX;
};

export default Viewmovies