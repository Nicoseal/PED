import React from 'react';

import { Typography, Button, makeStyles } from '@material-ui/core';

import Imagen404 from './img/404.png';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginBottom: theme.spacing(3),
    },
}));

export default function PaginaNoEncontrada () {
    const classes = useStyles();
    return(
        <div className={classes.container}>
            <Typography className={classes.title} variant="h3" component="h1">¡Buscamos! <br /> pero <br /> sin éxito</Typography>
            <Button className={classes.button} variant="outlined" color="primary" href="/">Volver a la Página Principal</Button>
            <br />
            <img className={classes.img} src={Imagen404} width="300px" height="300px" alt="Representación ilustrada del error 404" />
        </div>
    );
}

/*
    Créditos a https://error404.fun/ por la imagen del error 404!
*/