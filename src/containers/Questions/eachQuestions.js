import React from 'react';




class Question extends React.Component{

  constructor(props) {
    super(props);
    this.state = { answer: "" };
    this.selectAns = this.selectAns.bind(this);

  }

  selectAns(ans){
    const {saveAnswer, index}  = this.props;
    saveAnswer(index ,ans);
  }



  render () {

    const {questionObj } = this.props;
    const {question, answers, showValidation } = questionObj;

    let decodeQuestion = decodeHtml(question);

    let ansArr = answers.map((item , i ) => {

      return(
        <div key={item}>
          <label className="flex">
          <input  type="radio" name="quest" value={item} onClick={this.selectAns.bind(this, item )} /> {item}<br/>
          </label>
        </div>
      );


    });

    return (

      <div className="inside_an">
          <div className={showValidation ? "question_form not_valid" : "question_form" }>
            <p>{decodeQuestion}</p>
            <form action="" className="radio_btn">
              {ansArr}
            </form>
          </div>
      </div>
    );
  }

}




export default Question;


function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
