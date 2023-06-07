import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
import './HeroBanner.css';

const HeroBanner = () => (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
        <Typography variant="h3tra" className="hero-title"><span style={{color: 'black'}}>You</span>Fit!</Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Eat, Sleep, Train... <br />
            <span className="hero-title">Repeat!</span>
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
            <Link to="/exercises" className="hero-cta">
                Explore Exercises
            </Link>
        </Stack>
        <Typography fontWeight={600} color="#00c2cb" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
);

export default HeroBanner;
