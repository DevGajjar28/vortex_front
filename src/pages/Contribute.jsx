import React from "react";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import BackBtn from "../components/BackBtn";

function Contribute() {
  return (
    <>
      <BackBtn />
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          {/* <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600">
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Contribute to Vortex
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vortex is built by a community of creators who want to share —
            from amateurs to professionals and everyone in between.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/Login"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="/About"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* second sextion */}
      {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Don’t leave your images sitting on your hard drive.
      </h1>
      <div className="max-w-3xl mx-auto px-4 py-8 border border-gray-300 rounded-lg mt-16">
        <div className="mt-8">
          <form className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div> */}

      {/* third section */}

      <div className="flex justify-between mt-48">
        {/* Post Card 1 */}
        <div className="ml-12 rounded-md shadow-md sm:w-96 bg-gray-900 text-gray-100 mt-24">
          {/* Post Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://source.unsplash.com/50x50/?portrait"
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">
                 Dev Gajjar
                </h2>
                <span className="inline-block text-xs leading-none text-gray-400">
                  Somewhere
                </span>
              </div>
            </div>
            <button title="Open options" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
              </svg>
            </button>
          </div>
          {/* Post Image */}
          <img
            src="https://source.unsplash.com/301x301/?random"
            alt=""
            className="object-cover object-center w-full h-72 bg-gray-500"
          />
          {/* Post Actions */}
          <div className="p-3">
            {/* Like, Comment, Share, Bookmark Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  title="Like post"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Like SVG Code */}
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add a comment"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Comment SVG Code */}
                  </svg>
                </button>
                <button
                  type="button"
                  title="Share post"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Share SVG Code */}
                  </svg>
                </button>
              </div>
              <button
                type="button"
                title="Bookmark post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  {/* Bookmark SVG Code */}
                </svg>
              </button>
            </div>
            {/* Liked By Section */}
            <div className="flex flex-wrap items-center pt-3 pb-1">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?2"
                  />
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?3"
                  />
                </div>
                <span className="text-sm">
                  Liked by <span className="font-semibold">Vortex</span> and{" "}
                  <span className="font-semibold">86 others</span>
                </span>
              </div>
            </div>
            {/* Comments Section */}
            <div className="space-y-3">
              <p className="text-sm">
                <span className="text-base font-semibold">Jeet</span>{" "}
                Great Picture
              </p>
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-100"
              />
            </div>
          </div>
        </div>

        {/* Your images, all over the internet */}
        <div class="flex items-center justify-center flex-1">
          <div class="ml-8">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-48">
              Your images, all over the internet.
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Unsplash has become the internet’s source of visuals — powering
              everything from Apple keynotes to high school Art projects. By
              contributing your images, you are pushing more creativity forward
              every day.
            </p>
          </div>
        </div>

        {/* Post Card 2 */}
        <div className="ml-12 rounded-md shadow-md sm:w-96 bg-gray-900 text-gray-100 mt-24">
          {/* Post Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center space-x-2">
              <img
                src="https://source.unsplash.com/50x50/?portrait"
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
              />
              <div className="-space-y-1">
                <h2 className="text-sm font-semibold leading-none">
                  Mihir_jeet
                </h2>
                <span className="inline-block text-xs leading-none text-gray-400">
                  no way
                </span>
              </div>
            </div>
            <button title="Open options" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
              </svg>
            </button>
          </div>
          {/* Post Image */}
          <img
            src="https://source.unsplash.com/301x301/?random"
            alt=""
            className="object-cover object-center w-full h-72 bg-gray-500"
          />
          {/* Post Actions */}
          <div className="p-3">
            {/* Like, Comment, Share, Bookmark Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  title="Like post"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Like SVG Code */}
                  </svg>
                </button>
                <button
                  type="button"
                  title="Add a comment"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Comment SVG Code */}
                  </svg>
                </button>
                <button
                  type="button"
                  title="Share post"
                  className="flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    {/* Share SVG Code */}
                  </svg>
                </button>
              </div>
              <button
                type="button"
                title="Bookmark post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  {/* Bookmark SVG Code */}
                </svg>
              </button>
            </div>
            {/* Liked By Section */}
            <div className="flex flex-wrap items-center pt-3 pb-1">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                  />
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?2"
                  />
                  <img
                    alt=""
                    className="w-5 h-5 border rounded-full bg-gray-500 border-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?3"
                  />
                </div>
                <span className="text-sm">
                  Liked by <span className="font-semibold">Dev</span> and{" "}
                  <span className="font-semibold">90 others</span>
                </span>
              </div>
            </div>
            {/* Comments Section */}
            <div className="space-y-3">
              <p className="text-sm">
                <span className="text-base font-semibold">Ksschool</span>{" "}
                Great Work
              </p>
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-gray-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* fourth section */}

      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            // src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Embrace the power of knowledge. Every piece of content you
                discover is a stepping stone towards greater understanding and
                inspiration.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Mr Silvans Christian</div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">CEO of NextStep Solutions</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* fifth faq */}

      <FAQ />

      <div className="mt-48">
        <Footer />
      </div>
    </>
  );
}

export default Contribute;
