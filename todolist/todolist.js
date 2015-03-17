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
}
