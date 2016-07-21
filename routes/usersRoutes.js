var userRouter = require('express').Router();
var User = require('../controllers/users');
var auth = require('../middleware/authorization');

userRouter.route('/usuario')
  .post(User.create);

userRouter.route('/usuario/:id')
  .get(auth, User.get)
  .put(auth, User.update)
  .delete(auth, User.delete);

userRouter.route('/usuario/auth')
  .post(User.auth);


module.exports = userRouter;

//Documentacion de rutas 

/**
 * @apiDefine success
 * @apiSuccess {Boolean} success True, Indica que la operacion fue exitosa
 */

/**
 * @apiDefine token
 * @apiHeader {String} x-acces-token Token para autenticar la paticion 
 */

/** 
 * @api {post} /usuario Crear un nuevo usuario
 * @apiName PostUsuario
 * @apiGroup Usuarios
 * 
 * @apiParam {String} username Nombre unico que identificara al usuario
 * @apiParam {String} nombre Nombre de usuario
 * @apiParam {String} apellidos Apellidos de usuario
 * @apiParam {String} rol Rol que desempeña el usuario [Director,Gerente,Auxiliar]
 * @apiParam {String} email Correo electronico del usuario
 * @apiParam {String} password Contraseña para el usuario
 * 
 * @apiUse success 
 * @apiSuccess {Object} user Informacion sobre el usuario que se creó
 * @apiSuccess {String} user._id Id del nuevo documento creado 
 * @apiSuccess {String} user.username Nombre unico que identificara al usuario
 * @apiSuccess {String} user.nombre Nombre de usuario
 * @apiSuccess {String} user.apellidos Apellidos de usuario
 * @apiSuccess {String} user.rol Rol que desempeña el usuario [Director,Gerente,Auxiliar]
 * @apiSuccess {String} user.email Correo electronico del usuario
 * @apiSuccess {String} user.password Contraseña para el usuario
 */

/**
 * @api {put} /usuario/:id Actualiza la informacion de un usuario existente
 * @apiDescription Solo se necesitan enviar los campos que se van a actualizar
 * @apiName PutUsuario
 * @apiGroup Usuarios
 * @apiUse token
 * 
 * @apiParam {String} [username] Nombre unico que identificara al usuario
 * @apiParam {String} [nombre] Nombre de usuario
 * @apiParam {String} [apellidos] Apellidos de usuario
 * @apiParam {String} [rol] Rol que desempeña el usuario [Director,Gerente,Auxiliar]
 * @apiParam {String} [email] Correo electronico del usuario
 * @apiParam {String} [password] Contraseña para el usuario
 * 
 * @apiUse success 
 * @apiSuccess {Object} user Informacion sobre el usuario que se creó
 * @apiSuccess {String} user._id Id del nuevo documento creado 
 * @apiSuccess {String} user.username Nombre unico que identificara al usuario
 * @apiSuccess {String} user.nombre Nombre de usuario
 * @apiSuccess {String} user.apellidos Apellidos de usuario
 * @apiSuccess {String} user.rol Rol que desempeña el usuario [Director,Gerente,Auxiliar]
 * @apiSuccess {String} user.email Correo electronico del usuario
 * @apiSuccess {String} user.password Contraseña para el usuario
 * 
 */

/**
 * @api {delete} /usuario/:id Eliminar un usuario
 * @apiName DeleteUsuario
 * @apiGroup Usuarios
 * @apiUse token
 * 
 * @apiUse success 
 * @apiSuccess {String} message Mensaje que confirma la operación
 */

/**
 * @api {post} /usuario/auth Autenticar Usuarios
 * @apiName AuthUsuario
 * @apiGroup Usuarios
 * 
 * @apiParam {String} username Nombre de Usuarios
 * @apiParam {String} password Contraseña de usuario 
 * 
 * @apiUse success
 * @apiSuccess {String} token Token que se utilizara para autenticar futuras peticiones
 */
