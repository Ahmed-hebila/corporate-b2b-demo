"use client";
import { useState } from "react";

const services = [
  {
    id: "service-1",
    name: "اسم الخدمة الأولى",
    description: "وصف شامل للخدمة الأولى يوضح المميزات والتفاصيل وما يحصل عليه العميل عند طلبها.",
    features: ["الميزة الفرعية الأولى", "الميزة الفرعية الثانية", "الميزة الفرعية الثالثة", "الميزة الفرعية الرابعة"],
  },
  {
    id: "service-2",
    name: "اسم الخدمة الثانية",
    description: "وصف شامل للخدمة الثانية يوضح المميزات والتفاصيل وما يحصل عليه العميل عند طلبها.",
    features: ["الميزة الفرعية الأولى", "الميزة الفرعية الثانية", "الميزة الفرعية الثالثة", "الميزة الفرعية الرابعة"],
  },
  {
    id: "service-3",
    name: "اسم الخدمة الثالثة",
    description: "وصف شامل للخدمة الثالثة يوضح المميزات والتفاصيل وما يحصل عليه العميل عند طلبها.",
    features: ["الميزة الفرعية الأولى", "الميزة الفرعية الثانية", "الميزة الفرعية الثالثة", "الميزة الفرعية الرابعة"],
  },
];

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">خدماتنا ومنتجاتنا</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            نص وصفي عام عن جميع الخدمات والمنتجات التي تقدمها الشركة للعملاء وكيف تساهم في تحقيق أهدافهم.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 sm:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs Navigation */}
          <div className="lg:w-1/4">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 hide-scrollbar" aria-label="Tabs">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    whitespace-nowrap lg:whitespace-normal text-right px-6 py-4 rounded-xl text-lg font-semibold transition-all
                    ${activeTab === service.id 
                      ? 'bg-amber-500 text-slate-900 shadow-sm' 
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}
                  `}
                >
                  {service.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 transition-opacity duration-300 ${activeTab === service.id ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">{service.name}</h2>
                </div>
                
                <p className="text-lg leading-8 text-slate-600 mb-10">
                  {service.description}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-6">المميزات الرئيسية:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="h-6 w-6 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-12 pt-8 border-t border-slate-100">
                  <a href="/quote" className="inline-flex justify-center items-center rounded-md bg-slate-900 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors">
                    طلب هذه الخدمة
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
