import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {filterList} from "../actions/actionCreators";

ServiceFilter.propTypes = {

};

function ServiceFilter() {
    const filterData = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const { target } = evt;
        dispatch(filterList(target.value));
    };

    return (
        <form>
            <input type="text"  className="filter-input" placeholder={"Введите текст для фильтрации списка..."}  name='filter_string' onChange={handleChange} value={filterData.text} />
        </form>
    );
}

export default ServiceFilter;