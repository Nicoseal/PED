import React from 'react';
import { Container, FormControl, makeStyles, Grid, Button, Paper, Typography, TextField, InputLabel, Select, MenuItem, Radio, FormControlLabel, RadioGroup, FormLabel} from '@material-ui/core';

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
                <Typography component="h1" variant="h3">Generar Usuarios</Typography>
                <Typography className={classes.midText} variant="body1">Para generar un nuevo usuario porfavor complete los siguientes campos:</Typography>
            </Paper>
            <Paper className={classes.paper2}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="id"
                            type="number"
                            label="DNI"
                            required
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="username"
                            label="Nombre"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="subname"
                            label="Apellido"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="birthday"
                            label="Fecha de Nacimiento"
                            type="date"
                            fullWidth
                            required
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel required id="genlabel">Genero</InputLabel>
                            <Select fullWidth id="gender" labelId="genlabel">
                                <MenuItem value="M">Masculino</MenuItem>
                                <MenuItem value="F">Femenino</MenuItem>
                                <MenuItem value="X">Sin Definir</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Tipo de Usuario *</FormLabel>
                        <RadioGroup row defaultValue="alumno">
                            <FormControlLabel
                            value="alumno"
                            control={<Radio color="primary" />}
                            label="Alumno"
                            />
                            <FormControlLabel
                            value="profesor"
                            control={<Radio color="primary" />}
                            label="Profesor"
                            />
                            <FormControlLabel
                            value="admin"
                            control={<Radio color="primary" />}
                            label="Administrador"
                            />
                        </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">Generar Usuario</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}