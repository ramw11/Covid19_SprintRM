'use strict';
module.exports = function(app) {
  var todoList = require('../controller/mr_controller');

  app.route('/').get(todoList.printManual);
  app.route('/new_id').get(todoList.get_id);
  app.route('/JsonPatientExample').get(todoList.JsonPatientExample);
  app.route('/JsonMR_schema').get(todoList.JsonMRSchema);
  app.route('/mr').post(todoList.archive_mr);
  app.route('/mr_tst').post(todoList.archive_mr_tst);
};