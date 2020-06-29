import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, updateService, clearForm} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	};

	const handleCancel = evt => {
		evt.preventDefault();
		dispatch(clearForm());
	};

	const handleSubmit = evt => {
			evt.preventDefault();
			if (item.isEditing)
			{
				dispatch(updateService(item.editId,item.name,item.price));
				dispatch(clearForm());
			}
			else
			{
				dispatch(addService(item.name, item.price));
				dispatch(clearForm());
			}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
            {item.isEditing && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
