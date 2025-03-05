import "../css/main.css"
import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


{/* Welcome Page -- Sits above all other pages*/}


//Pages in Navigation 
const navigation = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "New Session", to: "/session" },
    { name: "Progress", to: "/progress" },
    { name: "Interview Settings", to: "/interview_settings" },
  ];

//Pages in User DropDown 
const userNavigation = [
    { name: 'Sign out', href: '#' },
]

//Checking for the active page
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Welcome({userInfo}) {
    
    const location = useLocation(); // Get current URL of active page

    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    {/* Upper Left Icon */}
                                    <div className="shrink-0">
                                        <img
                                        alt="mockInterview"             
                                        src="./vite.svg" 
                                        className="size-8"
                                        />
                                    </div>

                                    {/* Main Navagation Bar */}
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                            <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>classNames(    
                                                isActive
                                                ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                                >
                                                {item.name}
                                            </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">

                                    {/* Title */}
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-200 pr-5">mockInterview </h1>

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img alt="" src={userInfo.picture} className="size-8 rounded-full" />
                                            </MenuButton>
                                        </div>
                                        <MenuItems
                                        transition
                                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                        >
                                            {userNavigation.map((item) => (
                                            <MenuItem key={item.to}>
                                                <NavLink
                                                to={item.to}
                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                                                >
                                                    {item.name}
                                                </NavLink>
                                            </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                </div>
                            </div>
                        
                            <div className="-mr-2 flex md:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                            <DisclosureButton
                            to={item.to}
                            className={({ isActive }) =>classNames(
                                isActive
                                ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                            ))}
                        </div>


                        <div className="border-t border-gray-700 pt-4 pb-3">
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                <DisclosureButton
                                    to={item.to}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </DisclosureButton>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    )
}
