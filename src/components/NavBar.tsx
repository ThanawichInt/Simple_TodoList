import { useEffect, useState } from 'react';
import { Button, Container, Form, Navbar, Offcanvas } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { add } from '../state/todoList/todoSlice';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [isValid, setIsValid] = useState(false); 
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (event: { target: { value: any; }; }) => {
        setTask(event.target.value);
      };
      
      const handleDescriptionChange = (event: { target: { value: any; }; }) => {
        setDescription(event.target.value);
        console.log(description);
      };
    
      const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        dispatch(add({name: task, description: description}));
        setDescription('');
        setTask('');
        handleClose();
      };

      useEffect(() => {
        if(task.length == 0){
          setIsValid(false)
        }else{
          setIsValid(true)
        }
      }, [task]);
  return (
    <div>
         <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">ToDo-List🗒️</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Button className='bg-light text-dark border-dark' variant="primary" onClick={handleShow}>Add Task</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='mt-5'><h3>Add Your Task!!</h3></Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <p className='mb-5'>A simple todo list, add your task's name and description and that's it !!</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Task's Name</Form.Label>
                   <Form.Label className='text-danger ml-5' style={{fontSize:'xx-small'}}>*Required</Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={handleInputChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Add your details..." onChange={handleDescriptionChange}/>
              </Form.Group>
              <Button 
                variant={isValid ? 'primary' : 'secondary'} 
                type="submit" 
                disabled={!isValid}
                onClick={handleSubmit}
                >
                Add
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
    </div>
  )
}

export default NavBar;