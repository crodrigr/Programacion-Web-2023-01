# Crea Proyecto MVC & JPA con Spring Boot

## 1. Crear proyecto

![image](https://user-images.githubusercontent.com/31961588/220813728-d027879a-bc67-48e6-bf56-722987a8061a.png)


## 2. Dependencias

![image](https://user-images.githubusercontent.com/31961588/220813826-141175fb-94f5-4af0-af80-67eabbc48ca8.png)


## 3. Creación proyecto y revisión pom.xml

![image](https://user-images.githubusercontent.com/31961588/220808781-fc3b4b8d-2902-4346-b3bc-86161ace463b.png)

### 3.1 Add dependencia validation

![image](https://user-images.githubusercontent.com/31961588/220814051-71a55045-db35-40f7-99db-9893386db2fd.png)


**pom.xml**

```Xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>3.0.2</version>
		<relativePath /> <!-- lookup parent from repository -->
	</parent>
	<groupId>com.uts.invoice</groupId>
	<artifactId>invoice</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<name>invoice</name>
	<description>Workshop Invoice</description>
	<properties>
		<java.version>17</java.version>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-data-jpa</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-thymeleaf</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-devtools</artifactId>
			<scope>runtime</scope>
			<optional>true</optional>
		</dependency>
		<dependency>
			<groupId>com.h2database</groupId>
			<artifactId>h2</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>com.mysql</groupId>
			<artifactId>mysql-connector-j</artifactId>
			<scope>runtime</scope>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
		<dependency>
			<groupId>com.bolsadeideas.springboot.datajpa.app</groupId>
			<artifactId>spring-boot-data-jpa</artifactId>
			<version>0.0.1-SNAPSHOT</version>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-validation</artifactId>
		</dependency>
	</dependencies>
	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
</project>


```
