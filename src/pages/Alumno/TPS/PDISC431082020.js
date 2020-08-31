import React from 'react';
import { Container, FormControl, makeStyles, Grid, Button, Paper, TextField, InputLabel, Select, MenuItem, } from '@material-ui/core';

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
            <Paper className={classes.paper2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Nombre del Trabajo"
                            defaultValue="Diagrama de actividad y descripciones de casos de uso (tablas)"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="number"
                            type="number"
                            label="Trabajo N°"
                            defaultValue="4"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <FormControl fullWidth>
                            <InputLabel id="classlabel">Materia</InputLabel>
                            <Select defaultValue="02" disabled fullWidth id="class" labelId="classlabel">
                                <MenuItem value="01">I.M.R.S.C. 7°C</MenuItem>
                                <MenuItem value="02">P.D.I.S.C. 7°C</MenuItem>
                                <MenuItem value="03">Lab. Hardware 5°C</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="notes"
                            label="Notas"
                            defaultValue="Suertee!"
                            fullWidth
                            multiline
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <TextField
                            id="limitDate"
                            label="Fecha Limite"
                            defaultValue="31/08/2020"
                            fullWidth
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="excercices"
                            label="Consignas"
                            defaultValue="Que tal:
                            Dejo actividad para las próximas semanas, previas al cierre del trimestre. Teniendo en cuenta el trabajo práctico de instalación, pido  diseñar diagrama de actividad y descripción funcional  del 50% de diagrama de caso de uso. Para los diagramas no mayores a 6 casos de uso, precisan realizar el total. Se subirán 2 archivo para diferencia cada grupo de diagramas y descripciones.
                            El diagrama de casos de usos debe ser el diagrama del proyecto individual."
                            fullWidth
                            multiline
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="externalLinks"
                            label="Links Externos"
                            defaultValue="None"
                            fullWidth
                            disabled
                            multiline
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper2}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="answers"
                            label="Respuestas"
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
                        <Button variant="contained" color="primary" fullWidth type="submit">Enviar</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}