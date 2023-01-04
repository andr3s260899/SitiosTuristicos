import { lazy, Suspense } from 'react';

import { Routes ,Route, Router } from 'react-router-dom';



// Antd
import Spin from 'antd/es/spin';

// Rutas
import { Layout } from 'antd';
import React from 'react';

// Pages
const HomePage = lazy(() => import('../Components/Pages/InitialPage'));


export const ModuleRoutes = () => {


  return (
    <Suspense fallback={<Spin className='fadeIn app-loading' tip='Cargando Componentes...' />}>      
      <Layout>
        <Routes>
          <Route  path="/" element={<HomePage/>}/>         
        
        </Routes>
      </Layout>
       
    </Suspense>
  );
};
