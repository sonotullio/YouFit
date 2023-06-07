import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../YouFit2.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#00c2cb">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" py="24px">
            <img src={Logo} alt="logo" style={{ width: '80px', backgroundColor: 'white', borderRadius: '50%' }} />
        </Stack>
        <Typography variant="caption" textAlign="center" pb="40px">
            <p>© 2023 - All Rights Reserved</p>
        </Typography>
    </Box>
);

export default Footer;