# Practicas React de Master Lemon Code 8 2020/2021

Intro
Laboratorio del módulo de React, lo hemos divido en tres secciones

Básico: si queréis simplemente práctica el mínimo de esta parte y aprobarla (tenéis opciones para subir nota) y centraros en otro framework / librería.
Intermedio
Avanzado: si queréis prácticar a fondo y trabajar con arquitectura.
Mi consejo es que si queréis apostar por React os hagáis varios ejercicios, arrancad por los basicos, e id saltando, de postre intentar hacer uno de los avanzados (ojo avanzado no tiene porque decir largo), de los avanzados los hay interesantes, por ejemplo hacer implementaciones de origin.

IMPORTANTE: estás prácticas las tenéis que subir a vuestro repositorio de Github (o si lo prefirís Gitlab o Bitbucket público).

Básico
Filtrado organización miembros Github
Vale como ejercicio básico el propuesta de filtrar el listado de miembros de Github a la organización que indique el usuario.

Enunciado ejercicio

Intermedio
Manejo de contexto con listado de imagenes.

listado-imagenes

Pediso, desafío cabecera / detalle pedido

Desafío pedidos

Avanzado
Vamos a trabajar sobre el proyecto real de Origin, tenemos tres repos:

origin-employee: es la aplicación que utilizaría un empleado, se loga, y introduce las horas que ha echado cada semana en un proyecto.Enlace al Repo

origin-admin: es la herramienta que usario el departamente de recursos humanos, pueden añadir empleados, proyectos y sacar informes de horas imputadas a proyectos.Enlace al repo

origin-backend: El backend de la aplicación.Enlace al repo

El proyecto está vivo, estamos en fase de conexión de backend mock, puede que tengas que ejecutar el backend para poder tirar de front.

Si estás tirando de mock en el login introduce la combinación "admin/test".

Acuerdate que para trabajar con el repo lo mejor es que te hagas un fork, si vas a acometer más de un caso crea una rama por caso.

Casos que puedes implementar.

Origin Employee
Cambio de semana en origin-employee
Este caso tiene su miga, aplicaría a origin-front-employee.

Ahora mismo la semana en la que se está incurriendo esta harcodeada, estaría muy bien:

Calcular la semana actual en base al lunes anterior de la misma.
Mostrar esa semana en vez del dato harcodeado.
Poder cambiarla con las flechas de izquierda / derecha.
Que se actualizarán las cabeceras de la tabla a las fechas que tocaran.
Que se mostraran los datos acordes a la fecha en cuestión.
Esto tiene mucha miga, es buena idea romperlo en casos separados:

Caso 1: Primero calcular el lunes anterior, PR.
Caso 2: Despues montar un hook para manejar la fecha actual y poder, dandole cualquier fecha calcular el lunes anterior. Mostrar la fecha en la barra superior y que dandole a anterior/siguiente la cambie.
Caso 3: Cambiar las columnas por las que toque de fecha actual.
Caso 4: Este tiene su complejidad, mostrar las celdas de la fecha actual (aquí habría que tocar bastantes cosas, y pensar en varias aproximaciones, la más sencilla es que al cambiar de semana se pidiera a servidor el incurrido de esa semana, otra más compleja sería ir acumulando fechas conforme navegas, así te ahorras llamada a servidor, esta sería más por jugar a como implementarlo, igual no sería práctico tanto esfuerzo, un usuario el 90% de las veces va a rellenar la hoja de horas de su semana).
Consejos para ir implementando esto:

Plantear crear un usePeriod hook que te devolviera el periodo actual (una fecha con el lunes anterior), así como un setter para dandole una fecha calcular el lunes anterior, o el siguiente.

Para el tema de calcular el lunes anterior os siguiente puede encontrar cosas ya hechas (también te podrías plantear traerte dateFns).

Arranca por poner el usePeriod en el time.container y pasalo para abajo en el tooblar muestra el dato.

Ahora te toca implementar el anterior / siguiente, aquí te darás cuenta de que el algoritmo que has elegido para calcular el siguiente lunes tiene fallos y que deberías de haberle añadido pruebas unitarias o usar una librería estándar :).

El siguiente paso a aquí es plantearte si usar dos contextos uno para periodos y otro para contextos, y así evitar el prop drill hell.

Si has llegado hasta aquí enhorabuena, vamos a por las columnas del grid, si te fijas están harcodeadas, tendríamos que calcularlas en el container y pasarlas para abajo.

Ahora toca la parte de contenido, lo más fácil es asumir que la API te va a dar los datos exactos por proyectos de lunes a viernes, o al menos asumir eso en el ViewModel, y que un mapper se coma la complejidad de montar la estructura y de rellenar de ceros lo días que no vengan informados.

Refactor mover a Contexto Projects
Ahora mismo estamos pasando por todos los componentes la lista de proyectos y su accciones, esto está bien porque los componentes nos quedan bastante estancos, pero es un fastidio sufrir el propDrill, ¿ Merecería la pena encapsular esto a un contexto que wrapeariamos a nivel de timeContainer y con useContext llamarlo desde donde necesitamos (quizás no en todos los componentes hijos pero donde aporte valor).

Origin Admin
Implementar change password
Pasos:

Añadir una nueva scene para cambiar clave.
Añadir opción en el submodule list para resetear clave (en una aplicación real tendríamos opción de perfil de usuarios y de allí ya iriamos... pero vamos a simplificar).
Implementar formulario cambio de clave (teclear clave antigua, clave actual, repetir clave).
Añadir formik y fonk.
Ojo en cuanto a validaciones: clave antiga y repetir clave son campos obligatorios y tienen que coincidir, no metas la validación de clave antigua, esa la ejecutas cuando el usuario pulse en submit (si no le estaríamos dando pistas a un atacante para que fuera probando claves ;)).
Implementalo todo con mock.
Proyecto >> Empleados >> Paginación y Filtrado
Sería interesante ver como hacer paginación y filtrado en la lista de empleados.

Como es algo para empresas pequeñas/medianas partimos de que tenemos la lista completa de empleados en memoria.

Mira de usar las soluciones ya disponibles de arquitectura para afrontarlo.

Empleado >> Proyectos >> Paginación y Filtrado
Sería interesante ver como hacer paginación y filtrado en la lista de empleados.

Como es algo para empresas pequeñas/medianas partimos de que tenemos la lista completa de empleados en memoria.

Mira de usar las soluciones ya disponibles de arquitectura para afrontarlo.

Exportación a Excel JS
Este tiene que ver poco con React (salvo extraer los datos y disparar la petición).

Pero si a alguien le pica la curiosidad, ¿ Cómo podríamos generar los informes en Excel? Tirando 100% de JS en cliente :-)

