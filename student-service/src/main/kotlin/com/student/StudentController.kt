package com.student

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin(origins = ["http://localhost:3000"])
@RestController
@RequestMapping("/student-service/api/v1/")
class StudentController(private val studentService: StudentService) {

    @GetMapping("/students")
    fun getAllStudents(): MutableList<Student> = studentService.findAll()

    @PostMapping("/students")
    fun createStudent(@RequestBody student: Student): ResponseEntity<Student> {
        val studentCreated = studentService.save(student)
        return ResponseEntity(studentCreated, HttpStatus.CREATED)
    }

    @GetMapping("/students/{id}")
    fun getStudentById(@PathVariable id: Long): ResponseEntity<Student> {
        val student = studentService.findById(id)
        return ResponseEntity.ok(student)
    }

    @PutMapping("/students/{id}")
    fun updateStudent(@PathVariable id: Long, @RequestBody studentDetails: Student): ResponseEntity<Student> {
        val updatedStudent = studentService.update(id, studentDetails)
        return ResponseEntity.ok(updatedStudent)
    }

    @DeleteMapping("/students/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun deleteStudent(@PathVariable id: Long) = studentService.delete(id)
}