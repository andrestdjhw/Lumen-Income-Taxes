// Datos que PHP inyecta en window.lumenData (ver lumen_js_data() en inc/helpers.php).
const data = window.lumenData || {}

export const site = data.site || {}

export function hasString(key) {
  return Boolean(data.strings && data.strings[key])
}

// Traducción por clave; los %s se reemplazan en orden por los valores recibidos.
export function t(key, ...values) {
  let text = (data.strings && data.strings[key]) || key
  values.forEach(value => {
    text = text.replace("%s", value)
  })
  return text
}

export default data
