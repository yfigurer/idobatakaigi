import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { onValue, orderByKey, query, limitToLast } from "firebase/database";


import { messageRef } from '../firebase';


const MessageList = styled('div')({
    gridRow: '1',
});

const orderbyLimitToLastMessageRef = query(
    messageRef,
    orderByKey(),
    limitToLast(3),
)

export default function StyledComponents() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        onValue(orderbyLimitToLastMessageRef, (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) return;
            const entries = Object.entries(messages);
            const newMessages = entries.map(entry => {
                const [key, nameAndText] = entry;
                return {key: key, ...nameAndText };
            })
            console.log('useEffect')
            setMessages(newMessages);
        });
    }, [])

    return <MessageList>MessageList</MessageList>;
}