<!DOCTYPE html>
<html>
<head>

</head>
<body>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

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
  <li><a href="#technologies-used">Technologies Used</a></li>
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

<pre><code>git clone https://github.com/Seymur747/Movie-API.git
</code></pre>


<h3 id="running-with-docker-compose">Running with Docker Compose</h3>

<ol>
  <li>Make sure you have Docker and Docker Compose installed.</li>
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
  <li><code>POST /movie</code>: Create a new movie.</li>
  <li><code>PUT /movies/:id</code>: Update an existing movie.</li>
  <li><code>DELETE /movies/:id</code>: Delete a movie.</li>
  <br/>
  <li><code>GET /genres</code>: Get a list of all genres</li>
  <li><code>POST /genre</code>: Create a new genre</li>
  <li><code>PUT /genres/:id</code>: Update an existing genr</li>
  <li><code>DELETE /genres/:id</code>: Delete a genre</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://nestjs.com/">NestJS</a></li>
  <li><a href="https://www.docker.com/">Docker</a></li>
</ul>

...
<a href="https://api.postman.com/collections/17722722-69c644b1-9f88-43a4-8a08-1379df23e76f?access_key=PMAT-01H93A3PMY5C7VYBF58MNAW79D">For detail information about Api get this link and paste in Postman </a>


</body>
</html>
