Template.orionSemanticCollectionsUpdate.events({
  'click .primary.save.button': function () {
    $('#orionSemanticCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionSemanticCollectionsUpdateForm', {
  onSuccess: function() {
    Router.go(this.collection.indexPath());
  }
});
