import NavigationLink from './components/elements/NavigationLink';
import './index.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li className="text-3xl">
              <NavigationLink text={'Home'} link={'/'} />
            </li>
            <li>
              <NavigationLink text={'Shop'} link={'shop'} />
            </li>
            <li>
              <NavigationLink text={'About'} link={'about'} />
            </li>
            <li>
              <NavigationLink text={'Cart'} link={'cart'} />
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  );
}

export default App;
