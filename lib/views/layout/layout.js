Template.orionSemanticLayout.onRendered(function() {
  $('.ui.right.dropdown.item').dropdown();
});

Template.orionSemanticLayout.events({
  'click .ui.vertical.menu .item': function() {
    $('.ui.orion.admin').removeClass('toggled');
  }
  'click .ui.orion.admin.toggled': function() {
    $('.orion.admin').removeClass('toggled');
  }
});

Template.orionSemanticHeader.events({
  'click .menu-toggle': function () {
    $('.ui.orion.admin').toggleClass('toggled');
  },
  'click .logout': function() {
    Meteor.logout();
  }
});

Template.orionSemanticTabs.helpers({
  items: function () {
    return this;
  }
});

Template.orionSemanticTabs.events({
  'click a': function () {
    this.onClick();
  }
});
