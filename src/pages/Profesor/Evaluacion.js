import React from 'react';
import { Container, FormControl, makeStyles, Grid, Button, Paper, Typography, TextField, InputLabel, Select, MenuItem, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    paper2: {
        padding: theme.spacing(3),
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
}));

export default function Main() {
    const classes = useStyles();
    return(
        <Container maxWidth="md">
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h3">Crear Evaluacion</Typography>
                <Typography className={classes.midText} variant="body1">Para crear una nueva evaluacion porfavor complete los siguientes campos:</Typography>
            </Paper>
            <Paper className={classes.paper2}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="number"
                            type="number"
                            label="Evaluacion N°"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <FormControl fullWidth>
                            <InputLabel required id="classlabel">Materia</InputLabel>
                            <Select fullWidth id="class" labelId="classlabel">
                                <MenuItem value="01">I.M.R.S.C. 7°C</MenuItem>
                                <MenuItem value="02">P.D.I.S.C. 7°C</MenuItem>
                                <MenuItem value="03">Lab. Hardware 5°C</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="notes"
                            label="Notas de Evaluacion"
                            fullWidth
                            multiline
                        />
                    </Grid>
                    <Grid item xs={4}>
                         <TextField
                            id="limitDate"
                            label="Fecha Limite"
                            fullWidth
                            type="date"
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                         <TextField
                            id="limittime"
                            label="Tiempo Limite"
                            fullWidth
                            type="number"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="excercices"
                            label="Consignas"
                            fullWidth
                            multiline
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="externalLinks"
                            label="Links Externos"
                            fullWidth
                            multiline
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">Crear</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}