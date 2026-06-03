import { siteConfig } from "@/config/site";

export const metadata = {
  title: `الشركاء | ${siteConfig.name}`,
  description: siteConfig.description,
};

const partners = [
  { id: 1, name: "اسم الشريك 1", type: "نوع الشراكة (تقنية، مورد..)" },
  { id: 2, name: "اسم الشريك 2", type: "نوع الشراكة (تقنية، مورد..)" },
  { id: 3, name: "اسم الشريك 3", type: "نوع الشراكة (تقنية، مورد..)" },
  { id: 4, name: "اسم الشريك 4", type: "نوع الشراكة (تقنية، مورد..)" },
  { id: 5, name: "اسم الشريك 5", type: "نوع الشراكة (تقنية، مورد..)" },
  { id: 6, name: "اسم الشريك 6", type: "نوع الشراكة (تقنية، مورد..)" },
];

export default function PartnersPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">شركاء النجاح</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            وصف يعبر عن أهمية الشركاء في تحقيق أهداف الشركة وتقديم أفضل الخدمات للعملاء.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 sm:py-28">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-slate-400 text-sm font-bold">Logo</span>
               </div>
               <h3 className="text-lg font-bold text-slate-900">{partner.name}</h3>
               <p className="text-sm text-slate-500 mt-1">{partner.type}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-32 bg-amber-50 rounded-3xl p-10 sm:p-16 text-center border border-amber-100">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">هل ترغب في الانضمام لشبكة شركائنا؟</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            نحن نبحث دائماً عن شركاء استراتيجيين لتوسيع نطاق خدماتنا. تواصل معنا لمناقشة فرص التعاون.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a href="/contact" className="rounded-md bg-slate-900 px-8 py-3.5 text-lg font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors">
              تواصل مع إدارة الشراكات
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
