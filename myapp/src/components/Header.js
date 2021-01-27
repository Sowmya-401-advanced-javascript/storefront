import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const classes = useStyles();

    return (
        <div id='header'>
            <AppBar position="static" color='inherit'>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Virtual Store
                    </Typography>
                    <Button color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;