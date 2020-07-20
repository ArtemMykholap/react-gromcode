import React from 'react'

const Expand = ({ children, title, toggleHandler, isOpen }) => {
    const computedClass = `fas fa-chevron-${isOpen ? 'up' : 'down'}`


    return (<div className="expand border">
        <div className="expand__header">
            <span className="expand__title">{title}</span>
            <button className="expand__toggle-btn" onClick={toggleHandler} >
                <i className={computedClass} ></i>
            </button>
        </div>
        {isOpen && <div className="expand__content">
            {children}
        </div>}
    </div>)
}
export default Expand


