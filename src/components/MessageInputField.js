import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Avatar } from '@mui/material';

import { gravatarPath} from '../gravatar'

const MessageInputField = styled('div')({
    gridRow: '2',
    margin: '26px',
});

export default function StyledComponents({name}) {
    const avatarPath = gravatarPath(name);

    return (
        <MessageInputField>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar src={avatarPath}/>
                </Grid>
                <Grid item xs={10}>
                    入力
                </Grid>
                <Grid item xs={1}>
                    ボタン
                </Grid>
            </Grid>
        </MessageInputField>
    );
}