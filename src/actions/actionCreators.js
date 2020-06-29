import {ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, START_EDIT_SERVICE, UPDATE_SERVICE, CLEAR_FORM, FILTER} from './actionTypes';

export function addService(name, price) {
  return {type: ADD_SERVICE, payload: {name, price}};
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}};
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function updateService(id,name,price)
{
  return {type: UPDATE_SERVICE, payload: {id,name,price}}
}

export function startEditService(obj)
{
  return {type: START_EDIT_SERVICE, payload: {obj}};
}

export function clearForm()
{
  return {type: CLEAR_FORM };
}

export function filterList(filter_string)
{
  return {type: FILTER, payload: { filter_string} };
}