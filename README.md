<h1>Music App Backend</h1>

<p>This repository contains the backend code for a music streaming application built with Node.js, Express, and MongoDB. The backend provides APIs for managing albums, playlists, and user authentication, along with optimizations and security features for efficient and safe use.</p>

<h2>Table of Contents</h2>
<ul>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#api-endpoints">API Endpoints</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
</ul>

<h2 id="about-the-project">About the Project</h2>
<p>The <strong>Music App Backend</strong> is designed to support a music streaming application frontend. It provides RESTful APIs to manage albums, playlists, user authentication, and includes various optimizations and security enhancements for a safe and scalable experience.</p>

<h2 id="features">Features</h2>
<ul>
    <li><strong>Album Management:</strong> Create, update, delete, and retrieve albums.</li>
    <li><strong>Playlist Support:</strong> Provides API routes for managing playlists.</li>
    <li><strong>User Authentication:</strong> Supports login and signup using JWT tokens.</li>
    <li><strong>Security and Optimization:</strong> Includes rate limiting, caching, and HTTP headers for security and performance.</li>
</ul>

<h2 id="tech-stack">Tech Stack</h2>
<p>The backend is built using the following technologies:</p>
<ul>
    <li><strong>Node.js:</strong> JavaScript runtime for server-side development.</li>
    <li><strong>Express.js:</strong> Web application framework for building APIs.</li>
    <li><strong>MongoDB:</strong> NoSQL database for storing music and user data.</li>
    <li><strong>Additional Packages:</strong> bcrypt, dotenv, helmet, mongoose, and more for security, caching, and performance.</li>
</ul>

<h2 id="api-endpoints">API Endpoints</h2>
<p>Below are the main API endpoints available:</p>
<ul>
    <li><code>GET /</code> - Retrieve all albums.</li>
    <li><code>GET /api/search</code> - Search for albums.</li>
    <li><code>GET /api/:id</code> - Retrieve album by ID.</li>
    <li><code>POST /api/albums</code> - Add a new album.</li>
    <li><code>PUT /api/:id</code> - Update album details by ID.</li>
    <li><code>DELETE /api/:id</code> - Delete an album by ID.</li>
    <li><code>POST /login</code> - User login.</li>
    <li><code>POST /signUp</code> - User registration.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To get a local copy up and running, follow these steps:</p>

<h3>Prerequisites</h3>
<ul>
    <li><strong>Node.js:</strong> Make sure you have <a href="https://nodejs.org/">Node.js</a> installed on your machine.</li>
    <li><strong>NPM:</strong> Node Package Manager (comes with Node.js).</li>
</ul>

<h3>Steps</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/Faizanshaikh26/Musify-Rest-Api.git</code></pre>
        <pre><code>cd MUSIFY-RESTAPI</code></pre>
    </li>
    <li>Install dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the root directory and add your environment variables for MongoDB, JWT_SECRET, and any other keys:
        <pre><code>
            MONGODB_URI=your_mongodb_uri
            JWT_SECRET=your_jwt_secret
        </code></pre>
    </li>
</ol>

<h2 id="usage">Usage</h2>
<p>Run the backend server with:</p>
<pre><code>npm start</code></pre>
<p>The server will start on <code>http://localhost:8000</code> by default, unless you have specified a different port in the <code>.env</code> file.</p>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Please fork the repository and submit a pull request.</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch: <code>git checkout -b feature/new-feature</code>.</li>
    <li>Commit your changes: <code>git commit -m 'Add new feature'</code>.</li>
    <li>Push to the branch: <code>git push origin feature/new-feature</code>.</li>
    <li>Open a pull request.</li>
</ol>

<h2 id="license">License</h2>
<p>Distributed under the MIT License. See <code>LICENSE</code> for more information.</p>

<h2 id="contact">Contact</h2>
<p>For questions or feedback, contact the maintainers:</p>
<ul>
    <li><strong>Faizan</strong> - <a href="https://github.com/Faizanshaikh26">@Faizanshaikh26</a> - Faizansheikh8209@gmail.com</li>
</ul>
