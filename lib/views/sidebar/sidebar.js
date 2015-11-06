Template.orionSemanticSidebar.onRendered(function () {
    this.autorun(function () {
        var depend = orion.links._collection.find().fetch();
        $('.ui.dropdown.item').dropdown();
    });
});

Template.orionSemanticSidebar.events({
    'click .ui.dropdown.item': function() {
        console.log('dropdown clicked');
    }
});

Template.orionSemanticSidebarLink.onRendered(function () {
    this.autorun(function () {
        $('.ui.dropdown.item').dropdown();
    });
});