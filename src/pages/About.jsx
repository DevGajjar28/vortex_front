import React from "react";
import Contact from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      {/* Header section of page  */}

      <div className="relative overflow-hidden bg-white">
      {/*  Container for the hero section  */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          {/* Container for content within the hero section */}
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
           {/* Container for text content */}
            <div className="sm:max-w-lg">
            {/* Main headline  */}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Welcome to Vortex
              </h1>
              
              {/* Subheadline */}
              <p className="mt-4 text-xl text-gray-500">
                At Vortex, we're passionate about bringing you the
                latest and most relevant content from across the web. Our
                platform is designed to help you discover, organize, and stay
                updated on the topics that matter most to you.
              </p>
            </div>

            {/* Container for image grid */}
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  {/* Absolute positioning for the image grid */}
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                   {/* Flex container for the image grid */}
                    <div className="flex items-center space-x-6 lg:space-x-8">
                     {/* First column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        {/* Image 1 */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        {/* Image 2  */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* second column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      {/* Image 3 */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        {/* Image 4  */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        {/* Image 5 */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>

                      {/* Third column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        
                        {/* Image 6  */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        {/* Image 7  */}
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/Registration"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Sign-up now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second phase */}

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-48">
        <div className="container max-w-4xl px-10 py-6 mx-2 rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Welcome to Vortex
            </a>
            <p className="mt-2">
              At Vortex, we believe in the power of creativity and the beauty of
              shared experiences. Our platform serves as a hub for photographers
              and enthusiasts alike, providing a seamless space to explore,
              share, and discover captivating visual content.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="dark:bg-gray-800 dark:text-gray-100 mt-20 relative ">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900 absolute top-0 right-0">
          <div className="flex items-center justify-between"></div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              Our Mission
            </a>
            <p className="mt-2">
              Driven by a passion for artistry and innovation, our mission is to
              connect individuals from all walks of life through the universal
              language of photography. We strive to foster a vibrant community
              where creativity thrives, enabling users to express themselves and
              find inspiration in every corner of our platform.
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline dark:text-violet-400"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* third section of feature  */}

      <div className="dark:bg-gray-800 dark:text-gray-100 mt-96">
        {/* Container for the feature section */}
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Title and description */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Explore Exciting Features
            </h2>
            <p className="mt-4 text-lg dark:text-gray-400">
              Unleash the power of our platform with a plethora of features
              designed to enhance your experience:
            </p>
          </div>

          {/* List of features */}
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {/* Each feature item */}
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                {/* Title and description */}
                <dt className="text-lg font-medium">Curated Content</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Dive into a world of curated content tailored to your
                  interests, from photography to artwork and everything in
                  between.
                </dd>
              </div>
            </div>
            {/* Each feature item */}
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">
                  Personalized Recommendations
                </dt>
                <dd className="mt-2 dark:text-gray-400">
                  Our intelligent recommendation system learns from your
                  preferences to deliver personalized content suggestions that
                  resonate with you.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Advanced Search Filters</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Easily discover the content you love with our advanced search
                  filters, allowing you to refine your search based on category,
                  Keywords.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Seamless Collaboration</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Collaborate effortlessly with fellow users, share your
                  favorite content, and engage in meaningful discussions to
                  foster a vibrant community.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">User-Friendly Interface</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Navigate our platform with ease thanks to our intuitive user
                  interface, designed to provide a seamless browsing experience
                  on any device.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Enhanced Accessibility</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Accessibility is paramount to us. Our platform is built with
                  accessibility features in mind, ensuring that everyone can
                  enjoy our content regardless of their abilities.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Robust Security</dt>
                <dd className="mt-2 dark:text-gray-400">
                  Rest assured knowing that your data is safe with us. We employ
                  robust security measures to protect your privacy and maintain
                  the integrity of our platform.
                </dd>
              </div>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg font-medium">Continuous Innovation</dt>
                <dd className="mt-2 dark:text-gray-400">
                  We're constantly evolving to bring you the latest features and
                  enhancements. Stay tuned for exciting updates as we continue
                  to innovate and improve our platform.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* fourth section images */}

      <section className="py-6 bg-gray-800 text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Development team
          </p>
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            The talented people behind the scenes
          </h1>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?0"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p>Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?1"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p>Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 bg-gray-100 text-gray-800">
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full bg-gray-500"
                src="https://source.unsplash.com/100x100/?portrait?2"
              />
              <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">
                  Leroy Jenkins
                </p>
                <p>Visual Designer</p>
              </div>
              <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Email"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="LinkedIn"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="GitHub"
                  className="text-gray-900 hover:text-violet-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-5 h-5"
                  >
                    <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* review sections */}
      <div className="flex justify-center mt-48">
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
          <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-6 h-6 fill-current shrink-0 text-violet-400"
            >
              <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
              <rect width="32" height="136" x="240" y="112"></rect>
              <rect width="32" height="32" x="240" y="280"></rect>
            </svg>
            Have you join with us ?
          </h2>
          <p className="flex-1 text-gray-400">
            Join our community today and discover the endless possibilities that
            await you. Whether you're looking to showcase your work, connect
            with fellow enthusiasts, or simply explore the world through a
            different lens, we're here to help you make your vision a reality.
          </p>
          <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
            <a
              rel="noopener noreferrer"
              href="/Registration"
              className="hover:underline dark:text-violet-400"
            >
              <button className="px-6 py-2 rounded-sm" fdprocessedid="ig7gb1">
                No
              </button>
            </a>
            <a
              rel="noopener noreferrer"
              href="/"
              className="hover:underline dark:text-violet-400"
            >
              <button
                className="px-6 py-2 rounded-sm shadow-sm bg-violet-400 text-gray-900"
                fdprocessedid="3dii8b"
              >
                Yes
              </button>
            </a>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="mt-48">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default About;
