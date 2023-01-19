import React, { useCallback, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Wrapper } from "@googlemaps/react-wrapper";
import Draggable from "react-draggable";

const containerStyle = {
  width: "1000px",
  height: "600px",
};



function Localizacion() {
  
  const [post, setpost] = React.useState<any>();
  const [map, setMap] = React.useState<any>(null);
  const [marker, setmarker] = React.useState<any>(null);
  const [renderizar, setrenderizar] = React.useState<boolean>(false);



  const getListas = useCallback(
    async () => {

      let destino: any = { coordenadas : {
        lat: 20,
        lng: 30,
      },zoom:3 };  
      let origen = localStorage.getItem("origen");
      console.log('origen',origen);
      if(origen==='lugar')
      {        
        destino = JSON.parse(localStorage.getItem("seleccionado") + "");
        
      }
      console.log(destino);
      setpost(destino);
      setrenderizar(true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useEffect(() => {

    getListas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDGvzshjOLGFi1ZGcLWW7Hi_MPJx3UxqPL",
  });


  var marker1: any;
  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //const bounds = new window.google.maps.LatLngBounds(center);
    //  map.fitBounds(bounds);
    console.log(map);

    let origen = localStorage.getItem("origen");
    if(origen==='lugar')
    {let  destino = JSON.parse(localStorage.getItem("seleccionado") + "");
      marker1 = new google.maps.Marker();

      marker1.setAnimation(google.maps.Animation.DROP);
  
      marker1.setPosition(new google.maps.LatLng(destino.coordenadas));
      marker1.setMap(map);
      marker1.addListener("click", function () {
        if (marker1.getAnimation() !== null) {
          marker1.setAnimation(null);
        } else {
          marker1.setAnimation(google.maps.Animation.BOUNCE);
        }
        
      });
    }
    

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
 
  const evento = (event: any) => {
    let origen = localStorage.getItem("origen");
  
    if(origen!='lugar')
    {
      if(marker!=null)
      {
        marker.setMap(null)
      }

      const posicion = event.latLng as google.maps.LatLng;    
      map.panTo(event.latLng as google.maps.LatLng);  
    
      console.log(posicion.toJSON())
     

      marker1 = new google.maps.Marker();
  
      marker1.setAnimation(google.maps.Animation.DROP);
  
      marker1.setPosition(posicion);
      marker1.setMap(map);
     
     
      marker1.addListener("click", function () {
        if (marker1.getAnimation() !== null) {
          marker1.setAnimation(null);
        } else {
          marker1.setAnimation(google.maps.Animation.BOUNCE);
        }
        
      });
  
      setmarker(marker1);
    }
    //marker1.setPosition(posicion);
    
    //marker1.setMap(map)
  };

  return (
    <>
      {isLoaded ? (
        <>
          {renderizar ? (
            <>
              <GoogleMap
                id="mapa"
                mapContainerStyle={containerStyle}
                center={post.coordenadas}
                zoom={post.zoom}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={evento}
              >
                {/* Child components, such as markers, info windows, etc. */}
                <></>
              </GoogleMap>
            </>
          ):<></>}
        </>
      ):<></>}
    </>
  );
}

export default Localizacion;
