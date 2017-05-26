const Applicant = function(name) {
  this.name = name;
};

Applicant.prototype.notify = function(jobPosting) {
  console.log(`Applicant ${this.name} notified of ${jobPosting} job opening! `);
};

const EmailService = function() {
  this.subscribers = [];
};

EmailService.prototype.subscribe = function(applicant) {
  this.subscribers.push(applicant);
};

EmailService.prototype.unsubscribe = function(applicant) {
  this.subscribers.splice(this.subscribers.indexOf(applicant, 0));
};

EmailService.prototype.sendJobPosting = function(job) {
  this.subscribers.forEach(subscriber => {
    subscriber.notify(job);
  });
};

const applicant1 = new Applicant('Elon Musk');
const applicant2 = new Applicant('Thomas Edison');
const applicant3 = new Applicant('Nikola Tesla');
const applicant4 = new Applicant('George Washington');

const myEmailService = new EmailService();
myEmailService.subscribe(applicant1);
myEmailService.subscribe(applicant2);
myEmailService.subscribe(applicant3);
myEmailService.subscribe(applicant4);
myEmailService.unsubscribe(applicant4);

myEmailService.sendJobPosting('electrician');
