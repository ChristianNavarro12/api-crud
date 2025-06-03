const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


/**
 * @openapi
 * /api/student:
 *   get:
 *     summary: obtiene todos los estudiantes
 *     description: obtiene todos los estudiantes.
 *     tags:
 *       - student
 *     responses:
 *       200:
 *         description: Lista de estudiantes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "ejemplo"
 *                   apellido:
 *                     type: string
 *                     example: "ejemplo"
 *                   edad:
 *                     type: string
 *                     example: "20"
 *                   calificacion:
 *                     type: string
 *                     example: "10"
 *       500:
 *         description: Error al obtener los estudiantes.
 */
router.get('/', studentController.getStudent);


/**
 * @openapi
 * /api/student/{id}:
 *   get:
 *     summary: obtiene al estudiante por id
 *     description: Obtiene un estudiante por su ID.
 *     tags:
 *       - student
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Detalles del usuario encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "ejemplo"
 *                   apellido:
 *                     type: string
 *                     example: "ejemplo"
 *                   edad:
 *                     type: string
 *                     example: "20"
 *                   calificacion:
 *                     type: string
 *                     example: "10"
 *       404:
 *         description: estudiante no encontrado.
 *       500:
 *         description: Error al obtener el estudiante.
 */
router.get('/:id', studentController.getStudentById);


/**
 * @swagger
 * /api/student:
 *   post:
 *     summary: Registrar un nuevo estudiante
 *     tags: 
 *       - student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - edad
 *               - calificacion
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "ejemplo"
 *               apellido:
 *                 type: string
 *                 example: "ejemplo"
 *               edad:
 *                 type: string
 *                 example: "20"
 *               calificacion:
 *                 type: string
 *                 example: "10"
 *     responses:
 *       201:
 *         description: estudiante insertado
 *       400:
 *         description: todos los campos son requeridos
 *       500:
 *         description: Error al insertar el estudiante
 */
router.post('/', studentController.postStudent);


/**
 * @openapi
 * /api/student/{id}:
 *   put:
 *     summary: actualiza un estudiante
 *     tags: 
 *       - student
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - apellido
 *               - edad
 *               - calificacion
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "ejemplo"
 *               apellido:
 *                 type: string
 *                 example: "ejemplo"
 *               edad:
 *                 type: string
 *                 example: "20"
 *               calificacion:
 *                 type: string
 *                 example: "10"
 *     responses:
 *       200:
 *         description: estudiante actualizado
 *       404:
 *         description: error al actualizar
 *       500:
 *         description: Internal server error
 */
router.put('/:id', studentController.putStudent);


/**
 * @openapi
 * /api/student/{id}:
 *   delete:
 *     summary: Elimina un estudiante por su ID.
 *     tags:
 *       - student
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       204:
 *         description: Usuario eliminado correctamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete('/:id', studentController.deleteStudent);

module.exports = router;