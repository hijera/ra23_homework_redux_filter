import {CHANGE_SERVICE_FIELD, START_EDIT_SERVICE, CLEAR_FORM} from '../actions/actionTypes'

const initialState = {
  name: '',
  price: '',
  isEditing: false,
  editId: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case START_EDIT_SERVICE:
      const {obj} = action.payload;
      return {...state,name:obj.name,price:obj.price,editId:obj.id,isEditing:true};
    case CLEAR_FORM:
      return {...state,...initialState};
    default:
      return state;
  }
}
