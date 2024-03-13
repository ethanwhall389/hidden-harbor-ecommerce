import NavigationLink from './NavigationLink';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex justify-between mb-4">
      <div>
        <Link to={'/'}>
          <h2 className="text-lg">Hidden Harbor</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li className="">
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
    </div>
  );
}
