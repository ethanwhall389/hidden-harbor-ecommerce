import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function Button({ text, link }) {
  return (
    <Link to={link}>
      <button className="border-2 border-slate-400 py-2 px-4 rounded-full hover:bg-slate-200">
        {text}
      </button>
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
};
