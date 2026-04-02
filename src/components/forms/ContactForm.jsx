import { Mail, Phone, User } from "lucide-react";
import { useMemo, useState } from "react";
import Button from "@/components/common/Button";
import Input from "@/components/forms/Input";
import Textarea from "@/components/forms/Textarea";
import { submitContactForm } from "@/services/endpoints/contact";
import { isRequired, isValidEmail, isValidPhone } from "@/utils/validators";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "Konsultasi",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "" });

  const errors = useMemo(
    () => ({
      name: isRequired(values.name) ? "" : "Nama wajib diisi.",
      email: isValidEmail(values.email) ? "" : "Format email tidak valid.",
      phone: isValidPhone(values.phone) ? "" : "Nomor telepon tidak valid.",
      message: isRequired(values.message) ? "" : "Pesan wajib diisi.",
    }),
    [values]
  );

  const hasError = Object.values(errors).some(Boolean);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTouched({ name: true, email: true, phone: true, message: true });
    if (hasError) {
      return;
    }

    setStatus({ loading: true, message: "Mengirim pesan..." });
    const response = await submitContactForm(values);
    setStatus({ loading: false, message: response.message });
    setValues(initialValues);
    setTouched({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Nama"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Nama lengkap"
        required
        icon={<User size={16} />}
        error={touched.name ? errors.name : ""}
      />
      <Input
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="nama@perusahaan.com"
        type="email"
        required
        icon={<Mail size={16} />}
        error={touched.email ? errors.email : ""}
      />
      <Input
        label="Telepon"
        name="phone"
        value={values.phone}
        onChange={handleChange}
        placeholder="08xxxxxxxxxx"
        required
        icon={<Phone size={16} />}
        error={touched.phone ? errors.phone : ""}
      />
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Subjek</span>
        <select
          name="subject"
          value={values.subject}
          onChange={handleChange}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          <option>Konsultasi</option>
          <option>Partnership</option>
          <option>Karir</option>
          <option>Lainnya</option>
        </select>
      </label>
      <Textarea
        label="Pesan"
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Ceritakan kebutuhan pengelolaan polder Anda"
        error={touched.message ? errors.message : ""}
      />
      <Button type="submit" disabled={status.loading} className="w-full hover:scale-100 disabled:opacity-60">
        {status.loading ? "Mengirim..." : "Kirim Pesan"}
      </Button>
      {status.message ? <p className="text-sm text-slate-600">{status.message}</p> : null}
    </form>
  );
}
