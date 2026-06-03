import { siteConfig } from "@/config/site";

export const metadata = {
  title: `من نحن | ${siteConfig.name}`,
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">من نحن</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300 max-w-2xl mx-auto">
            نبذة مختصرة توضح تاريخ الشركة، متى تأسست، وما هو هدفها الأساسي في السوق.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 sm:py-28">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">قصتنا وتاريخنا</h2>
            <div className="text-lg leading-8 text-slate-600 space-y-6">
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التي يولدها التطبيق.
              </p>
              <p>
                إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك المولد زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية.
              </p>
            </div>
          </div>
          <div className="relative h-80 lg:h-[400px] rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center border border-slate-200">
             <span className="text-slate-400 font-semibold text-lg">مكان للصورة (Image Placeholder)</span>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-32 grid grid-cols-1 gap-12 sm:grid-cols-2">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">رؤيتنا</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              نص يعبر عن الرؤية المستقبلية للشركة وطموحاتها للسنوات القادمة في مجال عملها. يتم كتابة الرؤية هنا بشكل واضح ومختصر.
            </p>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">رسالتنا</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              نص يعبر عن الرسالة الحالية للشركة والقيمة التي تقدمها لعملائها ومجتمعها بشكل يومي. وما تسعى لتحقيقه في الوقت الحاضر.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">قيمنا الأساسية</h2>
          </div>
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((value) => (
              <div key={value} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="mx-auto w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                  <span className="font-bold">{value}</span>
                </div>
                <dt className="text-xl font-semibold text-slate-900 mb-3">اسم القيمة</dt>
                <dd className="text-slate-600">وصف قصير يوضح كيف تطبق الشركة هذه القيمة في عملها وكيف تؤثر على عملائها.</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
