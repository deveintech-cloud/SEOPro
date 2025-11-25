import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Service</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        <p>Last updated: October 26, 2024</p>

        <h3 className="text-xl font-semibold text-slate-800">1. Acceptance of Terms</h3>
        <p>
          By accessing and using the SEOPro Suite website and tools, you accept and agree to be bound by the terms and provision of this agreement.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">2. Use License</h3>
        <p>
          Permission is granted to temporarily use the materials (information or software) on SEOPro Suite's website for personal, non-commercial transitory viewing only.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">3. Disclaimer</h3>
        <p>
          The materials on SEOPro Suite's website are provided "as is". SEOPro Suite makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
        </p>

        <h3 className="text-xl font-semibold text-slate-800">4. Limitations</h3>
        <p>
          In no event shall SEOPro Suite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SEOPro Suite's website.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;