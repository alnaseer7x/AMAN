import { useState } from 'react';
import { Check, Database, LoaderCircle } from 'lucide-react';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase';

const demoProject = {
  id: 'aman-demo-project',
  title: 'مشروع AMAN التجريبي',
  amount: 1200,
};

type DemoProject = typeof demoProject & {
  created_at: string;
};

async function saveDemoProject(): Promise<{ project: DemoProject; alreadySaved: boolean }> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from('aman_demo_projects')
    .insert(demoProject)
    .select('id, title, amount, created_at')
    .single();

  if (!error && data) {
    return { project: data, alreadySaved: false };
  }

  if (error?.code === '23505') {
    const existing = await supabase
      .from('aman_demo_projects')
      .select('id, title, amount, created_at')
      .eq('id', demoProject.id)
      .single();

    if (!existing.error && existing.data) {
      return { project: existing.data, alreadySaved: true };
    }

    throw existing.error ?? error;
  }

  throw error ?? new Error('لم يرجع Supabase سجل المشروع التجريبي.');
}

export function SupabaseConnectionTest() {
  const [isSaving, setIsSaving] = useState(false);
  const [status, setStatus] = useState<{ message: string; kind: 'success' | 'error' } | null>(null);

  async function handleSave() {
    setIsSaving(true);
    setStatus(null);

    try {
      const result = await saveDemoProject();
      setStatus({
        kind: 'success',
        message: result.alreadySaved
          ? 'السجل التجريبي محفوظ مسبقًا وتمت قراءته من Supabase.'
          : 'تم حفظ المشروع التجريبي وقراءته من Supabase.',
      });
    } catch (error) {
      console.error('Supabase demo save failed:', error);
      setStatus({
        kind: 'error',
        message: 'تعذر الحفظ. تأكد من تشغيل ملف الإعداد في Supabase ثم أعد المحاولة.',
      });
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="connection-test-section" aria-labelledby="connection-test-title" data-testid="section-supabase-test">
      <div className="wrap connection-test">
        <div className="connection-test-copy">
          <span className="connection-test-kicker"><Database size={15} /> اختبار تطوير فقط</span>
          <h2 id="connection-test-title">جرّب حفظ مشروع واحد</h2>
          <p>
            يحفظ هذا الاختبار سجلًا تجريبيًا ثابتًا وغير حساس. لا تستخدمه لحفظ بيانات عميل أو مشروع حقيقي.
          </p>
        </div>
        <div className="connection-test-action">
          {!isSupabaseConfigured && (
            <p className="connection-test-status error" role="status" data-testid="status-supabase-config">
              أضف إعدادات Supabase إلى Replit Secrets لتفعيل التجربة.
            </p>
          )}
          <button
            className="button-primary"
            type="button"
            onClick={handleSave}
            disabled={!isSupabaseConfigured || isSaving}
            data-testid="button-save-demo-project"
          >
            {isSaving ? <LoaderCircle className="connection-test-spinner" size={16} /> : <Check size={16} />}
            {isSaving ? 'جارٍ الحفظ…' : 'احفظ المشروع التجريبي'}
          </button>
          {status && (
            <p
              className={`connection-test-status ${status.kind}`}
              role="status"
              aria-live="polite"
              data-testid="status-supabase-save"
            >
              {status.message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
