import PropTypes from 'prop-types';
import css from './Title.module.css';

const Title = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Title;
