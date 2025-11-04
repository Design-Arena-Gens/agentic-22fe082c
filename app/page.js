'use client';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedIdea, setExpandedIdea] = useState(null);

  const businessIdeas = {
    mediacion: {
      title: "Mediación y Resolución de Conflictos",
      icon: "⚖️",
      ideas: [
        {
          id: "m1",
          nombre: "Centro de Mediación Familiar Virtual y Presencial",
          descripcion: "Servicio híbrido de mediación para familias con miembros en situación de vulnerabilidad (adicciones, desapariciones, conflictos).",
          modalidad: "60% virtual, 40% presencial",
          inversion: "Media ($2,000-$5,000 USD)",
          herramientasIA: [
            {
              herramienta: "ChatGPT / Claude API",
              uso: "Asistente de pre-mediación: evalúa casos mediante formularios, identifica nivel de urgencia y sugiere estrategias iniciales"
            },
            {
              herramienta: "Descript o Otter.ai",
              uso: "Transcripción automática de sesiones (con consentimiento) para análisis de patrones y seguimiento"
            },
            {
              herramienta: "Sentiment Analysis (Azure AI / Google Cloud)",
              uso: "Análisis emocional en comunicaciones escritas entre partes para detectar escaladas"
            },
            {
              herramienta: "Notion AI o ClickUp AI",
              uso: "Gestión automatizada de casos, recordatorios y seguimiento personalizado post-mediación"
            }
          ],
          pasos: [
            "Certificarse en mediación (cursos online 3-6 meses)",
            "Crear sitio web con formulario de evaluación inicial (conectado a IA)",
            "Configurar sistema de videollamadas seguras",
            "Desarrollar protocolos con plantillas personalizables vía IA",
            "Marketing en redes sociales y colaboraciones con DIF, ONGs"
          ],
          ventajas: "Flexibilidad horaria, alta demanda, trabajo significativo",
          ingresos: "$500-$3,000 USD/mes según casos atendidos"
        },
        {
          id: "m2",
          nombre: "Mediación Escolar y Bullying Prevention",
          descripcion: "Consultoría para escuelas en prevención de acoso y mediación entre estudiantes, padres y maestros.",
          modalidad: "70% presencial, 30% virtual",
          inversion: "Baja ($500-$1,500 USD)",
          herramientasIA: [
            {
              herramienta: "Chatbot personalizado (Voiceflow o Botpress)",
              uso: "Bot confidencial donde niños/adolescentes reportan situaciones de acoso 24/7"
            },
            {
              herramienta: "GPT-4 + API",
              uso: "Generación de planes de intervención personalizados según perfil del estudiante"
            },
            {
              herramienta: "Canva + Magic Write",
              uso: "Creación rápida de materiales educativos sobre resolución de conflictos"
            },
            {
              herramienta: "Google Forms + Zapier + AI",
              uso: "Encuestas de clima escolar con análisis automático de riesgos"
            }
          ],
          pasos: [
            "Desarrollar propuesta de servicios para escuelas",
            "Crear presentación demo con casos de éxito simulados",
            "Networking con directores y psicólogos escolares",
            "Implementar chatbot de reporte anónimo",
            "Ofrecer taller gratuito inicial para demostrar valor"
          ],
          ventajas: "Contratos recurrentes, impacto social alto",
          ingresos: "$1,000-$4,000 USD/mes por escuela"
        }
      ]
    },
    trabajoSocial: {
      title: "Trabajo Social y Apoyo Comunitario",
      icon: "🤝",
      ideas: [
        {
          id: "ts1",
          nombre: "Plataforma de Localización y Reunificación Familiar",
          descripcion: "Servicio que ayuda a familias a buscar personas desaparecidas usando tecnología y redes de apoyo.",
          modalidad: "80% virtual, 20% presencial (investigación de campo)",
          inversion: "Media-Alta ($3,000-$7,000 USD)",
          herramientasIA: [
            {
              herramienta: "Reconocimiento Facial (Azure Face API / AWS Rekognition)",
              uso: "Comparar fotos de personas desaparecidas con bases de datos públicas y redes sociales"
            },
            {
              herramienta: "Pimeyes (AI Search Engine)",
              uso: "Búsqueda inversa de imágenes en toda la web"
            },
            {
              herramienta: "Claude / GPT-4",
              uso: "Analizar reportes policiales, testimonios y generar líneas de investigación"
            },
            {
              herramienta: "Geolocalización + IA (Google Maps API)",
              uso: "Mapeo de últimas ubicaciones conocidas y predicción de áreas probables"
            },
            {
              herramienta: "Chatbot multicanal (WhatsApp Business API)",
              uso: "Recibir reportes 24/7 y coordinar con voluntarios automáticamente"
            }
          ],
          pasos: [
            "Aliarse con fundaciones de personas desaparecidas",
            "Desarrollar MVP de plataforma web con API de IA",
            "Crear protocolo de verificación de identidad",
            "Capacitar red de voluntarios",
            "Lanzar campaña en redes sociales y medios locales"
          ],
          ventajas: "Alto impacto social, posibilidad de financiamiento gubernamental/ONG",
          ingresos: "Modelo mixto: servicios pagados ($200-$500/caso) + donaciones + grants"
        },
        {
          id: "ts2",
          nombre: "Centro de Apoyo Virtual para Adicciones",
          descripcion: "Grupos de apoyo, asesoría individual y seguimiento para personas en recuperación y sus familias.",
          modalidad: "90% virtual, 10% presencial (sesiones críticas)",
          inversion: "Baja-Media ($1,000-$3,000 USD)",
          herramientasIA: [
            {
              herramienta: "Replika / Character.AI (personalizado)",
              uso: "Compañero virtual de apoyo emocional disponible 24/7 para momentos de crisis"
            },
            {
              herramienta: "Woebot o IA de salud mental",
              uso: "Terapia cognitivo-conductual automatizada como complemento"
            },
            {
              herramienta: "Análisis de patrones (Python + ML)",
              uso: "Detectar señales de recaída en mensajes/check-ins diarios"
            },
            {
              herramienta: "GPT-4 para contenido",
              uso: "Generar mensajes motivacionales personalizados según etapa de recuperación"
            },
            {
              herramienta: "Calendly + IA",
              uso: "Agendamiento inteligente según estado emocional detectado"
            }
          ],
          pasos: [
            "Certificarse en consejería de adicciones (online)",
            "Crear comunidad privada (Discord/Telegram/WhatsApp)",
            "Implementar sistema de check-ins diarios con IA",
            "Desarrollar programa de 12 semanas con contenido multimedia",
            "Establecer alianzas con clínicas de rehabilitación"
          ],
          ventajas: "Demanda creciente, servicio recurrente, bajo costo operativo",
          ingresos: "$30-$100/mes por usuario (modelo suscripción)"
        },
        {
          id: "ts3",
          nombre: "Consultoría en Trabajo Social para ONGs",
          descripcion: "Asesoría para organizaciones sin fines de lucro en diseño de programas, evaluación de impacto y capacitación.",
          modalidad: "50% virtual, 50% presencial",
          inversion: "Baja ($300-$1,000 USD)",
          herramientasIA: [
            {
              herramienta: "Claude / GPT-4",
              uso: "Redactar propuestas de financiamiento y reportes de impacto en minutos"
            },
            {
              herramienta: "Gamma.app o Beautiful.ai",
              uso: "Crear presentaciones profesionales automáticamente"
            },
            {
              herramienta: "Power BI + IA",
              uso: "Dashboards automáticos de métricas de impacto social"
            },
            {
              herramienta: "SurveyMonkey + análisis IA",
              uso: "Evaluaciones de necesidades comunitarias con insights automáticos"
            },
            {
              herramienta: "Jasper AI o Copy.ai",
              uso: "Contenido para campañas de donación y awareness"
            }
          ],
          pasos: [
            "Crear portafolio digital con casos de uso",
            "Ofrecer consultoría gratuita a 2-3 ONGs pequeñas (testimonios)",
            "Desarrollar paquetes de servicio (básico/premium)",
            "Networking en eventos de sector social",
            "Publicar contenido educativo en LinkedIn"
          ],
          ventajas: "Horarios flexibles, trabajo por proyectos, diversidad de clientes",
          ingresos: "$1,500-$5,000 USD/mes por proyecto"
        }
      ]
    },
    capacitacion: {
      title: "Educación y Capacitación",
      icon: "📚",
      ideas: [
        {
          id: "c1",
          nombre: "Academia Online de Trabajo Social y Mediación",
          descripcion: "Cursos grabados y en vivo sobre intervención en crisis, trabajo con poblaciones vulnerables, mediación.",
          modalidad: "100% virtual",
          inversion: "Media ($2,000-$4,000 USD)",
          herramientasIA: [
            {
              herramienta: "Synthesia o HeyGen",
              uso: "Crear videos de capacitación con avatar IA (reducir tiempo de grabación)"
            },
            {
              herramienta: "ChatGPT + Zapier",
              uso: "Tutor virtual que responde dudas de estudiantes 24/7"
            },
            {
              herramienta: "Kajabi o Teachable + IA",
              uso: "Plataforma de cursos con recomendaciones personalizadas de contenido"
            },
            {
              herramienta: "Quizlet AI o ExamSoft",
              uso: "Generación automática de exámenes y certificaciones"
            },
            {
              herramienta: "Canva Magic Design",
              uso: "Materiales didácticos (infografías, workbooks) generados automáticamente"
            }
          ],
          pasos: [
            "Definir 3-5 cursos principales basados en experiencia",
            "Grabar contenido (usar IA para acelerar producción)",
            "Crear sitio web con pasarela de pago",
            "Implementar chatbot de ventas y soporte",
            "Lanzar con estrategia de contenido gratuito en YouTube/TikTok"
          ],
          ventajas: "Ingresos pasivos, escalable, bajo costo marginal",
          ingresos: "$2,000-$10,000 USD/mes (según matrícula)"
        },
        {
          id: "c2",
          nombre: "Talleres Corporativos de Bienestar y Manejo de Crisis",
          descripcion: "Capacitación para empresas sobre salud mental, prevención de adicciones, mediación de conflictos laborales.",
          modalidad: "60% presencial, 40% virtual",
          inversion: "Baja ($500-$1,500 USD)",
          herramientasIA: [
            {
              herramienta: "Mentimeter + IA",
              uso: "Encuestas interactivas en vivo con análisis automático de clima laboral"
            },
            {
              herramienta: "GPT-4",
              uso: "Personalizar contenido de taller según industria del cliente"
            },
            {
              herramienta: "Miro + AI",
              uso: "Facilitación virtual con pizarras colaborativas inteligentes"
            },
            {
              herramienta: "LinkedIn Sales Navigator + IA",
              uso: "Prospección automatizada de empresas potenciales"
            }
          ],
          pasos: [
            "Diseñar 3 talleres modulares (2-4 horas cada uno)",
            "Crear pitch deck para RH de empresas",
            "Ofrecer webinar gratuito para líderes de RH",
            "Establecer precios corporativos",
            "Solicitar testimonios y casos de éxito"
          ],
          ventajas: "Pagos altos por sesión, contratos recurrentes, networking corporativo",
          ingresos: "$500-$2,000 USD por taller"
        }
      ]
    },
    consultoria: {
      title: "Consultoría Especializada",
      icon: "💼",
      ideas: [
        {
          id: "co1",
          nombre: "Peritaje Social y Evaluaciones para Casos Legales",
          descripcion: "Informes periciales para juzgados en casos de custodia, adopción, violencia doméstica.",
          modalidad: "40% virtual, 60% presencial",
          inversion: "Baja ($500-$1,500 USD)",
          herramientasIA: [
            {
              herramienta: "Claude / GPT-4",
              uso: "Redacción estructurada de informes periciales con formato legal correcto"
            },
            {
              herramienta: "Grammarly Business + IA",
              uso: "Revisión avanzada de redacción técnica y legal"
            },
            {
              herramienta: "Casebook PBC + IA",
              uso: "Software de gestión de casos sociales con análisis predictivo"
            },
            {
              herramienta: "DocuSign + automatización",
              uso: "Firma digital y gestión de documentos legales"
            }
          ],
          pasos: [
            "Obtener certificación de perito (requisitos por estado/país)",
            "Registrarse en tribunales locales",
            "Crear red de contactos con abogados",
            "Desarrollar plantillas de informes con IA",
            "Establecer tarifas competitivas"
          ],
          ventajas: "Pagos por evaluación altos, trabajo especializado",
          ingresos: "$500-$2,000 USD por evaluación"
        },
        {
          id: "co2",
          nombre: "Gestora de Casos para Adultos Mayores y Familias",
          descripcion: "Coordinación de servicios médicos, legales y sociales para adultos mayores y sus familias.",
          modalidad: "50% virtual, 50% presencial",
          inversion: "Baja-Media ($800-$2,500 USD)",
          herramientasIA: [
            {
              herramienta: "CareZone + IA",
              uso: "App de coordinación de medicamentos y citas con alertas inteligentes"
            },
            {
              herramienta: "GPT-4 + base de datos",
              uso: "Recomendador de recursos comunitarios según necesidades específicas"
            },
            {
              herramienta: "ElliQ (AI companion)",
              uso: "Compañía virtual para adultos mayores con seguimiento de bienestar"
            },
            {
              herramienta: "Airtable + automatización",
              uso: "CRM para gestionar múltiples casos con workflows automáticos"
            }
          ],
          pasos: [
            "Certificarse en geriatría social (cursos online)",
            "Crear base de datos de recursos locales",
            "Desarrollar paquetes de servicio mensuales",
            "Marketing en comunidades de retiro y hospitales",
            "Implementar sistema de seguimiento con IA"
          ],
          ventajas: "Mercado creciente, servicios recurrentes, alta retención",
          ingresos: "$300-$1,500 USD/mes por familia"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            💡 Ideas de Negocio: Trabajo Social & Mediación
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Propuestas personalizadas basadas en 15 años de experiencia con poblaciones vulnerables
            <br />
            <span className="text-purple-600 font-semibold">Potenciadas con Inteligencia Artificial</span>
          </p>
        </header>

        {!selectedCategory ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {Object.entries(businessIdeas).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-purple-100 hover:border-purple-400"
              >
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-xl font-bold text-gray-800">{category.title}</h2>
                <div className="mt-4 text-purple-600 font-semibold">
                  {category.ideas.length} ideas →
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setExpandedIdea(null);
              }}
              className="mb-6 flex items-center text-purple-600 hover:text-purple-800 font-semibold"
            >
              ← Volver a categorías
            </button>

            <div className="bg-white rounded-2xl p-6 shadow-xl mb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-5xl">{businessIdeas[selectedCategory].icon}</span>
                <h2 className="text-3xl font-bold text-gray-800">
                  {businessIdeas[selectedCategory].title}
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {businessIdeas[selectedCategory].ideas.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-purple-300 transition-all"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedIdea(expandedIdea === idea.id ? null : idea.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {idea.nombre}
                        </h3>
                        <p className="text-gray-600 mb-4">{idea.descripcion}</p>
                        <div className="flex flex-wrap gap-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            {idea.modalidad}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            Inversión: {idea.inversion}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                            {idea.ingresos}
                          </span>
                        </div>
                      </div>
                      <div className="text-3xl ml-4">
                        {expandedIdea === idea.id ? '▼' : '▶'}
                      </div>
                    </div>
                  </div>

                  {expandedIdea === idea.id && (
                    <div className="px-6 pb-6 border-t-2 border-gray-100 pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                            🤖 Herramientas de IA
                          </h4>
                          <div className="space-y-4">
                            {idea.herramientasIA.map((h, idx) => (
                              <div key={idx} className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                                <div className="font-bold text-purple-900 mb-1">
                                  {h.herramienta}
                                </div>
                                <div className="text-sm text-gray-700">
                                  <span className="font-semibold">Uso:</span> {h.uso}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                            🎯 Pasos para Iniciar
                          </h4>
                          <ol className="space-y-3">
                            {idea.pasos.map((paso, idx) => (
                              <li key={idx} className="flex gap-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                                  {idx + 1}
                                </span>
                                <span className="text-gray-700 pt-1">{paso}</span>
                              </li>
                            ))}
                          </ol>

                          <div className="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                            <div className="font-bold text-green-900 mb-1">✅ Ventajas</div>
                            <div className="text-sm text-gray-700">{idea.ventajas}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                        <h5 className="font-bold text-purple-900 mb-2">💰 Potencial de Ingresos</h5>
                        <p className="text-gray-800">{idea.ingresos}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="mt-16 text-center text-gray-600 border-t-2 border-gray-200 pt-8">
          <p className="text-sm">
            💡 Todas estas ideas están diseñadas para ser flexibles, permitiendo trabajo desde casa
            con asistencia presencial cuando sea necesario.
          </p>
          <p className="text-sm mt-2">
            🤖 Las herramientas de IA mencionadas ayudan a automatizar procesos, reducir costos operativos
            y escalar el negocio sin requerir gran equipo inicial.
          </p>
        </footer>
      </div>
    </div>
  );
}
