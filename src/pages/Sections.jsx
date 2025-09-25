export default function Sections() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Theme Sections
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Wearly includes 67 customizable sections to build beautiful, converting pages.
          All sections are drag-and-drop and fully responsive.
        </p>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Hero Banners</h3>
          <p className="text-sm text-wearly-gray-600">
            Create stunning hero sections with images, videos, and call-to-action buttons.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Featured Products</h3>
          <p className="text-sm text-wearly-gray-600">
            Showcase your best products with customizable product grids and carousels.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Testimonials</h3>
          <p className="text-sm text-wearly-gray-600">
            Display customer reviews and testimonials to build trust and credibility.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Newsletter Signup</h3>
          <p className="text-sm text-wearly-gray-600">
            Collect email addresses with beautiful signup forms and incentive offers.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">Image Galleries</h3>
          <p className="text-sm text-wearly-gray-600">
            Create stunning image galleries and lookbooks to showcase your products.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-3">FAQ Section</h3>
          <p className="text-sm text-wearly-gray-600">
            Answer common questions with collapsible FAQ sections and search functionality.
          </p>
        </div>
      </section>
    </div>
  )
}