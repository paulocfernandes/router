import { Link,  } from "react-router-dom";

export const Home = () => {
    

    return (
    <div>
        Pagina Home
        <hr />
        <Link to={"/sobre"}>Pagina Sobre</Link>


    </div>
 );  
}