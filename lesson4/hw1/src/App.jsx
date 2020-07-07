import React from 'react';
import Clock from './Clock';




const App = ()=>{
    return (<>
    <Clock location={'London'} offset ={0}/>
    <Clock location={'Kyiv'} offset ={12}/>
    <Clock location={'New-York'} offset ={-3}/>
    </>
    )
}
export default App