import React from 'react';
import { styled } from '@mui/material/styles';

const MessageInputField = styled('div')({
    gridRow: '2',
});

export default function StyledComponents() {
    return <MessageInputField>MessageInputField</MessageInputField>;
}