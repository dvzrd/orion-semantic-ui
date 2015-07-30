Template.orionSemanticLayout.onRendered(function() {
  $('.ui.sidebar.menu').sidebar('setting', 'transition', 'uncover').sidebar('attach events', '.menu-toggle');
});

Template.orionSemanticLayout.events({
  'click .orion-semantic-admin.toggled': function() {
    $('.orion-semantic-admin').removeClass('toggled');
    $('.ui.sidebar.menu').addClass('animating');
    $('.ui.sidebar.menu').removeClass('visible');
    $('.pusher').removeClass('dimmed');

    setTimeout(function() {
      $('.ui.sidebar.menu').removeClass('overlay');
      $('.ui.sidebar.menu').removeClass('animating');
    }, 600);
  },
  'click .menu-toggle': function () {
    $('.orion-semantic-admin').toggleClass('toggled');
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
