Template.orionSemanticCollectionsCreate.events({
  'click .primary.create.button': function () {
    $('#orionSemanticCollectionsCreateForm').submit();
  }
});


AutoForm.addHooks('orionSemanticCollectionsCreateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});
