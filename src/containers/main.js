import React from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar/navbar';
import {fetchQuestions} from '../action/actions';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){

    const {dispatch} = this.props;
    dispatch(fetchQuestions());

  }

  render() {
    const {questions} = this.props;

    return (
      <div className="container">

        <Navbar/>

        <div className="min_height">
          {questions && questions.length > 0 && this.props.children}

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

export default connect(mapStateToProps)(Main);
