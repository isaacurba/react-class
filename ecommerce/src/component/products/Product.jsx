import { useGetAllProductsQuery } from "../../api/api";

const Products = () => {
  const { data, isLoading } = useGetAllProductsQuery();

  const products = data?.products || [];

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Products
          </h1>
          <p className="mt-2 text-gray-500">
            Explore our collection of amazing products
          </p>
        </div>

        {/* Loading */}
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className="h-64 animate-pulse bg-gray-200" />

                <div className="space-y-3 p-5">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
                  <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Products */
          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-100">
                  <img
                    src={product.images?.[0]}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Price badge */}
                  <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-bold text-gray-900 shadow">
                    ${product.price}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="mb-2 line-clamp-1 text-lg font-semibold text-gray-900">
                    {product.title}
                  </h2>

                  <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-indigo-600">
                      ${product.price}
                    </span>

                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      View
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Empty state */}
        {!isLoading && products.length === 0 && (
          <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              No products found
            </h2>
            <p className="mt-2 text-gray-500">
              There are currently no products to display.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Products;