import { useSelector } from "react-redux"
import { RootState } from '../state/store';
import { Col, Dropdown, Row } from "react-bootstrap";
import TodoList from "./TodoList";
import { useState } from "react";


const FilterSearch = () => {
    const [selectedValue, setSelectedValue] = useState('All');
    const todos = useSelector((state: RootState)=> state.todo);


    const filtertool = todos.filter(todo => {
        if (selectedValue === 'All') {
          return true;
        } else if (selectedValue === 'true') {
          return todo.IsComplete === true; 
        } else {
          return todo.IsComplete === false; 
        }
      });
   
    // console.log("FILTERED: ",filtertool);
    
    const handleDropdownChange = (eventKey: any) => {
        setSelectedValue(eventKey);
        // console.log(selectedValue);
    };  
  return (
    <div>
         <Row className="mt-5">
                <Col sm={3}></Col>
                <Col sm={2}>
                <Dropdown onSelect={handleDropdownChange}>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ fontSize: 'xx-small' }}>
                    {selectedValue === 'true' && 'Completed'} 
                    {selectedValue === 'false' && 'Incomplete'}  
                    {selectedValue !== 'true' && selectedValue !== 'false' && 'All'} 
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="true">Completed</Dropdown.Item>
                    <Dropdown.Item eventKey="false">Incomplete</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Col>
            </Row>

            <Row className="justify-content-center mt-5">
            <Col sm={6}>
                <ul>
                {filtertool.map((todo, index) => (
                    <TodoList key={todo.id || index} id={todo.id} name={todo.name} description={todo.description} IsComplete={todo.IsComplete} />
                ))}
                </ul>
            </Col>
        </Row>
    </div>
  )
}

export default FilterSearch