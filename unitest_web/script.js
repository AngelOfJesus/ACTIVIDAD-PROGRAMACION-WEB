const app = document.getElementById("app");

const paginas = {
  inicio: `
    <div class="fade">
      <div class="hero">
        <h1>Bienvenido a UniTest</h1>
        <p>
          Sistema inteligente de evaluación diagnóstica para aspirantes al programa
          de Ingeniería de Software de la Universidad de Cundinamarca.
        </p>
        <div class="badge">Diagnóstico de ingreso • Innovación educativa</div>
      </div>

      <div class="grid">
        <div class="feature">
          <h3>📘 Evaluación diagnóstica</h3>
          <p>Permite identificar fortalezas y debilidades antes del ingreso formal a la carrera.</p>
        </div>
        <div class="feature">
          <h3>🧠 Áreas clave</h3>
          <p>Evalúa conocimientos en matemáticas, lógica y razonamiento verbal.</p>
        </div>
        <div class="feature">
          <h3>🏫 Apoyo institucional</h3>
          <p>Contribuye a procesos de nivelación, permanencia y calidad académica.</p>
        </div>
      </div>
    </div>
  `,

  conocenos: `
    <div class="fade">
      <h2>Acerca del proyecto</h2>
      <div class="card">
        UniTest es un sistema de evaluación orientado a aspirantes del programa de
        Ingeniería de Software. Su propósito es facilitar un diagnóstico temprano del
        nivel de preparación académica, permitiendo detectar fortalezas y debilidades
        antes del ingreso a la universidad.
      </div>
      <div class="card">
        Este proyecto nace como respuesta a la necesidad de mejorar la caracterización
        del nivel de ingreso y apoyar estrategias institucionales de acompañamiento
        académico y permanencia estudiantil.
      </div>
    </div>
  `,

  servicios: `
    <div class="fade">
      <h2>Módulos principales de UniTest</h2>
      <div class="grid">
        <div class="feature">📝 Registro y autenticación de usuarios</div>
        <div class="feature">💻 Ingreso a la plataforma</div>
        <div class="feature">📚 Consulta de pruebas asignadas</div>
        <div class="feature">🎯 Acceso a la prueba según la ingeniería</div>
        <div class="feature">✅ Realización de la prueba</div>
        <div class="feature">🔍 Solicitud de revisión</div>
        <div class="feature">📊 Publicación de resultados finales</div>
      </div>
    </div>
  `,

  equipo: `
    <div class="fade">
      <h2>Equipo de trabajo</h2>
      <div class="card">
        Proyecto académico desarrollado en la Universidad de Cundinamarca,
        Sede Girardot, dentro del programa de Ingeniería de Software.
      </div>

      <div class="authors">
        <div class="author">👨‍💻 Eyder Fernando Esguerra Acevedo</div>
        <div class="author">👨‍💻 Rubén Alejandro Vargas Calderón</div>
      </div>

      <div class="card">
        <strong>UniTest para Evaluación de Aspirantes a Ingeniería</strong><br><br>
        Enfocado en fortalecer el proceso de diagnóstico previo al ingreso universitario
        y apoyar la adaptación del estudiante al entorno académico.
      </div>
    </div>
  `,

  contacto: `
    <div class="fade">
      <h2>Contacto</h2>
      <div class="card">
        <p>Déjanos tu mensaje para conocer más sobre el proyecto UniTest.</p>
        <input placeholder="Nombre completo">
        <input placeholder="Correo electrónico">
        <textarea placeholder="Escribe tu mensaje"></textarea>
        <button class="btn">Enviar mensaje</button>
      </div>
    </div>
  `
};

function cargar(seccion) {
  app.innerHTML = paginas[seccion];
}

document.querySelectorAll("[data-seccion]").forEach(btn => {
  btn.addEventListener("click", function() {
    const seccion = this.dataset.seccion;
    cargar(seccion);
  });
});

cargar("inicio");
