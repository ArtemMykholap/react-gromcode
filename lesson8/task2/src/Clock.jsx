
import React, {Component} from 'react';
import moment from 'moment';



const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}


class Clock extends Component{
    constructor(props){
        super (props);
        this.state = {
            cityTime:moment(getTimeWithOffset(props.offset)).format("h:mm:ss A")
        };
      
        setInterval(()=>{
            this.setState({
                cityTime:moment(getTimeWithOffset(props.offset)).format("h:mm:ss A")
            })
        },1000)
        
    }
    render(){
        return (<>
            <div className="clock">
            <div className="clock__location">
                {this.props.location}
            </div>
            <div className="clock__time">
                {this.state.cityTime}
            </div>
        </div>   </>
           )
    }
}

export default Clock







