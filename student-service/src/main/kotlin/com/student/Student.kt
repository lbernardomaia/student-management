package com.student

import com.grade.GradeCalculator
import javax.persistence.*

@Entity
@Table(name = "student")
class Student(
        @Column(name = "first_name")
        var firstName: String,

        @Column(name = "last_name")
        var lastName: String,

        @Column(name = "email")
        var email: String,

        @Column(name = "quantity_of_questions")
        var quantityOfQuestions : Int = 0,

        @Column(name = "quantity_of_right_questions")
        var quantityOfRightQuestions : Int = 0
){
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0

    @Column(name = "grade")
    lateinit var grade: String

    fun computeGrade() {
        grade = GradeCalculator().compute(quantityOfQuestions, quantityOfRightQuestions)
    }
}