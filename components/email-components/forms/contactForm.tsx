"use client";
import { Button, Card, Input, Textarea } from "@heroui/react";
import axios from "axios";
import React, { FormEvent, useState, useEffect } from "react";

import SectionHeader from "@/components/ui/SectionHeader";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Real-time validation
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";

        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value))
          return "Please enter a valid email address";

        return undefined;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;

        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, "")))
          return "Please enter a valid phone number";

        return undefined;
      case "subject":
        if (!value.trim()) return "Subject is required";
        if (value.trim().length < 5)
          return "Subject must be at least 5 characters";

        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";

        return undefined;
      default:
        return undefined;
    }
  };

  // Check if form is valid
  useEffect(() => {
    const errors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);

      if (error) acc[key as keyof FormErrors] = error;

      return acc;
    }, {} as FormErrors);

    setFormErrors(errors);
    setIsFormValid(
      Object.keys(errors).length === 0 &&
        Object.values(formData).every((value) => value.trim() !== ""),
    );
  }, [formData]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key] = true;

        return acc;
      },
      {} as { [key: string]: boolean },
    );

    setTouched(allTouched);

    if (!isFormValid) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/contact-email", formData);

      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        setErrorMessage(null);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTouched({});

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.error ||
          "An error occurred while submitting your message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Mark field as touched when user starts typing
    if (!touched[name]) {
      setTouched({
        ...touched,
        [name]: true,
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;

    setTouched({
      ...touched,
      [name]: true,
    });
  };

  // Calculate form completion percentage
  const completionPercentage =
    (Object.values(formData).filter((value) => value.trim() !== "").length /
      Object.keys(formData).length) *
    100;

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SectionHeader
          className="mb-6"
          gradientText="Work Together"
          primaryText="Let's"
          size="lg"
        />
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to transform your business? Let&apos;s discuss how we can help
          you achieve your goals.
        </p>
      </div>

      {/* Progress Bar */}
      {!successMessage && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Form Progress
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(completionPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <Card className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-300">
                {successMessage}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Main Form */}
      {!successMessage && (
        <Card className="p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  required
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "h-14 bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 data-[hover=true]:border-primary data-[focus=true]:border-primary",
                  }}
                  errorMessage={touched.name && formErrors.name}
                  isInvalid={touched.name && !!formErrors.name}
                  label="Full Name"
                  name="name"
                  size="lg"
                  value={formData.name}
                  variant="bordered"
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Input
                  required
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "h-14 bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 data-[hover=true]:border-primary data-[focus=true]:border-primary",
                  }}
                  errorMessage={touched.email && formErrors.email}
                  isInvalid={touched.email && !!formErrors.email}
                  label="Email Address"
                  name="email"
                  size="lg"
                  type="email"
                  value={formData.email}
                  variant="bordered"
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Input
                  required
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "h-14 bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 data-[hover=true]:border-primary data-[focus=true]:border-primary",
                  }}
                  errorMessage={touched.phone && formErrors.phone}
                  isInvalid={touched.phone && !!formErrors.phone}
                  label="Phone Number"
                  name="phone"
                  size="lg"
                  type="tel"
                  value={formData.phone}
                  variant="bordered"
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Input
                  required
                  classNames={{
                    input: "text-base",
                    inputWrapper:
                      "h-14 bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 data-[hover=true]:border-primary data-[focus=true]:border-primary",
                  }}
                  errorMessage={touched.subject && formErrors.subject}
                  isInvalid={touched.subject && !!formErrors.subject}
                  label="Subject"
                  name="subject"
                  size="lg"
                  value={formData.subject}
                  variant="bordered"
                  onBlur={handleBlur}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Textarea
                required
                classNames={{
                  input: "text-base",
                  inputWrapper:
                    "bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 data-[hover=true]:border-primary data-[focus=true]:border-primary",
                }}
                errorMessage={touched.message && formErrors.message}
                isInvalid={touched.message && !!formErrors.message}
                label="Your Message"
                minRows={6}
                name="message"
                value={formData.message}
                variant="bordered"
                onBlur={handleBlur}
                onChange={handleInputChange}
              />
              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                {formData.message.length}/500
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                className="w-full h-14 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={isSubmitting || !isFormValid}
                size="lg"
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        fill="currentColor"
                      />
                    </svg>
                    Sending your message...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                )}
              </Button>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <Card className="p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <p className="text-red-800 dark:text-red-200 font-medium">
                    {errorMessage}
                  </p>
                </div>
              </Card>
            )}
          </form>
        </Card>
      )}

      {/* Additional Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Quick Response
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We typically respond within 24 hours
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Secure & Private
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Your information is safe with us
          </p>
        </div>

        <div className="space-y-2">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Expert Team
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Professional consultation guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
