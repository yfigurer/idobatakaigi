import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import { onValue, orderByKey, query, limitToLast } from "firebase/database";


import { messageRef } from '../firebase';
import MessageItem from './MessageItem';

const MessageList = styled('div')({
    gridRow: '1',
    overflow: 'auto',
    width: '100%',
});

const orderbyLimitToLastMessageRef = query(
    messageRef,
    orderByKey(),
    limitToLast(15),
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
                return { key: key, ...nameAndText };
            })
            setMessages(newMessages);
        });
    }, [])

    const length = messages.length;

    return (
        <MessageList>
            <List>
                {messages.map(({ key, name, text }, index) => {
                    const isLastItem = length === index + 1;
                    return (
                        <MessageItem
                            key={key}
                            name={name}
                            text={text}
                            isLastItem={isLastItem}
                        />
                    );
                })}
            </List>
        </MessageList>
    );
}