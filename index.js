// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskDescriptions = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    completeTask: function() {
      this.complete = true;
    },
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };

  return task;
}

// Mark a task as complete

// Print the state of a task to the console in a nice readable way

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the sh*t out of the litter box");
const task2 = newTask("Do Laundry", "Its BAD!")
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();

console.log(tasks);
