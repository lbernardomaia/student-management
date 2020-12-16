package com.student

import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.RelaxedMockK
import io.mockk.junit5.MockKExtension
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import java.util.*

@ExtendWith(MockKExtension::class)
class StudentServiceTest {

    @InjectMockKs
    lateinit var studentService: StudentService

    @RelaxedMockK
    lateinit var studentRepository: StudentRepository

    @Test
    fun `When studentId doesn't exist, Then an ResourceNotFoundException is thrown`(){
        every { studentRepository.findById(any()) } returns Optional.empty()

        Assertions.assertThrows(
                ResourceNotFoundException::class.java
        ) {
            studentService.findById(1L)
        }
    }
}