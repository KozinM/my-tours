import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import './Header.css';

const Header = ({ theme, onToggle }) => {
	return (
		<header>
			<LogoIcon id='logo' />
			<button onClick={onToggle}>Theme:{theme}</button>
		</header>
	);
};

export default Header;