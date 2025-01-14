import { useForm, Controller } from 'react-hook-form';
import React, { useEffect, useState, useContext, useCallback } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Typography, Input } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import axios from 'axios';
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context';
import { styled } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: grey[400],
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'white',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: blue[300],
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: blue[300],
          },
        },
        notchedOutline: {
          borderColor: 'white',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: 'black',
        },
      },
    },
  },
});

const CategoriaButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none', // Hide the button on smaller screens (breakpoint: 960px)
  },
}));

const DropzoneContainer = styled('div')`
  border: 2px dashed #212121;
  border-radius: 4px;
  height: 15rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #53585D;
  color: #212121;
  cursor: pointer;

  p {
    margin-top: 1rem;
  }
`;

function FormularioVideos() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { forceUpdate } = useContext(MyContext);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const volverMain = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/categorias');
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching data de la  API:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the form data to the server
      const response = await axios.post('http://localhost:3001/videos', data);
      console.log(response.data);
      console.log(response.status);
      enqueueSnackbar('Video agregado correctamente', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });

      volverMain();
      forceUpdate();
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Hubo un problema el video no pudo ser insertado', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
      });
    }
  };

  const iraCategoria = () => {
    navigate('/formulariocategoria');
  };

  const resetForm = () => {
    reset(); // Reset the form values to their initial state
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "auto", backgroundColor: '#191919', paddingTop: '1rem', paddingBottom: '2rem', minWidth: '320px' }}>
        <Container maxWidth="xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid rowSpacing={5} container sx={{}}>
              <Grid item xs={12}>
                <Typography align='center' variant='h3' color="#ffffff">Nuevo video</Typography>
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="titulo"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Titulo es requerido' }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        sx={{ backgroundColor: '#53585D', color: 'white' }}
                        variant="filled"
                        error={!!errors.titulo}
                        fullWidth
                        label="Título"
                        id="titulo"
                        InputLabelProps={{ sx: { color: 'white' } }} // Cambiar color de la etiqueta
                        InputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                      />
                      {errors.titulo && (
                        <Typography variant="body2" color="error">
                          {errors.titulo.message}
                        </Typography>
                      )}
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="linkVideo"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Link de video es requerido' }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        sx={{ backgroundColor: '#53585D', color: 'white' }}
                        variant="filled"
                        error={!!errors.linkVideo}
                        fullWidth
                        label="Link del video"
                        id="linkVideo"
                        InputLabelProps={{ sx: { color: 'white' } }} // Cambiar color de la etiqueta
                        InputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                      />
                      {errors.linkVideo && (
                        <Typography variant="body2" color="error">
                          {errors.linkVideo.message}
                        </Typography>
                      )}
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="linkImagenVideo"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Link a imagen de video es requerido' }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        sx={{ backgroundColor: '#53585D', color: 'white' }}
                        variant="filled"
                        error={!!errors.linkImagenVideo}
                        fullWidth
                        label="Link imagen de video"
                        id="linkImagenVideo"
                        InputLabelProps={{ sx: { color: 'white' } }} // Cambiar color de la etiqueta
                        InputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                      />
                      {errors.linkImagenVideo && (
                        <Typography variant="body2" color="error">
                          {errors.linkImagenVideo.message}
                        </Typography>
                      )}
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-helper-label" sx={{ color: 'white' }}>Escoja una categoría</InputLabel>
                  <Controller
                    name="Categoria"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Debe seleccionar una Categoria' }}
                    render={({ field }) => (
                      <div>
                        <Select
                          {...field}
                          variant="outlined"
                          error={!!errors.Categoria}
                          fullWidth
                          sx={{ backgroundColor: '#53585D', color: 'white' }}
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="Escojer una categoria"
                          inputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                        >
                          {options.map((option) => (
                            <MenuItem key={option.id} value={option.categoriaNombre}>
                              {option.categoriaNombre}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.Categoria && (
                          <Typography variant="body2" color="error">
                            {errors.Categoria.message}
                          </Typography>
                        )}
                      </div>
                    )}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="descripcion"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'La descripcion es requerida' }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        error={!!errors.descripcion}
                        sx={{ backgroundColor: '#53585D', color: 'white' }}
                        variant="filled"
                        fullWidth
                        label="Descripción"
                        id="descripcion"
                        multiline rows={5}
                        InputLabelProps={{ sx: { color: 'white' } }} // Cambiar color de la etiqueta
                        InputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                      />
                      {errors.descripcion && (
                        <Typography variant="body2" color="error">
                          {errors.descripcion.message}
                        </Typography>
                      )}
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="codigoSeguridad"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Codigo de seguridad es requerido' }}
                  render={({ field }) => (
                    <div>
                      <TextField
                        {...field}
                        sx={{ backgroundColor: '#53585D', color: 'white' }}
                        variant="filled"
                        error={!!errors.codigoSeguridad}
                        fullWidth
                        label="codigo de seguridad"
                        id="codigoSeguridad"
                        InputLabelProps={{ sx: { color: 'white' } }} // Cambiar color de la etiqueta
                        InputProps={{ sx: { color: 'white' } }} // Cambiar color del texto
                      />
                      {errors.codigoSeguridad && (
                        <Typography variant="body2" color="error">
                          {errors.codigoSeguridad.message}
                        </Typography>
                      )}
                    </div>
                  )}
                />
              </Grid>

              <Grid item xs={12} direction="row" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ButtonGroup variant="contained" size="large" aria-label="small button group"
                  sx={{
                    '& > *': {
                      marginRight: '16px', // Adjust the default margin between buttons
                    },
                    '& > *:nth-child(2)': {
                      marginLeft: '32px', // Adjust the left margin for the second button
                    },
                    '@media (max-width:960px)': {
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      '& > *': {
                        marginRight: '0px', // Adjust the default margin between buttons
                      },
                      '& > *:nth-child(2)': {
                        marginLeft: '0px', // Adjust the left margin for the second button
                      },
                    }
                  }}
                >
                  <Button sx={{ width: 150 }} color="primary" type="submit">Guardar</Button>
                  <Button onClick={resetForm} sx={{ width: 150 }} color="secondary">Limpiar</Button>
                </ButtonGroup>
                <CategoriaButton onClick={iraCategoria} sx={{ width: 200 }} variant="contained" size="large">Nueva Categoria</CategoriaButton>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default FormularioVideos;