Template.orionSemanticCollectionsIndex.events({
  'click tr': function(event) {
    if (!$(event.target).is('td')) return;
    var dataTable = $(event.target).closest('table').DataTable();
    var rowData = dataTable.row(event.currentTarget).data();
    var collection = rowData._collection();
    if (rowData) {
      if (rowData.canShowUpdate()) {
        var path = collection.updatePath(rowData);
        RouterLayer.go(path);
      }
    }
  }
});

Template.orionSemanticCollectionsIndex.onRendered(function() {
  this.autorun(function () {
    RouterLayer.isActiveRoute('');
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
