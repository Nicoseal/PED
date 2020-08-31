import React from 'react';
import { Container, FormControl, useTheme, makeStyles, Grid, Button, Paper, Typography, TextField, InputLabel, Select, MenuItem, } from '@material-ui/core';

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

const names = [
  'Horacio Villareal',
  'Mace Windu',
  'Yoda',
  'Camila Souto',
  'Obi-Wan Kenobi',
  'Luke Skywalker',
  'Groot',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    };

    return (
        <Container maxWidth="md">
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h3">Generar Materias</Typography>
                <Typography className={classes.midText} variant="body1">Para generar una nueva materia porfavor complete los siguientes campos:</Typography>
            </Paper>
            <Paper className={classes.paper2}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            name="name"
                            label="Nombre de Materia"
                            required
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel required id="genlabel">Año</InputLabel>
                        <Select required fullWidth id="gender" labelId="genlabel">
                            <MenuItem value="1">Primero</MenuItem>
                            <MenuItem value="2">Segundo</MenuItem>
                            <MenuItem value="3">Tercero</MenuItem>
                            <MenuItem value="4">Cuarto</MenuItem>
                            <MenuItem value="5">Quinto</MenuItem>
                            <MenuItem value="6">Sexto</MenuItem>
                            <MenuItem value="7">Septimo</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel required id="labelprof">Docente/s</InputLabel>
                            <Select
                            labelId="labelprof"
                            id="docentes"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            >
                            {names.map((name) => (
                                <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth id="description" label="Breve Descripcion"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">Generar Materia</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}