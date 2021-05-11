let todolist = [];
let choice = "";
while (choice != "quit") {
  choice = prompt("Your choice?");
  choice = choice.toLowerCase();
  switch (choice) {
    case "list":
      listAction(); // prints actions on console
      break;
    case "add":
      let newItem = prompt(`Enter a todo item`);
      todolist.push(newItem);
      break;
    case "remove":
      let itemNumToRemove = parseInt(prompt("ID of item to remove?"));
      if (itemNumToRemove < todolist.length) {
        todolist.splice(itemNumToRemove, 1);
      } else {
        console.log(`Item #${itemNumToRemove} doesn't exist!`);
      }
      break;
    default:
      break;
  }
}

/**
 * What to do if 'list' is selected
 */
function listAction() {
  for (let i = 0; i < todolist.length; i++) {
    console.log(i, todolist[i]);
  }
}
