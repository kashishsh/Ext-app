User = Ext.define('App.model.User', {
  extend : 'Ext.data.Model',
  fields : [
    { name: 'name',  type: 'string' },
    { name: 'email', type: 'string' }
  ]
});
