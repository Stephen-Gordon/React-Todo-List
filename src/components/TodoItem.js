import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const TodoItem = (props) => {


    

    let html = (
        <>
            <h3 className='textwrap mt-5'>{props.todo.text}</h3>
            <Button className='float-end danger me-2' onClick={() => {props.deleteTodoItem(props.todo.id)}}>&#x2717;</Button>
            <Button className="float-end textwrap me-2 d-flex listbuttons" onClick={() => {props.markAsDone(props.todo.id)}}>Done</Button>
            
        </>
    );

    if(props.todo.done){
        html = (
            <>
                <span className='done textwrap'>
                    <h3 className='textwrap mt-5'>{props.todo.text}</h3>
                </span>
                <Button className='float-end danger' onClick={() => {props.deleteTodoItem(props.todo.id)}}>&#x2717;</Button>
                <Button  className="float-end green textwrap me-2 " onClick={() => {props.markAsDone(props.todo.id)}}>&#10003;</Button>
            </>
        );
    }

    return (
        <ListGroup.Item className='textwrap bg-primary'>
            
            {html}
            

        </ListGroup.Item>
    );
};

export default TodoItem;