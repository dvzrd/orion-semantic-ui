Template.orionSemanticLayout.events({
  'click .orion-Semantic-admin.toggled': function() {
    $(".orion-semantic-admin").removeClass("toggled");
    $("html,body").removeClass("no-overflow");
  },
  'click .menu-toggle': function () {
    $(".orion-Semantic-admin").toggleClass("toggled");
    $("html,body").toggleClass("no-overflow");
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
