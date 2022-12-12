import './Header.scss';
import LiquorIcon from '@mui/icons-material/Liquor';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="logoContainer">
          <LiquorIcon />
          <div>zU_StOrY</div>
        </div>
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;
