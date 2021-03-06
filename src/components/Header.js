import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar: {
        background: "none",
    },
    appbarWeapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    colorTitle: {
        color: '#5AFF3D',
    },
    container: {   
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '4rem'
    }
}));

const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(()=>{
        setChecked(true);
    }, [])
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWeapper}>
                    <h1 className={classes.appbarTitle}>Digi <span className={classes.colorTitle}>Trans</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse 
                in={checked} 
                {...(checked ? {timeout: 3000 }: {})} 
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome To <br /> Digi 
                        <span className={classes.colorTitle}> Transcation</span>
                    </h1>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </div>
           </Collapse>
        </div>
    )
}

export default Header
