import NavBar from './components/elements/NavBar';
import './index.css';
import { Outlet } from 'react-router-dom';

function App({ cart }) {
  return (
    <>
      <div className="flex flex-col flex-grow max-w-7xl p-6">
        <NavBar cart={cart} />

        <Outlet />
      </div>
    </>
  );
}

export default App;
