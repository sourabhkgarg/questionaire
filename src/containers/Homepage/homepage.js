import React from 'react';
import {connect} from 'react-redux';
import {USER_DETAIL} from '../../action/actionConstants';
import {Link} from 'react-router';
import {checkEmail} from "../../helperFunction/validationCheck";

import './homepage.scss';



class Main extends React.Component{

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(type, e){
    let val = e.target.value;
    const {userDetail, dispatch} = this.props;

    let newUserDetails = {...userDetail};

    newUserDetails[type] = val;

    dispatch({type: USER_DETAIL, payload : newUserDetails});


  }

  render () {

    const {userDetail} = this.props;
    const {name , email , mobile} = userDetail;

    let proceedDisabled = false;

    if(!name || mobile.toString().length !== 10 || !checkEmail(email)){
      proceedDisabled = true;
    }



    return (
      <div className="container">

        <div className="max-1200 pad_top welcome_screen">

          <h1 className="text-center "> Welcome To Trivia Quiz</h1>

          <div className="welcome_form">

            <h3>Please fill the below details</h3>

            <input type="text"  placeholder="Your Name" value={name} onChange={this.onChange.bind(this, "name")}/>
            <input type="email" placeholder="Email Id" value={email} onChange={this.onChange.bind(this, "email")}/>
            <input type="number" placeholder="Mobile Number" value={mobile} onChange={this.onChange.bind(this, "mobile")}/>

            <Link to="/questions" className={proceedDisabled ? "disabled link" : "link" }> <button>Start Quiz</button> </Link>




          </div>
        </div>

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    userDetail : state.UserDetail

  };
}

export default connect(mapStateToProps)(Main);
