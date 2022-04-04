import React from 'react'
import { styled } from '@mui/material/styles'
import MessageInputField from './MessageInputField';
import MessageList from './MessageList';


const MessageField = styled('div')({
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
});

const Main = ({name}) => {
    // const classes = useStyles();
    return [
    <MessageField >
        <MessageList />
        <MessageInputField name={name}/>
    </MessageField>
    ];
};

export default Main;