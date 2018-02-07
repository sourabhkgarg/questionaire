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


    return (
      <div className="container">

        <Navbar/>

        <div className="min_height">
          {this.props.children}

        </div>

      </div>
    );
  }

}




export default connect()(Main);
