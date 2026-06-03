import QuoteForm from "./QuoteForm";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `طلب عرض أسعار | ${siteConfig.name}`,
  description: "اطلب عرض أسعار مخصص لاحتياجاتك من التوريدات الصناعية أو الحلول اللوجستية.",
};

export default function QuotePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">طلب عرض أسعار</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            نص وصفي يشجع العميل على تعبئة النموذج أدناه للحصول على عرض سعر مخصص لاحتياجاته بأسرع وقت ممكن.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 lg:px-8 sm:py-16 -mt-20 relative z-10">
        <QuoteForm />
      </div>
    </div>
  );
}
