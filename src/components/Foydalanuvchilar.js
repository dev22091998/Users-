import React, { Component, createRef } from 'react'
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap'

export default class Foydalanuvchilar extends Component {
    constructor(){
        super();
        this.state = {
            userlist: [
                    
                    {name:"Ram", email:"ram@gmail.com", age:23},    
                    {name:"Shyam", email:"shyam23@gmail.com", age:28},  
                    {name:"John", email:"john@gmail.com", age:33},    
                    {name:"Bob", email:"bob32@gmail.com", age:41}   
            
            ],
            isEdit: false,
            editUser: null,
        }
        this.nameRef = createRef();
        this.ageRef = createRef();
        this.emailRef = createRef();
    }

    Del(index){
        let arr = this.state.userlist;
        delete(arr[index])
        // this.state.userlist.map((user, index) => {
        //     if(id === index){
        //         console.log()
        //     } else {
        //         arr.push(user)
        //     }
        //     return true
        // })
        this.setState({
            userlist: arr
        })
    }

    Add(){
        if(!this.state.isEdit){
            if(this.nameRef.current.value === '' || this.ageRef.current.value === null || this.emailRef.current.value === ''){
                alert('Please fill in inputs')
            } else {
                let user = {
                    name: this.nameRef.current.value,
                    age: this.nameRef.current.value,
                    email: this.emailRef.current.value,
                },
                usersArr = this.state.userlist;
        
                // this.state.userlist.map((user) => {
                //     usersArr.push(user)
                //     return true
                // })
                usersArr.push(user)
                this.setState({
                    userlist: usersArr.reverse()
                });
    
            }
            this.nameRef.current.value = ''
            this.ageRef.current.value = null
            this.emailRef.current.value = ''
        } else {
            let editArr = [];
            this.state.userlist.map((user) => {
                editArr.push(user)
                return true
            })
             editArr[this.state.editUser].name = this.nameRef.current.value;
             editArr[this.state.editUser].age = this.ageRef.current.value;
             editArr[this.state.editUser].email = this.emailRef.current.value;

             this.setState({
                 userlist: editArr,
                 isEdit: false
             })
             this.nameRef.current.value = ''
            this.ageRef.current.value = null
            this.emailRef.current.value = ''
            
        }
    }

    Edit(obj, id){
        this.setState({
            isEdit: true,
            editUser: id
        })
        this.nameRef.current.value = obj.name;
        this.ageRef.current.value = obj.age;
        this.emailRef.current.value = obj.email;
    }
    render() {
        return (
                <Container>
                    <Row>
                        <Col md="4">
                            <label htmlFor="name" className=" fs-5">Name</label>
                            <input type='text' ref={this.nameRef} className="p-2 fs-6 w-100" placeholder="Enter Name" id="name"  />
                        </Col>
                        <Col md="3">
                            <label htmlFor="age" className=" fs-5">Age</label>
                            <input type='number' ref={this.ageRef} className="p-2 fs-6 w-100" placeholder="Enter Age" id="age"  />
                        </Col>
                        <Col md="4">
                            <label htmlFor="email" className="fs-5">Email</label>
                            <input type='text' ref={this.emailRef} className="p-2 fs-6 w-100" placeholder="Enter Email" id="email"  />
                        </Col>
                        <Col md="1" className="pt-2">
                            {
                                this.state.isEdit ?
                                    <Button onClick={()=>this.Add()} className="btn btn-info mt-4 ms-0">Edit</Button>
                                :
                                    <Button onClick={()=>this.Add()} className="btn btn-info mt-4 ms-0">Add</Button>
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">                       
                            <h1 className='mt-4'>Users Table</h1>
                            <table className="table table-danger mt-4">
                                <thead>
                                    <tr>
                                        <th>N#</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.userlist.map((sirojiddin, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{ index + 1 }</td>
                                                <td>{ sirojiddin.name }</td>
                                                <td>{ sirojiddin.age }</td>
                                                <td>{ sirojiddin.email }</td>
                                                <td>
                                                    <button className="btn btn-primary me-1" onClick={()=> this.Edit(sirojiddin, index)} >Edit</button>
                                                    <button className="btn btn-danger" onClick={()=> this.Del(index)} >Delete</button>
                                                </td>
                                            </tr>
                                        )
                                        })
                                    }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            
        )
    }
}
