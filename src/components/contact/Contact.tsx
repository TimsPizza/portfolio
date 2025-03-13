import React, { useState } from "react";
import { useEntranceAnimation } from "../../hooks/useEntranceAnimation";
import useToast from "../../hooks/useToast";
import { API_CONFIG } from "../../config/api";
import Balancer from "react-wrap-balancer";
import { ContactItem } from "../landing/ContactItem";

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

  const inputStyles = {
    backgroundColor: "var(--theme-background-dark)",
    borderColor: "var(--theme-text-gray)",
    color: "var(--theme-text-light)",
  };

  return (
    <div className="flex h-full w-full flex-col overflow-x-hidden px-4 lg:flex-row">
      {/* Left Section - Contact Information */}
      <div ref={leftRef} className="p-8 lg:w-1/2">
        <div className="space-y-6">
          <span
            className="block"
            style={{ color: "var(--theme-code-comment)" }}
          >
            {`/* Contact Information */`}
          </span>

          <div className="space-y-4">
            <p style={{ color: "var(--theme-code-comment)" }}>
              // Preferred contact method
            </p>
            <div className="rounded-lg border p-6" style={inputStyles}>
              <ContactItem
                label="email"
                value="peisen.jiang2001@gmail.com"
                href="mailto:peisen.jiang2001@gmail.com"
              />
            </div>
          </div>

          <div className="space-y-4">
            <p style={{ color: "var(--theme-code-comment)" }}>// Find me on</p>
            <div
              className="flex flex-col space-y-4 rounded-lg border p-6"
              style={inputStyles}
            >
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
            <p style={{ color: "var(--theme-code-comment)" }}>
              // Available time (MST)
            </p>
            <div className="rounded-lg border p-6" style={inputStyles}>
              <ContactItem label="availability" value="9:00 AM - 5:00 PM" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div ref={rightRef} className="p-8 lg:w-1/2">
        <span
          className="mb-4 block text-md font-light"
          style={{ color: "var(--theme-code-comment)" }}
        >
          {`Send me a message`}
        </span>
        <form onSubmit={handleSubmit} className="relative space-y-4">
          <div className="space-y-4 rounded-lg border p-4" style={inputStyles}>
            <div>
              <label
                htmlFor="name"
                className="block"
                style={{ color: "var(--theme-text-light)" }}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded border px-3 py-2 outline-none transition-all focus:border-[var(--theme-code-variable)] disabled:opacity-50"
                style={inputStyles}
                disabled={formStatus.loading}
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block"
                style={{ color: "var(--theme-text-light)" }}
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded border px-3 py-2 outline-none transition-all focus:border-[var(--theme-code-variable)] disabled:opacity-50"
                style={inputStyles}
                disabled={formStatus.loading}
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block"
                style={{ color: "var(--theme-text-light)" }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded border px-3 py-2 outline-none transition-all focus:border-[var(--theme-code-variable)] disabled:opacity-50"
                style={inputStyles}
                disabled={formStatus.loading}
                placeholder="Project Collaboration"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block"
                style={{ color: "var(--theme-text-light)" }}
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full resize-none rounded border px-3 py-2 outline-none transition-all focus:border-[var(--theme-code-variable)] disabled:opacity-50"
                style={inputStyles}
                disabled={formStatus.loading}
                placeholder="Tell me about your thoughts..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 transition-all hover:brightness-125 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor: "var(--theme-background-dark)",
                color: "var(--theme-code-variable)",
                borderColor: "var(--theme-code-variable)",
                borderWidth: 1,
              }}
            >
              {formStatus.loading ? (
                <>
                  <span
                    className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"
                    style={{ borderColor: "var(--theme-code-variable)" }}
                  ></span>
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
