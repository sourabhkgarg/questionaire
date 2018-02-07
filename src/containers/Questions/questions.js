import React from 'react';
import {connect} from 'react-redux';
import './question.scss';
import {FETCH_QUESTIONS } from '../../action/actionConstants';
import EachQuestion from './eachQuestions';
import BarChart from 'react-bar-chart';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Questions extends React.Component{

  constructor(props) {
    super(props);
    this.state = {  animate: true, result : false, width: 500};
    this.saveAnswer = this.saveAnswer.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);

  }

  submit(){
    const {questions, dispatch} = this.props;
     let  newObj = validateAnswers(questions);

     if(newObj.allAttempted ){
       this.setState({result : true});
     }else{
       NotificationManager.error('You must attempt all Questions', "", 3000);
       dispatch({type: FETCH_QUESTIONS, payload : newObj.questions});
     }
  }


  reset(){
    const {questions, dispatch} = this.props;
    let resetQuestions = getClearQuestion(questions);
    dispatch({type: FETCH_QUESTIONS, payload : resetQuestions});
    this.setState({animate : false, result : false});
    setTimeout(() => {
      this.setState({animate : true});
    }, 5);

  }

  saveAnswer(index, answer) {
    const {questions, dispatch} = this.props;
    const { result} = this.state;
    let newQuestions = [...questions];
    newQuestions[index].userAnswer = answer;
    newQuestions[index].showValidation = false;
    dispatch({type: FETCH_QUESTIONS, payload : newQuestions});
    if(result){
      this.setState({result : false});
    }

  }


  render () {

    const {questions} =  this.props;
    const {animate, result} = this.state;

    let allQuestionDiv = [];
    let correctAns = findNoOfCorrectAnswer(questions);
    const data = [
      {text: 'Correct', value: correctAns},
      {text: 'Incorrect', value: (10 - correctAns)}
    ];
    const margin = {top: 20, right: 20, bottom: 30, left: 40};

    try{

      allQuestionDiv = questions.map((item, i) => {

        return(
          <EachQuestion questionObj={item} saveAnswer={this.saveAnswer} index={i} key={item.id}/>
          );

      });


    }catch (e){

    }



    return (
      <div className="container">
        <NotificationContainer/>
        <div className="max-1200 pad_top question_screen">
          <p className="score">All Questions are mandatory.</p>
          {animate && allQuestionDiv}
          <div className="form_submit">
            <button onClick={this.submit}>Submit</button>
            <button onClick={this.reset}>Clear Values</button>
          </div>

          {result && <div>
            <p className="score">You have Scored {correctAns} out of 10</p>
            <div  className="bar_chart">
              <BarChart ylabel='Graph'
                        width={this.state.width}
                        height={500}
                        margin={margin}
                        data={data}
                        onBarClick={this.handleBarClick}/>
            </div>
            </div> }

        </div>

      </div>
    );
  }

}



function mapStateToProps(state) {
  return {
    questions :  state.Questions
  };
}

export default connect(mapStateToProps)(Questions);




function getClearQuestion(questions){
  let resetQuestions = [];

  if(questions && questions.length > 0) {
    resetQuestions = questions.map((item) => {
      item.userAnswer = "";

      return (item
      );

    });
  }

  return resetQuestions;

}




function findNoOfCorrectAnswer(questions){

  let count = 0;

  questions.forEach((item ) => {

    if(item.correct_answer === item.userAnswer){
      count++;
    }
  });

  return count;

}


function validateAnswers(questions){

  let count = 0;
  let newArr = [];
  let allAttempted = true;

  questions.forEach((item ) => {

    if(item.correct_answer === item.userAnswer){
      count++;
    }
    if(!item.userAnswer){
      item.showValidation = true;
      allAttempted = false;
    }
    newArr.push(item);


  });

  return {count : count , questions : newArr, allAttempted : allAttempted};

}
