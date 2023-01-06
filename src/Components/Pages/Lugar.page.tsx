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

import Swal from "sweetalert2";
import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Form } from "antd";

const Pagina2 = () => {
  const navigate = useNavigate();
  const [renderizar, setrenderizar] = useState<boolean>(false);
  const [restaurant, setrestaurant] = useState<String>("white");
  const [hotel, sethotel] = useState<String>("white");
  const [rentaauto, setrentaauto] = useState<String>("white");
  const [info, setinfo] = useState<any>();
  const [stars, setstars] = useState<any>();
  const [starsuser, setstarsuser] = useState<any[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const [form] = Form.useForm<any>();

  const [enviar, setenviar] = useState<boolean>(true);

  // const api = new ApiService(accountIdentifier);

  //Cambiar de tema oscuro y claro

  const onPersonNatural = () => navigate("/registro/Natural");
  const onPersonJuridica = () => navigate("/registro/Juridico");

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

      setinfo(destino);
      setstars(star);
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
              }}
            >
              Renta de Autos
              <IconButton>
                <CarRentalIcon color="primary" width={5} />{" "}
              </IconButton>
            </Button>
          </div>

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
                <IconButton onClick={() => { setstarsuser([(starsuser[1]===true?true:!starsuser[0]),false,false,false,false]) }}>
                {starsuser[0]===true ? <StarIcon color="primary" width={5} /> :<StarBorderIcon color="primary" width={5} />}
                </IconButton>
                <IconButton onClick={() => { setstarsuser([true,(starsuser[2]===true?true:!starsuser[1]),false,false,false]) }}>
                {starsuser[1]===true ? <StarIcon color="primary" width={5} /> :<StarBorderIcon color="primary" width={5} />}
                </IconButton>
                <IconButton onClick={() => { setstarsuser([true,true,(starsuser[3]===true?true:!starsuser[2]),false,false]) }}>
                {starsuser[2]===true ? <StarIcon color="primary" width={5} /> :<StarBorderIcon color="primary" width={5} />}
                </IconButton>
                <IconButton onClick={() => { setstarsuser([true,true,true,(starsuser[4]===true?true:!starsuser[3]),false]) }}>
                {starsuser[3]===true ? <StarIcon color="primary" width={5} /> :<StarBorderIcon color="primary" width={5} />}
                </IconButton>
                <IconButton onClick={() => { setstarsuser([true,true,true,true,!starsuser[4]]) }}>
                  {starsuser[4]===true ? <StarIcon color="primary" width={5} /> :<StarBorderIcon color="primary" width={5} />}
                 
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

              <span>
                <h4 className="app-subtitle mt-3">
                  <span>Deja un comentario</span>
                </h4>
              </span>

              <p className="mt-2">
                <span>Este es un mensaje de pagina2</span>
              </p>

              <p>
                <span>
                  Este es un mensaje de pagina 2/ &nbsp;
                  <br />
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pagina2;
