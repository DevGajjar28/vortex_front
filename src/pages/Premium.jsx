import { CheckIcon } from "@heroicons/react/20/solid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Array containing features included in premium membership
const includedFeatures = [
  "Unlimited downloads",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

// Default export function for the Premium page
export default function Premium() {
  return (
    <>
      {/* Navbar component */}
      <Navbar />

      {/* Section for pricing information */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upgrade to Unsplash and start creating with exclusive images.
            </h2>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p> */}
          </div>

          {/* Section for lifetime membership details */}

          <section className="py-6 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 mt-12">
            <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full sm:p-10 lg:flex-row">
              <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-900 dark:bg-gray-50">
                <span className="text-sm">Basic</span>
                <p className="text-5xl font-bold text-center">20 &#8377;s</p>
                <div className="mt-6 text-left">
                  <p>25 download perday</p>
                  <p>10 images upload</p>
                  <p>Customer Support</p>
                </div>
                <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-700 dark:border-gray-300">
                  Sign up
                </button>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 p-4 pb-8 text-center rounded-md sm:p-8 lg:p-16 bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                <span className="text-sm font-semibold">Advanced</span>
                <p className="text-5xl font-bold">89 &#8377;</p>
                <div className="mt-6 text-left-black font-bold">
                  <p>unlimited Download</p>
                  <p>unlimited Upload</p>
                  <p>Customer Support</p>
                </div>
                <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900">
                  Sign up
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ  section*/}

        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-20 text-center mt-48">
          Frequently asked questions
        </h2>

        <div className="space-y-4 mt-28 border-4 border-black rounded-lg p-4 md:p-8">
          <details
            className="group border-s-4 border-grey-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                What is Vortex Premium?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Vortex Premium is a subscription service that offers exclusive
              benefits and features to enhance your experience on the platform.
            </p>
          </details>

          <details className="group border-s-4 border-grey-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                What benefits do I get with Vortex Premium?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              With Vortex Premium, you'll enjoy an ad-free browsing experience,
              access to premium content, advanced search filters, and priority
              customer support.
            </p>
          </details>

          <details className="group border-s-4 border-grey-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How much does Vortex Premium cost?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              The cost of Vortex Premium varies depending on the subscription
              plan you choose.
            </p>
          </details>

          <details className="group border-s-4 border-grey-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                Do I need a Vortex Premium subscription to upload content?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              No, uploading content is free for all users. However, Vortex
              Premium offers additional benefits such as increased visibility
              for your uploads and access to advanced analytics.
            </p>
          </details>

          <details className="group border-s-4 border-grey-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-lg font-medium text-gray-900">
                How do I contact customer support for assistance with my Vortex
                Premium subscription?
              </h2>

              <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              If you have any questions or need assistance with your Vortex
              Premium subscription, please don't hesitate to contact our
              dedicated customer support team. We're here to help you make the
              most of your premium experience.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </>
  );
}
