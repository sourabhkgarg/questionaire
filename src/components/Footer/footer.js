import React from 'react';
import {Link } from 'react-router';

import './footer.scss';

import Fb from '../../images/Icons/fb';
import Twiiter from '../../images/Icons/twitter';
import Insta from '../../images/Icons/insta';
import Gplus from '../../images/Icons/gplus';

class Footer extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="container footer ">

        <div className="flex max-1200 justify_between">

          <ul className="footer_ul width_25">
            <li>
              <Link > Company </Link>
            </li>
            <li>
              <Link > About Us </Link>
            </li>
            <li>
              <Link > Contact Us </Link>
            </li>
            <li>
              <Link > Privacy Policy </Link>
            </li>
            <li>
              <Link > Terms & Conditions </Link>
            </li>

          </ul>

          <ul className="footer_ul width_25">

            <li>
              <Link > Company </Link>
            </li>
            <li>
              <Link > About Us </Link>
            </li>
            <li>
              <Link > Contact Us </Link>
            </li>
            <li>
              <Link > Privacy Policy </Link>
            </li>
            <li>
              <Link > Terms & Conditions </Link>
            </li>

          </ul>



          <div className="width_25">
            <ul className="footer_ul ">

              <li>
                <Link > Get in touch </Link>
              </li>
              <li>
                <Link > About Us </Link>
              </li>
              <li>
                <Link > Contact Us </Link>
              </li>

            </ul>

          </div>

          <div className="social_div width_25">
            <p>Follow us on</p>

            <div className="flex social_icons">

              <div>
                <Fb />
              </div>
              <div>
                <Twiiter />
              </div>
              <div>
                <Insta />
              </div>
              <div>
                <Gplus />
              </div>


            </div>

          </div>


        </div>

      </div>
    );
  }

}


export default Footer;
