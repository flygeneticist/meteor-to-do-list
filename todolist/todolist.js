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
    /*
      * LIST FUNCTIONS
    */
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

    "click .delete-list": function () {
      Lists.remove(this._id);
    },

    /*
      * ITEM FUNCTIONS
    */
    "submit .add-item": function (event) {
      // This function is called when the new task form is submitted

      var title = event.target.title.value;
      var dueDate = event.target.dueDate.value;

      Items.insert({
        title: title,
        dueDate: dueDate,
        complete: false,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.title.value = "";
      event.target.dueDate.value = "";
      // Prevent default form submit
      return false;
    },

    "click .delete-item": function () {
      Items.remove(this._id);
    }
  });
}
