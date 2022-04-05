import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Avatar } from '@mui/material';

import { gravatarPath} from '../gravatar'
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'

const MessageInputField = styled('div')({
    gridRow: '2',
    margin: '26px',
});

export default function StyledComponents({name}) {
    const inputEl = useRef(null);
    const [text, setText] = useState('');
    const avatarPath = gravatarPath(name);

    return (
        <MessageInputField>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid item xs={10}>
                    <MessageField inputEl={inputEl} name={name} setText={setText} text={text} />
                </Grid>
                <Grid item xs={1}>
                    <MessageSubmitButton inputEl={inputEl} name={name} setText={setText} text={text}/>
                </Grid>
            </Grid>
        </MessageInputField>
    );
}