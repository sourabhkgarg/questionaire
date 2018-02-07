import React from 'react';

import './navbar.scss';

import {Link} from 'react-router';

class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center max-1200">

            <Link  to="/" className="logo_width">
              <img src="http://www.liftoffllc.com/wp-content/uploads/2016/04/liftoff-logo.svg" alt=""/>
            </Link>

            <div className="navLinks">

              <Link className="navLinks_active" to="/" >Questionnaire</Link>

            </div>

          </div>


        </div>

      </div>


    );
  }

}



export default Navbar;


