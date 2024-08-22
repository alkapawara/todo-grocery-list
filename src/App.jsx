import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { add,del,update } from './reducers/todoSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
const [data,setData]=useState();

const {todo }= useSelector((state) => state.todoList)
const [updatedata,setUpdatedata]=useState({id:"",itm:""})
const dispatch = useDispatch()
const dataHandel=(e)=>{
  e.preventDefault();
  dispatch(add(data));
  setData("");
}

const edtHandel=(itm)=>{
  setUpdatedata(itm)
  setShow(true)

}
const updatEvent=()=>{
dispatch(update(updatedata))
setShow(false)

}
  return (
    <Container>
      <Row>
      <Col md={{ span: 6, offset: 3 }}>
    <div className='wrapper-css'>
    <h1 style={{ color: '#fff' }}>Grocery List</h1>

    <form onSubmit={dataHandel}>
      <div style={{ display: 'flex', gap:"12px" }}>
        <Form.Control  type='text' placeholder='add your fav'
        value={data} 
        onChange={(e)=>setData(e.target.value)}
        required
        />
        <Button type='submit'>Add </Button>
      </div>
      
    </form>

    <div>
      {todo.length > 0 ? todo.map((itm)=>(
     <div key={itm.id}>
       <li className='list-css'>{itm.itm}

        <div>
        <i class="bi bi-trash3-fill delete-icon" onClick={()=>dispatch(del(itm.id))}></i>
       <i class="bi bi-pencil-square edit-icon" onClick={()=>edtHandel(itm)}></i>

       
        </div>
       </li>
    
     </div>
    ))
  : ""
  }
    </div>

    


    <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type='text' value={updatedata.itm} onChange={(e)=>setUpdatedata({...updatedata,itm:e.target.value})} />
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={updatEvent}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default App
