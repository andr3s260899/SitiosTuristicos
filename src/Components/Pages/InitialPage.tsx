// Componentes
//import { PageHeaderComponent } from 'app/shared/components/page-header.component';

// Utilidades

import { ModalComponent } from '../modal.component';
import Button from 'antd/es/button';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

//import { ApiService } from 'app/services/Apis.service';
import { useCallback, useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import React from 'react';
import Banner from '../../Layouts/Images/Banner.png';
import User from '../../Layouts/Images/user.png';
import Star from '../../Layouts/Images/iconstar.png';

import { Box, Grid, Paper, Typography } from '@mui/material';
import FeaturedPost from './Seccions/Cards';
import { ApiService } from '../../services/ApiServices';



const InitialPage = () => {
    const navigate = useNavigate();
    const api = new ApiService();
   
    const [renderizar, setrenderizar] = useState<boolean>(false);
 // const api = new ApiService(accountIdentifier);
  


  //Cambiar de tema oscuro y claro



  const getListas = useCallback(
    async () => {
      const valores= await api.ObtenerMunicipios();

    
      
      if(localStorage.getItem('departamentos')===null || localStorage.getItem('departamentos')===undefined)
      {
        const valores2= await api.ObtenerDepartamentos();
        localStorage.setItem('departamentos',JSON.stringify(valores2))
        console.log(valores2);
      }
     
      //const valores= await api.insertardatos();
     console.log(valores);
    
setrenderizar(true);
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



  const featuredPosts = [
    {
      pais: 'colombia',
      lugar: 'Guatape',
      image: '../../../Layouts/Images/ImagenCard.png',
      recomendado: 'US $ 150,0',
      minimo: 'Desde US $ 85,00',
      descripcion:'una larga descripcion' ,
      puntuacion:'3.0',
      opiniones:'200' ,
      coordenadas: {
        lat: 70,
        lng: 80,
      } 
    },
    {
      pais: 'colombia',
      lugar: 'Eje Cafetero',
      image: '../../../Layouts/Images/ImagenCard.png',
      recomendado: 'US $ 100,0',
      minimo: 'Desde US $ 60,00',
      descripcion:'una larga descripcion',
      puntuacion:'4.0',  
      opiniones:'200' ,
      coordenadas: {
        lat: 70,
        lng: 80,
      }   
    },
    {
      pais: 'colombia',
      lugar: 'la costa',
      image: '../../../Layouts/Images/ImagenCard.png',
      recomendado: 'US $ 100,0',
      minimo: 'Desde US $ 60,00',
      descripcion:'una larga descripcion',
      puntuacion:'4.5' ,  
      opiniones:'200',
      coordenadas: {
        lat: 70,
        lng: 80,
      }   
    },
    {
      pais: 'colombia',
      lugar: 'bogota',
      image: '../../../Layouts/Images/ImagenCard.png',
      recomendado: 'US $ 100,0',
      minimo: 'Desde US $ 60,00',
      descripcion:'una larga descripcion' ,
      puntuacion:'5.0',  
      opiniones:'200' ,
      coordenadas: {
        lat: 70,
        lng: 80,
      } 
    },
  ];

  const prueba = (): void => {
    window.close();

    // window.location.replace(process.env.REACT_APP_REDIRECT_TO + "")
    window.close();


  };
  return ( 
    <>
    {renderizar && (
    <>
  

   <section>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Banner} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item ">
                    <img src={User} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item ">
                    <img src={Star} className="d-block w-100" alt="..." />
                </div>
            </div>
           
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <i className="fa-solid fa-arrow-left-long banner_icon"></i>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <i className="fa-solid fa-arrow-right-long banner_icon"></i>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
   
    <Grid >
    <div className="row">
                <div className="col-lg-12 col-xs-12">
                    <div className="colum_text">
                        <p>Popultar activities</p>
                    </div>
                </div>
            </div>

    </Grid>
   
    <Grid container  spacing={4}> 
    

            {featuredPosts.map((post) => (
              <FeaturedPost ventana={'pprincipal'} post={post} sub='0' />
            ))}
        
            
          </Grid>
       


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
    
    )}
</>
  );
};

export default InitialPage;
