import React, {Component} from 'react';
import './counter.scss'

let counter=17;


class Counter extends Component{
    constructor(props){
        super (props);
        props.start,
        this.state={
            counter:0,
        }
        // DO not do this practice
        setInterval(()=>{
            this.setState({
                counter:this.state.counter +1
            })
        },props.interval)
        
    }

    render(){
        return (
            <div className="counter">{this.state.counter}</div>
        
            )
    }
}

export default Counter