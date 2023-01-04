

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import  Footer  from './Layouts/Footer';
import  Headers  from './Layouts/Header';
import  InitialPage  from './Components/Pages/InitialPage';
import  Pagina2  from './Components/Pages/Pagina2';

// Antd
import Spin from 'antd/es/spin';

// Rutas
import { Layout } from 'antd';
import React from 'react';

// Pages

const sections=[{ title: 'Destinos', url: '/Destinos' },
{ title: 'Tours', url: '/Tours' },
{ title: 'Al Aire Libre', url: '/airelibre' },
{ title: 'Relajacion', url: '/relajacion' }]



function App() {
  return (
    <BrowserRouter>    
      <Suspense fallback={<Spin className='fadeIn app-loading' tip='Cargando Componentes...' />}>      
      <Layout>
      <Headers sections={sections}/>
     
        <Routes>
          <Route  path="/" element={<InitialPage/>}/> 
          <Route  path="/pagina2" element={<Pagina2/>}/>            
        
        </Routes>
      </Layout>
      <Footer/>
    </Suspense>        
    </BrowserRouter>
  );
}

export default App;
