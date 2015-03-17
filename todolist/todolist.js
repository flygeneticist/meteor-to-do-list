if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ],
    lists: [
      {title: 'Title Test', dueDate: '03/16/2015'},
      {title: '^__^', dueDate: '03/20/2015'},
      {title: 'More lists!!', dueDate: '03/20/2015'}
    ]
  });
}
