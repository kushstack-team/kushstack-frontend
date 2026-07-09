export function generateWhatsAppLink(phoneNumber, data) {
  let message = "Hello KushStack Team,\n\nI would like to start a new project. Here are my details:\n\n";
  
  for (const [key, value] of Object.entries(data)) {
    if (value && value.length > 0) {
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const formattedValue = Array.isArray(value) ? value.join(", ") : value;
      message += `*${formattedKey}:* ${formattedValue}\n`;
    }
  }
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
