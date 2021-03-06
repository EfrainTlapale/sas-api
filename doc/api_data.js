define({ "api": [
  {
    "type": "post",
    "url": "/usuario/auth",
    "title": "Autenticar Usuarios",
    "name": "AuthUsuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre de Usuarios</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña de usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token que se utilizara para autenticar futuras peticiones</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True, Indica que la operacion fue exitosa</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usersRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "delete",
    "url": "/usuario/:id",
    "title": "Eliminar un usuario",
    "name": "DeleteUsuario",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje que confirma la operación</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True, Indica que la operacion fue exitosa</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usersRoutes.js",
    "groupTitle": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-acces-token",
            "description": "<p>Token para autenticar la paticion</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/usuario",
    "title": "Crear un nuevo usuario",
    "name": "PostUsuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Nombre unico que identificara al usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nombre",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apellidos",
            "description": "<p>Apellidos de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "rol",
            "description": "<p>Rol que desempeña el usuario [Director,Gerente,Auxiliar]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electronico del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña para el usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Informacion sobre el usuario que se creó</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>Id del nuevo documento creado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Nombre unico que identificara al usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nombre",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.apellidos",
            "description": "<p>Apellidos de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.rol",
            "description": "<p>Rol que desempeña el usuario [Director,Gerente,Auxiliar]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo electronico del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>Contraseña para el usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True, Indica que la operacion fue exitosa</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usersRoutes.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "put",
    "url": "/usuario/:id",
    "title": "Actualiza la informacion de un usuario existente",
    "description": "<p>Solo se necesitan enviar los campos que se van a actualizar</p>",
    "name": "PutUsuario",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>Nombre unico que identificara al usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nombre",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "apellidos",
            "description": "<p>Apellidos de usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "rol",
            "description": "<p>Rol que desempeña el usuario [Director,Gerente,Auxiliar]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Correo electronico del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Contraseña para el usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Informacion sobre el usuario que se creó</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>Id del nuevo documento creado</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>Nombre unico que identificara al usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nombre",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.apellidos",
            "description": "<p>Apellidos de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.rol",
            "description": "<p>Rol que desempeña el usuario [Director,Gerente,Auxiliar]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>Correo electronico del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.password",
            "description": "<p>Contraseña para el usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>True, Indica que la operacion fue exitosa</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./routes/usersRoutes.js",
    "groupTitle": "Usuarios",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-acces-token",
            "description": "<p>Token para autenticar la paticion</p>"
          }
        ]
      }
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_efrain_dev_proyectos_sas_escuela_sas_api_doc_main_js",
    "groupTitle": "_home_efrain_dev_proyectos_sas_escuela_sas_api_doc_main_js",
    "name": ""
  }
] });
