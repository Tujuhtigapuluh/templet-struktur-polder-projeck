export function isRequired(value) {
  return String(value || "").trim().length > 0;
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export function isValidPhone(phone) {
  return /^[+]?[0-9\s-]{8,15}$/.test(String(phone || "").trim());
}