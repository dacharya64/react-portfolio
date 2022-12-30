import { Link } from "react-router-dom";

const ProjectNav = () => {
    return (
        <nav className="outline">
            <ul>
                <li><a href="#" role="button" className="outline"><Link to={`/`}>All</Link></a></li>
                <li><a href="#" role="button" className="outline"><Link to={`/research`}>Research</Link></a></li>
                <li><a href="#" role="button" className="outline"><Link to={`/games`}>Games</Link></a></li>
                <li><a href="#" role="button" className="outline">Other Media</a></li>
            </ul>
        </nav>
    );
  };
  
  export default ProjectNav;