import React from 'react'
import { Stack } from '@mui/material'
import {categories} from '../Utils/constants'
import '../index.css'



const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
   
    <Stack direction='row' sx={{ height:{sx:'auto', md:'95%'} , flexDirection:{md:'column'} , overflowY:'auto'}}>
         
     {categories.map((category)=>{
       return <button className='category-btn' onClick={()=>{setSelectedCategory(category.name)}}style={{background:category.name === selectedCategory && '#FC1503',color:'white' }} key={category.name}>

       <span style={{color:category.name===selectedCategory ? 'white':'red', marginRight:'15px'}}>{category.icon}</span>
       <span stle={{opacity:category.name===selectedCategory ? '1':'0'}}>{category.name}</span>
       </button>
     })}
    </Stack>
   
    
  )
}

export default SideBar