import {FETCH_QUESTIONS} from "../action/actionConstants";


export default function search( state = "", action) {

  switch (action.type) {

    case FETCH_QUESTIONS: {

      return action.payload;
    }

    default:
      return state;
  }
}
