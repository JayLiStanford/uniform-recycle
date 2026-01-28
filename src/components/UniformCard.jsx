/**
 * Card component for displaying individual uniform items
 * Displays: name, size, description, and image
 * Mobile-responsive card layout with enhanced Tailwind CSS styling
 * Highlights newly added items with a "New" badge
 */
function UniformCard({ item }) {
  const isNew = item.isNew || (item.createdAt && Date.now() - item.createdAt < 86400000)

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
      isNew ? 'ring-2 ring-green-400 ring-opacity-50' : ''
    }`}>
      {/* Image Container with New Badge */}
      <div className="relative bg-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400?text=No+Image'
          }}
        />
        
        {/* New Badge */}
        {isNew && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white shadow-lg animate-pulse">
              NEW
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-lg">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{item.name}</h3>
        
        {/* Size Badge */}
        <div className="mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
            Size: {item.size}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">{item.description}</p>

        {/* Condition Badge */}
        {item.condition && (
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
              item.condition === 'Excellent' ? 'bg-green-100 text-green-800' :
              item.condition === 'Good' ? 'bg-blue-100 text-blue-800' :
              'bg-yellow-100 text-yellow-800'
            }`}>
              {item.condition}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default UniformCard
