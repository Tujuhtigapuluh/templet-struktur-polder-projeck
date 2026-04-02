export function formatDate(dateInput) {
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatNumber(value) {
  return new Intl.NumberFormat("id-ID").format(value);
}

export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}