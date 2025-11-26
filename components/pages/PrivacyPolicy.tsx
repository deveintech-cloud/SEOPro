import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-6">
        <p>Last updated: October 26, 2024</p>
        
        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">1. Information We Collect</h3>
        <p>
          We collect information you provide directly to us when you use our SEO tools, create an account, or contact us. This may include your email address, name, and website URL.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">2. How We Use Your Information</h3>
        <p>
          We use the information we collect to provide, maintain, and improve our services, including processing your transactions and sending you related information, such as confirmations and invoices.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">3. Data Security</h3>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">4. Third-Party Services</h3>
        <p>
          We may use third-party services for analytics and advertising. These third parties may access your data only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;