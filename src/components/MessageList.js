import React from 'react';
import { styled } from '@mui/material/styles';

const MessageList = styled('div')({
    gridRow: '1',
});

export default function StyledComponents() {
    return <MessageList>MessageList</MessageList>;
}