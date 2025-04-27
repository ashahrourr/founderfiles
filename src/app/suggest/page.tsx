'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const BackButton = () => (
  <Link
    href="/"
    className="inline-flex items-center text-slate-400 hover:text-blue-500 transition-all duration-300 group font-medium"
  >
    <svg
      className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Back to Home
  </Link>
);

const CardContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-slate-800 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-slate-700">
    {children}
  </div>
);

const SuccessMessage = ({ onReset }: { onReset: () => void }) => (
  <div className="text-center space-y-6">
    <div className="animate-fade-in-up">
      <div className="inline-flex items-center justify-center text-green-400 font-semibold text-lg mb-4">
        <svg
          className="w-8 h-8 mr-2 animate-checkmark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Submission Received!
      </div>
      <p className="text-slate-400 mb-6">
        We&apos;ll review your suggestion and get back to you soon
      </p>
    </div>
    <button
      onClick={onReset}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
    >
      Submit Another
    </button>
  </div>
);

export default function SuggestPage() {
  const [submitted, setSubmitted] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const resizeTextarea = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    textareaRef.current?.addEventListener('input', resizeTextarea);
    return () => textareaRef.current?.removeEventListener('input', resizeTextarea);
  }, []);

  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center px-4 py-12">
      <div className="w-full max-w-lg mb-8">
        <BackButton />
      </div>

      <CardContainer>
        <h1 className="text-3xl font-bold text-slate-100 mb-2 text-center">
          Share Your Story Idea
        </h1>
        <p className="text-slate-400 mb-8 text-center text-lg">
          Inspire our next feature story about innovative startups and founders
        </p>

        {submitted ? (
          <SuccessMessage onReset={() => setSubmitted(false)} />
        ) : (
          <form
            action="https://formsubmit.co/4d1038fa062827df5605f0307d73351b"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => {
                setTimeout(() => setSubmitted(true), 500);
              }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <label
                htmlFor="suggestion"
                className="block text-sm font-semibold text-slate-300 ml-1"
              >
                Your story suggestion
              </label>
              <textarea
                ref={textareaRef}
                id="suggestion"
                name="suggestion"
                placeholder="What story should we tell next?..."
                className="w-full border-2 border-slate-700 rounded-lg p-4 focus:outline-none focus:border-blue-500 bg-slate-800 text-slate-200 placeholder-slate-500 resize-none"
                rows={3}
                required
              />
            </div>

            <input type="hidden" name="_captcha" value="false" />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Send Suggestion
            </button>
          </form>
        )}
      </CardContainer>

      <iframe
        name="hidden_iframe"
        className="absolute opacity-0 w-0 h-0"
        title="Form submission handler"
      />
    </main>
  );
}