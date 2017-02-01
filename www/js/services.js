angular.module('starter.services', [])

.factory('Contact', function () {
  var contacts = [
    { name: 'Abraham Lincoln', status: "I'm busy", id: 1, img: "venkman.jpg" },
    { name: 'Ronald Reagan', status: "Away", id: 2, img: "spengler.jpg" },
    { name: 'John F. Kennedy', status: "At the cinema", id: 3, img: "stantz.jpg" },
    { name: 'Bill Clinton', status: "Available", id: 4, img: "winston.jpg" }
  ];

  return {
    all: function() {
      return contacts;
    },

    get: function(id) {
      return contacts.find(function(contact) { return contact.id == id; });
    },
  };
});