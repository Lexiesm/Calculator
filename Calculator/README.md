# Tarea 3 🔢

## Consideraciones 📖
Se uso chatgpt solo para corregir un error que se me estaba presentando al querer hacer las request de POST, en donde al hacer las operaciones de resta y división, en el frontend me entregaba un error de ErrorJSON.parse que logré corregir gracias a esta plataforma.

## ¿Cómo iniciar?
Este código se hizo en linux, para poder utilizarlo, debes abrir dos terminales, una ubicado en la carpeta backend y otra en el frontend, inicializar con el comando 'npm install' en cada terminal para que instale todas las dependencias necesarias para que el codigo corra bien en cada carpeta. Luego en cada terminal ejecutar el comando 'yarn dev' (hacerlo en el orden que más se acomode).

Luego, debes dirigirte a tu navegador y acceder al siguiente link: http://localhost:3001/, ya que es el puerto en que se verá la calculadora. Se usó este puerto ya que el puerto 80 presentaba problemas, en una issue de github se nos dice que podemos usar cualquier otro.

La calculadora es bastante intuitiva por lo que hay que apretar las teclas, operadores y el '=' para generar resultado.

✔️Se pueden realizar todas las operaciones correctamente  
✔️Informa el error al dividir por 0  
❌No maneja nos números negativos (cuando se ingresan)  
❌Cuando se genera un resultado y se desea iniciar otra operación, la pantalla no se "pone en 0", hay que borrar con C (para borrar todo) o con DELETE (para borrar dígito por dígito).