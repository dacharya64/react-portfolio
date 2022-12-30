import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <h6><a href="/">Devi Acharya's Portfolio</a></h6>
      </ul>
      <ul>
        <li role="list" dir="rtl">
          <a href="#" aria-haspopup="listbox" role="button" className="outline"><Link to={`/`}>Projects</Link></a>
          <ul role="listbox">
            <li><a><Link to={`/`}>All</Link></a></li>
            <li><a><Link to={`/research`}>Research</Link></a></li>
            <li><a><Link to={`/games`}>Games</Link></a></li>
            <li><a>Other Media</a></li>
          </ul>
        </li>
        <li><a href="#" role="button" className="outline"><Link to={`/publications`}>Publications</Link></a></li>
      </ul>
    </nav>
  );
};

export default Nav;