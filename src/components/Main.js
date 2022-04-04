import React from 'react'
import { styled } from '@mui/material/styles'
import { grid } from '@mui/system';
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';


const ChatField = styled('div')({
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
});

const Main = ({name}) => {
    // const classes = useStyles();
    return [
    <ChatField >
        <MessageList />
        <MessageInputField name={name}/>
    </ChatField>
    ];
};

export default Main;