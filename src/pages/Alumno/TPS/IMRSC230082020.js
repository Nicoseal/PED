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
                            defaultValue="Relevamiento de Proyecto"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="number"
                            type="number"
                            label="Trabajo N°"
                            defaultValue="2"
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <FormControl fullWidth>
                            <InputLabel id="classlabel">Materia</InputLabel>
                            <Select defaultValue="01" disabled fullWidth id="class" labelId="classlabel">
                                <MenuItem value="01">I.M.R.S.C. 7°C</MenuItem>
                                <MenuItem value="02">Programacion 5°C</MenuItem>
                                <MenuItem value="03">Lab. Hardware 5°C</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="notes"
                            label="Notas"
                            defaultValue="Suerte Chicos!"
                            fullWidth
                            multiline
                            disabled
                        />
                    </Grid>
                    <Grid item xs={6}>
                         <TextField
                            id="limitDate"
                            label="Fecha Limite"
                            defaultValue="30/08/2020"
                            fullWidth
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="excercices"
                            label="Consignas"
                            defaultValue="Resolver los puntos establecidos en el TP teniendo en cuenta que:
                            *No se acepta una interfaz para más de un caso de uso salvo que sea de ABM.
                            *A la hs de trabajar con diversos programas, se deberá documentar de manera tal que, sí una persona lee el proyecto, esté en condiciones de identificar qué programa permitió qué actividad o trabajo. Absolutamente todos los programas utilizados.
                            *Cada punto del TP se debe subir en un archivo Word diferente comenzando con el nombre de la actividad o punto. (ejemplo Diagrama de entidad relación, Diagrama de actividad, etc. propuesta, etc) 
                            Con respecto al diagrama de  casos de uso del proyecto, dejo una imagen de los resultados de como está cada uno. Revisen y resuelvan en caso de tener una X o - (los guiones están fuera de término o presentan un problema de apertura del archivo). Pueden reenviar una captura para corroborarlo."
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