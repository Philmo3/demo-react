import {todos} from '../../mocks/todos'

import '../../App.css'

import Todo from './todo/todo'

const Todos = () => {
    return (
        <div className='Page'>
            {todos.map((todo) => {
                return (
                    <Todo todo={todo} />
                )
            })}
        </div>
    )
}
export default Todos