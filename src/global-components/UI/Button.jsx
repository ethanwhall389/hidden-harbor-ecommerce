import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default function Button({ text, link, style = 'styleMain' }) {
  return (
    <Link to={link}>
      <button
        className={`border-2 border-slate-400 drop-shadow-md py-2 px-4 rounded-full transition-all duration-75 ${
          style === 'styleMain'
            ? 'text-slate-950 hover:bg-slate-200'
            : style === 'styleSecondary'
            ? 'text-slate-50 hover:bg-slate-600'
            : ''
        }`}
      >
        {text}
      </button>
    </Link>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  style: PropTypes.string,
};
