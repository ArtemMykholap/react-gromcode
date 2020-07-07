import React from 'react';
import Comment from './Comment';

const userInfo={
    name:'Tom',
    avatarUrl:'https://pm1.narvii.com/6784/5dbdb8b66e0a7e99c3beae1f42dfd2cd11d03573v2_hq.jpg'
}


const App=()=>{
    return(<Comment
        user={userInfo}
        text="Good job!"
        date={new Date('2019-01-01T11:32:19.566Z')}
        />)
}
export default App;