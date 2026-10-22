<?php

// Datos públicos del negocio (NAP). Fuente: cuestionario del cliente y brief de 828.
// No agregar aquí credenciales de acceso ni la dirección de facturación.
function lumen_site() {
  $address = '13327 Nacogdoches Rd, Unit 1, San Antonio, TX 78217';

  return array(
    'name'               => 'Lumen Income Tax',
    'phone'              => '(210) 807-2836',
    'phone_e164'         => '+12108072836',
    'email'              => 'info@lumenincometax.com',
    'street'             => '13327 Nacogdoches Rd, Unit 1',
    'city'               => 'San Antonio',
    'region'             => 'TX',
    'postal_code'        => '78217',
    'booking_url'        => 'https://calendly.com/lumenincometax',
    'google_reviews_url' => '', // Pendiente: perfil oficial de Google Business verificado.
    // Redes del topbar y el footer. Las que no tienen URL se muestran como ícono sin enlace.
    'social'             => array(
      'facebook'  => 'https://www.facebook.com/LumenIncomeTax/',
      'instagram' => '', // Pendiente
      'tiktok'    => '', // Pendiente
      'linkedin'  => '', // Pendiente
      'google'    => '', // Pendiente: perfil de Google Business (GMB)
      'bbb'       => '', // Pendiente: perfil de Better Business Bureau
    ),
    'maps_url'           => 'https://www.google.com/maps/search/?api=1&query=' . rawurlencode($address),
    'map_embed'          => 'https://www.google.com/maps?q=' . rawurlencode($address) . '&output=embed',
    'directions_url'     => 'https://www.google.com/maps/dir/?api=1&destination=' . rawurlencode($address),
  );
}

// Solo reseñas reales, verificadas y con permiso de publicación (brief, secciones 03 y 12).
// Formato: array('name' => '', 'text' => '', 'rating' => 5, 'source' => 'Google Review')
function lumen_reviews() {
  return array();
}
