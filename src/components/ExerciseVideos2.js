import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import VideoCard from "./VideoCard";

const ExerciseVideos2 = ({ exerciseVideos, name }) => {
    if (!exerciseVideos.length) return <Loader />;

    return (
        <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
            <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
                Watch <span style={{ color: '#00c2cb', textTransform: 'capitalize' }}>{name}</span> exercise videos
            </Typography>
            <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start"  alignItems="center">
                {exerciseVideos.slice(0, 4)?.map((item, index) => (
                    <VideoCard key={index} video={item.video} />
                ))}
            </Stack>
        </Box>
    );
};

export default ExerciseVideos2;