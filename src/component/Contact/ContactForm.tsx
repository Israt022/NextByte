"use client";

import { useState, type FormEvent } from "react";
import { FaChevronDown, FaPaperPlane } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { formFields, serviceOptions } from "@/data/contact";
import { contactInfo } from "@/data/footer";
import { translations, type Translations } from "@/lib/translations";

type Status = "idle" | "sending" | "success" | "error";

// Set in .env.local, e.g. a Formspree URL: https://formspree.io/f/xxxxxxxx
const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wider text-text-primary";
const fieldClass =
    "w-full rounded-2xl border border-border bg-surface-hover px-5 py-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-secondary focus:border-brand";

const ContactForm = () => {
    const { t } = useApp();
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
        // Always send the service name in English so you can read it whatever language was used
        data.service = translations.en[data.service as keyof Translations] ?? data.service;

        // No endpoint configured yet: fall back to the visitor's mail app
        if (!endpoint) {
            const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join("\n");
            window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
                "Project inquiry"
            )}&body=${encodeURIComponent(body)}`;
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Request failed");
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-border bg-surface-secondary p-8 sm:p-12"
        >
            <h2 className="text-3xl font-extrabold tracking-tight text-text-primary">
                {t.contactFormTitle}
            </h2>
            <p className="mt-3 text-text-secondary">{t.contactFormDesc}</p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {formFields.map(({ name, label, placeholder, type, autoComplete, required }) => (
                    <div key={name}>
                        <label htmlFor={name} className={labelClass}>{t[label]}</label>
                        <input
                            id={name}
                            name={name}
                            type={type}
                            autoComplete={autoComplete}
                            required={required}
                            placeholder={t[placeholder]}
                            className={fieldClass}
                        />
                    </div>
                ))}

                <div className="sm:col-span-2">
                    <label htmlFor="service" className={labelClass}>{t.contactServiceLabel}</label>
                    <div className="relative">
                        <select
                            id="service"
                            name="service"
                            required
                            defaultValue=""
                            className={`${fieldClass} appearance-none pr-12`}
                        >
                            <option value="" disabled>{t.contactServicePh}</option>
                            {serviceOptions.map((key) => (
                                <option key={key} value={key}>{t[key]}</option>
                            ))}
                        </select>
                        <FaChevronDown
                            size={12}
                            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>{t.contactDetailsLabel}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder={t.contactDetailsPh}
                        className={`${fieldClass} resize-none`}
                    />
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-brand-foreground shadow-lg transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {status === "sending" ? t.contactSending : t.contactSend}
                    <FaPaperPlane size={13} />
                </button>

                {status === "success" && (
                    <p role="status" className="text-sm font-semibold text-green-500">
                        {t.contactSuccess}
                    </p>
                )}
                {status === "error" && (
                    <p role="alert" className="text-sm font-semibold text-red-500">
                        {t.contactError}
                    </p>
                )}
            </div>
        </form>
    );
};

export default ContactForm;