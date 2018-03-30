Ext.define('App.view.user.Edit', {
  extend: 'Ext.window.Window',
  alias: 'widget.useredit',
  title: 'Edit User',
  layout: 'fit',
  width: '269',
  autoShow: true,
  initComponent: function() {
    this.items = [{
      xtype: 'form',
      items: [{
          xtype: 'textfield',
          name: 'name',
          fieldLabel: 'Name'
        }, {
          xtype: 'textfield',
          name: 'email',
          fieldLabel: 'email'
        }]
    }];

    this.buttons = [{
      text: 'Save',
      action: 'save'
    }, {
      text: 'Cancel',
      scope: this,
      handler: this.close
    }];

    this.callParent(arguments);

  } // initComponent
});
