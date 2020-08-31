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
                <Typography className={classes.midText} variant="body1">Aqui podra ver las diferentes acciones a realizar en las materias en las que este inscripto.</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Hacer Consultas</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Trabajos Practicos</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button className={classes.grid} variant="outlined" fullWidth>Evaluaciones</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}