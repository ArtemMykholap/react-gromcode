import React from 'react';

class GoodButton extends React.Component{
    handleClick(e){

        alert(event.target.innerHTML)
    }
    render(){
        return( <button className="fancy-button"
        onClick={this.handleClick}>
                 Click me!
                </button>); 
    }

}


 export default GoodButton