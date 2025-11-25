import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>Last updated: October 26, 2024</p>
        
        <h3 className="text-xl font-semibold text-slate-800">1. Information We Collect</h3>
        <p>
          We collect information you provide directly to us when you use our SEO tools, create an account, or contact us. This may include your email address, name, and website URL.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">2. How We Use Your Information</h3>
        <p>
          We use the information we collect to provide, maintain, and improve our services, including processing your transactions and sending you related information, such as confirmations and invoices.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">3. Data Security</h3>
        <p>
          We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">4. Third-Party Services</h3>
        <p>
          We may use third-party services for analytics and advertising. These third parties may access your data only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;