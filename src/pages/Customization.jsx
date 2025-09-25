export default function Customization() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold text-wearly-dark mb-4">
          Advanced Customization
        </h1>
        <p className="text-xl text-wearly-gray-600">
          Take your theme to the next level with custom CSS, advanced settings, and code modifications.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Custom CSS</h2>
        <div className="card">
          <p className="text-wearly-gray-600 mb-4">
            Add custom CSS through the theme customizer's "Custom CSS" section.
            This allows you to override default styles without editing theme files.
          </p>
          <div className="bg-wearly-gray-900 text-white p-4 rounded-lg font-mono text-sm">
            <pre>{`/* Example: Custom button styling */
.btn-primary {
  background: linear-gradient(45deg, #ff6a1f, #ff8c42);
  border-radius: 25px;
  transition: all 0.3s ease;
}`}</pre>
          </div>
        </div>
      </section>
    </div>
  )
}