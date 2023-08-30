<!DOCTYPE html>
<html>
<head>
  <title>NestJS Movie API Readme</title>
</head>
<body>

<h1>NestJS Movie API Readme</h1>

<p>Welcome to the NestJS Movie API! This is a small-scale API built using NestJS that allows you to manage a collection of movies. You can perform various CRUD (Create, Read, Update, Delete) operations on movies through this API.</p>

<h2>Table of Contents</h2>

<ul>
  <li><a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#prerequisites">Prerequisites</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#running-with-docker-compose">Running with Docker Compose</a></li>
    </ul>
  </li>
  <li><a href="#api-endpoints">API Endpoints</a></li>
  <li><a href="#folder-structure">Folder Structure</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

<p>Before you begin, ensure you have the following installed on your machine:</p>

<ul>
  <li><a href="https://www.docker.com/get-started">Docker</a> (To run the API in a container)</li>
</ul>

<h3 id="installation">Installation</h3>

<ol>
  <li>Clone this repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/yourusername/nestjs-movie-api.git
</code></pre>

<ol start="2">
  <li>Navigate to the project directory:</li>
</ol>

<pre><code>cd nestjs-movie-api
</code></pre>

<h3 id="running-with-docker-compose">Running with Docker Compose</h3>

<ol>
  <li>Make sure you have Docker and Docker Compose installed.</li>
  <li>Rename the <code>.env.example</code> file to <code>.env</code> and adjust the environment variables as needed.</li>
  <li>Open a terminal and navigate to the project directory.</li>
  <li>Build and start the Docker containers:</li>
</ol>

<pre><code>docker-compose up --build
</code></pre>

<p>This command will build the Docker image for the API and start it along with any required services.</p>

<p>The API should be accessible at <a href="http://localhost:3000">http://localhost:3000</a>.</p>

<h2 id="api-endpoints">API Endpoints</h2>

<p>The following API endpoints are available:</p>

<ul>
  <li><code>GET /movies</code>: Get a list of all movies.</li>
  <li><code>GET /movies/:id</code>: Get a specific movie by ID.</li>
  <li><code>POST /movies</code>: Create a new movie.</li>
  <li><code>PUT /movies/:id</code>: Update an existing movie.</li>
  <li><code>DELETE /movies/:id</code>: Delete a movie.</li>
</ul>

<h2 id="folder-structure">Folder Structure</h2>

<p>The project follows a standard NestJS application structure:</p>

<pre><code>
nestjs-movie-api/
|-- src/
|   |-- movies/
|       |-- dto/
|       ...
|-- ...
</code></pre>

<h2 id="technologies-used">Technologies Used</h2>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://nestjs.com/">NestJS</a></li>
  <li><a href="https://www.docker.com/">Docker</a></li>
</ul>

<h2 id="contributing">Contributing</h2>

...

<h2 id="license">License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

</body>
</html>
