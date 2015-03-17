Users = new Mongo.Collection("users");
Lists = new Mongo.Collection("lists");
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    lists: function () {
      return Lists.find({});
    },
    tasks: function () {
      return Tasks.find({});
    }
  });

  Template.body.events({
    "submit .new-list": function (event) {
      // This function is called when the new task form is submitted
      var title = event.target.title.value;

      Lists.insert({
        title: title,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.title.value = "";
      // Prevent default form submit
      return false;
    },

    "click .deleteListBtn": function () {
      Lists.remove(this._id);
    }
  });
}
