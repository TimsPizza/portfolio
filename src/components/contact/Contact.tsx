import React, { useState } from "react";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import useToast from "../../hooks/useToast";
import { API_CONFIG } from "../../config/api";
import Balancer from "react-wrap-balancer";

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

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      toast.error("Please enter a subject");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true });

    try {
      let response: Response;

      try {
        response = await fetch(
          `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.contact}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
              name: formData.name.trim(),
              email: formData.email.trim(),
              subject: formData.subject.trim(),
              message: formData.message.trim(),
            }),
          },
        );
      } catch (networkError) {
        toast.error(
          "Unable to reach the server. Please check your connection and try again.",
        );
        console.error("Network error:", networkError);
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        toast.error("Received invalid response from server");
        console.error("Parse error:", parseError);
        return;
      }

      if (!response.ok) {
        toast.error(
          data.message || "Failed to send message. Please try again later.",
        );
        return;
      }

      toast.success("Message sent successfully! I'll get back to you soon.");
      resetForm();
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
      console.error("Contact form error:", error);
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

  const ContactItem = ({ label, value, href }: { label: string; value: string; href?: string }) => (
    <div className="flex flex-wrap items-start gap-2">
      <div className="flex items-center gap-2 whitespace-nowrap">
        <span className="text-code-keyword">const</span>
        <span className="text-code-variable">{label}</span>
        <span className="text-white">=</span>
      </div>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-code-string underline-offset-4 hover:brightness-125 hover:underline"
        >
          {`"${value}"`}
        </a>
      ) : (
        <span className="text-code-string">{`"${value}"`}</span>
      )}
    </div>
  );

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
              <ContactItem
                label="email"
                value="peisen.jiang2001@gmail.com"
                href="mailto:peisen.jiang2001@gmail.com"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-code-comment">// Find me on</p>
            <div className="flex flex-col space-y-4 rounded-lg bg-[#111a27] p-6">
              <ContactItem
                label="github"
                value="github.com/TimsPizza"
                href="https://github.com/TimsPizza"
              />
              <ContactItem
                label="linkedin"
                value="linkedin.com/in/timspizza"
                href="https://www.linkedin.com/in/timspizza/"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-code-comment">// Available time (MST)</p>
            <div className="rounded-lg bg-[#111a27] p-6">
              <ContactItem
                label="availability"
                value="9:00 AM - 5:00 PM"
              />
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
                required
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
                required
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
                required
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
                required
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
