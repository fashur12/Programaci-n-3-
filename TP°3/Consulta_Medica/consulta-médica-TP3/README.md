# 🏥 Proyecto: Clínica Salud+ - Gestión de Turnos Médicos

## 🔧 Tecnologías utilizadas

- Backend: **Node.js** + **Express**
- Motor de plantillas: **EJS**
- Autenticación: **JWT**
- Validación de datos: **Joi**
- Herramientas de testing de API: **Postman**
- Base de datos: **SQLite3**

# Estructuras de las Carpetas

```ruby
└───src
    ├───config
    ├───controllers
    │   ├───API
    │   └───home
    ├───middlewares
    ├───models
    │   └───sqlite
    │       ├───config
    │       │   └───db
    │       └───entities
    ├───public
    ├───routes
    ├───schemas
    └───views
        └───ejs
```

# Pruebas en Postman
Probamos las rutas principales con Postman para validar que el backend funcione correctamente:

- Crear pacientes
- Hacer login y obtener token
- Crear turnos (protegido con JWT)
- Consultar turnos por paciente
- Cancelar turnos

# Organización de las vistas

![Imagen de WhatsApp 2025-06-08 a las 19 56 54_3422273b](https://github.com/user-attachments/assets/41e87e84-26e0-4e37-a5fc-d13c549135e4)
![Imagen de WhatsApp 2025-06-08 a las 19 57 03_790b3b66](https://github.com/user-attachments/assets/453259f3-c603-45c4-ad0e-a89a3de5d1c8)
![Imagen de WhatsApp 2025-06-08 a las 19 57 09_8fef34b1](https://github.com/user-attachments/assets/8cf5f4cc-e489-4347-9592-d233f26be266)

----------------------------------
# ENDPOINTS :

## Endopint para **"Pacientes"**

`GET /api/v1/pacientes`

![Imagen de WhatsApp 2025-06-08 a las 21 28 38_4bc36951](https://github.com/user-attachments/assets/1a6ff5d3-5ef2-4df9-9c6f-68d87ad3fb7c) 

`DELETE /api/v1/paceintes/:id`

![Imagen de WhatsApp 2025-06-08 a las 21 49 43_5d660eaf](https://github.com/user-attachments/assets/d475cfc1-ef20-4c4f-b08e-81682ab011bb) 

`PUT /api/v1/pacientes/:id`

![Imagen de WhatsApp 2025-06-08 a las 21 47 50_37833192](https://github.com/user-attachments/assets/0af45376-e4ff-417a-9c75-84634162981b) 

`POST /api/v1/pacientes`

![Imagen de WhatsApp 2025-06-08 a las 21 46 25_e83b86c8](https://github.com/user-attachments/assets/a19e058e-f271-4dd3-ac8c-3d6fea5bc59e) 


## Endpoint para **"Turnos"**

`GET /api/v1/turnos`

![Imagen de WhatsApp 2025-06-08 a las 21 30 45_2bf131c5](https://github.com/user-attachments/assets/0cb94dcd-006e-469e-9a27-85109260b518) 

`DELETE /api/v1/turnos/:id`

![Imagen de WhatsApp 2025-06-08 a las 21 52 10_7e8569ad](https://github.com/user-attachments/assets/ec2d5ef2-0bc1-439c-9e7b-6be3ae07cc57) 

`POST /api/v1/turnos`

![Imagen de WhatsApp 2025-06-08 a las 21 51 16_b8976915](https://github.com/user-attachments/assets/29867349-4619-4761-8673-01eedbb14f7f) 


# INSTALACIÓN DEL PROYECTO

1. Lo primero seria clonar el repo

```js
git clone 
```

2.Instalar

```ruby
node https://nodejs.org/es
```

3. Instalar sus dependencias

```ruby
npm install
npm install joi
npm i jasonwebtoken
npm install sqlite3
npm install dotenv
```

4. Iniciar el proyecto

```ruby
npm run dev
```

5. Extenciones opcionales (VsCode)

```ruby
-sqlite
-sqlite viewer
-express
-ejs
-nodejs
```
-----------------------------
## Intengrantes Del Grupo:

- Joaquin Benamo
- Fausto Desch
- Franco Devaux
- Eros Perrone
