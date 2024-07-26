import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {demoThumbnailUr,demoChannelUrl,demoVideoUrl,demoChannelTitle,demoVideoTitle,demoProfilePicture} from '../Utils/constants'



const VideoCard = ({video:{id:{videoId},snippet}}) => {

 //console.log(snippet)
  return (
    
    <Card sx={{width:{xs:'100%',sm:'358px',md:'239px'}, borderRadius:0, boxShadow:'none'}}>
     <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
         <CardMedia 
         image={snippet?.thumbnails?.high?.url}
         sx={{height:180, width:{xs:'100%', sm:'358px',md:'239px'}}}
         />
    </Link>

    <CardContent sx={{height:'106px',backgroundColor:'#1e1e1e'}}>

    <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
    
    <Typography variant="subtitle1" fontWeight='bold' color='#FFF'>
     
      {snippet?.title.slice(0,60)|| demoVideoTitle.search.slice(0,60)}
    </Typography>
    </Link>

    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
    
    <Typography variant="subtitle2" fontWeight='bold' color='gray'>
     
      {snippet?.channelTitle.slice(0,60)|| demoChannelTitle.search.slice(0,60)} 
      <CheckCircle sx={{fontSize:12, color:'gray', ml:'5px'}}/>
    </Typography>
    </Link>

    </CardContent>
    </Card>
  )
}

export default VideoCard