export async function submitContactForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return {
    success: true,
    message: "Pesan Anda sudah kami terima. Tim kami akan menghubungi segera.",
    data: payload,
  };
}