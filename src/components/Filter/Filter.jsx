import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      <input
        className={css.input}
        value={filter}
        onChange={onChange}
        placeholder="Enter name"
        type="text"
      />
    </label>
  );
};

export default Filter;
