import { useCallback, useEffect, useState } from "react";
import  Localizacion  from './Seccions/Localization';



export const Publicacion=() =>{

    const [renderizar, setrenderizar] = useState<boolean>(false);
    const getListas = useCallback(
        async () => {
    
            localStorage.setItem('origen','post')    
            setrenderizar(true)     ;
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      useEffect(() => {
    
        getListas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    

return(
<>
{renderizar && (<>
    <Localizacion />
</>)}

</>
);



};

