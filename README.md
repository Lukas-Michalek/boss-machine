# **Boss Machine**
## **Overview**
The main goal of this project was to create an entire API to serve information to a Boss Machine, a unique management application for today’s most accomplished (evil) entrepreneurs.

## **Project Requirements**
The project has to satisfy the following requirements:

### **Create Server Boilerplate**

 - Set up body-parsing middleware with the body-parser package.
 - Set up CORS middleware with the cors package. 
 - Mount the apiRouter at /api. This router will serve as the starting point for all API routes.
 - Start the server listening on the provided PORT. 

### **Create required routes:**

 - **/api/minions**

    - GET /api/minions to get an array of all minions.
    - POST /api/minions to create a new minion and save it to the database.
    - GET /api/minions/:minionId to get a single minion by id.
    - PUT /api/minions/:minionId to update a single minion by id.
    - DELETE /api/minions/:minionId to delete a single minion by id.

<BR>

 - **/api/ideas**

    - GET /api/ideas to get an array of all ideas.
    - POST /api/ideas to create a new idea and save it to the database.
    - GET /api/ideas/:ideaId to get a single idea by id.
    - PUT /api/ideas/:ideaId to update a single idea by id.
    - DELETE /api/ideas/:ideaId to delete a single idea by id.

<BR>

 - **/api/meetings**

    - GET /api/meetings to get an array of all meetings.
    - POST /api/meetings to create a new meeting and save it to the database.
    - DELETE /api/meetings to delete all meetings from the database.

<BR>

### **Create Custom Middleware**

 - that will make sure that any new or updated ideas are still worth at least one million dollars!

### **Bonus Task**

  - Implement routes to allow bosses to add and remove work from their minions’ backlogs.

**Routes required:**

 - GET /api/minions/:minionId/work to get an array of all work for the specified minon.
 - POST /api/minions/:minionId/work to create a new work object and save it to the database.
 - PUT /api/minions/:minionId/work/:workId to update a single work by id.
 - DELETE /api/minions/:minionId/work/:workId to delete a single work by id.


## **Getting Started**

### **Setup**

Please ensure that **`node.js`** is installed in your computer. If not, my recommendation is to use the [offical website](https://nodejs.org/en/) to download it.

In order to download this repository you will need to 'clone' it.

Using **`git bash`** (that can be downloaded [here](https://git-scm.com/downloads) ) please navigate to directory where you want to download these files:

```
cd yourDirectory
```

Or create a new directory using mkdir command:
```
mkdir yourDirectory
cd yourDirectory
```

When this is accomplished and you are safely inside the directory(folder) where you want to download this repository simply copy this command into yout git bash and the content should download immediately:
```
git clone https://github.com/Lukas-Michalek/boss-machine.git
```
Then navigate to the boss-machine directory
```
cd boss-machine
```

It is recommended to open the folder in Visual Studio Code editor(link to download this program can be found [here](https://code.visualstudio.com/download))

### **Required dependencies**

In order to run the program, these dependencies needs to be installed.

Please navigate to boss-machine folder via git bash, and once there run following commands:

```
npm install
```

Once it has finished installing, you can run 
```
npm run start 
```

to begin your server located on:

```
http://localhost:4001/
```

You’ll see Server listening on port 4001 in the terminal. The `npm run start` script will automatically restart your server whenever you make changes to the server.js file or server/ folder. If you want to turn this off, simply start your server with the node server.js command. You can kill either process with the Ctrl + C command.

It is recommended to use [Google Chrome](https://www.google.com/chrome/browser/desktop/index.html) (at least version 60) or [Firefox](https://www.mozilla.org/en-US/firefox/new/) (at least version 55)


## **Features**

The final application can be seen here:

Main Features are:

**Home Page**

 - a List of random meetings(with time, date and note) is automatically generated on main page that can be deleted by pressing **`Cancel All`** button
 - to move step back user can use **`ARROW POINTING LEFT`** at the bottom to be redirected to the previous page

**Minions.exe Page**

 - a list of all minions is present with name and id
 - by pressing **`PLUS`** button new minion can be created
 - minion can be removed from database by pressing **X** button

**New Minion Page**

 - new minion is created by filled the input fields and pressing **`SAVE`** button. Note that fields should be filled in this manner:
   - **Name**: Text
   - **Title**: Text
   - **Salary**: number
   - **Weaknesses**: Text
        
  - In `work section`, work can be added to this minion by pressing **`ADD WORK`** button and filling the input fields with correct inputs:
      - **TITLE**: Text
      - **DESCRIPTION**: Text
      - **HRS**: number
    - It is important ot note if these will not be filled with correct input type, work will not be created
    - work will be confirmed and added to database by pressing **`SAVE`** button on the right
    - work object can also be deleted by press **`X`** button to the left

**Editing Existing Minion**
    - to edit existing minion just navigate to `MINIONS.exe` and click on the minion you want to change.
    - by pressing **EDIT** button the user can edit all the fields and the process is very similar to creating new minion
  
**MILLION $ IDEAS.exe and adding new Ideas**
    - upon navigating to MILLION $ IDEAS.exe user can see all the ideas already created in database in a list
    - to create new idea press **`+`** to the right after the last idea entry where the user is redirected to `New Idea Section`

**New Idea section**
 - to create new idea, user needs to fill all of the input fields in this manner:
 - **Name of Idea**: Text or Number
 - **Body(TEXT) of Idea**: Text or Number
 - **Revenue/Week**: Number
 - **`# Of Weeks`**: Number

 - the user will be allowed to save only those ideas where `Revenue/Week * # Of Weeks` exceeds 1 000 000 and thus satisfying the condition (1 Million $ Idea)
 - when the conditions are met user can save the idea by pressing **`SAVE`** button, otherwise button is blocked with text `NOT A VALID $1000000 IDEA`

## **Further Development**

Please feel free to continue on this project by adding new features and functionalities to API routers.

Note that this project is not connected to database, but instead all objects(minons, ideas, meetings, works) to populate various tasks are generated upon initializing server. 

When developing this project further you can take advantage of various functions inside `db.js` already created to adhere to DRY(Don`t Repeat Yourself) principle.

Schemas of individual objects are as follows:

- **Minion:**
    - id: string
    - name: string
    - title: string
    - salary: number
  
  <br>

 - **Idea:**
    - id: string
    - name: string
    - description: string
    - numWeeks: number
    - weeklyRevenue: number
 
 <br>

 - **Meeting:**
    - time: string
    - date: JS Date object
    - day: string
    - note: string
  
  <br>

 - **Work:**
    - id: string
    - title: string
    - description: string
    - hours: number
    - minionId: string



## **Project Status**

***In Progress***

## **Author**
Content regarding project tasks created by [Lukas Michalek](https://github.com/Lukas-Michalek)

## **Technologies used**
The project was created with:
 - ES6 JavaScript
 - Node.js
 - Express.js
 - HTML
 - CSS

## **Acknowledgements**
This project was created as a part of [Codecademy](https://www.codecademy.com/learn) Full-Stack Engineer Career Path. 

## **Licensing**
The code in this project is licensed under [MIT](https://opensource.org/licenses/MIT) license.
