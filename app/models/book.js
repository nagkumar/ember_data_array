import DS from "ember-data";
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  pages: DS.attr('number'),
  description: DS.attr('string'),
  authors: DS.hasMany('author', {async: true}),
  publisher: DS.belongsTo('publisher', {async: true}),
  reviewsNag: DS.attr('array', {defaultValue: []})
});
