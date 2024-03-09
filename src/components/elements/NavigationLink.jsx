import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function NavigationLink({ text, link }) {
  return <NavLink to={link}>{text}</NavLink>;
}

NavigationLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
