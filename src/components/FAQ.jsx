import React from "react";

function FAQ() {
  return (
    <>
      {/* FAQ Title */}
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-20 text-center mt-48">
        Frequently asked questions
      </h2>

      {/* FAQ Items */}
      <div className="space-y-4 mt-28">
        {/* FAQ Item 1 */}
        <details
          className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          {/* FAQ Item 1 Summary */}
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How can I become a contributor on Vortex?
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

          {/* FAQ Item 1 Content */}
          <p className="mt-4 leading-relaxed text-gray-700">
            To become a contributor on Vortex, simply navigate to the "Become
            Contributor" page and follow the prompts to upload your images. Once
            uploaded, our moderation team will review your submissions, and upon
            approval, your images will be featured on the platform.
          </p>
        </details>

        {/* FAQ Item 2 */}
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          {/* FAQ Item 2 Summary */}
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Are there any requirements for becoming a contributor?
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

          {/* FAQ Item 2 Content */}
          <p className="mt-4 leading-relaxed text-gray-700">
            There are no specific requirements for becoming a contributor on
            Vortex. We welcome submissions from photographers, artists, and
            creators of all skill levels and backgrounds.
          </p>
        </details>

        {/* FAQ Item 3 */}
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          {/* FAQ Item 3 Summary */}
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              Can I upload images that I didn't create myself?
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

          {/* FAQ Item 3 Content */}
          <p className="mt-4 leading-relaxed text-gray-700">
            We encourage users to upload original content that they have created
            themselves. However, if you have permission to share and distribute
            certain images, you may upload them as long as you provide proper
            attribution and adhere to copyright laws.
          </p>
        </details>

        {/* FAQ Item 4 */}
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          {/* FAQ Item 4 Summary */}
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              How many images can I upload as a contributor?
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

          {/* FAQ Item 4 Content */}
          <p className="mt-4 leading-relaxed text-gray-700">
            There is no limit to the number of images you can upload as a
            contributor. Feel free to share as many images as you'd like to
            contribute to the Vortex community.
          </p>
        </details>

        {/* FAQ Item 5 */}
        <details className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
          {/* FAQ Item 5 Summary */}
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              What types of images are suitable for upload?
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

          {/* FAQ Item 5 Content */}
          <p className="mt-4 leading-relaxed text-gray-700">
            Vortex accepts a wide range of visual content, including
            photography, artwork, illustrations, and more. As long as your
            images adhere to our community guidelines and do not violate any
            copyright or legal restrictions, they are welcome on the platform.
          </p>
        </details>
      </div>
    </>
  );
}

export default FAQ;
