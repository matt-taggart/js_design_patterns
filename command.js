const repo = {
  tasks: {},
  commands: [],
  get: function(id) {
    console.log(`Getting task ${id}`);
    return {
      name: 'new task from db'
    };
  },
  save: function(task) {
    this.tasks[task.id] = task;
    console.log(`Saving ${task.name} to the db`);
  },
  replay: function() {
    this.commands.forEach(command => {
      this.executeNoLog(command.name, command.obj);
    });
  }
};

repo.execute = function(name) {
  const args = Array.from(arguments).slice(1);

  repo.commands.push({
    name,
    obj: args[0]
  });

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }

  return false;
};

repo.executeNoLog = function(name) {
  const args = Array.from(arguments).slice(1);

  if (repo[name]) {
    return repo[name].apply(repo, args);
  }
};

repo.execute('save', {
  id: 1,
  name: 'Task 1',
  completed: false
});

repo.execute('save', {
  id: 2,
  name: 'Task 2',
  completed: false
});


repo.execute('get', 2);

repo.replay();
