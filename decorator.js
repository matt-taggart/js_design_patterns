const Task = function (name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log('completing task ', this.name);
};

Task.prototype.save = function() {
  console.log('saving task ', this.name);
};

const myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

const UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  console.log('notifying important people');
};

UrgentTask.prototype.save = function() {
  console.log('do special stuff before saving');
  Task.prototype.save.call(this);
};

const ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
