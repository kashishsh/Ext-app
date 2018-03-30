Ext.require([
  'Ext.container.Viewport', 'Ext.form.Panel'
]);

Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  name: 'App',
  appFolder: 'app',
  controllers: [
    'Users'
  ],
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      autoCreateViewport: true,
      items: [{
        xtype: 'userlist'
      }]
    });
  }
});
