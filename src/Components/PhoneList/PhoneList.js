import './PhoneList.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { delNumber } from '../../redux/contact/contact-action';

function PhoneList({ items, deleteNumber }) {
  return (
    <div className="phoneList">
      <ul className="list">
        {items.map(item => {
          return (
            <li key={item.id} className="item">
              {item.name} : {item.number}
              <Button
                className="btn-my"
                onClick={() => deleteNumber(item.id)}
                variant="primary"
              >
                Удалить
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const filteredContact = (items, filter) => {
  let filtered = items.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return filtered;
};

const mapStateToProps = state => ({
  items: filteredContact(state.counter.items, state.counter.filter),
});

const mapDispatchToProps = dispatch => ({
  deleteNumber: id => dispatch(delNumber(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneList);
