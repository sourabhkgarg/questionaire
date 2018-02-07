import React from 'react';



class Input extends React.Component{

  constructor(props) {
    super(props);
  }


  render () {

    const {type, placeholder, value} = this.props;



    return (

      <div>

        <input type={type} placeholder={placeholder} value={value}/>

      </div>
    );
  }

}

export default Input;
