
import * as Type from './actionConstants';
import api from '../api/api';


export function dispatchAction(type, payload){
  return function(dispatch){
    dispatch({ type: type , payload: payload});
  };
}




export function fetchQuestions(){

  return function (dispatch) {

    return api.fetchQuestions().then(response =>{

      let parsedResult = JSON.parse(response.text);
      let questionArray = setDataForQuestions(parsedResult.results);
      console.log(questionArray);

      dispatch(dispatchAction(Type.FETCH_QUESTIONS, questionArray));

    });
  };

}



function setDataForQuestions(questionsArr){

  let newArr = [];

  try{


  questionsArr.forEach((quest, i) => {

    quest["answers"] = [...quest.incorrect_answers];
    quest.answers.push(quest.correct_answer);
    shuffleArray(quest.answers);
    quest["userAnswer"] = "";
    quest["showValidation"] = false;
    quest["id"] = i+1;
    newArr.push(quest);

  });


  }catch(e){
    console.log(e);
  }

  return newArr;

}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
