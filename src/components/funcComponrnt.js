
import React, {useState } from 'react'
import { Form, Button, Table, DropdownButton, Dropdown } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';


const AddData = () => {
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);

    //add client
    const addClient = (event) => {

        event.preventDefault();
        //console.log(event.target.productname.value);
        const formData = event.target;
        const newClient = {
            productname : formData.productname.value,
            amount : formData.amount.value,
            reference_number : formData.reference_number.value,
            action : formData.action.value
        }
        //console.log(newClient)
        setProduct([...products, newClient]);
        console.log(products)

        

    }

    const useStyles = makeStyles((theme) => ({
        root: {
            height: '100vh',
        }
    }))
    const classes = useStyles();

    return (
        <div className={classes.root}>
         <div className="App">
            <Form onSubmit={addClient}>
                <Form.Group className="mb-3" controlId="formBasicData">
                    <Form.Label>Client Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Client Phone Number" name="productname"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTransactionType">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="text" placeholder="Amount to be sent or withdraw" name="amount"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Action</Form.Label>
                    <Form.Control type="text" placeholder="Cash Out or Cash In ?" name="action"/>
                </Form.Group>

                {/* <Form.Select controlId="formBasicCheckbox">
                    <option value="CashOut">Cash Out</option>
                    <option value="CashIn">Cash In</option>
                </Form.Select> */}

                
                <Form.Group className="mb-3" controlId="formBasicReference">
                    <Form.Label>Reference Number</Form.Label>
                    <Form.Control type="text" placeholder="Reference Number" name="reference_number" />
                </Form.Group>
                
                <Button variant="primary" type="submit" style={{padding: 20, marginBottom: 10, borderRadius: 10}}>
                    Add Data
                </Button>
            </Form>
    <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Amount</th>
                <th>Action</th>
                <th>Reference Number</th>
                </tr>
            </thead>
            <tbody>
               {
                   products.map((item, index) =>{
                    return(
                    <tr key={index}>
                            <td>{index}</td>
                            <td>{item.productname}</td>
                            <td>{item.amount}</td>
                            <td>{item.action}</td>
                            <td>{item.reference_number}</td>
                    </tr>
                    )
                   })
               }
            </tbody>
            </Table>
         </div>
        </div>
    )
}

export default AddData
