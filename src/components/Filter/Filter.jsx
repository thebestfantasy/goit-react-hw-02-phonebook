import css from './filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.title}>
      Find contacts by name
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
