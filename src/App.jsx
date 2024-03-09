import NavBar from './components/elements/NavBar';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="flex flex-col flex-grow max-w-6xl p-6">
        <NavBar />

        <Outlet />
      </div>
    </>
  );
}

export default App;
