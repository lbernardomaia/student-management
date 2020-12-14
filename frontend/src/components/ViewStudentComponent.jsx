import React, { Component } from 'react'
import StudentService from '../services/StudentService'

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.student.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.student.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div> { this.state.student.email }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity of Questions: </label>
                            <div> { this.state.student.quantityOfQuestions }</div>
                        </div>
                        <div className = "row">
                            <label> Quantity of Right Questions: </label>
                            <div> { this.state.student.quantityOfRightQuestions }</div>
                        </div>
                        <div className = "row">
                            <label> Grade: </label>
                            <div> { this.state.student.grade }</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <button class="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default ViewStudentComponent
