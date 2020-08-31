import React from 'react';
import { Container, makeStyles, Grid, Button, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        textAlign: 'center',
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
            <Paper className={classes.container}>
                <Typography component="h1" variant="h3">Bienvenido</Typography>
                <Typography className={classes.midText} variant="body1">Aqui podra ver sus diferentes acciones posibles a realizar como profesor.</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Responder Consultas</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Subir Trabajos</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Subir Evaluaciones</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Actualizar datos de materias</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}