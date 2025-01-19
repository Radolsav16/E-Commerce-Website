import logout from "../../service/logout";
import { useNavigate } from "react-router-dom";
export default async function Logout(){
    const navigate = useNavigate();
    await logout();
    navigate('/')
   
}