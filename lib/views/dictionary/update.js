Template.orionSemanticDictionaryUpdate.helpers({
  getDataForTabs: function () {
    var categories = orion.dictionary.availableCategories();
    return categories.map(function (category) {
      return {
        title: category,
        onClick: function() {
          Session.set('dictionaryUpdateCurrentCategory', category);
        },
        class: function() {
          return Session.get('dictionaryUpdateCurrentCategory') == category ? 'ui disabled button': 'ui primary button';
        }
      }
    });
  }
});
