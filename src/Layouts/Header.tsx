import React from 'react';

// Antd
import Menu from 'antd/es/menu';
import Layout from 'antd/es/layout';
import { BasicProps } from 'antd/es/layout/layout';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import User from './Images/user.png';


import '../App.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Herramientas
import { confirmMessage } from '../services/settings/message.service';

// Iconos
import { LogoutOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Icon } from '@mui/material';
import { Button } from 'antd';


// Utilidades


// Componentes
const { Header } = Layout;



 function Headers(props: HeaderProps) {
  const { sections } = props;
  const navigate = useNavigate();
  
  return (
    <React.Fragment>

<nav className="navbar navbar-expand-lg fixed-top">
              <div className="container">
                <a className="navbar-brand" href="#"></a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="fa-solid fa-bars menu"></i>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                    <div className="d-flex icon_colum">
                    <a href="/" className="user">
                    <span> Inicio</span>
                    </a>
                  </div>
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" href="/Destinos">
                      Destinos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/tours">
                        Tours
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" onClick={()=>{  }}>
                        Attractions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/airelibre">
                      Al Aire Libre
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/relajacion">
                      Relajacion
                      </a>
                    </li>
                  </ul>
                  <div className="d-flex icon_colum">
                    <a href="/login" className="user">
                      <i className="fa-solid fa-user"></i>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            
       
    </React.Fragment>
  );
}



/*
<Header   
    
className='d-flex justify-content-between app-bg-transparent border-bottom shadow w-100 fixed-top px-0'
style={{ zIndex: 1003,background:'white' }}>

<div className='d-flex'>
<Button   style={{width:60, height:60,alignContent:'center',alignItems:'center'}} onClick={() => {
          navigate('/');
            }}>

             Inicio
  
    </Button>
    {sections.map((section) => (
      <>
      <Link
        color="inherit"
        noWrap
        key={section.title}
        variant="body2"
        href={section.url}
      
        sx={{ p: 3, flexShrink: 1,width:1000 }}
      >
        
        {section.title}
      </Link>
      </>
      
    ))}
   
    <Button   style={{width:60, height:60,alignContent:'center',alignItems:'center'}}
            onClick={() => {
              navigate('/login')
            }}>
              <img src={User}  className="User " />
  
    </Button>
    </div>
</Header>
*/





/*
<Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
        
        </Typography>   
*/
export default Headers
interface HeaderProps {
    sections: ReadonlyArray<{
      title: string;
      url: string;
    }>;
  
  }