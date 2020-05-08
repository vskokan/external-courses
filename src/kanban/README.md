# Kanban board <br>
## How to open <br>
Just open **index.html** in your browser. <br>
**Important: index.html and src folder should be located in the same directory.** <br>
## How to use <br>
Click to +Add card in Backlog to create your first task. Then it will be available for adding in the next block. You can move tasks choosing them in dropdown menu. Tasks from browser local storage are available for adding too. <br>
## Project structure <br>
**index.html** defines document structure and has links to style.css file and scripts for working with tasks and menu. <br>
* src/**style.css** imports styles for components such as header, footer, menu, etc. which are located in /styles <br>
  * src/style/**addbutton.css** - styles for buttons in blocks for adding tasks <br>
  * src/style/**block.css** - defines taskblocks' appearence <br>
  * src/style/**footer.css**, src/style/**header.css** - styles for footer and header <br>
  * src/style/**dropdown.css** - styles for dropdown menu which is appending after click on +Add card in blocks exept Backlog <br>
  * src/style/**input.css** - defines the appearence of input field for new tasks in Backlog <br>
  * src/style/**main.css** - styles for <main></main> area (currently defines backround color, position of child elements and animation for appending some elements) <br>
  * src/style/**menu.css** - styles for dropdown menu which is appending after click on +Add card in blocks exept Backlog <br>

* src/**icons** - directory for svg files <br>
* src/**scripts** - here all scripts are located <br>
  * src/scripts/**menu.js** - script for opening and closing user menu <br>
  * src/scripts/**tasks.js** - performs all work with blocks, has functions for working with blocks and tasks (creating and moving) <br>