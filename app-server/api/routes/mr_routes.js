'use strict';
module.exports = function(app) {
  var todoList = require('../controller/mr_controller');
  
  // manual
  /**
   * @swagger
   * /manual:
   *  get:
   *    description: Used to get manual for developers
   *    produces:
   *      - text/html
   *    responses:
   *        '200':
   *            description: Success
   */
  app.route('/manual').get(todoList.printManual);

  // new_id
  /**
   * @swagger
   * /new_id:
   *  get:
   *    description: Generates new patiend id
   *    produces:
   *      - application/json
   *    responses:
   *        '200':
   *            description: Success
   */
  app.route('/new_id').get(todoList.get_id);

  // JsonPatientExample
  /**
   * @swagger
   * /JsonPatientExample:
   *  get:
   *    description: Shows mr object json example
   *    produces:
   *      - application/json
   *    responses:
   *        '200':
   *            description: Success
   */
  app.route('/JsonPatientExample').get(todoList.JsonPatientExample);

  // JsonMR_schema
  /**
   * @swagger
   * /JsonMR_schema:
   *  get:
   *    description: Shows mr object json *SCHEMA* example
   *    produces:
   *      - application/json
   *    responses:
   *        '200':
   *            description: Success
   */
  app.route('/JsonMR_schema').get(todoList.JsonMRSchema);

// new_sensor
/**
 * @swagger
 * /new_sensor:
 *  post:
 *    description: Indexing new sensor
 *    produces: application/json
 *    parameters: 
 *      - name: new_sensor
 *        description: New sensor data
 *        in: body
 *        required: true
 *        type: application/json
 *    responses:
 *        '200':
 *            description: Success
 */
  app.route('/new_sensor').post(todoList.new_sensor);

  // new_sensor
/**
 * @swagger
 * /new_patient:
 *  post:
 *    description: Indexing new patient
 *    produces: application/json
 *    parameters: 
 *      - name: new_patient
 *        description: New patient data
 *        in: body
 *        required: true
 *        type: application/json
 *    responses:
 *        '200':
 *            description: Success
 */
  app.route('/new_patient').post(todoList.new_patient);


// mr
/**
 * @swagger
 * /mr:
 *  post:
 *    description: Posting new patient measurement results
 *    produces: application/json
 *    parameters: 
 *      - name: mr
 *        description: Measurement-Result object
 *        in: body
 *        required: true
 *        type: application/json
 *        schema: 
 *          $ref: 'http://52.16.82.127:3000/JsonMR_schema'
 *    responses:
 *        '200':
 *            description: Success
 */
  app.route('/mr').post(todoList.archive_mr);


  app.route('/mr_tst').post(todoList.archive_mr_tst);
};