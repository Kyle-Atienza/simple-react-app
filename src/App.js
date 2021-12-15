/*
import React, {Component} from 'react'

class App extends Component() {
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}
*/

import React, {Component} from 'react'
import DisplayUser from './DisplayUser'
import AddUser from './AddUser'

class App extends Component {
  state = {
    lists: [
      {name: 'Kyle', age: '19', favorite: 'ikaw', id: 1},
      {name: 'Francis', age: '20', favorite: 'siya', id: 2},
      {name: 'Edison', age: '21', favorite: 'tayo', id: 3}
    ]
  }
  addUser = (user) => {
    user.id = Math.random()
    let users = [...this.state.lists, user]
    this.setState({
      lists: users
    })

  }
  deleteUser = (id) => {
    let users = this.state.lists.filter(user => {
      return id !== user.id 
    })
    this.setState({
      lists: users
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Hello</h1>
        <AddUser addUser={this.addUser} />
        <DisplayUser deleteUser={this.deleteUser} lists={this.state.lists} />
      </div>
    );
  }
}



export default App;
