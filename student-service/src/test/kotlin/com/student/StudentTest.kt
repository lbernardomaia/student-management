package com.student

import io.kotest.matchers.shouldNotBe
import org.junit.jupiter.api.Test

class StudentTest {

    @Test
    fun `When valid quantities are provided, then grade is not empty`(){
        val tagRequestDto = Student(
                "John",
                "Smith",
                "john_smith@student.com",
                10,
                10)

        tagRequestDto.computeGrade()

        tagRequestDto.grade shouldNotBe ""
    }
}