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
            ))}
           
            <Button   style={{width:60, height:60,alignContent:'center',alignItems:'center'}}
                    onClick={() => {
                      navigate('/login')
                    }}>
                      <img src={User}  className="User " />
          
            </Button>
            </div>
        </Header>
      
      
    </React.Fragment>
  );
}


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