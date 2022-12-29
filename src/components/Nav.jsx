import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
              <h6>Devi Acharya's Portfolio</h6>
            </ul>
            <ul>
              <li><Link to={`/`}>Projects</Link></li>
              <li><Link to={`/publications`}>Publications</Link></li>
            </ul>
        </nav>
    );
  };
  
  export default Nav;