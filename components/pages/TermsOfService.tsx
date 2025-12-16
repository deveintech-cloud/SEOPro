import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8">
        <p className="lead text-lg">
          Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SEOPro Suite website (the "Service") operated by SEOPro Suite ("us", "we", or "our").
        </p>

        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">2. Use License</h2>
            <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on SEOPro Suite's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>attempt to decompile or reverse engineer any software contained on SEOPro Suite's website;</li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">3. Disclaimer of SEO Results</h2>
            <p>
                The materials on SEOPro Suite's website are provided on an 'as is' basis. SEOPro Suite makes no warranties, expressed or implied, regarding the accuracy of our analysis or the potential impact on your search engine rankings. 
            </p>
            <p className="mt-4 font-semibold">
                Search engine algorithms (Google, Bing, etc.) change frequently. We do not guarantee that using our tools will result in improved rankings, traffic, or revenue. You acknowledge that SEO is a complex field and our tools are for data analysis purposes only.
            </p>
        </section>

        <section>
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">4. Limitations</h2>
             <p>
                 In no event shall SEOPro Suite or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SEOPro Suite's website.
             </p>
        </section>

        <section>
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">5. Governing Law</h2>
             <p>
                 These terms and conditions are governed by and construed in accordance with the laws of South Africa and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
             </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;