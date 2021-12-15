import React, {Component} from 'react'

class AddUser extends Component{
    state = {
        name: null,
        age: null,
        favorite: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addUser(this.state)
    }
    render(){
        return(
            <div className="">
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">
                        Name: 
                        <input type="text" id="name" onChange={ this.handleChange }/>
                    </label>
                    <label htmlFor="age">
                        Age: 
                        <input type="text" id="age" onChange={ this.handleChange }/>
                    </label>
                    <label htmlFor="favorite">
                        Favorite: 
                        <input type="text" id="favorite" onChange={ this.handleChange }/>
                    </label>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default AddUser