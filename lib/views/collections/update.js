Template.orionSemanticCollectionsUpdate.events({
  'click .primary.save.button': function () {
    $('#orionSemanticCollectionsUpdateForm').submit();
  }
});

AutoForm.addHooks('orionSemanticCollectionsUpdateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
