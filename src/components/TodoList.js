import { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';
import { Container } from 'react-bootstrap';





const TodoList = () => {

    let initialList = [
        { id: 1, text: 'Clean the house', done: true },
        { id: 2, text: 'Buy milk', done: false },
        { id: 3, text: 'Create todo app using React', done: false },
        { id: 4, text: 'Give out CA1', done: false }
    ];

    let localList = JSON.parse(localStorage.getItem("todos"));

    if(localList){
        initialList = localList
    }

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list))
    }, [list])


    const markAsDone = (id) => {

        const newList = list.map((item) => {
            if(item.id === id){
                item.done = true;
            }

            return item;
        });

        setList(newList);
    };

    const deleteTodoItem = (id) => {
      
        const newList = list.filter((item) => {
            return item.id !== id;

        });
        setList(newList);
    };
    

    



    const handleTextInput = e => {
        setTextInput(e.target.value);
    };

    const addTodoItem = () => {
        let newTodo = {
            id: list[list.length - 1].id + 1,
            text: textInput,
            done: false
        };

        setList((prevList) => [...prevList, newTodo]);
        setTextInput("");
    };

    let todoItems = list.map((item) => {
        return <TodoItem key={item.id} markAsDone={markAsDone}  deleteTodoItem={deleteTodoItem} todo={item} />;
    });



// console.log(localStorage.getItem("example"))
    
    return (
        <div className='App mt-5'>
            <Container>

            <Row className='mt-5 background mb-5'>
            <div>
                <h2 className='display-4 mb-3 fw-semibold 1h-sm'>React <span className='text-blue'> Todo List</span></h2>
            </div>
                <div className='lead fw-normal mt-5'>
                    <p>This app is made of two components, a Todo List and a List Item.</p>
                    <p>A todo item can be added, marked as done then deleted. </p>
                    <p>As a todo item is added, it is stored in the browsers LocalStorage.</p>
                </div>
            </Row>

            <Row>
                <Col  lg='7' md='7' sm='12'>
                <div className='todo mb-5'>
                    <h2 className='display-5 fw-semibold 1h-sm'><span className='text-blue'>Todo</span> List</h2>
                    <div>
                        <ListGroup variant='flush'>
                            {todoItems}
                        </ListGroup>
                    </div>
                 </div>
                </Col>
                <Col lg='5'  md='5' sm='12'>
                <div className='todo  mb-5'>
                    <h2 className='display-5 fw-semibold 1h-sm '>Add</h2>
                    <div className='d-flex '>
                         <input type="text"  className='form' value={textInput} onChange={handleTextInput} />
                         <Button className='float-end  add' onClick={addTodoItem}>Add</Button>
                    </div>
                 </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default TodoList;