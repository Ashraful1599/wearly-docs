export default function Support() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Support & Contact
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Get help with your Wearly theme from our dedicated support team.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Email Support</h3>
          <p className="text-wearly-gray-600 mb-4">
            Get personalized help with theme customization and troubleshooting.
          </p>
          <a href="mailto:support@softiustech.com" 
             className="btn-primary inline-block">
            Contact Support
          </a>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Documentation</h3>
          <p className="text-wearly-gray-600 mb-4">
            Comprehensive guides and tutorials for every aspect of the theme.
          </p>
          <a href="/" className="btn-secondary inline-block">
            Browse Docs
          </a>
        </div>
      </section>

      <section className="text-center bg-wearly-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Response Times</h2>
        <p className="text-wearly-gray-600 mb-6">
          We typically respond to support requests within 24 hours during business days.
        </p>
        <div className="text-sm text-wearly-gray-500">
          Business Hours: Monday - Friday, 9 AM - 6 PM EST
        </div>
      </section>
    </div>
  )
}