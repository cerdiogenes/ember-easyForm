Ember.Handlebars.registerHelper('input', function(property, options) {
  options.hash.context = this;
  options.hash.property = property;
  return Ember.Handlebars.helpers.view.call(this, Ember.FormBuilder.Input, options);
});