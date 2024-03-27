# Use a base image with Java and Maven installed
FROM maven:3.8.4-openjdk-11-slim AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the Maven project file
COPY pom.xml .

# Download dependencies and build the application
RUN mvn dependency:go-offline --batch-mode
RUN mvn package -DskipTests

# Copy the application files
COPY src ./src

# Expose the port your application runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/your-web-app-1.0-SNAPSHOT.war"]
