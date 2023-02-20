/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the employee
 *         title:
 *           type: string
 *           description: The title of your employee
 *         author:
 *           type: string
 *           description: The employee author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the employee
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the employee was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Employees
 *   description: The employees managing API
 * /employee:
 *   get:
 *     summary: Lists all the employees
 *     tags: [Employees]
 *     responses:
 *       200:
 *         description: The list of the employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       200:
 *         description: The created employee.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       500:
 *         description: Some server error
 * /employee/{id}:
 *   get:
 *     summary: Get the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *     responses:
 *       200:
 *         description: The employee response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 *       404:
 *         description: The employee was not found
 *   put:
 *    summary: Update the employee by the id
 *    tags: [Employees]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The employee id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Employee'
 *    responses:
 *      200:
 *        description: The employee was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Employee'
 *      404:
 *        description: The employee was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the employee by id
 *     tags: [Employees]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The employee id
 *
 *     responses:
 *       200:
 *         description: The employee was deleted
 *       404:
 *         description: The employee was not found
 */

const EmployeeController = require('../controllers/Employee')
var express = require('express');
var router = express.Router();

router.get('/', EmployeeController.findAll);
router.post('/', EmployeeController.create);
router.get('/:id', EmployeeController.findOne);
router.delete('/:id', EmployeeController.destroy);

module.exports = router;
