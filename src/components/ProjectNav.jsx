import { Link } from "react-router-dom";

const ProjectNav = () => {
    return (
        <nav className="outline">
            <ul>
                <li><a href="#" role="button" className="outline"><Link to={`/`}>Featured Projects</Link></a></li>
                <li><a href="#" role="button" className="outline"><Link to={`/research`}>Research Projects</Link></a></li>
                <li><a href="#" role="button" className="outline"><Link to={`/games`}>Games</Link></a></li>
                <li><a href="#" role="button" className="outline"><Link to={`/other`}>Other Projects</Link></a></li>
            </ul>
        </nav>
    );
  };
  
  export default ProjectNav;