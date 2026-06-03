"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // محاكاة إرسال البيانات للخادم (Client-side validation & mockup)
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">أرسل رسالتك</h3>
      
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start gap-3 border border-green-200">
          <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold">تم إرسال رسالتك بنجاح! سيتواصل معك فريقنا في أقرب وقت.</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3 border border-red-200">
          <svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="font-semibold">حدث خطأ. يرجى التأكد من تعبئة جميع الحقول المطلوبة (الاسم، البريد الإلكتروني، والرسالة).</p>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
              الاسم الكامل *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 outline-none transition-all"
              placeholder="محمد أحمد"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
              اسم الشركة
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 outline-none transition-all"
              placeholder="شركة المصانع الوطنية"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
            البريد الإلكتروني الرسمي *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 outline-none transition-all"
            placeholder="info@yourcompany.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">
            تفاصيل الطلب أو الرسالة *
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 outline-none transition-all resize-none"
            placeholder="يرجى كتابة تفاصيل المعدات أو الخدمات التي ترغب بالاستفسار عنها..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex justify-center items-center rounded-md bg-amber-500 px-6 py-4 text-lg font-bold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "إرسال الرسالة"
          )}
        </button>
      </div>
    </form>
  );
}
