Template.orionSemanticSidebar.onRendered(function () {
    this.autorun(function () {
        var depend = orion.links._collection.find().fetch();

        $('.ui.accordion').accordion({
            'exclusive': true,
            'duration': 250
        });
    });
});

Template.orionSemanticSidebarLink.onRendered(function () {
    this.autorun(function () {
        $('.ui.dropdown.item').dropdown();

        $('.ui.accordion').accordion({
            'exclusive': true,
            'duration': 250
        });
    });
});

Template.orionSemanticSidebarLink.events({
    'click .ui.dropdown.item': function() {
        console.log('dropdown clicked');
    }
});