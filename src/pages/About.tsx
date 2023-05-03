import { Link , useNavigate } from "react-router-dom"

export const About = () => {

    const navigate = useNavigate();
    const back = () => {
        navigate(-1);
     }

 return (
    <div>
        Pagina sobre

        <ul>
            <li><Link to="/sobre/paulo">Paulo</Link></li>
            <li><Link to="/sobre/pedro">Pedro</Link></li>
        </ul>

        <button onClick={back} className="">Voltar</button>
    </div>
 )   
}