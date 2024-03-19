import PropTypes from 'prop-types';
import NavBar from './components/elements/NavBar';
import './index.css';
import { Outlet } from 'react-router-dom';

function App({ cart }) {
  return (
    <>
      <div className="flex flex-col flex-grow max-w-7xl p-0">
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
