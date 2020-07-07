import React from 'react';
import moment from 'moment';



const Greeting=(props)=>{

    let age = moment().diff(`${props.birthDate}`, 'years',false);
    const greeting=(<>
        <div className="greeting">
    {`My name is ${props.user.firstName} ${props.lastName}. I'm ${age} years old`}
        </div></>
    )

return greeting
}

export default Greeting;