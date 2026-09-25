import { useGetAllBooksQuery } from "../api/api"

const Book = () => {

  const { data, isLoading } = useGetAllBooksQuery()

  console.log(data)

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold text-gray-600">
          Loading books...
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Gutenberg Books
        </h1>

        <p className="mt-2 text-gray-600">
          Discover classic books from Project Gutenberg
        </p>
      </div>

      {/* Books */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {data?.results?.map((book) => (

          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >

            {/* Cover */}
            <div className="h-72 bg-gray-200">
              <img
                src={book.cover_image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-5">

              <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                {book.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {book.authors?.[0]?.name}
              </p>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>
                  📥 {book.download_count?.toLocaleString()}
                </span>

                <span>
                  ⭐ {book.reading_ease_score}
                </span>
              </div>

              <button className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
                View Book
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Book;