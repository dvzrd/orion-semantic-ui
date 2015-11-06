Template.orionSemanticLayout.onRendered(function () {
    this.autorun(function () {
        $('.ui.right.dropdown.item').dropdown();

        $('.ui.accordion').accordion({
            'exclusive': true,
            'duration': 250
        });
    });
});

Template.orionSemanticLayout.events({
    'click .ui.vertical.menu .item': function () {
        $('.ui.orion.admin').removeClass('toggled');
    },
    'click .ui.orion.admin.toggled': function () {
        $('.orion.admin').removeClass('toggled');
    },
    'click .menu-toggle': function () {
        $('.ui.orion.admin').toggleClass('toggled');
    }
});

Template.orionSemanticHeader.events({
    'click .logout': function () {
        Meteor.logout();
    }
});

Template.orionSemanticTabs.helpers({
    items: function () {
        return this;
    }
});

Template.orionSemanticTabs.events({
    'click a': function () {
        this.onClick();
    }
});
