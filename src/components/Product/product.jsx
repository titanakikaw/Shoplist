import { StarIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React from "react";

const Product = ({
  product,
  cartItem,
  isLoading,
  addToCart,
  updateCartItem,
  deleteCartItem,
}) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-10">
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-2 lg:col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:col-span-10 lg:col-span-9 grid h-full">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading">{product.description}</h3>

          <p className="text-2xl text-gray-900">{product.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={clsx("h-5 w-5 flex-shrink-0 text-gray-900", {
                      "text-gray-200": product.rating.rate <= rating,
                    })}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating.rate} out of 5 stars</p>
              <a
                href="/"
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {product.rating.count} reviews
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="options-heading" className="mt-4">
          {cartItem ? (
            <div className="flex items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
                onClick={() =>
                  updateCartItem({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })
                }
              >
                +
              </button>
              <p className="flex-1 text-2xl font-bold text-center">
                {cartItem.quantity}
              </p>
              <button
                type="submit"
                disabled={isLoading}
                className="flex flex-1 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  disabled:bg-slate-500 disabled:cursor-wait"
                onClick={() => {
                  if (cartItem.quantity <= 1) {
                    deleteCartItem(cartItem);
                  } else {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  }
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button
              type="submit"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() =>
                addToCart({
                  productId: product.id,
                  quantity: 1,
                })
              }
            >
              Add to bag
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Product;
