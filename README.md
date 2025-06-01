# Automatización de Pruebas E2E para Tic Tac Toe con Cypress

Este proyecto implementa la automatización de pruebas end-to-end (E2E) para el juego Tic Tac Toe, utilizando Cypress como framework principal. El objetivo es garantizar la calidad y el correcto funcionamiento de la aplicación mediante pruebas automatizadas, reportes visuales y buenas prácticas de ingeniería de software.

---

## Introducción a Cypress

Cypress es una herramienta moderna y robusta para la automatización de pruebas E2E en aplicaciones web. Su arquitectura permite ejecutar pruebas directamente en el navegador, proporcionando una experiencia de desarrollo interactiva, rápida y confiable. Entre sus principales características destacan:

- **Fácil instalación y configuración**: No requiere dependencias complejas.
- **Ejecución rápida y estable**: Permite detectar errores de manera temprana.
- **Depuración visual**: Ofrece capturas de pantalla y videos automáticos ante fallos.
- **Integración con CI/CD**: Compatible con flujos de trabajo de integración continua.
- **Soporte para múltiples tipos de pruebas**: E2E, integración y unitarias.

---

## Metodología de Automatización y Uso de Actions

Para este proyecto se adoptó la metodología **Page Object Model (POM)**, que promueve la separación de la lógica de interacción con la interfaz de usuario en módulos independientes denominados "actions". Esta estrategia aporta los siguientes beneficios:

- **Mantenibilidad**: Facilita la actualización de pruebas ante cambios en la interfaz.
- **Reutilización**: Permite emplear las mismas acciones en diferentes escenarios de prueba.
- **Escalabilidad**: Mejora la organización y el crecimiento del proyecto.

Las acciones reutilizables se encuentran en el archivo [`cypress/support/homePageActions.js`](cypress/support/homePageActions.js), donde se encapsulan las interacciones clave con el juego. De esta manera, los archivos de prueba (`.cy.js`) se enfocan en la lógica de los escenarios, manteniendo el código limpio y legible.

---

## Estructura del Proyecto

```plaintext
AutomatizacionCypressJuego_3enRaya/
├── cypress/
│   ├── fixtures/
│   ├── integration/
│   ├── plugins/
│   └── support/
│       └── homePageActions.js
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md
```

- **cypress/**: Contiene todos los archivos y carpetas relacionadas con Cypress.
  - **fixtures/**: Archivos estáticos para pruebas (p. ej., datos de prueba).
  - **integration/**: Especificaciones y pruebas automatizadas.
  - **plugins/**: Extensiones y personalizaciones para Cypress.
  - **support/**: Archivos de soporte, incluyendo acciones reutilizables.
- **node_modules/**: Dependencias del proyecto.
- **.gitignore**: Archivos y carpetas ignoradas por Git.
- **cypress.json**: Configuración de Cypress.
- **package.json**: Metadatos y dependencias del proyecto Node.js.
- **README.md**: Este archivo.

---

## Instalación y Ejecución

1. **Clonar el repositorio**
   ```sh
   git clone <url-del-repositorio>
   cd AutomatizacionCypressJuego_3enRaya
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

3. **Ejecutar Cypress**
   ```sh
   npx cypress open
   ```

4. **Seleccionar y ejecutar pruebas**
   - En la interfaz de Cypress, seleccionar las pruebas a ejecutar.
   - Observar los resultados y reportes generados automáticamente.

---

## Buenas Prácticas

- **Nombrado claro y descriptivo**: Utilizar nombres significativos para archivos, carpetas y pruebas.
- **Organización lógica**: Mantener una estructura coherente y predecible.
- **Uso de acciones reutilizables**: Favorecer la creación de acciones en `homePageActions.js` para interacciones comunes.
- **Comentarios y documentación**: Incluir explicaciones claras en el código y mantener actualizado este documento.

---

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y asegúrate de que las pruebas pasen.
4. Envía un pull request con una descripción clara de los cambios.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

## Contacto

Para consultas o sugerencias, por favor contacta a:

- **Nombre**: Stalin Patricio Riofrío Terrazas
- **Email**: sprt.prof@gmail.com
- **GitHub**: [StalinX]

¡Gracias por tu interés en mejorar este proyecto!

---

**Notas finales**:

- Este documento es un ejemplo y debe ser adaptado a las necesidades y características específicas de tu proyecto.
- Asegúrate de mantener actualizada la información de contacto y licencia.