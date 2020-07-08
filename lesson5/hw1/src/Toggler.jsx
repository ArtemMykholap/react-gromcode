import React, {Component} from 'react';


class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {checkOn: false};
        this.checkClick = this.checkClick.bind(this);
      }

    checkClick() {
        this.setState(checkOn => ({
            checkClick: !checkOn.checkClick
        }));
      }

    render(){
        return(
            <div>
                <button onClick={this.checkClick}>
                    {this.state.checkClick ?
                     'On' : 'Off'}
                </button>
            </div>
        )
    }
}
export default Toggler

  
 