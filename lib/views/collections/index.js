Template.orionSemanticCollectionsIndex.events({
  'click tr': function(event) {
    if (!$(event.target).is('td')) return;
    var collection = Template.currentData().collection;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    if (rowData) {
      if (rowData.canShowUpdate()) {
        var path = collection.updatePath(rowData);
        Router.go(path);
      }
    }
  }
});

Template.orionSemanticCollectionsIndex.onRendered(function() {
  this.autorun(function () {
    Template.currentData();
    Session.set('orionSemanticCollectionsIndex_showTable', false);
    Meteor.defer(function () {
      Session.set('orionSemanticCollectionsIndex_showTable', true);
    });
  });
})

Template.orionSemanticCollectionsIndex.helpers({
  showTable: function () {
    return Session.get('orionSemanticCollectionsIndex_showTable');
  }
});
