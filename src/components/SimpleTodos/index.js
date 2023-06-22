import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoDetails: initialTodosList}

  deleteTodo = id => {
    const {todoDetails} = this.state

    const filteredList = todoDetails.filter(eachItem => eachItem.id !== id)
    this.setState({todoDetails: filteredList})
  }

  render() {
    const {todoDetails} = this.state

    return (
      <div className="container-1">
        <div className="container-2">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <ul className="ul-list">
              {todoDetails.map(eachItem => (
                <TodoItem
                  key={eachItem.id}
                  todo={eachItem}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
