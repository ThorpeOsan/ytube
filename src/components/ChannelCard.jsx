import React from 'react';
import { CheckCircle } from '@mui/icons-material';
import {CardContent,CardMedia,Box,Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../Utils/constants';

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box sx={{borderRadius:'20px',boxShadow:'none' ,height:{xs:'auto', md:'326px'},margin:'auto', marginTop, display:'flex',justifyContent:'center', alignItems:'center', width:{xs:'356px', md:'240px'}}}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>

      <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center',color:'#fff'}}>
        <CardMedia image={channelDetail?.snippet?.thumbnail?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        sx={{borderRadius:'50%', width:'120px', height:'120px', mb:2,border:'1px solid #e3e3e3'}}
        />
        <Typography variant='h6'>
             {channelDetail?.snippet?.title}
             <CheckCircle sx={{fontSize:14, color:'gray', ml:'5px'}}/>
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
            Subscribers
          </Typography>
        )}

      </CardContent>
      
      </Link>

    </Box>
  )
}

export default ChannelCard