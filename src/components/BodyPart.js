import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const handleClick = (e) => {
        e.preventDefault();
        setBodyPart(item);
        const ele = document.getElementById('exercises');
        window.scrollTo({top: ele.offsetTop, left: ele.offsetLeft, behavior: 'smooth'});
    }

    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className={bodyPart === item ? "bodyPart-card bodyPart-card-active" : "bodyPart-card"}
            onClick={handleClick}
        >
            <Typography variant="h6" textTransform="capitalize"> {item}</Typography>
        </Stack>
    );
}

export default BodyPart;