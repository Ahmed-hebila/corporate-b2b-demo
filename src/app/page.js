import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-4xl">
            عنوان رئيسي جذاب يعبر عن نشاط الشركة الأساسي
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص ليكون بمثابة وصف لخدمات الشركة وما يميزها عن المنافسين في السوق.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/quote" className="rounded-md bg-amber-500 px-6 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400 transition-colors">
              الزر الرئيسي (Call to Action)
            </Link>
            <Link href="/about" className="text-lg font-semibold leading-6 text-white hover:text-amber-500 transition-colors">
              رابط إضافي <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features / Quick Overview */}
      <div className="py-24 sm:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">عنوان فرعي</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              عنوان القسم الرئيسي للميزات أو الخدمات
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              وصف مختصر يوضح لماذا يجب على العميل اختيار هذه الشركة وما هي القيمة المضافة التي ستقدمها له.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[1, 2, 3].map((feature) => (
                <div key={feature} className="flex flex-col bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-slate-900">
                    <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-amber-500/10">
                      <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    عنوان الميزة رقم {feature}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                    <p className="flex-auto">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، ليعبر عن تفاصيل هذه الميزة بشكل دقيق ويشرح أهميتها.
                    </p>
                    <p className="mt-6">
                      <Link href="/services" className="text-sm font-semibold leading-6 text-amber-600 hover:text-amber-500">
                        اقرأ المزيد <span aria-hidden="true">←</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              عنوان دعوة لاتخاذ إجراء (CTA)
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              نص محفز يشجع الزائر على التواصل أو طلب الخدمة فوراً بناءً على ما قرأه في الموقع وتم إقناعه به.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-amber-500 px-6 py-3 text-lg font-semibold text-slate-900 shadow-sm hover:bg-amber-400">
                تواصل معنا الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
