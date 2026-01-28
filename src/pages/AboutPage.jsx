/**
 * About page component providing information about Stratford School uniform recycling program
 * Mobile-responsive layout with sections about mission, benefits, and how it works
 * Includes visual icon for enhanced appeal
 */
function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-12">
        {/* Header with Icon */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 rounded-full p-6">
              <svg 
                className="w-16 h-16 text-blue-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stratford School Uniform Recycling
          </h1>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Purpose</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Stratford School uniform recycling effort is a community initiative designed to 
            reduce waste and promote sustainability within our school community. We believe that 
            uniforms in good condition should have a second life rather than ending up in landfills.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By facilitating the exchange of school uniforms, we help Stratford School families 
            save money while contributing to environmental conservation efforts. This program 
            strengthens our community bonds and demonstrates our commitment to sustainable practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">💰 Cost Savings</h3>
              <p className="text-blue-800 text-sm">
                Access quality uniforms at no cost, helping families reduce expenses.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">🌱 Environmental Impact</h3>
              <p className="text-green-800 text-sm">
                Reduce textile waste and extend the life of school uniforms.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">🤝 Community Building</h3>
              <p className="text-purple-800 text-sm">
                Strengthen community bonds through sharing and collaboration.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">♻️ Circular Economy</h3>
              <p className="text-orange-800 text-sm">
                Promote sustainable consumption patterns within our school.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li className="leading-relaxed">
              <strong className="text-gray-900">Donate:</strong> Stratford School families can 
              donate uniforms that are no longer needed but still in good condition.
            </li>
            <li className="leading-relaxed">
              <strong className="text-gray-900">Browse:</strong> Browse available items by 
              category, size, and condition on our homepage.
            </li>
            <li className="leading-relaxed">
              <strong className="text-gray-900">Request:</strong> Contact the Stratford School 
              office to request items you need (contact information available through school channels).
            </li>
            <li className="leading-relaxed">
              <strong className="text-gray-900">Collect:</strong> Pick up requested items 
              from the Stratford School office during designated hours.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Involved</h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about the Stratford School uniform recycling program, please contact 
            the school office or visit during office hours. We're always happy to help and 
            welcome your participation in this important community effort!
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
