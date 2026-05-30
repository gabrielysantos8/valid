import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import "./style.css";

function Header() {
    return(
        <header>
            <div>
                <h1>Logo</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Sobre</Link></li>
                    <li><Link to="/">Analisar com IA</Link></li>
                    <li><Link to="/">Artigos</Link></li>
                    <li><Link to="/">Assinaturas</Link></li>
                </ul>
            </nav>

            <div className="icons">
                <IoSearch />
                <FaRegUser />
            </div>
        </header>
    );
}

export default Header;