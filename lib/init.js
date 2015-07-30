Options.init('homePath');
Options.init('siteName');

ReactiveTemplates.request('tabs', 'orionSemanticTabs');
ReactiveTemplates.request('adminSidebar');


ReactiveTemplates.set('layout', 'orionSemanticLayout');
ReactiveTemplates.set('outAdminLayout', 'orionSemanticOutAdminLayout');

ReactiveTemplates.set('adminSidebar', 'orionSemanticSidebar');
ReactiveTemplates.set('login', 'orionSemanticLogin');
ReactiveTemplates.set('registerWithInvitation', 'orionSemanticRegisterWithInvitation');

ReactiveTemplates.set('myAccount.index', 'orionSemanticAccountIndex');
ReactiveTemplates.set('myAccount.password', 'orionSemanticAccountPassword');
ReactiveTemplates.set('myAccount.profile', 'orionSemanticAccountProfile');

ReactiveTemplates.set('accounts.index', 'orionSemanticAccountsIndex');
ReactiveTemplates.set('accounts.update', 'orionSemanticAccountsUpdate');
ReactiveTemplates.set('accounts.create', 'orionSemanticAccountsCreate');

ReactiveTemplates.set('configUpdate', 'orionSemanticConfigUpdate');
ReactiveTemplates.set('dictionaryUpdate', 'orionSemanticDictionaryUpdate');

// Set the default entity templates
Options.set('collectionsDefaultIndexTemplate', 'orionSemanticCollectionsIndex');
Options.set('collectionsDefaultCreateTemplate', 'orionSemanticCollectionsCreate');
Options.set('collectionsDefaultUpdateTemplate', 'orionSemanticCollectionsUpdate');
Options.set('collectionsDefaultDeleteTemplate', 'orionSemanticCollectionsDelete');

// Pages
ReactiveTemplates.set('pages.index', 'orionSemanticPagesIndex');
ReactiveTemplates.set('pages.create', 'orionSemanticPagesCreate');
ReactiveTemplates.set('pages.update', 'orionSemanticPagesUpdate');
ReactiveTemplates.set('pages.delete', 'orionSemanticPagesDelete');
