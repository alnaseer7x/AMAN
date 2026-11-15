import { useState } from 'react';
import { ArrowLeft, Check, CircleHelp, Eye, FileText, MessageCircle, ShieldCheck } from 'lucide-react';
import { SupabaseConnectionTest } from '@/components/supabase-connection-test';

const questions = [
  {
    q: 'ما هي أمان؟',
    a: 'أمان منصة لتنظيم الاتفاقات المالية بين العميل ومقدم الخدمة المستقل. تساعدكما على توضيح قيمة المشروع ومراحله ومتابعة حالة كل دفعة ضمن تجربة واحدة.',
  },
  {
    q: 'كيف تعمل الدفعات على مراحل؟',
    a: 'يُقسّم الطرفان قيمة المشروع إلى مراحل واضحة قبل البدء. ترتبط كل مرحلة بعمل متفق عليه، وتظهر حالتها للطرفين عند الإرسال والمراجعة والاعتماد.',
  },
  {
    q: 'متى يراجع العميل العمل؟',
    a: 'عند إكمال مقدم الخدمة للمرحلة، يستطيع العميل مراجعة العمل وإبداء موافقته. وتظل تفاصيل المرحلة وحالتها ظاهرة للطرفين.',
  },
  {
    q: 'ماذا لو اختلف الطرفان؟',
    a: 'يمكن لأي من الطرفين رفع نزاع حول المشروع لبدء مسار مراجعة. أمان لا تعد بحسم مسبق أو بضمان الأموال؛ تفاصيل هذا المسار تُعرض بوضوح ضمن المنصة.',
  },
  {
    q: 'هل أمان بنك أو خدمة ضمان للأموال؟',
    a: 'لا. أمان ليست بنكاً، ولا نعرضها كخدمة تأمين أو ضمان للأموال. هي مساحة لتنظيم الاتفاقات ومتابعة المراحل وحالاتها بوضوح.',
  },
];

