import { Typography } from '@material-ui/core';
import React from 'react';
import { Container } from '@material-ui/core';

const Header = () => {
    return (
        <header>
            <Container maxWidth="md">
                <Typography variant="h1" align="left" >
                    Virtual Store
                </Typography>
            </Container>
        </header>
    )
}

export default Header;