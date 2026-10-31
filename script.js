// CONFIGURACIÓN: reemplaza este número por el WhatsApp de tu tienda.
// Formato internacional, solo números. Ejemplo Colombia: 573001234567
const WHATSAPP_NUMBER = '573000000000';

const sizeSelect = document.getElementById('sizeSelect');
const whatsappButton = document.getElementById('whatsappButton');
const orderHelp = document.getElementById('orderHelp');
const productName = 'Tenis Urbanos Nexoshop';

function openWhatsApp() {
  const size = sizeSelect.value;
  if (!size) {
    orderHelp.textContent = 'Por favor, selecciona tu talla para continuar.';
    orderHelp.classList.add('error');
    sizeSelect.focus();
    return;
  }
  orderHelp.classList.remove('error');
  const message = `¡Hola, Nexoshop! Estoy interesado(a) en los ${productName}. Mi talla es ${size}. ¿Me confirman precio, disponibilidad y envío?`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

whatsappButton.addEventListener('click', openWhatsApp);
document.getElementById('year').textContent = new Date().getFullYear();
sizeSelect.addEventListener('change', () => {
  orderHelp.textContent = sizeSelect.value
    ? `Talla ${sizeSelect.value} seleccionada. Continúa por WhatsApp para confirmar disponibilidad.`
    : 'Te responderemos para confirmar talla, precio y envío.';
  orderHelp.classList.remove('error');
});
