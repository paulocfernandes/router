import { useParams, useNavigate } from "react-router-dom"

export const AboutItem = () => {

     const params = useParams();
     const navigate = useNavigate();

     const back = () => {
        navigate(-1);
     }

     const homeButton =() => {
        navigate('/')
     }

 return (
    <div>
        Pagina sobre  {params.slug}
        <hr/>
       
        <button onClick={back} className="">Voltar</button>
        <hr />
        
        <button onClick={homeButton}>Home</button>
    </div>
 )   
}