import React, { Component } from 'react';

// 1.Devide component
// 2. Make statik maket HTML
//3. devide for subtasks
//4. for each subtask make algo
//5. test each subtask(!!!) & use debag all the time
//6. read documentation



class Search extends Component {
    state={value:''}

handleChange=event=>{
    this.setState({value:event.target.value})
}

search=event=>{
    event.preventDefault();
    alert (this.state.value);
}

render(){
        
        return (
            <form className="search" onSubmit={this.search}>
            <input type="text" onChange={this.handleChange} value={this.state.value} className="search__input" />
            <button className="search__button" type='submit'>Search</button>
          </form>

        )
    }
}

export default Search