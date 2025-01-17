import Button from "../components/Button";
import WordAnimation from "../components/WordAnimation";

export default function About() {
  return (
    <div className="sm:flex sm:flex-row w-full   py-16 flex-col ">
      <div className="sm:w-[40%] flex justify-center tracking-wide  w-full	 ">
        <div className="w-[438px]  font-mons bg-card flex justify-center items-center ">

        <WordAnimation/>
        </div>
      </div>

      <div className="sm:w-[60%] w-full sm:mt-0 mt-10 xl:ms-16 ">
        <h2 className="text-2xl font-cairo text-primary font-bold  ">حول AWS GULF</h2>
        <p className="text-secondary mt-8">
          تعتبر AWS شركة رائدة في مجال تكامل نظم تكنولوجيا المعلومات وتقديم
          الخدمات، تأسست في عام 2024 مع تركيز على تقديم حلول الأجهزة التكنولوجية
          المتطورة. إدراكًا منها للتطور المستمر في المشهد التكنولوجي واحتياجات
          السوق المتغيرة بسرعة، وسعت الشركة محفظتها لتشمل خدمات البرمجيات. لم
          يكن هذا الإضافة مجرد تحسين، بل ضرورة لتلبية متطلبات الأعمال الحديثة
          المتطورة. من خلال دمج خدمات البرمجيات، تهدف AWS GULF إلى توفير حلول
          شاملة تمكّن عملاءها من التميز في سوق تنافسية. ومع التزامها بالابتكار
          والتميز، تكرس AWS GULF جهودها لتحقيق تأثير كبير من خلال تلبية وتجاوز
          توقعات العملاء.
        </p>

        <div className="flex font-cairo justify-start items-start xl:gap-12 mt-8">
          <div className="flex-col justify-start items-start">
            <Button type="primaryXlMoreW">الإبداع</Button>
            <ul className="text-[14px] mt-4">
              <li>تصاميم رائدة</li>
              <li>إنشاء محتوى إبداعي</li>
              <li>تجربة مستخدم تفاعلية</li>
              <li>
                العلامات التجارية الاستراتيجية والتصميمات <br />
                الجرافيكية
              </li>
              <li className="mb-[30px]">حلول مدفوعة بالذكاء الاصطناعي</li>
             <Button type="linkBtn">مزيد عنّا</Button>
            </ul>

          </div>
          <div className="ms-8 ">
            <Button type="primaryXl">التكنولوجيا</Button>
            <ul className="text-[14px] mt-4">
              <li>تصميم واجهات المستخدم وتجربة المستخدم</li>
              <li>
                {" "}
                برمجة تطبيقات الهاتف المحمول باستخدام <br />
                Native و Flutter{" "}
              </li>
              <li>حلول التجارة الإلكترونية </li>
              <li>تطوير البرمجيات المخصصة</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
