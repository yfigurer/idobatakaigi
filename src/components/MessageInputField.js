import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Avatar } from '@mui/material'

const MessageInputField = styled('div')({
    gridRow: '2',
    margin: '26px',
});

export default function StyledComponents() {
    return (
        <MessageInputField>
            <Grid container>
                <Grid item xs={1}>
                    <Avatar />
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