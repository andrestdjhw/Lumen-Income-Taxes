<?php

// Preguntas frecuentes por subpágina (se muestran antes de la banda CTA final, ver template-parts/page-faq.php).
// Redactadas a partir del brief: sin precios, horarios, credenciales ni servicios no confirmados. Pendientes de aprobación.

return array(
  'pagefaq.eyebrow' => array('en' => 'FAQ', 'es' => 'Preguntas'),
  'pagefaq.link'    => array('en' => 'View All FAQs', 'es' => 'Ver todas las preguntas'),

  // Individual Taxes
  'pagefaq.individual.title' => array('en' => 'Questions About Individual Tax Preparation', 'es' => 'Preguntas sobre impuestos personales'),
  'pagefaq.individual.text'  => array('en' => 'What to know before your individual tax appointment.', 'es' => 'Lo que conviene saber antes de su cita de impuestos personales.'),
  'pagefaq.individual.items' => array(
    'en' => array(
      array('q' => 'What do I need for my individual tax appointment?', 'a' => 'Common items include a photo ID, taxpayer identification information, income forms such as W-2 or 1099, and records related to possible deductions or credits. Your exact list depends on your situation, and we will confirm it before your appointment.'),
      array('q' => 'Can I get help if my tax situation changed this year?', 'a' => 'Yes. Tell us what changed when you request your appointment so we can let you know which records may be relevant to your situation.'),
      array('q' => 'Can my appointment be in Spanish?', 'a' => 'Yes. We offer bilingual support, so you can start your conversation in English or Spanish.'),
      array('q' => 'How do I share my documents?', 'a' => 'Please do not send tax documents or sensitive information through the website. Our team will explain the approved method for sharing records.'),
    ),
    'es' => array(
      array('q' => '¿Qué necesito para mi cita de impuestos personales?', 'a' => 'Algunos documentos comunes son identificación con foto, datos de identificación tributaria, comprobantes de ingresos como W-2 o 1099 y registros relacionados con posibles deducciones o créditos. La lista exacta depende de su situación y la confirmaremos antes de su cita.'),
      array('q' => '¿Me pueden ayudar si mi situación fiscal cambió este año?', 'a' => 'Sí. Cuéntenos qué cambió al solicitar su cita para indicarle qué registros podrían ser necesarios para su situación.'),
      array('q' => '¿Mi cita puede ser en español?', 'a' => 'Sí. Ofrecemos atención bilingüe, así que puede comenzar la conversación en inglés o en español.'),
      array('q' => '¿Cómo comparto mis documentos?', 'a' => 'No envíe documentos fiscales ni información sensible por el sitio web. Nuestro equipo le explicará el método autorizado para compartir sus registros.'),
    ),
  ),

  // Self-Employed
  'pagefaq.self_employed.title' => array('en' => 'Questions About Self-Employed Taxes', 'es' => 'Preguntas sobre impuestos para independientes'),
  'pagefaq.self_employed.text'  => array('en' => 'For freelancers, contractors, and anyone who works for themselves.', 'es' => 'Para freelancers, contratistas y quienes trabajan por su cuenta.'),
  'pagefaq.self_employed.items' => array(
    'en' => array(
      array('q' => 'Do you work with freelancers and independent contractors?', 'a' => 'Yes. We welcome inquiries from freelancers, independent contractors, and gig workers, and we can discuss which tax preparation services fit your needs.'),
      array('q' => 'I received several 1099 forms. Is that a problem?', 'a' => 'Not at all. It is common for self-employed people to receive forms from several clients or platforms. Bring all of them, along with any records of income that was not reported on a 1099.'),
      array('q' => 'Which expenses should I keep records of?', 'a' => 'Keep receipts and records for expenses related to your work. During your appointment, we can discuss which of them may apply to your situation.'),
      array('q' => 'I also have a regular job. Can you help with both?', 'a' => 'Yes. Bring your W-2 along with your self-employment records, and we will review your full situation together.'),
      array('q' => 'Can I ask about estimated tax payments?', 'a' => 'Yes. Bring your questions to your appointment, and we will let you know which services are available for your situation.'),
    ),
    'es' => array(
      array('q' => '¿Atienden a freelancers y contratistas independientes?', 'a' => 'Sí. Recibimos consultas de freelancers, contratistas independientes y trabajadores de aplicaciones, y podemos conversar sobre los servicios fiscales disponibles para su necesidad.'),
      array('q' => 'Recibí varios formularios 1099. ¿Es un problema?', 'a' => 'Para nada. Es común que los independientes reciban formularios de varios clientes o plataformas. Traiga todos, junto con los registros de ingresos que no aparezcan en un 1099.'),
      array('q' => '¿De qué gastos debo guardar registros?', 'a' => 'Guarde los recibos y registros de los gastos relacionados con su trabajo. En su cita podemos conversar sobre cuáles podrían aplicar a su situación.'),
      array('q' => 'También tengo un empleo regular. ¿Pueden ayudarme con ambos?', 'a' => 'Sí. Traiga su W-2 junto con los registros de su trabajo independiente y revisaremos su situación completa.'),
      array('q' => '¿Puedo preguntar sobre los pagos de impuestos estimados?', 'a' => 'Sí. Traiga sus preguntas a la cita y le indicaremos qué servicios están disponibles para su situación.'),
    ),
  ),

  // Small Business
  'pagefaq.small_business.title' => array('en' => 'Questions About Small Business Taxes', 'es' => 'Preguntas sobre impuestos para pequeños negocios'),
  'pagefaq.small_business.text'  => array('en' => 'For owners of local and family businesses.', 'es' => 'Para dueños de negocios locales y familiares.'),
  'pagefaq.small_business.items' => array(
    'en' => array(
      array('q' => 'What kinds of businesses do you work with?', 'a' => 'We welcome inquiries from small business owners, including shops, restaurants, service businesses, and family-owned businesses. Contact us to describe your business and what you need.'),
      array('q' => 'Which business services do you offer?', 'a' => 'Contact our team to describe your business and what you need. We will explain which services are available for your situation.'),
      array('q' => 'What records should I bring for my business?', 'a' => 'Common starting points include income and sales records, receipts and invoices for expenses, your business identification information, and last year’s return, if available. We will confirm your specific list.'),
      array('q' => 'My records are not organized yet. Can I still reach out?', 'a' => 'Yes. Start with a conversation, and we will help clarify which records may be relevant before your appointment.'),
      array('q' => 'Can I meet in person at your office?', 'a' => 'Our office is at 13327 Nacogdoches Rd, Unit 1, San Antonio, TX 78217. Appointments are recommended, so please confirm office hours before visiting.'),
    ),
    'es' => array(
      array('q' => '¿Con qué tipo de negocios trabajan?', 'a' => 'Recibimos consultas de dueños de pequeños negocios, como tiendas, restaurantes, negocios de servicios y negocios familiares. Contáctenos para contarnos sobre su negocio y lo que necesita.'),
      array('q' => '¿Qué servicios para negocios ofrecen?', 'a' => 'Contáctenos para contarnos sobre su negocio y lo que necesita. Le explicaremos qué servicios están disponibles para su situación.'),
      array('q' => '¿Qué registros debo traer de mi negocio?', 'a' => 'Algunos puntos de partida comunes son los registros de ingresos y ventas, recibos y facturas de gastos, los datos de identificación del negocio y la declaración del año anterior, si la tiene. Confirmaremos su lista específica.'),
      array('q' => 'Mis registros todavía no están organizados. ¿Puedo contactarlos de todos modos?', 'a' => 'Sí. Comience con una conversación y le ayudaremos a identificar qué registros podrían ser necesarios antes de su cita.'),
      array('q' => '¿Puedo reunirme en persona en su oficina?', 'a' => 'Nuestra oficina está en 13327 Nacogdoches Rd, Unit 1, San Antonio, TX 78217. Se recomienda agendar cita, así que confirme el horario antes de visitarnos.'),
    ),
  ),

  // Our Process
  'pagefaq.process.title' => array('en' => 'Questions About Our Process', 'es' => 'Preguntas sobre nuestro proceso'),
  'pagefaq.process.text'  => array('en' => 'What happens from your first question to your next steps.', 'es' => 'Qué sucede desde su primera pregunta hasta los siguientes pasos.'),
  'pagefaq.process.items' => array(
    'en' => array(
      array('q' => 'How do I get started?', 'a' => 'Choose a service and request an appointment online or call (210) 807-2836. We will guide you toward the next step.'),
      array('q' => 'How will I know what to bring?', 'a' => 'After you request your appointment, we will help clarify which records may be relevant. We will confirm what is needed before sensitive records are shared.'),
      array('q' => 'What happens during the appointment?', 'a' => 'You will meet with our team to review your situation and discuss the filing process and next steps. Feel free to ask questions along the way.'),
      array('q' => 'Is there support after filing?', 'a' => 'Ask our team about the follow-up support available after filing.'),
    ),
    'es' => array(
      array('q' => '¿Cómo empiezo?', 'a' => 'Elija un servicio y solicite una cita en línea o llame al (210) 807-2836. Le orientaremos hacia el siguiente paso.'),
      array('q' => '¿Cómo sabré qué documentos llevar?', 'a' => 'Después de solicitar su cita, le ayudaremos a identificar qué registros podrían ser necesarios. Confirmaremos lo necesario antes de compartir información sensible.'),
      array('q' => '¿Qué sucede durante la cita?', 'a' => 'Se reunirá con nuestro equipo para revisar su situación y conversar sobre el proceso de presentación y los siguientes pasos. Puede hacer todas las preguntas que necesite.'),
      array('q' => '¿Hay apoyo después de presentar mi declaración?', 'a' => 'Pregunte a nuestro equipo por el apoyo de seguimiento disponible después de presentar su declaración.'),
    ),
  ),

  // About
  'pagefaq.about.title' => array('en' => 'Questions About Lumen Income Tax', 'es' => 'Preguntas sobre Lumen Income Tax'),
  'pagefaq.about.text'  => array('en' => 'Getting to know our team and how we work.', 'es' => 'Conozca a nuestro equipo y cómo trabajamos.'),
  'pagefaq.about.items' => array(
    'en' => array(
      array('q' => 'Who will I work with?', 'a' => 'You will work with Yolanda and the Lumen team, who focus on listening carefully and explaining the process clearly.'),
      array('q' => 'Do you offer services in Spanish?', 'a' => 'Yes. We offer bilingual support in English and Spanish.'),
      array('q' => 'Where are you located?', 'a' => '13327 Nacogdoches Rd, Unit 1, San Antonio, TX 78217. Please confirm office hours before visiting.'),
      array('q' => 'What makes your approach different?', 'a' => 'We believe important financial conversations deserve clarity, patience, and respect. Our goal is to help you understand your next steps with confidence.'),
    ),
    'es' => array(
      array('q' => '¿Con quién voy a trabajar?', 'a' => 'Trabajará con Yolanda y el equipo de Lumen, que se enfocan en escuchar con atención y explicar el proceso con claridad.'),
      array('q' => '¿Ofrecen servicios en español?', 'a' => 'Sí. Ofrecemos atención bilingüe en inglés y en español.'),
      array('q' => '¿Dónde se encuentran?', 'a' => '13327 Nacogdoches Rd, Unit 1, San Antonio, TX 78217. Confirme el horario antes de visitarnos.'),
      array('q' => '¿Qué hace diferente su forma de trabajar?', 'a' => 'Creemos que las conversaciones financieras importantes merecen claridad, paciencia y respeto. Nuestro objetivo es ayudarle a comprender sus siguientes pasos con confianza.'),
    ),
  ),

  // Contact
  'pagefaq.contact.title' => array('en' => 'Questions About Contacting Us', 'es' => 'Preguntas sobre cómo contactarnos'),
  'pagefaq.contact.text'  => array('en' => 'The fastest ways to reach our team.', 'es' => 'Las formas más rápidas de comunicarse con nuestro equipo.'),
  'pagefaq.contact.items' => array(
    'en' => array(
      array('q' => 'What is the fastest way to schedule?', 'a' => 'Use our online appointment link or call (210) 807-2836.'),
      array('q' => 'What happens after I submit the form?', 'a' => 'Our team will contact you about your inquiry using the phone number you provided, and in your preferred language.'),
      array('q' => 'Can I send my tax documents through the form?', 'a' => 'No. Please do not include Social Security numbers, tax forms, or banking details. Our team will explain the approved method for sharing records.'),
      array('q' => 'Can I visit without an appointment?', 'a' => 'Appointments are recommended. Please confirm office hours before visiting.'),
    ),
    'es' => array(
      array('q' => '¿Cuál es la forma más rápida de agendar?', 'a' => 'Use nuestro enlace de citas en línea o llame al (210) 807-2836.'),
      array('q' => '¿Qué sucede después de enviar el formulario?', 'a' => 'Nuestro equipo se comunicará con usted sobre su consulta al teléfono que nos indicó y en su idioma preferido.'),
      array('q' => '¿Puedo enviar mis documentos fiscales por el formulario?', 'a' => 'No. No incluya números de Seguro Social, formularios fiscales ni datos bancarios. Nuestro equipo le explicará el método autorizado para compartir sus registros.'),
      array('q' => '¿Puedo visitarlos sin cita?', 'a' => 'Se recomienda agendar cita. Confirme el horario antes de visitarnos.'),
    ),
  ),
);
