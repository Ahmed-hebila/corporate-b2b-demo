import ServicesContent from "./ServicesContent";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: `خدماتنا ومنتجاتنا | ${siteConfig.name}`,
  description: "نقدم تشكيلة واسعة من المعدات الصناعية، المواد الخام، وحلول الأتمتة لدعم كفاءة الإنتاج وتقليل تكاليف الصيانة.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">خدماتنا ومنتجاتنا</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            نقدم حلولاً متكاملة وتوريدات عالية الجودة تلبي أدق المواصفات المطلوبة في مختلف القطاعات الصناعية.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
        <ServicesContent />
      </div>
    </div>
  );
}
