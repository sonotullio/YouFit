import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import  { CheckCircle } from "@mui/icons-material";

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({video}) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none' }}>
            <Link to={video.videoId ? '/video/' + video.videoId : demoVideoUrl}>
                <CardMedia
                    image={video.thumbnails[0]?.url}
                    alt={video.title}
                    sx={{ width: {xs: '100%', sm: '358px', md: '320px'}, height: 180 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: 'inherit', height: '106px' }}>
                <Link to={video.videoId ? '/video/' + video.videoId : demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {video.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={video.channelId ? '/channel/' + video.channelId : demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{':hover': { color: 'black' } }} >
                        {video.channelName.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;