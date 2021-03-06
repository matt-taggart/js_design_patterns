const Flyweight = function Flyweight(project, priority, user, completed) {
  this.project = project;
  this.priority = priority;
  this.user = user;
  this.completed = completed;
};


const FlyweightFactory = (function FlyweightFactory() {
  const flyweights = {};

  const get = function(project, priority, user, completed) {
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
    }
    return flyweights[project + priority + user + completed];
  };

  const getCount = function() {
    let count = 0;

    for (let f in flyweights)  {
      count++;
    }

    return count;
  };

  return { get, getCount };
})();


const Task = function Task(data) {
  this.name = data.name;
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
  // this.priority = data.priority;
  // this.project = data.project;
  // this.user = data.user;
  // this.completed = data.completed;
};


const TaskCollection =  function TaskCollection() {
  const tasks = {};

  let count = 0;

  const add = function(data) {
    tasks[data.name] = new Task(data);
    count++;
  };

  const get = function(name) {
    return tasks[name];
  };

  const getCount = function() {
    return count;
  };

  return { add, get, getCount };
};

const tasks = new TaskCollection();

const projects = ['none', 'courses', 'training', 'project'];
const priorities = [1, 2, 3, 4, 5];
const users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
const completed = [ true, false ];

const initialMemory = process.memoryUsage().heapUsed;

for (let i = 0; i < 1000000; i++) {
  tasks.add({
    name: `task ${i}`,
    priority: priorities[Math.floor((Math.random() * 5))],
    project: projects[Math.floor((Math.random() * 4))],
    users: users[Math.floor((Math.random() * 4))],
    completed: completed[Math.floor((Math.random() * 2))]
  });
}

const afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000 + ' MB');

console.log('tasks: ' + tasks.getCount());
console.log('flyweights: ' + FlyweightFactory.getCount());
