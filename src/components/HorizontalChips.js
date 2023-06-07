import React from 'react';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalChips = ({ data, setBodyPart, bodyPart }) => (
    <Box gap="10px" sx={{ display: { xs: 'none', md: 'none', lg:'flex', xl: 'flex' }, direction: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {data.map((item) => (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ))}
    </Box>
);

export default HorizontalChips;