import { useSelector } from "react-redux";
import Admin from "../pages/admin";
import Dboard from "./dboard";
function Dashboard() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <>
   <Admin/>
    </>
  );
}

export default Dashboard;
