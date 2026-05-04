import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  Database, 
  Network, 
  Cpu, 
  ChevronRight, 
  Terminal,
  Server,
  Box,
  Layers,
  Award,
  Printer,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('experiencia');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const profile = {
    name: "KATHERINE ABIGAIL GARCÍA MONTANO",
    role: "Ingeniera en Computación en Formación | Backend Developer",
    location: "Managua, Nicaragua",
    phone: "505 8362-9590",
    email: "katherinegarciaam05@gmail.com",
    bio: "Estudiante de quinto año de Ingeniería en Computación con un perfil técnico orientado al desarrollo backend y administración de infraestructura de TI. Especializada en la construcción de sistemas robustos utilizando PHP, Java y C#, con sólida experiencia en la gestión de bases de datos relacionales como PostgreSQL y SQL Server. Poseo conocimientos prácticos en la contenedorización de aplicaciones con Docker, administración de redes avanzadas (Omada) y gestión de flujos de trabajo certificados por Asana. Me distingo por mi pensamiento analítico, capacidad de resolución de incidencias en entornos críticos y un enfoque constante en la optimización de procesos."
  };

  const skills = [
    { name: "Programación", items: ["Java", "PHP", "C#", "Python"], icon: <Code2 className="w-5 h-5" />, color: "bg-blue-600" },
    { name: "Backend & Datos", items: ["PostgreSQL", "SQL Server", "REST APIs", "Lógica SQL"], icon: <Database className="w-5 h-5" />, color: "bg-emerald-600" },
    { name: "Infraestructura", items: ["Omada TP-Link", "Soporte Técnico", "Redes LAN/WLAN"], icon: <Network className="w-5 h-5" />, color: "bg-indigo-600" },
    { name: "Gestión & DevOps", items: ["Asana Certified", "Docker", "Git/GitHub"], icon: <Box className="w-5 h-5" />, color: "bg-orange-600" }
  ];

  const experience = [
    {
      company: "Voov",
      role: "Soporte Técnico / TI",
      period: "2025 – 2026",
      desc: "Liderazgo en la resolución de incidencias de hardware/software y administración de redes Omada. Colaboración activa en el desarrollo de la arquitectura lógica para herramientas internas de gestión de procesos."
    },
    {
      company: "UNHSJM",
      role: "Pasante en Administración de Redes",
      period: "Abril 2024 – Julio 2024",
      desc: "Mantenimiento preventivo y correctivo de la infraestructura de red institucional. Diagnóstico de sistemas críticos que soportan servicios de red y aplicaciones."
    },
    {
        company: "INTUR - El Trapiche",
        role: "Administrativa",
        period: "Enero 2025 – Junio 2025",
        desc: "Gestión administrativa y operativa bajo entornos de alta demanda, asegurando eficiencia en los procesos de atención."
    }
  ];

  const certifications = [
    { name: "Asana Administrator", provider: "Asana Academy", date: "Marzo 2026", expiry: "Marzo 2028" },
    { name: "Workflow Specialist", provider: "Asana Academy", date: "Marzo 2026", expiry: "Marzo 2027" }
  ];

  const education = [
    {
      institution: "UNHSJM",
      degree: "Ingeniería en Computación",
      status: "5to Año (2022 – 2026)",
      detail: "Universidad Nacional Héroes San José de las Mulas"
    },
    {
      institution: "Col. Jamie Torres Bodet",
      degree: "Bachiller en Ciencias y Letras",
      status: "Promoción 2021",
      detail: "Educación Secundaria"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 print:bg-white print:text-black">
      {/* Botón Flotante para Imprimir (Oculto en impresión) */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-8 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center gap-2 group print:hidden"
      >
        <Printer className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Guardar como PDF</span>
      </button>

      {/* Header / Hero Section */}
      <header className={`pt-16 pb-32 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white transition-all duration-1000 print:bg-white print:text-black print:p-0 print:pb-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center print:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 print:hidden">
            Tech Portfolio • Open to Work
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight print:text-3xl print:mb-2 uppercase">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-light max-w-2xl mx-auto border-b border-blue-500/30 pb-8 print:text-slate-700 print:border-slate-200 print:pb-4 print:text-lg">
            {profile.role}
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100/90 font-medium print:justify-start print:text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400 print:text-blue-600" /> {profile.location}
            </div>
            <div className="flex items-center gap-2 text-blue-100/90 print:text-slate-600">
              <Mail className="w-4 h-4 text-blue-400 print:text-blue-600" /> {profile.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400 print:text-blue-600" /> {profile.phone}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 -mt-20 pb-20 print:mt-0">
        
        {/* Professional Profile */}
        <section className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 mb-12 border border-slate-100 relative overflow-hidden print:shadow-none print:border-0 print:p-0 print:mb-8">
          <div className="absolute top-0 right-0 p-8 opacity-5 print:hidden">
             <Layers className="w-32 h-32" />
          </div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 print:text-xl print:mb-3">
            <div className="p-2 bg-blue-50 rounded-lg print:hidden"><Cpu className="w-6 h-6 text-blue-600" /></div>
            Perfil Profesional
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg font-normal italic border-l-4 border-blue-600 pl-6 print:text-base print:pl-4 print:border-blue-800">
            "{profile.bio}"
          </p>
        </section>

        {/* Certificaciones Oficiales */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 px-2 text-slate-800 print:text-xl print:mb-4">
            <div className="p-2 bg-amber-50 rounded-lg print:hidden"><Award className="w-6 h-6 text-amber-600" /></div>
            Certificaciones de Asana
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-amber-200 transition-all print:border-slate-200 print:p-3">
                <div className="bg-amber-100 p-3 rounded-xl print:bg-transparent">
                  <CheckCircle2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 print:text-sm">{cert.name}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{cert.provider}</p>
                  <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Válida hasta: {cert.expiry}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12 print:mb-8">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 px-2 text-slate-800 print:text-xl print:mb-4">
            <div className="p-2 bg-emerald-50 rounded-lg print:hidden"><Server className="w-6 h-6 text-emerald-600" /></div>
            Stack Tecnológico
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-5 rounded-2xl border border-slate-100 print:border-slate-200 print:p-3">
                <h3 className="font-bold text-slate-900 mb-3 text-sm flex items-center gap-2">
                  <span className="print:hidden">{skill.icon}</span>
                  {skill.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 bg-slate-50 text-slate-600 rounded-md border border-slate-200 print:bg-white print:border-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex border-b mb-6 print:hidden">
              <button 
                onClick={() => setActiveTab('experiencia')}
                className={`py-3 px-6 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'experiencia' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Experiencia
              </button>
              <button 
                onClick={() => setActiveTab('educacion')}
                className={`py-3 px-6 text-sm font-bold uppercase tracking-wider transition-all ${activeTab === 'educacion' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Educación
              </button>
            </div>

            <h2 className="hidden print:block text-2xl font-bold mb-6 text-slate-800">Trayectoria Profesional</h2>

            <div className="space-y-8">
              {activeTab === 'experiencia' || window.matchMedia('print').matches ? (
                experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-slate-200 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white print:hidden"></div>
                    <h3 className="font-black text-xl text-slate-900">{exp.role}</h3>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-3">{exp.company} | {exp.period}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                ))
              ) : (
                education.map((edu, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-slate-200 pb-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white print:hidden"></div>
                    <h3 className="font-black text-xl text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-bold text-sm uppercase tracking-wide mb-3">{edu.institution} | {edu.status}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{edu.detail}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          
          <div className="print:mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-800 print:text-xl print:mb-4">
               {activeTab === 'experiencia' ? 'Educación' : 'Experiencia'}
            </h2>
            <div className="space-y-6">
              {(activeTab === 'experiencia' ? education : experience).map((item, i) => (
                <div key={i} className="bg-slate-50 p-5 rounded-2xl print:bg-transparent print:border-b print:rounded-none print:p-0 print:pb-4">
                  <h3 className="font-bold text-slate-900 text-sm">{item.degree || item.role}</h3>
                  <p className="text-blue-600 text-xs font-bold">{item.institution || item.company}</p>
                  <p className="text-slate-500 text-[10px] mt-1 uppercase font-bold tracking-tighter">{item.status || item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer print only info */}
        <div className="hidden print:block mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] uppercase font-bold tracking-widest">
           {profile.name} &bull; Managua, Nicaragua &bull; {profile.email}
        </div>
      </main>

      <footer className="mt-20 py-12 text-center text-slate-400 text-sm print:hidden bg-slate-900 text-white/50">
        &copy; 2025 Katherine Abigail García Montano &bull; Todos los derechos reservados
      </footer>
    </div>
  );
};

export default App;