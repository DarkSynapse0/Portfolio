"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check, Github, Linkedin, Mail } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initial: FormState = { name: "", email: "", subject: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMsg("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
      window.location.href = `mailto:mannish079@gmail.com?subject=${encodeURIComponent(
        form.subject || "Hello from your portfolio",
      )}&body=${encodeURIComponent(body)}`;
      setStatus("success");
      setForm(initial);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || "New message from portfolio",
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(initial);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <section className="px-6 pb-20 pt-40 md:px-10 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
            (01) Contact
          </p>
          <h1 className="mt-6 font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl break-words">
            Say <span className="italic text-coral">hello</span>.
            <br />
            Tell me what
            <br />
            you&apos;re building.
          </h1>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-stone">
              Reach out
            </p>
            <p className="mt-6 font-display text-2xl leading-[1.25] sm:text-3xl break-words">
              I&apos;m open to freelance work, collaborations, and a good
              conversation about <span className="italic text-coral">craft</span>.
            </p>

            <div className="mt-12 space-y-5">
              <Link
                href="mailto:mannish079@gmail.com"
                className="group flex items-start gap-3 text-ink/80 hover:text-ink transition-colors"
              >
                <Mail size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    Email
                  </p>
                  <p className="mt-0.5 underline-grow">mannish079@gmail.com</p>
                </div>
              </Link>
              <Link
                href="https://github.com/DarkSynapse0"
                target="_blank"
                className="group flex items-start gap-3 text-ink/80 hover:text-ink transition-colors"
              >
                <Github size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    GitHub
                  </p>
                  <p className="mt-0.5 underline-grow">@DarkSynapse0</p>
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/manish-ghimire-b90894286/"
                target="_blank"
                className="group flex items-start gap-3 text-ink/80 hover:text-ink transition-colors"
              >
                <Linkedin size={18} className="mt-0.5 text-coral" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                    LinkedIn
                  </p>
                  <p className="mt-0.5 underline-grow">Manish Ghimire</p>
                </div>
              </Link>
            </div>

            <div className="hairline mt-12" />

            <div className="mt-8 flex items-center gap-3 text-stone">
              <span className="h-1.5 w-1.5 rounded-full bg-sage pulse-dot" />
              <p className="font-mono text-xs uppercase tracking-[0.18em]">
                Usually replies within 24h
              </p>
            </div>
          </motion.aside>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.1,
            }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <div className="rounded-3xl border border-ink/10 bg-cream-soft/50 p-6 md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-start gap-6 py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: 0.1,
                      }}
                      className="grid h-16 w-16 place-items-center rounded-full bg-coral text-cream"
                    >
                      <Check size={28} strokeWidth={2.5} />
                    </motion.div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-coral">
                        Sent
                      </p>
                      <h2 className="mt-3 font-display text-4xl leading-[1] sm:text-5xl md:text-6xl break-words">
                        Got it. <span className="italic">Thanks.</span>
                      </h2>
                      <p className="mt-4 max-w-md text-ink/70 leading-relaxed">
                        Your message landed safely. I&apos;ll reply from{" "}
                        <span className="font-mono text-sm">mannish079@gmail.com</span>{" "}
                        within a day or two.
                      </p>
                    </div>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors underline-grow"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <Field
                        label="01 — Name"
                        name="name"
                        value={form.name}
                        onChange={update("name")}
                        placeholder="Your name"
                        required
                      />
                      <Field
                        label="02 — Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@somewhere.com"
                        required
                      />
                    </div>

                    <Field
                      label="03 — Subject"
                      name="subject"
                      value={form.subject}
                      onChange={update("subject")}
                      placeholder="What's this about?"
                    />

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="message"
                        className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone"
                      >
                        04 — Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Tell me what you have in mind…"
                        className="w-full resize-none rounded-xl border border-ink/15 bg-cream px-4 py-3 text-base text-ink placeholder:text-stone-light focus:border-ink focus:outline-none focus:ring-2 focus:ring-coral/30 transition-all"
                      />
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-xs text-coral"
                      >
                        ✗ {errorMsg}
                      </motion.p>
                    )}

                    <div className="mt-2 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                        I won&apos;t share your details. Promise.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-base text-cream transition-all hover:bg-coral disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {status === "submitting" ? (
                          <>
                            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-cream/30 border-t-cream" />
                            Sending
                          </>
                        ) : (
                          <>
                            Send message
                            <ArrowUpRight
                              size={18}
                              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const Field = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: FieldProps) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={name}
      className="font-mono text-[10px] uppercase tracking-[0.22em] text-stone"
    >
      {label}
      {required && <span className="text-coral"> *</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-base text-ink placeholder:text-stone-light focus:border-ink focus:outline-none focus:ring-2 focus:ring-coral/30 transition-all"
    />
  </div>
);

export default ContactPage;
