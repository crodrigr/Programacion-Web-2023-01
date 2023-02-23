# Cliente controller

## 1. Handler listar 

![image](https://user-images.githubusercontent.com/31961588/220818727-a3f0553f-65d5-4923-9814-ab3c3b510e1d.png)

## 2. Crear el import.sql para inserta datos en h2

![image](https://user-images.githubusercontent.com/31961588/220818857-12d0c5d1-34bf-4a86-aaf8-69fb9f093539.png)

## 2.1 Insert 

![image](https://user-images.githubusercontent.com/31961588/220818951-581e45b3-8f34-44c8-82a0-8fe7810de981.png)

## 2.2 Parametrización de la db h2 de properties

![image](https://user-images.githubusercontent.com/31961588/220819273-4903e1fd-f569-44f8-98dd-83b78d466331.png)

## 3. Crear vista listar.html

### 3.1 listar.html
![image](https://user-images.githubusercontent.com/31961588/220819851-e9519625-f5c2-47d5-90cc-0b2acfce5de3.png)

### 3.2 listar.html
![image](https://user-images.githubusercontent.com/31961588/220819992-a1aeddbf-dc37-4d31-a314-191e22bd0291.png)

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8" />
<title th:text="${titulo}">Insert title here</title>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body>

	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<a class="navbar-brand" href="#">Spring Boot</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarNav" aria-controls="navbarNav"
			aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
				<li class="nav-item active"><a class="nav-link" href="#">Home
						<span class="sr-only">(current)</span>
				</a></li>
				<li class="nav-item"><a class="nav-link" th:href="@{/listar}">Clientes</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="container">
		<h1
			class="text-secondary border border-success border-top-0 border-left-0 border-right-0"
			th:text="${titulo}"></h1>
		<p><a th:href="@{/form}" class="btn btn-success btn-xs">crear cliente</a></p>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>id</th>
					<th>nombre</th>
					<th>apellido</th>
					<th>email</th>
					<th>fecha</th>
					<th>editar</th>
					<th>eliminar</th>
				</tr>
			</thead>
			<tbody>
				<tr th:each="cliente: ${clientes}">
					<td th:text="${cliente.id}"></td>
					<td th:text="${cliente.nombre}"></td>
					<td th:text="${cliente.apellido}"></td>
					<td th:text="${cliente.email}"></td>
					<td th:text="${cliente.createAt}"></td>
					<td><a class="btn btn-primary btn-xs" th:href="@{/form/} + ${cliente.id}" th:text="'editar'"></a></td>
					<td><a class="btn btn-danger btn-xs" th:href="@{/eliminar/} + ${cliente.id}" th:text="'eliminar'" onclick="return confirm('Estás seguro que quieres eliminar?');"></a></td>
				</tr>
			</tbody>
		</table>
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
	<script
		src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
``

### 3.3 lanzar 

![image](https://user-images.githubusercontent.com/31961588/220820326-aac310ce-5c79-43fe-a92a-ce425b5b6e39.png)
