import ContactForm from "./ContactForm";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `اتصل بنا | ${siteConfig.name}`,
  description: "تواصل معنا للاستفسار عن التوريدات الصناعية، طلب عروض الأسعار، أو زيارة مقرنا في الدمام.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">تواصل مع الخبراء</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            نص وصفي يشجع الزائر على التواصل مع الشركة وطرح الاستفسارات ويوضح سرعة الاستجابة.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">معلومات التواصل</h2>
            <p className="text-lg text-slate-600 mb-12">
              نص وصفي إضافي يوضح أوقات العمل الرسمية وأهمية التواصل المباشر في حالات الطوارئ أو الطلبات المستعجلة.
            </p>

            <dl className="space-y-8 text-slate-600 text-lg">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">العنوان</span>
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                </dt>
                <dd className="pt-2 font-semibold">
                  {siteConfig.contact.address.split('،').map((line, i) => (
                    <span key={i}>{line}{i === 0 ? <br/> : '، '}</span>
                  ))}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">الهاتف</span>
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.08-7.074-6.97l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                </dt>
                <dd className="pt-2 font-semibold" dir="ltr">
                  {siteConfig.contact.phoneMain}<br />{siteConfig.contact.phoneSecondary}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">البريد الإلكتروني</span>
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                </dt>
                <dd className="pt-2 font-semibold">
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-amber-600 transition-colors block">
                    {siteConfig.contact.email}
                  </a>
                  <a href={`mailto:${siteConfig.contact.salesEmail}`} className="hover:text-amber-600 transition-colors block mt-1">
                    {siteConfig.contact.salesEmail}
                  </a>
                </dd>
              </div>
            </dl>

            {/* LinkedIn Button */}
            <div className="mt-12">
              <a 
                href={siteConfig.social.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-[#0077b5] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#005e93] transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                تواصل معنا عبر LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mt-24 rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-96 relative">
          <iframe 
            src={siteConfig.contact.mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={`موقع ${siteConfig.name}`}
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
