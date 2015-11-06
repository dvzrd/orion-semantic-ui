Template.orionSemanticSidebar.onRendered(function () {
    this.autorun(function () {
        var depend = orion.links._collection.find().fetch();
        $('.ui.dropdown.item').dropdown();
    });
});

Template.orionSemanticSidebarLink.onRendered(function () {
    $('.ui.dropdown.item').dropdown();
});

Template.orionSemanticSidebarLink.events({
    'click .ui.dropdown.item': function() {
        console.log('dropdown clicked');
    }
});