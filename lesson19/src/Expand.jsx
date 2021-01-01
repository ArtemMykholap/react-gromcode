import React,{Component} from 'react';



class Expand extends Component{
    state = {
        isOpen: false,
    };
    toggleHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        const {isOpen}=this.state
        const{children,title}=this.props
        const computedClass = `fas fa-chevron-${isOpen ? 'up' : 'down'}`
        return (<div className="expand border">
        <div className="expand__header">
            <span className="expand__title">{title}</span>
            <button className="expand__toggle-btn" onClick={this.toggleHandler} >
                <i className={computedClass} ></i>
            </button>
        </div>
        {isOpen && <div className="expand__content">
            {children}
        </div>}
    </div>)
    }
}

export default Expand



