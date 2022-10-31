import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ title }) => {
  return (
    <button type="button" className={css.btn}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};
export default Button;
