import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 space-y-8">
        <p className="lead text-lg">
          Last updated: October 26, 2024. At SEOPro Suite ("we", "us", "our"), accessible from seoprosuite.co.za, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SEOPro Suite and how we use it.
        </p>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">1. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Direct Interactions:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</li>
            <li><strong>Tool Usage Data:</strong> When you use our SEO tools, we process the data you input (such as URLs or text) solely for the purpose of generating the analysis. We do not permanently store your analyzed content.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">2. Cookies and Web Beacons</h2>
          <p>
            Like any other website, SEOPro Suite uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
          </p>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-4 mb-2">Google DoubleClick DART Cookie</h3>
          <p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to seoprosuite.co.za and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="nofollow noreferrer" className="text-brand-600 hover:underline">https://policies.google.com/technologies/ads</a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Send you emails (if you have opted in to our newsletter)</li>
            <li>Find and prevent fraud</li>
          </ul>
        </section>

        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">4. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>
        </section>

        <section>
             <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">5. GDPR Data Protection Rights</h2>
             <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
             <ul className="list-disc pl-6 space-y-2 mt-4">
                 <li>The right to access – You have the right to request copies of your personal data.</li>
                 <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                 <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
             </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;