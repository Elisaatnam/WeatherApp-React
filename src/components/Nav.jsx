import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
	return (
		<header>
			<nav>
				<Link to='/'>Bremen</Link>
				<Link to='/duesseldorf'>Düsseldorf</Link>
				<Link to='/berlin'>Berlin</Link>
				<Link to='/leipzig'>Leipzig</Link>
			</nav>
		</header>
	);
};

export default Nav;
