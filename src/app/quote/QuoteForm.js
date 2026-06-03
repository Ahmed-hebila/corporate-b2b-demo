"use client";

import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    serviceType: "قطع غيار ومعدات",
    details: ""
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      if (formData.name && formData.phone && formData.details) {
        setStatus("success");
        setFormData({ name: "", company: "", phone: "", email: "", serviceType: "قطع غيار ومعدات", details: "" });
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
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mt-12">
      {status === "success" && (
        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-start gap-3 border border-green-200">
          <svg className="w-6 h-6 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-semibold">تم استلام طلبك بنجاح! سيقوم فريق المبيعات بالتواصل معك قريباً لتقديم عرض السعر.</p>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-start gap-3 border border-red-200">
          <svg className="w-6 h-6 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="font-semibold">حدث خطأ. يرجى التأكد من تعبئة جميع الحقول المطلوبة.</p>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">الاسم الكامل *</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">اسم الشركة</label>
            <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">رقم الجوال / الهاتف *</label>
            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">البريد الإلكتروني</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none" />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">نوع الخدمة / المنتج المطلوب</label>
          <select name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white">
            <option value="الخدمة الأولى">الخدمة الأولى</option>
            <option value="الخدمة الثانية">الخدمة الثانية</option>
            <option value="الخدمة الثالثة">الخدمة الثالثة</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-semibold leading-6 text-slate-900 mb-2">تفاصيل الطلب (الكميات، المواصفات الفنية، العلامة التجارية) *</label>
          <textarea name="details" id="details" rows={5} required value={formData.details} onChange={handleChange} className="block w-full rounded-md border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-amber-500 outline-none resize-none" />
        </div>

        <button type="submit" disabled={status === "submitting"} className="w-full flex justify-center items-center rounded-md bg-amber-500 px-6 py-4 text-lg font-bold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
          {status === "submitting" ? "جاري الإرسال..." : "إرسال طلب عرض السعر"}
        </button>
      </div>
    </form>
  );
}
