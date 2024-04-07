import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ad1 from "../assets/vrt2.svg";
import api from "../axios/api";

const products = [
  {
    name: "Become-One",
    description: "Get a better understanding of your traffic",
    href: "/Contribute",
    icon: ChartPieIcon,
  },
  {
    name: "Collection",
    description: "Speak directly to your customers",
    href: "/Collection",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "History",
    description: "Your customers’ data will be safe and secure",
    href: "/History",
    icon: FingerPrintIcon,
  },
  {
    name: "About us",
    description: "Connect with third-party tools",
    href: "/About",
    icon: SquaresPlusIcon,
  },
  // { name: 'Need Help', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact US", href: "/Contact", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileData, setProfileData] = useState();
  const history = useHistory();

  const checklogin = async () => {
    try {
      const response = await api.get("http://127.0.0.1:8000/api/profile/");
      if (response?.data) {
        setProfileData(response.data);
      }
    } catch (error) {
      console.log(error?.response?.data?.message || "Something went wrong");
      setProfileData()
    }
  };
  console.log(profileData)
  useEffect(() => {
    checklogin();
  }, []);

  const handleLogout = async () => {
    try {
      // Clear local storage
      localStorage.clear();
      
      console.log("Logging out...");
      
      // Clear profile data
      setProfileData();
      
      history.push("/home");  // Redirect to login page after logout
    } catch (error) {
      console.error("Logout error:", error); // Log any errors that occur during logout
      console.log(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
       <div className="flex lg:flex-1">
  <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Your Company</span>
    <span className="text-xl lg:text-2xl font-bold text-gray-900">Vortex</span>
  </a>
</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <a
              href="/Home"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Home
            </a>
            <a
              href="/Advertise"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Advertise
            </a>
            <a
              href="/"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Premium
            </a>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                <a
                  href="/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  More
                </a>
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </Popover.Group>
        {!profileData ? (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
           
            </a>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleLogout}

            >
              {/* <span className="rounded-full bg-gray-200 px-2 py-1">{profileData.first_name ? profileData.first_name.charAt(0).toUpperCase() : 'U'}</span>
    <span>{profileData.first_name ? profileData.first_name : 'User'} Log Out</span>
    <span aria-hidden="true">&rarr;</span> */}

               {profileData.first_name ? `${profileData.first_name} Log Out` : 'Log Out'} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex lg:flex-1">
  <a href="#" className="-m-1.5 p-1.5">
    <span className="sr-only">Your Company</span>
    <span className="text-xl lg:text-2xl font-bold text-gray-900">Vortex</span>
  </a>
</div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/Home"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/Advertise"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Advertise
                </a>
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Premium
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        More
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
        {!profileData ? (
          <a
            href="/Login"
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Log in
          </a>
        ) : (
          <div className="flex justify-between items-center">
            <a
              href="/Home"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {profileData.first_name ? `${profileData.first_name}` : 'User'}
            </a>
            <button
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
