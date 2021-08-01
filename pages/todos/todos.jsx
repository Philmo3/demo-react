import {todos} from '../../mocks/todos'

import '../../App.css'
import './todos.css'

import Todo from './todo/todo'

const Todos = () => {
    return (
        <div className='Page'>
            <div className='Todos'>
            {todos.map((todo) => {
                return (
                    <Todo todo={todo} />
                )
            })}
            </div>
        </div>
    )
}
export default Todos