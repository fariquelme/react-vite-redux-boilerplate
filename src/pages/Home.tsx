import { FormattedMessage } from "react-intl";

type calloutType = {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const callouts: calloutType[] = Array.from(
  { length: 4 },
  (i: number): calloutType => {
    return {
      name: `home.collections.c${i}.name`,
      description: `home.collections.c${i}.desc`,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: `home.collections.c${i}.alt`,
      href: "#",
    };
  },
);

type productsType = {
  id: number;
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const products: productsType[] = Array.from(
  { length: 10 },
  (i: number): productsType => {
    return {
      id: i + 1,
      name: `home.products.p${i + 1}.name`,
      href: "#",
      price: `home.products.p${i + 1}.price`,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      imageAlt: `home.products.p${i + 1}.alt`,
    };
  },
);

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">
            <FormattedMessage id={"home.collections.title"} />
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout: calloutType) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    <FormattedMessage id={callout.name} />
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
          <h2 className="mt-20 text-2xl font-bold text-gray-900">
            <FormattedMessage id={"home.products.title"} />
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
