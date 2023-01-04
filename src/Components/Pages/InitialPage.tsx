// Componentes
//import { PageHeaderComponent } from 'app/shared/components/page-header.component';

// Utilidades

import { ModalComponent } from '../modal.component';
import Button from 'antd/es/button';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';

//import { ApiService } from 'app/services/Apis.service';
import { useCallback, useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import React from 'react';
import Banner from '../../Layouts/Images/Banner.png';
import { Box, Grid, Paper, Typography } from '@mui/material';



const InitialPage = () => {
    const navigate = useNavigate();
 
 
 // const api = new ApiService(accountIdentifier);
  


  //Cambiar de tema oscuro y claro

  const onPersonNatural = () => navigate('/registro/Natural');
  const onPersonJuridica = () => navigate('/registro/Juridico');

  const getListas = useCallback(
    async () => {
    

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const closeTab = () => {
    window.opener = null;
    window.open(process.env.REACT_APP_REDIRECT_TO, "_self");
    window.close();
  };
  //const getMenu = UpdateMenu();

  useEffect(() => {

    getListas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Funcion que permite aumentar o disminuir el tamaño de la
  const onCancel = (): void => { };

  const prueba = (): void => {
    window.close();

    // window.location.replace(process.env.REACT_APP_REDIRECT_TO + "")
    window.close();


  };
  return ( 
    <>
   
   <Paper    sx={{
        position: 'relative',
        backgroundColor: 'white',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',       
        backgroundImage: `url(${Banner})`,

      }}> 

    
   <Grid item md={30}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 20, md: 25 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h1" color="inherit" gutterBottom>
              {'Titulo'}
            </Typography>
           
           
            
          </Box>
        </Grid>
        
   </Paper>
    {/* Increase the priority of the hero background image */}
   
    
 
 
       


      <div className='fadeInTop container-fluid ' style={{ position: 'relative' }}>    

        <div className='card card-body' >
          <span ><h4 className='app-subtitle mt-3'><span>Pagina de inicio</span></h4></span>


          <p className="mt-2">
            <span >
             Este es un mensaje de prueba
            </span>
          </p>

          <p>
            <span >
            Este es un mensaje de prueba2 &nbsp;<br />            
            </span>
          </p>
        </div>

      </div>

    </>
    
   

  );
};

export default InitialPage;
