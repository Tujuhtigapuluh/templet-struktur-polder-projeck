import { useState } from "react";
import { isValidEmail } from "@/utils/validators";
import Button from "@/components/common/Button";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setMessage("Masukkan email yang valid.");
      return;
    }
    setMessage("Terima kasih, Anda sudah terdaftar di newsletter kami.");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email perusahaan Anda"
          className="h-11 flex-1 rounded-md border border-slate-300 bg-white px-3 text-slate-900 outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
        <Button type="submit" className="hover:scale-100">
          Subscribe
        </Button>
      </div>
      {message ? <p className="text-xs text-slate-500">{message}</p> : null}
    </form>
  );
}
