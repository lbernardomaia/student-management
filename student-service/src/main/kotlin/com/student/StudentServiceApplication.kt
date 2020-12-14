package com.student

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringbootBackendApplication

fun main(args: Array<String>) {
    runApplication<SpringbootBackendApplication>(*args)
}