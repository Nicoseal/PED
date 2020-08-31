import React from 'react';
import { Container, makeStyles, Grid, Button, Paper, Typography, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    grid: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    midText: {
        paddingBottom: theme.spacing(2),
    },
    text: {
        paddingBottom: theme.spacing(1),
    },
}));

export default function Main() {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h3">Trabajos</Typography>
                <Typography className={classes.midText} variant="body1">Aqui podras ver todos los trabajos practicos que tengas y de que materia corresponde cada uno de ellos</Typography>
            </Paper>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography className={classes.text} component="h2" variant="h6">TP N°2 I.M.R.S.C. 7°C</Typography>
                        <Typography className={classes.text} variant="body2">Materia: I.M.R.S.C.</Typography>
                        <Typography className={classes.text} variant="body2">Fecha Limite: 30/8/2020</Typography>
                        <Button className={classes.text} variant="contained" color="primary" fullWidth type="submit">Hacer Trabajo</Button>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Typography className={classes.text} component="h2" variant="h6">TP N°4 P.D.I.S.C. 7°C</Typography>
                        <Typography className={classes.text} variant="body2">Materia: P.D.I.S.C.</Typography>
                        <Typography className={classes.text} variant="body2">Fecha Limite: 31/8/2020</Typography>
                        <Button className={classes.text} variant="contained" color="primary" fullWidth type="submit">Hacer Trabajo</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}