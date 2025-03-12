import React, { useState } from "react";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import useToast from "../../hooks/useToast";
import { API_CONFIG } from "../../config/api";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
}

const Contact = () => {
  const { leftRef, rightRef } = useEntranceAnimation({
    type: "about",
  });
  const toast = useToast();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
  });

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ loading: true });

    try {
      const response = await fetch(
        `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.contact}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      resetForm();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setFormStatus({ loading: false });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex h-full w-full flex-row overflow-x-hidden px-4">
      {/* Left Section - Contact Information */}
      <div ref={leftRef} className="w-1/2 p-8">
        <div className="space-y-6">
          <span className="block text-code-comment">
            {`/* Contact Information */`}
          </span>

          <div className="space-y-4">
            <p className="text-code-comment">// Preferred contact method</p>
            <div className="rounded-lg bg-[#111a27] p-6">
              <p className="flex items-center gap-2">
                <span className="text-code-keyword">const</span>
                <span className="text-code-variable">email</span>
                <span className="text-white">=</span>
                <a
                  href="mailto:peisen.jiang2001@gmail.com"
                  className="text-code-string hover:brightness-125"
                >
                  "peisen.jiang2001@gmail.com"
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-code-comment">// Find me on</p>
            <div className="space-y-4 rounded-lg bg-[#111a27] p-6">
              <p className="flex items-center gap-2">
                <span className="text-code-keyword">const</span>
                <span className="text-code-variable">github</span>
                <span className="text-white">=</span>
                <a
                  href="https://github.com/TimsPizza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-code-string underline underline-offset-4 hover:brightness-125"
                >
                  "github.com/TimsPizza"
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-code-keyword">const</span>
                <span className="text-code-variable">linkedin</span>
                <span className="text-white">=</span>
                <a
                  href="https://www.linkedin.com/in/timspizza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-code-string underline underline-offset-4 hover:brightness-125"
                >
                  "linkedin.com/in/timspizza"
                </a>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-code-comment">// Available time (MST)</p>
            <div className="rounded-lg bg-[#111a27] p-6">
              <p className="flex items-center gap-2">
                <span className="text-code-keyword">const</span>
                <span className="text-code-variable">availability</span>
                <span className="text-white">=</span>
                <span className="text-code-string">"9:00 AM - 5:00 PM"</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div ref={rightRef} className="w-1/2 p-6">
        <span className="mb-4 block text-xl font-light text-code-comment">
          {`// Send me a message`}
        </span>
        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div className="space-y-4 rounded-lg bg-[#111a27] p-4">
            <div>
              <label htmlFor="name" className="block text-gray-200">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded bg-gray-800/50 px-3 py-2 text-gray-100 outline-none ring-1 ring-gray-700 transition-all focus:ring-blue-500/50 disabled:opacity-50"
                disabled={formStatus.loading}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-200">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded bg-gray-800/50 px-3 py-2 text-gray-100 outline-none ring-1 ring-gray-700 transition-all focus:ring-blue-500/50 disabled:opacity-50"
                disabled={formStatus.loading}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-200">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded bg-gray-800/50 px-3 py-2 text-gray-100 outline-none ring-1 ring-gray-700 transition-all focus:ring-blue-500/50 disabled:opacity-50"
                disabled={formStatus.loading}
                placeholder="Project Collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-200">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full resize-none rounded bg-gray-800/50 px-3 py-2 text-gray-100 outline-none ring-1 ring-gray-700 transition-all focus:ring-blue-500/50 disabled:opacity-50"
                disabled={formStatus.loading}
                placeholder="Tell me about your thoughts..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600/20 px-4 py-2 text-blue-300 transition-all hover:bg-blue-600/30 hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {formStatus.loading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-blue-300 border-t-transparent"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
