import { stringify } from "querystring";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc,collection,getDocs,addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJP7fH7_G59zgJg3kAHqzRSHW194L1z3o",
  authDomain: "sitiosturisticos-bbba0.firebaseapp.com",
  projectId: "sitiosturisticos-bbba0",
  storageBucket: "sitiosturisticos-bbba0.appspot.com",
  messagingSenderId: "840462035205",
  appId: "1:840462035205:web:10512445dad5236c5a2f6c",
  measurementId: "G-F6YXGSVYLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const querydb=getFirestore();


export class ApiService {

// read all entities

Obtenerdatos:any = async () =>
{
const listas= collection(querydb,'Todos');
getDocs(listas).then(res => { for (let index = 0; index < res.docs.length; index++) {
    
    console.log(res.docs[index].data())
}
console.log(res)}
);
    
return 
}

insertardatos:any = async () =>
{
const listas= collection(querydb,'Todos');
const dep={Nombre:'prueba',IdDepCol:1,IdDepartamento:''}
addDoc(listas,dep)

    
return 
}
 
//c_digo_dane_del_municipio: '15.832'
//c_digo_dane_del_departamento: '15'
// departamento: 'Boyaca'

ObtenerMunicipios:any = async () =>
   this.get(`https://www.datos.gov.co/resource/xdk5-pm3f.json?c_digo_dane_del_municipio= '15.832'`);


   ObtenerDepartamentos:any = async () =>
   this.get(`https://www.datos.gov.co/resource/vcjz-niiq.json`);

   


 get = async(  url:any )  => {
let respuesta='';
    await fetch(url, {
        "method": "GET",
        "headers": {
        }
      })
      .then(response => response.json())
      .then(response => {
         
          respuesta=response;
        
      
      })
      .catch(err => { console.log(err); 
      });
     
    
return respuesta;
};
post = async(  url:any,payload:any )  => {
    let respuesta='';
        await fetch(url, {
            "method": "GET",
            "headers": {
            },
            "body": JSON.stringify({
              payload
            })
          })
          .then(response => response.json())
          .then(response => {
             
              respuesta=response;
            
          
          })
          .catch(err => { console.log(err); 
          });
         
        
    return respuesta;
    };
}

