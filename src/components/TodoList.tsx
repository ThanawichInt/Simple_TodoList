import React from 'react';
import { Button, Col, Row, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleComplete, remove } from '../state/todoList/todoSlice';

interface TodoListProps {
  id: number;
  name: string;
  description: string;
  IsComplete: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ id, name, description, IsComplete }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id, IsComplete: !IsComplete })); // Concise dispatch call
  };

  const handleRemove = () => {
    dispatch(remove({id:id}))
  }

  return (
    <Row className='mb-3'>
      <Col sm={12} className="border border-secondary border-1" style={{ height: 'auto' }}>
        <div className="container">
          <div className="TextDetails">
            <h6>{name}</h6>
            <p className='text-secondary' style={{ wordWrap: 'break-word' }}>{description}</p>
          </div>
          <div className="bottons">
              <ToggleButton
                style={{ fontSize: 'xx-small', marginRight: '10px' }}
                id={`toggle-check-${id}`} 
                type="checkbox"
                checked={IsComplete}
                variant="outline-primary"
                value={id.toString()} 
                onChange={handleComplete}
              >
                Checked
              </ToggleButton>
              <Button variant="danger" style={{ fontSize: 'xx-small' }} onClick={handleRemove}>
                delete
              </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TodoList;
