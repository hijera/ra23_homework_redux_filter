import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {startEditService, removeService, clearForm} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filterData = useSelector(state => state.serviceFilter);

  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(clearForm());
    dispatch(removeService(id));
  };

  const handleEdit = id => {
    dispatch(startEditService(items.find(item=>item.id===id)));
  };
  const list = (filterData.text.length>0) ? items.filter(item=>item.name.match(filterData.text)) : items;
  return (
    <ul>
      {list.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>✏️</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
