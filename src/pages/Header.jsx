import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className=" flex justify-around items-center h-auto p-5 bg-gradient-to-r from-header-init to-header-end  col-span-3">
      <div className="items-center h-auto">
        <img src='' alt="logo" />
      </div>
      <div className="items-center ">
        <h1>Inventary</h1>
      </div>
      <div><FontAwesomeIcon icon={faBars} /></div>
    </header>  
  );
};

export default Header;

