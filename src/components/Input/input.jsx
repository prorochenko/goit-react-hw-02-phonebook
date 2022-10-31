import PropTypes from 'prop-types';
import css from './Input.module.css';

const InputName = () => {
  return (
    <div className={css.input}>
      <input
        className={css.input__box}
        placeholder="Enter your name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

const InputNumber = () => {
  return (
    <div className={css.input}>
      <input
        className={css.input__box}
        placeholder="Enter your number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
  );
};

InputName.propTypes = {
  options: PropTypes.array,
};

InputNumber.propTypes = {
  options: PropTypes.array,
};
export { InputName, InputNumber };
