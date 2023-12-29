import { Link, Outlet } from "react-router-dom"

function Dashbord (){
    return(
        <div>
            <nav>
                <h2>Dashbord</h2>
                <ul>
                    <li>
                        <Link to='perfil'>Perfil</Link>
                    </li>
                    <li>
                        <Link to='config'>configurações</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
        
    )
}

export default Dashbord