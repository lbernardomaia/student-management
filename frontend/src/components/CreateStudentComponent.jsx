import React, { Component } from 'react'
import StudentService from '../services/StudentService';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            quantityOfQuestions: '',
            quantityOfRightQuestions: '',
            grade: '',
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }

    componentDidMount(){
        if(this.state.id === '_add'){
            return
        }else{
            StudentService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email : student.email,
                    quantityOfQuestions: student.quantityOfQuestions,
                    quantityOfRightQuestions: student.quantityOfRightQuestions,
                    grade: student.grade
                });
            });
        }        
    }

    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            quantityOfQuestions: this.state.quantityOfQuestions,
            quantityOfRightQuestions: this.state.quantityOfRightQuestions,
        };

        console.log('student => ' + JSON.stringify(student));

        if(this.state.id === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/');
            });
        }else{
            StudentService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changeQuantityOfQuestionsHandler = (event) => {
        if(this.isNumber(event))
        {
            this.setState({quantityOfQuestions: event.target.value});
        }
    }

    changeQuantityOfRightQuestionsHandler = (event) => {
        if(this.isNumber(event)){
            this.setState({quantityOfRightQuestions: event.target.value});
        }
    }

    isNumber(event) {
        return event.target.value === '' || /^[0-9\b]+$/.test(event.target.value);
    }

    cancel(){
        this.props.history.push('/');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }

    render() {
        return (
            <div>
                <br/>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control"
                                                value={this.state.email} onChange={this.changeEmailHandler} required/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Quantity Of Questions: </label>
                                            <input placeholder="Quantity Of Questions" name="quantityOfQuestions" className="form-control"
                                                value={this.state.quantityOfQuestions} onChange={this.changeQuantityOfQuestionsHandler} required/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Quantity Of Right Questions: </label>
                                            <input placeholder="Quantity Of Right Questions" name="quantityOfRightQuestions" className="form-control"
                                                value={this.state.quantityOfRightQuestions} onChange={this.changeQuantityOfRightQuestionsHandler} required/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateStudentComponent
