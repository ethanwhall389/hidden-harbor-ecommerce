import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function NavigationLink({ text, link }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? 'border-b-2 border-slate-400' : ''
      }
    >
      {text}
    </NavLink>
  );
}

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
