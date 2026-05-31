import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Placeholder for background image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          {/* Using a solid color placeholder since we don't have images yet, but keeping the overlay for when an image is added */}
          <div className="w-full h-full bg-slate-800" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              حلول صناعية ولوجستية <span className="text-amber-500">متكاملة</span> لمستقبل واعد
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              نقدم خدمات توريد ومعدات صناعية وحلول نقل لوجستية متطورة تلبي احتياجات المصانع والشركات بأعلى معايير الجودة والاعتمادية. شريكك الموثوق في سلسلة الإمداد.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/services"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 transition-colors"
              >
                اكتشف خدماتنا
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-amber-500 transition-colors">
                تواصل مع الخبراء <span aria-hidden="true">&larr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features/Services Overview Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-amber-600">خدماتنا الرئيسية</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              كل ما تحتاجه لنجاح مشاريعك الصناعية
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              من التوريدات الثقيلة إلى إدارة سلاسل الإمداد المعقدة، نوفر حلولاً مخصصة تضمن استمرارية أعمالك بكفاءة عالية.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.323c.097-.13.156-.286.176-.449l.42-3.392M11.42 15.17V4.5M12 2.25l-2.042 2.042c-.22.22-.328.533-.306.843l.42 3.392c.02.163.079.32.176.449l2.492 3.323" />
                    </svg>
                  </div>
                  التوريدات الصناعية
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">توريد المعدات الثقيلة، قطع الغيار، والمواد الأولية بأفضل المعايير العالمية لضمان سير العمل في المصانع والمشاريع.</p>
                </dd>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  الحلول اللوجستية
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">خدمات نقل وشحن متطورة براً وبحراً وجواً، مع تتبع دقيق لضمان وصول شحناتك بأمان وفي الوقت المحدد.</p>
                </dd>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-col bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:shadow-md transition-shadow">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-slate-900">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                    </svg>
                  </div>
                  إدارة سلاسل الإمداد
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">تخطيط وتنفيذ ورقابة شاملة لسلاسل الإمداد لتقليل التكاليف وزيادة الكفاءة التشغيلية لمؤسستك.</p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">أرقام نفخر بها</h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                خبرة ممتدة وسجل حافل من الإنجازات في دعم القطاع الصناعي.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-slate-300">عميل في مختلف القطاعات</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">+500</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-slate-300">شحنة تم توصيلها بنجاح</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">+10K</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-slate-300">شريك ومورد عالمي</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">+50</dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-slate-300">سنوات من الخبرة</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">+15</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative isolate mt-24 px-6 py-24 sm:mt-32 sm:py-32 lg:px-8 bg-amber-500 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.amber.400),theme(colors.amber.500))] opacity-50" />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            هل تبحث عن شريك موثوق لأعمالك؟
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-800">
            فريقنا من الخبراء جاهز لتقديم الاستشارات وتصميم حلول مخصصة تناسب متطلبات مشروعك.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/quote"
              className="rounded-md bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition-colors"
            >
              طلب عرض أسعار
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-slate-900 hover:text-slate-700 transition-colors">
              تحدث معنا <span aria-hidden="true">&larr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
