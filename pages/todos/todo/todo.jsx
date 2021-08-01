import Card from '../../../components/ui/card/card'
import './todo.css'

const Todo = (props) => {
    return ( 
        <Card >
            <div className='Todo'>
                <h3 className='Todo_title'>{props.todo.title}</h3>
                <p className='Todo_description'>{props.todo.description}</p>  
            </div>
        </Card>
    
    )
}

export default Todo;