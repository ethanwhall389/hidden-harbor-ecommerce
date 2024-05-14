import PropTypes from 'prop-types';
import NavBar from './global-components/nav-bar/NavBar';
import './index.css';
import { Outlet } from 'react-router-dom';

function App({ cart }) {
  return (
    <>
      <div className="flex flex-col flex-grow max-w-[2000px] mx-auto p-0">
        <NavBar cart={cart} />

        <Outlet />
      </div>
    </>
  );
}

App.propTypes = {
  cart: PropTypes.array,
};

export default App;
