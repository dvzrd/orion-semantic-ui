Template.orionSemanticSidebar.onRendered(function() {
  this.autorun(function() {
    var depend = orion.links._collection.find().fetch();
    $('.orion-links a[data-toggle="collapse"]').collapse()
  })
});

Template.orionSemanticSidebar.events({
  'click .ui.brand.header': function() {
    $('body').removeClass('pushable');
    console.log('brand clicked');
  }
});

Template.orionSemanticSidebarLink.events({
  'click .ui.sidebar.menu .item': function() {
    $('.orion-semantic-admin').removeClass('toggled');
    $('.ui.sidebar.menu').addClass('animating');
    $('.ui.sidebar.menu').removeClass('visible');
    $('.pusher').removeClass('dimmed');

    setTimeout(function() {
      $('.ui.sidebar.menu').removeClass('overlay');
      $('.ui.sidebar.menu').removeClass('animating');
    }, 600);

    console.log('item clicked');
  }
});
