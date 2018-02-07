import {USER_DETAIL} from "../action/actionConstants";

export default function search( state = {name : "", email : "", mobile : ""}, action) {

  switch (action.type) {

    case USER_DETAIL: {

      return action.payload;
    }

    default:
      return state;
  }
}
