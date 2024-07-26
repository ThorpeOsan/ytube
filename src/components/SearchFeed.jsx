import React from 'react'
import  {useState,useEffect} from 'react'
import { Box,Typography } from '@mui/material'

import Videos from './Videos'
import { fetchFromAPI } from '../Utils/FetchData'
import { useParams } from 'react-router-dom'

export const SearchFeed = () => {
  const {searchterm} = useParams()
  const [videos,setVideos] = useState([])
  
  useEffect(()=>{

    fetchFromAPI(`search?part=snippet&q=${searchterm}`)
     .then((data)=>{setVideos(data.items)})
 
   }, [searchterm])
 


  return (

    <Box p={2} sx={{overflowY:'auto', height:'90vh',  flex:'2', }}>

      <Typography variant='h4' fontWeight='bold'  mb={2} sx={{color:'white'}}>
        Search Results for: <span style={{color:'#F31503'}}> {searchterm}</span> Videos
      </Typography>

      <Videos videos={videos}/>
      
    </Box>  
    
  )
    }
    
    export default SearchFeed
    
 