function Brand() {
  return <a className="brand" href="#top" aria-label="أمان، إلى أعلى الصفحة"><span className="brand-mark"><span>أ</span></span><span>أمان</span></a>;
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="page-shell" dir="rtl" lang="ar">
      <header className="site-header">
        <div className="wrap nav-inner">
          <Brand />
          <nav className="nav-links" aria-label="التنقل الرئيسي">
            <a href="#how">كيف تعمل</a>
            <a href="#clarity">وضوح الاتفاق</a>
            <a href="#protection">للطرفين</a>
            <a href="#faq">أسئلة شائعة</a>
          </nav>
          <a className="nav-cta" href="#how">اكتشف أمان <ArrowLeft size={15} /></a>
        </div>
      </header>

      <main>
        <section className="hero wrap" id="top">
          <div className="hero-copy">
            <div className="eyebrow">اتفاق أوضح. مشروع أهدأ.</div>
            <h1>لما تكون التفاصيل واضحة، <em>الشغل يمشي</em> بثقة.</h1>
            <p>أمان تجمع العميل ومقدم الخدمة على اتفاق مالي واضح، ومراحل محددة، وحالة يعرفها الطرفان — من أول خطوة إلى اعتماد العمل.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#how">تعرّف على طريقة العمل <ArrowLeft size={16} /></a>
              <a className="button-secondary" href="#protection">كيف نحفظ الوضوح؟</a>
            </div>
            <div className="micro-trust"><span className="micro-icon"><ShieldCheck size={15} /></span><span>وضوح للطرفين، دون وعود مبالغ فيها</span></div>
          </div>
          <div className="hero-art" aria-label="تصور توضيحي لمشروع مقسّم إلى مراحل">
            <div className="art-disc" />
            <div className="art-ring" />
            <div className="orbit-dot" />
            <div className="mock-project">
              <div className="mock-top"><span>ملخص المشروع</span><span className="mock-badge">نشط</span></div>
              <h3>هوية بصرية لمقهى نُزل</h3>
              <small>العميلة: ليان · مقدمة الخدمة: سارة</small>
              <div className="mock-amount"><strong>٢٬٤٠٠ ر.س</strong><span>قيمة الاتفاق</span></div>
              <div className="progress-track"><i /></div>
              <div className="milestone-list">
                <div className="milestone"><span className="milestone-dot"><Check size={13} /></span><div className="milestone-info"><strong>الاتجاه الإبداعي</strong><small>تم اعتماد العمل</small></div><span className="milestone-price">٨٠٠ ر.س</span></div>
                <div className="milestone"><span className="milestone-dot wait">2</span><div className="milestone-info"><strong>تطبيقات الهوية</strong><small>بانتظار مراجعة العميلة</small></div><span className="milestone-price">١٬٠٠٠ ر.س</span></div>
                <div className="milestone"><span className="milestone-dot wait">3</span><div className="milestone-info"><strong>ملفات التسليم</strong><small>لم تبدأ بعد</small></div><span className="milestone-price">٦٠٠ ر.س</span></div>
              </div>
            </div>
            <div className="floating-note"><strong>كل مرحلة لها حالة</strong>واضحة للطرفين، في وقتها.</div>
          </div>
        </section>

        <section className="section how" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="section-kicker">بخطوات مفهومة</div>
              <h2>من اتفاق أولي إلى عمل معتمد.</h2>
              <p>بدل ما تضيع التفاصيل بين الرسائل، خلّوا الاتفاق والمراحل وحالة كل خطوة في مكان واحد.</p>
            </div>
            <div className="steps">
              <article className="step"><div className="step-num">١</div><h3>اتفقوا على التفاصيل</h3><p>حددوا قيمة المشروع، وما الذي يشمله، وكيف ستُقسّمون العمل إلى مراحل مفهومة.</p></article>
              <article className="step"><div className="step-num">٢</div><h3>تابعوا كل مرحلة</h3><p>يظهر للطرفين ما أُنجز وما ينتظر المراجعة، مع قيمة كل مرحلة وحالتها الحالية.</p></article>
              <article className="step"><div className="step-num">٣</div><h3>راجعوا واعتمدوا</h3><p>يُرسل العمل للمراجعة، ويستطيع العميل اعتماده. وإذا ظهر خلاف، يوجد مسار لرفع نزاع.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="clarity">
          <div className="wrap clarity">
            <div className="clarity-visual" aria-hidden="true">
              <div className="quote-card">
                <div className="tiny">اتفاق المشروع · نسخة مشتركة</div>
                <div className="quote-line"><span>الاتجاه الإبداعي</span><strong>٨٠٠ ر.س</strong></div>
                <div className="quote-line"><span>تطبيقات الهوية</span><strong>١٬٠٠٠ ر.س</strong></div>
                <div className="quote-line"><span>ملفات التسليم</span><strong>٦٠٠ ر.س</strong></div>
                <div className="quote-line total"><span>إجمالي الاتفاق</span><strong>٢٬٤٠٠ ر.س</strong></div>
              </div>
            </div>
            <div className="clarity-copy">
              <div className="section-kicker">الكلام الواضح يريح الطرفين</div>
              <h2>لا مفاجآت في منتصف الطريق.</h2>
              <p>لما تكون قيمة المشروع وما يقابلها من عمل مكتوبة قبل البداية، يقدر كل طرف يعرف ما عليه وما له. أمان تساعد على جعل هذه التفاصيل مرئية وقابلة للمتابعة.</p>
              <div className="benefit-list">
                <div className="benefit"><span className="check"><Check size={13} /></span><span>نطاق عمل ومراحل متفق عليها قبل الانطلاق.</span></div>
                <div className="benefit"><span className="check"><Eye size={13} /></span><span>حالة كل مرحلة ظاهرة للعميل ومقدم الخدمة.</span></div>
                <div className="benefit"><span className="check"><FileText size={13} /></span><span>ملخص واحد يرجع له الطرفان وقت الحاجة.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section protection" id="protection">
          <div className="wrap">
            <div className="section-head">
              <div className="section-kicker">مساحة عادلة للطرفين</div>
              <h2>الوضوح مو لطرف واحد.</h2>
              <p>الاتفاق الجيد يوضح التوقعات، ويجعل التقدم مرئياً، ويترك مساحة للمراجعة إذا لم تسر الأمور كما خُطط لها.</p>
            </div>
            <div className="protection-grid">
              <article className="protection-item"><span className="line-icon"><FileText size={18} /></span><h3>لصاحب المشروع</h3><p>تعرف ما الذي ستحصل عليه في كل مرحلة، وتراجع العمل قبل اعتماده. لا انتقال مبهم بين خطوة وأخرى.</p></article>
              <article className="protection-item"><span className="line-icon"><Eye size={18} /></span><h3>لمقدم الخدمة</h3><p>تبدأ بنطاق ومقابل واضحين، وتوثّق تقدمك مرحلة بمرحلة، بدلاً من الاعتماد على تفاهمات متفرقة.</p></article>
              <article className="protection-item"><span className="line-icon"><Check size={18} /></span><h3>حالات مفهومة</h3><p>من «قيد التنفيذ» إلى «بانتظار المراجعة» ثم «معتمد»؛ يرى كل طرف أين وصل المشروع.</p></article>
              <article className="protection-item"><span className="line-icon"><MessageCircle size={18} /></span><h3>طريق عند الاختلاف</h3><p>إذا لم يتفق الطرفان على نتيجة مرحلة، يمكن رفع نزاع لمراجعة الموضوع عبر مسار مخصص.</p></article>
            </div>
            <div className="dispute-note"><strong>بكل شفافية:</strong> أمان تنظّم الاتفاق وتُظهر حالاته، لكنها لا تضمن الأموال أو نتائج النزاعات. تُعرض تفاصيل الخدمة ومسار المراجعة بوضوح قبل استخدامها.</div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="wrap faq-layout">
            <div className="section-head">
              <div className="section-kicker">قبل أن تبدأ</div>
              <h2>أسئلة على بالكم؟</h2>
              <p>هذه أهم التفاصيل عن فكرة أمان وطريقة استخدامها.</p>
              <div style={{ color: '#c27b61', marginTop: 22 }}><CircleHelp size={28} strokeWidth={1.4} /></div>
            </div>
            <div className="faq-list">
              {questions.map((item, index) => (
                <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={item.q}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)} data-testid={`faq-toggle-${index}`}>
                    <span>{item.q}</span><span aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer"><div><p>{item.a}</p></div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {import.meta.env.DEV && <SupabaseConnectionTest />}

        <section className="final-cta" id="start">
          <div className="wrap cta-inner">
            <div><h2>مشروعك الجاي يستاهل بداية أوضح.</h2><p>تعرّف على الفكرة، وخلي اتفاقكم أول خطوة مريحة.</p></div>
            <a className="button-primary" href="#how">شاهد كيف تعمل أمان <ArrowLeft size={16} /></a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="wrap footer-inner">
          <Brand />
          <p className="footer-note">اتفاق واضح، وعمل يمشي بهدوء.</p>
          <nav className="footer-links" aria-label="روابط الصفحة"><a href="#how">كيف تعمل</a><a href="#protection">للطرفين</a><a href="#faq">الأسئلة الشائعة</a><a href="#top">العودة للأعلى</a></nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
