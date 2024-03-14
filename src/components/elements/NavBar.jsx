import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink';
import { Link } from 'react-router-dom';

export default function NavBar({ cart }) {
  return (
    <div className="flex justify-between mb-4 border-b-2 pb-2">
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
            {cart && <p>{cart.length} items</p>}
          </li>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  cart: PropTypes.array,
};
