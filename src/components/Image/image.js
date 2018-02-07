import React from 'react';

import './image.scss';


class Image extends React.Component{

  constructor(props) {
    super(props);

  }


  render () {

    const { src , style, link} = this.props;


    return (
      <div className={"thumbnail "  + style}>

        <a href={link}>
          <img src={src} alt="" />
        </a>

      </div>
    );
  }

}



export default Image;


