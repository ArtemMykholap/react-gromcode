import React, { useEffect, useState } from 'react';
import moment from 'moment';

const getTimeWithOffset = offset => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}
const Clock = ({location, offset}) => {
    const [cityTime, offsetTime] = useState(moment(getTimeWithOffset(offset)).format("h:mm:ss A"));

    useEffect(() => {
        const interval = setInterval(() => {
            offsetTime(moment(getTimeWithOffset(offset)).format("h:mm:ss A"))
        }, 1000)

        return () => { clearInterval(interval) }
    }, [])

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {cityTime}
            </div>
        </div>
    )
}

// class Clock extends Component {
// constructor(props) {
//     super(props);
//     this.state = {
//         cityTime: moment(getTimeWithOffset(props.offset)).format("h:mm:ss A")
//     };
// }

// componentDidMount() {
//     this.interval = setInterval(() => {
//         this.setState({
//             cityTime: moment(getTimeWithOffset(this.props.offset)).format("h:mm:ss A")
//         })
//     }, 1000)
// }
// componentWillUnmount() {
//     clearInterval(this.interval);
// }
//     render() {
//         return (<>

//             <div className="clock">
//                 <div className="clock__location">
//                     {this.props.location}
//                 </div>
//                 <div className="clock__time">
//                     {this.state.cityTime}
//                 </div>
//             </div>   </>
//         )
//     }
// }

export default Clock







