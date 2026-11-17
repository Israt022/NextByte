"use client";

import { useState, type FormEvent } from "react";
import { FaChevronDown, FaPaperPlane, FaCircleCheck, FaTriangleExclamation } from "react-icons/fa6";
import { useApp } from "@/context/AppProviders";
import { formFields, serviceOptions } from "@/data/contact";
import { contactInfo } from "@/data/footer";
import { translations, type Translations } from "@/lib/translations";

type Status = "idle" | "sending" | "success" | "error";

const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

const labelClass = "mb-2 block text-xs font-bold uppercase tracking-wider text-text-primary";
const fieldClass =
    "w-full rounded-2xl border border-border bg-surface-secondary px-5 py-4 text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/70 focus:border-brand focus:bg-surface focus:ring-2 focus:ring-brand/20";

const ContactForm = () => {
    const { t } = useApp();
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
        data.service = translations.en[data.service as keyof Translations] ?? data.service;

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
            className="rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-10 lg:p-12"
        >
            <div>
                <h2 className="text-2xl font-black tracking-tight text-text-primary sm:text-3xl">
                    {t.contactFormTitle}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {t.contactFormDesc}
                </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {formFields.map(({ name, label, placeholder, type, autoComplete, required }) => (
                    <div key={name}>
                        <label htmlFor={name} className={labelClass}>
                            {t[label]} {required && <span className="text-brand">*</span>}
                        </label>
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
                    <label htmlFor="service" className={labelClass}>
                        {t.contactServiceLabel} <span className="text-brand">*</span>
                    </label>
                    <div className="relative">
                        <select
                            id="service"
                            name="service"
                            required
                            defaultValue=""
                            className={`${fieldClass} appearance-none pr-12`}
                        >
                            <option value="" disabled>
                                {t.contactServicePh}
                            </option>
                            {serviceOptions.map((key) => (
                                <option key={key} value={key}>
                                    {t[key]}
                                </option>
                            ))}
                        </select>
                        <FaChevronDown
                            size={12}
                            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-text-secondary"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="message" className={labelClass}>
                        {t.contactDetailsLabel} <span className="text-brand">*</span>
                    </label>
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

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-border/80 pt-6">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2.5 rounded-xl bg-brand px-8 py-4 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <span>{status === "sending" ? t.contactSending : t.contactSend}</span>
                    <FaPaperPlane size={12} />
                </button>

                {status === "success" && (
                    <div role="status" className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
                        <FaCircleCheck size={16} />
                        <span>{t.contactSuccess}</span>
                    </div>
                )}
                {status === "error" && (
                    <div role="alert" className="flex items-center gap-2 text-sm font-semibold text-rose-500">
                        <FaTriangleExclamation size={16} />
                        <span>{t.contactError}</span>
                    </div>
                )}
            </div>
        </form>
    );
};

export default ContactForm;
