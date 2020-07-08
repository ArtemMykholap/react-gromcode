import React, {Component} from 'react';

class Toggler extends Component {
    constructor(props) {
        super(props);
         this.state = {
            button:false
          };
      }


clickHandler=()=>{
    this.setState({button:!this.state.button})
}

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>
                {this.state.button ? 'On' : 'Off'}
                </button>
                
            </div>
        )
    }
}
export default Toggler

  
 