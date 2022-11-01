import PropTypes from 'prop-types';

import css from './Contacts.module.css';

const Contacts = ({ list, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {list.length === 0 ? (
        <li className={css.list__item}>
          <div className={css.list__box}>
            no <button className={css.list__btn}>Delete</button>
          </div>
        </li>
      ) : (
        list.map(({ id, name, number }) => (
          <li key={id} className={css.list__item}>
            <div className={css.list__box}>
              <p className={css.list__text}>
                {name}: {number}
              </p>
              <button
                className={css.list__btn}
                onClick={() => {
                  onDeleteContact(id);
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

Contacts.propTypes = {
  list: PropTypes.array,
};
export default Contacts;
