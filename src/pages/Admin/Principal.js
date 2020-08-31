import React from 'react';
import { Container, makeStyles, Grid, Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        marginTop: theme.spacing(3),
    },
    grid: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    midText: {
        paddingBottom: theme.spacing(2),
    },
}));

export default function Main() {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h3">Bienvenido</Typography>
                <Typography className={classes.midText} variant="body1">Aqui podra ver las diferentes acciones administrativas a realizar.</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Generar Usuarios</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Generar Materias</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}