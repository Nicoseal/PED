import React from 'react';
import { Paper, Container, makeStyles, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loginSection: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    passwordTextField: {
        marginTop: theme.spacing(1)
    },
    loginSubmit:{
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(1),
    },
}));

export default function Main() {
    const classes = useStyles();
    return(
        <Container maxWidth="sm">
            <Paper className={classes.loginSection}>
                <Typography component="h1" variant="h3">Iniciar Sesión</Typography>
                <form noValidate>
                    <TextField
                        fullWidth
                        name="username"
                        label="Nombre de Usuario"
                        required
                        autoFocus
                    />
                    <TextField
                        className={classes.passwordTextField} fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        required
                    />
                    <Button
                        className={classes.loginSubmit} variant="contained" color="primary" fullWidth
                        type="submit"
                    >
                        Iniciar Sesion
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}