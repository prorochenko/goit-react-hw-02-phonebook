import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className={css.box}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  options: PropTypes.array,
};

export default Section;
