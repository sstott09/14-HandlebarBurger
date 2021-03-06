### University of Denver 
### Class: DU_VIRT_FSF_PT_09_2019_U.O.MW
### Program: Full Stack Flex Online Part-Time
### HandlebarBurger - Eat Da Burger
...........................................................................................................

## Burger Builder by Stott & Co
A great place to customize a burger!  Hungry? Create and store your favorite burgers and mark them as eaten when you're done! 

## Table of Contents
<ul>
<li><a href="#about">About</a></li>
<li><a href="#functionality">Functionality</a></li>
<li><a href="#technical-features">Technical Features</a></li>
<li><a href="demo">Demo Application</a></li>
<li><a href="#requirements">Requirements</a></li>
<li><a href="#build-tools">Build Tools</a></li>
<li><a href="#acknowledgements">Acknowledgements</a></li>

## About
This is a full stack deployed website that allows the user to "create" and "eat" burgers using MySQL, Node, Express, Handlebars and ORM. The user can enter a burger into the "Create a Burger" text box, hit submit, and that burger will then appear in a list of available "Not Devoured" burgers. The user can then "eat" the burger which sends it into a list of "devoured burgers".

## Functionality
Upon accessing the app, you will be be directed to the one and only landing page. From here it will call all existing burgers in the SQL database and will persist from any users before.

**Landing Page**<br>
![Alt Text](https://github.com/sstott09/14-HandlebarBurger/blob/master/public/assets/images/build-a-burger_landing-page.png)

**Burger Creation**<br>
![Alt Text](https://github.com/sstott09/14-HandlebarBurger/blob/master/public/assets/images/create-a-burger.gif)

**Eat Da Burger**<br>
![Alt Text](https://github.com/sstott09/14-HandlebarBurger/blob/master/public/assets/images/devour-a-burger.gif)

# Technical Features
This application uses a Model-View-Controller (MVC) model with Handlebars connected to a MySQL database to determine what will render on the browser for the user. This application uses the Express package to control all server applications and the MySQL package to connect to the database. Content is sent to Handlebars.js that controls the HTML content.

# Demo Application
Getting Hungry yet?
Access this site at: **https://evening-thicket-58926.herokuapp.com/**


# Requirements
If you are running from the deployed Heroku site, then there are no requirements to use. You can access directly at https://still-wave-02149.herokuapp.com/.

If you would like to fork this application and run directly, then you will need to run: npm install in the local folder.

In order to run, you will need to prime your database:

**Step One:<br>Open MySQL Workbench. You will want to be sure you are connected to a root database using port 3306. If the port is different, then the code will need to be altered.**

**Step Two:<br>Run the script in schema.sql. This will setup an empty table that will hold all of the information. Note: once you have loaded data, you will not want to run this again as it will drop any existing database.**

**Step Three:<br<To prime the database with some initial data, run seeds.sql. Skip this step if you would prefer to start the application without any burgers.**

**Step Four:<br>Create a file named .env, add the following to it, replacing the comment with your root password to MySQL (no quotes):**

# SQL Password
SQL_PASSWORD = //enter password here - no quotes are needed
Then run node server.js in the command line. If successful, the console will confirm the PORT that it is running. You will need to visit http://localhost:3000 to test the functionality.

# Build Tools
<ul>
<li>Node.js v10.16.3</li>
<li>Node packages:<br>
- express v4.17.1 (https://www.npmjs.com/package/express)<br>
- dotenv v8.2.0 (https://www.npmjs.com/package/dotenv)<br>
- express-handlebars v3.1.0 (https://www.npmjs.com/package/handlebars)<br>
- msql v2.17.1 (https://www.npmjs.com/package/mysql)</li>
<li>Bootstrap 4.0.0 (https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css)</li>
<li>JQuery (https://code.jquery.com/jquery-3.2.1.min.js)</li>
<li>Deployed on Heroku</li>

# Acknowledgements
Thanks to all of the authors of Node.js packages, as well as to my instructors and fellow students at DU - they are invaluable.