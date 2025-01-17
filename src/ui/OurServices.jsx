import CardSlider from "../components/CardSlider";

export default function OurServices() {
  return (
    <div className="mt-[205px]">
      <div>
        <h2 className="text-primary text-2xl font-bold mb-4">خدماتنا</h2>
        <p className="text-secondary text-[20px] mb-24">
          يسعدنا أن نقدم أنفسنا كمزود حلول مستقل لأهم العلامات التجارية العالمية
          المتعلقة بصناعة تكنولوجيا المعلومات وتطوير البرمجيات.
        </p>
      </div>
      <CardSlider />
    </div>
  );
}
