import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Search} from '@mui/icons-material';
import {Paper,IconButton} from '@mui/material';




const SearchBar = () => {

  const [searchterm,setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
   e.preventDefault()

   if(searchterm) {

     navigate(`/search/${searchterm}`)

     setSearchTerm('')
   }
  }

  return (
    <Paper 
    component='form'
    onSubmit={handleSubmit}
    sx={{
      mr:{sm:5},
      pl:2,
      border:'1px solid e3e3e3',
      boxShadow:'none',
      borderRadius:20
    }}
    >
        <input className='search-bar'
        value={searchterm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        placeholder='Search...'
        />

        <IconButton type='button' sx={{p:'10px',color:'red'}}>
          <Search></Search>
        </IconButton>
    </Paper>
  )
}

export default SearchBar