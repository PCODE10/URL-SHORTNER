
# URL SHORTNER
Url Shortener provides a convenient and efficient solution for shortening long URLs which can be easily shared and accessed. 

I have included a search option to this project, which allows you to look up a URL from the database using any of these notes, long urls, or short urls. Additionally, the user interface is very clean and simple.

One of the key features of the URL Shortener is the ability to track the number of clicks received by each shortened URL. This feature provides valuable insights into the popularity and reach of shared links. This can be useful for college fest also.

## Features

- Shorten long URLs to a shorter and more manageable format.
- Add notes to the shortened URLs for easy reference.
- Track the number of clicks on each shortened URL.
- Search for URLs, short URLs, and notes.
- User-friendly web interface for easy interaction.

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Bootstrap


## Dependencies
- npm init
- npm i express mongoose ejs
- npm i --save-dev nodemon
- npm run devStart

## Run the project

Install the dependencies:

Set up MongoDB:
   - Make sure MongoDB is running on your local machine 


Start the application:
For starting the server

    - npm run devStart



Open your web browser and visit [http://localhost:3000](http://localhost:3000).

## Usage

- Enter a long URL and notes in the input fields and click "Shorten" to generate a shortened URL.
- The table displays the list of shortened URLs along with their corresponding full URLs, notes, and click counts.
- Use the search form to search for specific URLs, short URLs, or notes.



## Working
The project is using Node.js and Express to set up a server that listens for incoming HTTP requests. 

Establish a connection to the MongoDB database.

The project defines a MongoDB schema using Mongoose. The schema includes fields for the full URL, short URL, notes, and click count.

When a user submits a long URL, the server generates a unique short URL from a package called shortid. The full URL, short URL, and notes are stored in the MongoDB database.

The project uses the EJS engine to render dynamic views. The views are responsible for displaying the HTML templates with the data retrieved from the database.

The interface also includes a search form to search for specific URLs, short URLs, or notes. 

For tracking of clicks count-
Each time when a user accesses a shortened URL, the server retrieves the corresponding entry from the database, increments the click count, and saves the updated entry. The user is then redirected to the full URL associated with the shortened URL.
## learning from this project
I learn to  work in both the front-end and back-end components. I also learn how to integrate a database like MongoDB. This project provided me a great opportunity to learn new things and enhanced my implementation skills. The materials and the sessions given by the acm group members is very helpful to build this project.