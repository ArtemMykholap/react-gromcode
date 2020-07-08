import React from 'react';

class Toggler extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            button:true
          };
      }


    clickHandler=()=>{
          this.setState({button:!this.state.button})
        }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>
                {this.state.button ? 'Off' : 'On'}
                </button>
                
            </div>
        )
    }
}
export default Toggler;
