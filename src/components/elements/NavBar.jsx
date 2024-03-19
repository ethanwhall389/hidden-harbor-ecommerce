import PropTypes from 'prop-types';
import NavigationLink from './NavigationLink';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ShoppingBagOutlined } from '@mui/icons-material';
export default function NavBar({ cart }) {
  return (
    <div className="flex justify-center md:justify-between p-6 mb-0 border-b-2 md:pb-4">
      <div className="hidden md:block">
        <Link to={'/'}>
          <h2 className="text-xl">Hidden Harbor</h2>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-10 md:gap-4 items-center">
          <li>
            <NavigationLink text={'Home'} link={'/'} />
          </li>
          <li>
            <NavigationLink text={'Shop'} link={'shop'} />
          </li>
          <li className="relative">
            {cart && (
              <div className="bg-blue-400 w-3 h-3 rounded-full absolute top-1"></div>
            )}
            <NavLink to={'cart'}>
              <ShoppingBagOutlined fontSize="large"></ShoppingBagOutlined>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  cart: PropTypes.array,
};
