Template.orionSemanticLayout.events({
  'click .orion-semantic-admin.toggled': function() {
    $('.orion-semantic-admin').removeClass('toggled');
    $('.ui.sidebar').sidebar('toggle');
  },
  'click .menu-toggle': function () {
    $('.orion-Semantic-admin').toggleClass('toggled');
    $('.ui.sidebar').sidebar('toggle');
  }
});

Template.orionSemanticHeader.events({
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
