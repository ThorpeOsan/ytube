import React from 'react'
import {useState,useEffect} from 'react';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../Utils/FetchData';
import  {Link,useParams} from 'react-router-dom'
import { Typography,Stack,Box } from '@mui/material';
import Videos from './Videos';
import ReactPlayer from 'react-player'

const VideoDetail = () => {
  const [video, setVideo] = useState('');
  const [videos, setVideos] = useState('')
  const {id} = useParams();

  useEffect(()=>{
   fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
   .then((data)=>setVideo(data.items[0]))
    
   fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
   .then((data) => setVideos(data.items))

  },[id])

  if(!video?.snippet) return 'Loading...'

   const {snippet:{title,channelId,channelTitle}, statistics:{viewCount,likeCount}} = video
  console.log(videos)
  return (
    <Box sx={{height:'95vh', overflow:'auto'}}>
      <Stack flexDirection='row'>
        <Box>
          <Box>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player'/>
            <Typography p={2}  variant ='h5' fontWeight='bold'sx={{color:'#fff'}}>{title}</Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" /> 
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail