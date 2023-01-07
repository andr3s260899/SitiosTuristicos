// Componentes
//import { PageHeaderComponent } from 'app/shared/components/page-header.component';

// Utilidades

import { ModalComponent } from "../modal.component";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
import Banner from "../../Layouts/Images/Banner.png";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import HotelIcon from "@mui/icons-material/Hotel";
import CarRentalIcon from "@mui/icons-material/CarRental";
import CommentIcon from "@mui/icons-material/Comment";

//import { ApiService } from 'app/services/Apis.service';
import { useCallback, useContext, useEffect, useState } from "react";
import FeaturedPost from './Seccions/Cards';
import Swal from "sweetalert2";
import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Avatar,
  Divider,
} from "@mui/material";
import { Form } from "antd";

const Pagina2 = () => {
  const navigate = useNavigate();
  const [renderizar, setrenderizar] = useState<boolean>(false);
  const [restaurant, setrestaurant] = useState<String>("white");
  const [hotel, sethotel] = useState<String>("white");
  const [rentaauto, setrentaauto] = useState<String>("white");
  const [info, setinfo] = useState<any>();
  const [cardseleccionado, setcardseleccionado] = useState<any[]>([]);
  const [stars, setstars] = useState<any>();
  const [coments, setcoments] = useState<any[]>([]);
  const [starsuser, setstarsuser] = useState<any[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

  const [form] = Form.useForm<any>();

  const [enviar, setenviar] = useState<boolean>(true);

  // const api = new ApiService(accountIdentifier);

  const data =
    "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";




    const featuredPosts = [
      {
        pais: 'colombia',
        lugar: 'Guatape',
        image: '../../../Layouts/Images/ImagenCard.png',
        recomendado: 'US $ 150,0',
        minimo: 'Desde US $ 85,00',
        descripcion:'una larga descripcion' ,
        puntuacion:'3.0',
        opiniones:'200',
        location:'345-234231-'         
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
        location:'345-234231-'         
      },
      {
        pais: 'colombia',
        lugar: 'la costa',
        image: '../../../Layouts/Images/ImagenCard.png',
        recomendado: 'US $ 100,0',
        minimo: 'Desde US $ 60,00',
        descripcion:'una larga descripcion',
        puntuacion:'4.5' ,  
        opiniones:'200'  ,
        location:'345-234231-'             
      },
      {
        pais: 'colombia',
        lugar: 'bogota',
        image: '../../../Layouts/Images/ImagenCard.png',
        recomendado: 'US $ 100,0',
        minimo: 'Desde US $ 60,00',
        descripcion:'una larga descripcion' ,
        puntuacion:'5.0',  
        opiniones:'200',
        location:'345-234231-'         
      },
    ];


  const getListas = useCallback(
    async () => {
      let destino: any = { puntuacion: "4.5" };
      let star: any[] = ["0", "0", "0", "0", "0"];
      destino = JSON.parse(localStorage.getItem("seleccionado") + "");

      for (
        let index = 0;
        index < Number.parseInt(destino.puntuacion);
        index++
      ) {
        star[index] = "1";
      }
      console.log(destino.puntuacion);
      console.log(destino.puntuacion.substring(2, 3));
      if (destino.puntuacion.substring(2, 3) === "5") {
        star[Number.parseInt(destino.puntuacion)] = "0.5";
      }

      setcoments([
        {
          usuario: "usuarioa",
          imagen: "imagen",
          puntuacion: "4.0",
          comentario: "comentario a",
          imagenes: [{ imagen: "a" }, { imagen: "b" }],
        },
        {
          usuario: "usuariob",
          imagen: "imagen",
          puntuacion: "4.5",
          comentario: "comentario b",
          imagenes: [{ imagen: "a" }, { imagen: "b" }, { imagen: "c" }],
        },
        {
          usuario: "usuarioc",
          imagen: "imagen",
          puntuacion: "3.0",
          comentario: "comentario c",
          imagenes: [],
        },
      ]);
      console.log([
        {
          usuario: "usuarioa",
          imagen: "imagen",
          puntuacion: "4.0",
          comentario: "comentario a",
          imagenes: [{ imagen: "a" }, { imagen: "b" }],
        },
        {
          usuario: "usuariob",
          imagen: "imagen",
          puntuacion: "4.5",
          comentario: "comentario b",
          imagenes: [{ imagen: "a" }, { imagen: "b" }, { imagen: "c" }],
        },
        {
          usuario: "usuarioc",
          imagen: "imagen",
          puntuacion: "3.0",
          comentario: "comentario c",
          imagenes: [],
        },
      ]);

     
      setinfo(destino);
      setstars(star);
      setrenderizar(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    getListas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const habilitarboton = (): void => {
    const comentario = form.getFieldValue("comentario");
    if (comentario !== undefined && comentario !== "") {
      setenviar(false);
    } else {
      setenviar(true);
    }
  };

  const Enviarcomentario = (): void => {
    const comentario = form.getFieldValue("comentario");
    console.log(comentario);
  };
  return (
    <>
      {renderizar && (
        <>
          <Paper
            sx={{
              position: "relative",
              backgroundColor: "white",
              color: "#fff",
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${Banner})`,
            }}
          >
            <Grid item md={30}>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 5, md: 10 },
                  pr: { md: 0 },
                }}
              ></Box>
            </Grid>
          </Paper>
          <div className="conteiner-fluid">
            <div className="form-row ml-4">
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                {info.pais}
                <Typography
                  component="h2"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {info.descripcion}
                </Typography>
              </Typography>
            </div>
            <Typography
              component="h2"
              variant="subtitle1"
              color="text.secondary"
            >
              {info.descripcion}
            </Typography>

            <div className="form-row ml-4">
              <Typography variant="subtitle1">
                {info.opiniones + " Opiniones"}

                {stars.map((post: any) => (
                  <>
                    {post === "1" ? (
                      <>
                        <IconButton
                          onClick={() => {
                            console.log("entro");
                          }}
                        >
                          <StarIcon color="primary" width={5} />{" "}
                        </IconButton>
                      </>
                    ) : post === "0.5" ? (
                      <>
                        <IconButton>
                          <StarHalfIcon color="primary" width={5} />{" "}
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <IconButton>
                          <StarBorderIcon color="primary" width={5} />{" "}
                        </IconButton>
                      </>
                    )}
                  </>
                ))}
              </Typography>
            </div>
          </div>
          <div className="form-row ml-5">
            <Button
              className="ml-5 float-right button btn btn-default"
              type="default"
              style={{ background: `${restaurant}`, height: 40 }}
              htmlType="button"
              onClick={() => {
                setrestaurant("lightblue");
                setrentaauto("white");
                sethotel("white");
                setcardseleccionado([featuredPosts[0],featuredPosts[1]] )
              }}
            >
              Restaurantes
              <IconButton>
                <DinnerDiningIcon color="primary" width={5} />{" "}
              </IconButton>
            </Button>
            <Button
              className="ml-5 float-middle button btn btn-default"
              type="default"
              style={{ background: `${hotel}`, height: 40 }}
              htmlType="button"
              onClick={() => {
                setrestaurant("white");
                setrentaauto("white");
                sethotel("lightblue");
                setcardseleccionado(featuredPosts)
              }}
            >
              <span>Hoteles</span>
              <IconButton>
                <HotelIcon color="primary" width={5} />{" "}
              </IconButton>
            </Button>
            <Button
              className="ml-5 float-left button btn btn-default"
              type="default"
              style={{ background: `${rentaauto}`, height: 40 }}
              htmlType="button"
              onClick={() => {
                setrestaurant("white");
                setrentaauto("lightblue");
                sethotel("white");
                setcardseleccionado([featuredPosts[2],featuredPosts[3]] )
              }}
            >
              Renta de Autos
              <IconButton>
                <CarRentalIcon color="primary" width={5} />{" "}
              </IconButton>
            </Button>
          </div>
          <div style={{height:50}}>
          </div>
          <Grid container spacing={2}>
            {cardseleccionado.map((post) => (
              <FeaturedPost ventana={'lugar'} post={post} />
            ))}
          </Grid>
         
          <div
            className="fadeInTop container-fluid "
            style={{ position: "relative" }}
          >
            <div className="card card-body">
              <h4 className="app-subtitle mt-3">
                <Typography component="h3" variant="h6" color="text">
                  Deja un comentario
                </Typography>
              </h4>
              <div className="form-row ml-4">
                <IconButton
                  onClick={() => {
                    setstarsuser([
                      starsuser[1] === true ? true : !starsuser[0],
                      false,
                      false,
                      false,
                      false,
                    ]);
                  }}
                >
                  {starsuser[0] === true ? (
                    <StarIcon color="primary" width={5} />
                  ) : (
                    <StarBorderIcon color="primary" width={5} />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setstarsuser([
                      true,
                      starsuser[2] === true ? true : !starsuser[1],
                      false,
                      false,
                      false,
                    ]);
                  }}
                >
                  {starsuser[1] === true ? (
                    <StarIcon color="primary" width={5} />
                  ) : (
                    <StarBorderIcon color="primary" width={5} />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setstarsuser([
                      true,
                      true,
                      starsuser[3] === true ? true : !starsuser[2],
                      false,
                      false,
                    ]);
                  }}
                >
                  {starsuser[2] === true ? (
                    <StarIcon color="primary" width={5} />
                  ) : (
                    <StarBorderIcon color="primary" width={5} />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setstarsuser([
                      true,
                      true,
                      true,
                      starsuser[4] === true ? true : !starsuser[3],
                      false,
                    ]);
                  }}
                >
                  {starsuser[3] === true ? (
                    <StarIcon color="primary" width={5} />
                  ) : (
                    <StarBorderIcon color="primary" width={5} />
                  )}
                </IconButton>
                <IconButton
                  onClick={() => {
                    setstarsuser([true, true, true, true, !starsuser[4]]);
                  }}
                >
                  {starsuser[4] === true ? (
                    <StarIcon color="primary" width={5} />
                  ) : (
                    <StarBorderIcon color="primary" width={5} />
                  )}
                </IconButton>
              </div>

           



              <div className="row mt-2 ">
                <div
                  className="col-lg-12 col-sm-12 col-md-12"
                  style={{ marginLeft: "-10px" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      p: { xs: 2, md: 4 },
                      pr: { md: 100 },
                    }}
                  >
                    <Form form={form} layout="horizontal">
                      <Form.Item
                        label=""
                        name="comentario"
                        rules={[{ required: true }]}
                      >
                        <TextField
                          fullWidth
                          id="filled-multiline-static"
                          multiline
                          rows={5}
                          onChange={habilitarboton}
                        />
                      </Form.Item>
                      <Form.Item
                        label=""
                        name="Enviar"
                        rules={[{ required: true }]}
                      >
                        <Button
                          className="ml-15 float-left button btn btn-default"
                          type="primary"
                          htmlType="button"
                          disabled={enviar}
                          onClick={() => {
                            Enviarcomentario();
                          }}
                        >
                          Enviar
                        </Button>
                      </Form.Item>
                    </Form>
                  </Box>
                </div>
              </div>
              <Box
                sx={{
                  position: "relative",
                  p: { xs: 2, md: 4 },
                  pr: { md: 100 },
                }}
              >
                <Paper style={{ padding: "40px 20px" }}>
                  {coments.map((comentario: any) => (
                    <>
                      <Grid container wrap="nowrap" spacing={4}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src={comentario.imagen} />
                          <Typography component="h3" variant="h6" color="blue">
                            {comentario.puntuacion}
                            <IconButton>
                              <StarIcon color="primary" width={5} />{" "}
                            </IconButton>
                          </Typography>
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <h4 style={{ margin: 0, textAlign: "left" }}>
                            {comentario.usuario}
                          </h4>
                          <p style={{ textAlign: "left" }}>
                            {comentario.comentario}
                          </p>
                        </Grid>
                        <Grid justifyContent="right" item xs zeroMinWidth>
                        {comentario.imagenes.map((imagen: any) => (
                          <>
                            <img
                              src={`data:image/png;base64,${data}`}
                              alt="logo"
                              className="img-fluid float-end ml-5"
                              style={{ width: 100 }}
                            />
                          
                            </>
                        ))}
                        </Grid>
                      </Grid>
                      <Divider
                        variant="fullWidth"
                        style={{ margin: "30px 0" }}
                      />
                    </>
                  ))}
                </Paper>
              </Box>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pagina2;
