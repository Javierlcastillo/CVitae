import React from 'react';
import { Download, Mail, Phone, Linkedin, MapPin, Calendar, ExternalLink } from 'lucide-react';
import './Curriculum.css';

const Curriculum = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/documents/JavierLuisCastillo_CV.pdf';
    link.download = 'JavierLuisCastillo_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-container">
          <h1 className="main-title">
            <span>Javier</span>{' '}
            <span className="name-highlight">Luis Castillo Solórzano</span>
          </h1>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Monterrey, México</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <a href="mailto:lucaso.javier@gmail.com" className="contact-link">
                lucaso.javier@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <span>+52 5585756693</span>
            </div>
            <div className="contact-item">
              <Linkedin size={18} className="contact-icon" />
              <a 
                href="http://linkedin.com/in/javierluiscastillosolorzano" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          <button onClick={handleDownloadCV} className="btn-primary">
            <Download size={20} />
            Descargar CV (PDF)
          </button>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Section */}
        <section className="section">
          <h2 className="section-title">Perfil</h2>
          <div className="card">
            <p className="card-description">
              Estudiante de Ingeniería en Tecnologías Computacionales con una sólida base en desarrollo web, 
              ciencia de datos y liderazgo. Experiencia en gestión de proyectos, promoción de marcas y 
              organización de eventos. Atleta de alto rendimiento representando a varias instituciones y selecciones.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Educación</h2>
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">ITESM Campus Monterrey</h3>
                <p className="card-subtitle">Ingeniería en Tecnologías Computacionales</p>
              </div>
              <span className="card-date">Junio 2027</span>
            </div>
            <p className="card-location">Monterrey, México</p>
          </div>
          
          <div className="card">
            <div className="card-header">
              <div>
                <h3 className="card-title">PREPATEC Campus Santa Fé</h3>
                <p className="card-subtitle">Reconocimiento de Excelencia deportiva y nominación a Borrego de Oro</p>
              </div>
              <span className="card-date">Agosto 2019 - Junio 2022</span>
            </div>
            <p className="card-location">Ciudad de México, México</p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b-2 border-teal-400 pb-2">
            Experiencia
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">IBM -- Internship</h3>
                  <p className="text-teal-400 font-semibold">Technical Sales</p>
                </div>
                <span className="text-teal-400 font-semibold">Junio 2025 - ACTUAL</span>
              </div>
              <p className="text-gray-400 mb-3">Monterrey, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Practicante en IBM Global Sales obteniendo experiencia en el desarrollo y funcionamiento de productos de venta.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Proyecto Solidario</h3>
                  <p className="text-teal-400 font-semibold">Desarrollador de Página Web [Servicio Social]</p>
                </div>
                <span className="text-teal-400 font-semibold">Enero 2025 - Febrero 2025</span>
              </div>
              <p className="text-gray-400 mb-3">Monterrey, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Encargado en el desarrollo, actualización y mantenimiento de plataforma digital para el desarrollo de procedimientos médicos geriátricos para el gobierno de Nuevo Leon.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Huellas Que Trascienden</h3>
                  <p className="text-teal-400 font-semibold">Administrador de Página Web [Servicio Social]</p>
                </div>
                <span className="text-teal-400 font-semibold">Agosto 2024 - Diciembre 2024</span>
              </div>
              <p className="text-gray-400 mb-3">Monterrey, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>
                    Encargado en el desarrollo, actualización y mantenimiento de la página web{' '}
                    <a 
                      href="https://artisan2you.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 underline inline-flex items-center gap-1"
                    >
                      artisan2you.com
                      <ExternalLink size={14} />
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Snapchat</h3>
                  <p className="text-teal-400 font-semibold">Becario</p>
                </div>
                <span className="text-teal-400 font-semibold">Agosto 2023 - Diciembre 2023</span>
              </div>
              <p className="text-gray-400 mb-3">Monterrey, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Responsable de desarrollar e implementar activaciones de la marca en el Tec Campus Monterrey.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Responsable de asesorar y motivar a los embajadores de marca emergentes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Snapchat</h3>
                  <p className="text-teal-400 font-semibold">Embajador y Patrocinador</p>
                </div>
                <span className="text-teal-400 font-semibold">Agosto 2022 - Julio 2023</span>
              </div>
              <p className="text-gray-400 mb-3">Ciudad de México, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Responsable de desarrollar planes para aumentar el reconocimiento de marca con estudiantes de diversas universidades en la Ciudad de México (entre ellas Tec CSF, Ibero, etc) mediante activaciones, eventos y redes sociales.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Leadership and Activities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b-2 border-teal-400 pb-2">
            Liderazgo y Actividades
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">Equipo Representativo de Básquetbol Div-I</h3>
                <span className="text-teal-400 font-semibold">2022 - Actual</span>
              </div>
              <p className="text-gray-400">Monterrey, México</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">Participación en Rocket Hackathon 2024</h3>
              <p className="text-gray-400">Monterrey, México</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">Director de Vinculación y Patrocinios en Data Science Club Tec MTY</h3>
                <span className="text-teal-400 font-semibold">Agosto 2024 - Actual</span>
              </div>
              <p className="text-gray-400 mb-3">Monterrey, México</p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Desarrollo de la 4ta edición del Datathon (Hackathon estudiantil más grande de latinoamérica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-2">•</span>
                  <span>Vinculación y Contacto con las Empresas</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-400 mb-6 border-b-2 border-teal-400 pb-2">
            Habilidades e Intereses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Técnicas</h3>
              <div className="space-y-2">
                {['Python avanzado', 'C++ avanzado', 'HTML y CSS', 'GIT', 'MySQL', 'Machine Learning'].map((skill) => (
                  <span key={skill} className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Idiomas</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Español</span>
                  <span className="text-teal-400">Nativo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Inglés</span>
                  <span className="text-teal-400">Fluido</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Francés</span>
                  <span className="text-teal-400">Intermedio</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Habilidades Blandas</h3>
              <div className="space-y-2">
                {['Liderazgo', 'Trabajo en equipo', 'Resolución de problemas', 'Multitask'].map((skill) => (
                  <span key={skill} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">¿Interesado en mi perfil?</h3>
            <p className="text-teal-100 mb-6">Descarga mi CV completo en formato PDF</p>
            <button
              onClick={handleDownloadCV}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Download size={20} />
              Descargar CV Completo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;