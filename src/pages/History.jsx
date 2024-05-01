import React from "react";
import Footer from "../components/Footer";
// import dev2 from "../assets/dev.jpg";
// import jeet2 from "../assets/jeet.jpg"
// import mihir2 from "../assets/mihir.jpg"

function History() {
  const links = [
    // { name: "Open roles", href: "#" },
    // { name: "Internship program", href: "#" },
    // { name: "Our values", href: "#" },
    // { name: "Meet our leadership", href: "#" },
  ];
  const stats = [ // Define an array for statistics
    { name: "Documentation Duration-Months", value: "4" },
    { name: "Development Duration-Months", value: "9" },
    { name: "Team members", value: "3" },
    { name: "Work-hr/Day", value: "2" },
  ];

  const posts = [
    // Define an array for posts
    // post 1
    {
      id: 1,
      title: "Persistence and Precision",
      href: "#",
      description:
        "In the world of coding and design, I found my canvas with Vortex. This project taught me the power of persistence and precision. From shaping the architecture to refining the UI, every line of code was a stroke on our collective masterpiece. Vortex is not just a platform; it's a reflection of our shared dedication and my journey of discovering the artistry in programming",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "", href: "#" },
      author: {
        name: "DEV GAJJAR",
        // role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },

    // post 2
    {
      id: 1,
      title: "Strength of Collaboration",
      href: "#",
      description:
        "Vortex is more than a project; it's a testament to the strength of collaboration. Working on everything, I discovered the beauty of seamless teamwork. Each challenge was an opportunity to learn, and every success was a celebration of our combined efforts. Vortex taught me that true innovation arises when skills harmonize, and visions align.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "", href: "#" },
      author: {
        name: "MIHIR SOLANKI",
        // role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },

    //post 3
    {
      id: 1,
      title: "Conceptualization to Execution",
      href: "#",
      description:
        "Building Vortex was a transformative experience that extended far beyond lines of code. From conceptualization to execution, I dived into the intricacies of frontend and backend development, and the art of project management. Vortex is a story of adaptability and growth, where challenges became stepping stones, and our shared dedication forged an unforgettable chapter in my journey of learning and creating.",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "", href: "#" },
      author: {
        name: "JEET SHAH",
        // role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  return (
    <>
      {/* header section of history page hyper */}

      <header className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                History
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's know about us 🎉
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <a href="/">
                <button
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                  type="button"
                >
                  <span className="text-sm font-medium"> View Website </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ///middle section mamba */}
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Welcome to this Vortex's History blog
              </h2>
              {/* <p className="dark:text-gray-400">Pri ex magna scaevola moderatius. Nullam accommodare no vix, est ei diceret alienum, et sit cetero malorum. Et sea iudico consequat, est sanctus adipisci ex.</p> */}
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      Vortex traces its origins back to , when a group of
                      visionary individuals came together with a shared vision:
                      to create a revolutionary platform that would redefine the
                      way people discover, curate, and share visual content
                      online. Driven by a passion for innovation and a belief in
                      the transformative power of imagery, the founding team
                      embarked on a journey to build a dynamic hub where
                      creativity knows no bounds.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      {/* <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      /> */}
                      <div>
                        <p className="text-lg font-semibold">Founding Vision</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      With its launch, Vortex quickly gained traction among
                      users from diverse backgrounds and interests. The
                      platform's intuitive interface, curated content, and
                      robust features resonated with users, driving rapid
                      adoption and growth. As the Vortex community continued to
                      expand, so too did the diversity of visual content shared
                      and curated on the platform. From stunning photography to
                      captivating artwork, Vortex became a vibrant ecosystem
                      where creativity flourished.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      {/* <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      /> */}
                      <div>
                        <p className="text-lg font-semibold">
                          Community Growth and Engagement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      At Vortex, our journey of evolution didn't stop with just
                      creating a platform; we embarked on a continuous quest to
                      refine the art of content curation.From fine-tuning
                      recommendation engines to enhancing user experience, our
                      commitment to innovation in content curation remains
                      unwavering.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      {/* <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      /> */}
                      <div>
                        <p className="text-lg font-semibold">
                          Content Curation Evolution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-gray-900">
                    <p>
                      Our journey of evolution also led us to reimagine user
                      engagement. We explored innovative ways to foster
                      meaningful interactions, facilitate discussions, and
                      empower users to discover and share content seamlessly.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      {/* <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      /> */}
                      <div>
                        <p className="text-lg font-semibold">
                          User Engagement Innovation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /////progess section - tailwand */}

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Phase of Early Development and Launch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              The early days were characterized by boundless creativity,
              relentless experimentation, and a willingness to challenge the
              status quo.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* ////Feature section - mamba */}

      <section className="bg-gray-800 text-gray-100 mt-24">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                <h3 className="text-3xl font-semibold">
                  Vision for the Future: Advancing Vortex's Impact and
                  Innovation
                </h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400">
                  Vortex
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Evolution and Innovation{" "}
                  </h3>

                  <p className="mt-3">
                    As Vortex continued to grow, so did our commitment to
                    innovation and excellence. We listened to feedback from our
                    users, constantly iterating and improving the platform to
                    better meet their needs. From introducing new features like
                    personalized recommendations and advanced search filters to
                    optimizing performance and scalability, every update was
                    guided by our mission to deliver the best possible
                    experience for our community.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Looking Ahead
                  </h3>

                  <p className="mt-3">
                    As we reflect on our journey so far, we are filled with
                    gratitude for the incredible support and enthusiasm of our
                    users. As we look to the future, our commitment to
                    innovation, creativity, and community remains as strong as
                    ever. With exciting new features, partnerships, and
                    initiatives on the horizon, we are more determined than ever
                    to continue pushing the boundaries of visual discovery and
                    inspiring creativity around the world.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Sustainable Growth and Impact
                  </h3>
          
                  <p className="mt-3">
                    As Vortex expands its presence and influence in the digital
                    landscape, it remains committed to sustainability and
                    responsible growth. With a focus on environmental
                    stewardship, social responsibility, and ethical practices,
                    Vortex seeks to minimize its ecological footprint and
                    maximize its positive impact on society and the planet. By
                    prioritizing sustainability and ethical business practices,
                    Vortex aims to create a more equitable, inclusive, and
                    sustainable future for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ////Team member experience  */}

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Insightful Journeys
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Exploring Paths to Success
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5  text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {/* <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  /> */}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default History;
