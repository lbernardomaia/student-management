FROM adoptopenjdk/maven-openjdk11:latest as maven-builder
WORKDIR /usr/local/app
COPY ./student-service/pom.xml .
RUN mvn dependency:go-offline -B
COPY ./student-service/. .
RUN mvn package

FROM adoptopenjdk/openjdk11:alpine-jre as base-runtime-image
WORKDIR /usr/local/app
COPY --from=maven-builder "/usr/local/app/target/student-service-*-SNAPSHOT.jar" ./student-service.jar
EXPOSE 8080
CMD ["java", "-jar", "student-service.jar"]