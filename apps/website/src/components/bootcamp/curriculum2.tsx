'use client'

import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';


const chapters = [
    {title: "Foundations", subtitle: "Code your first Smart Contracts", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: ["Learn Types", "Understand Keywords", "Build Intuition around Modifiers", "Compiler, Imports"]},
    {title: "First Project, Tokens, Staking", subtitle: "Deploy Tokens and make them interact with other Smart Contracts", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []},
    {title: "Randomness, Oracles", subtitle: "Increase Complexity of your Smart Contracts and Reference the Real World", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []},
    {title: "DeFi Primitives", subtitle: "Develop your own Decentralised Exchange", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []},
    {title: "Wallets", subtitle: "Level up your understanding of the EVM by developing your own Multisig", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []},
    {title: "Testing & Hacking", subtitle: "Exploit Smart Contracts like Hackers", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []},
    {title: "Project Weeks", subtitle: "Build your own Project solidifying your gained knowledge", abstract: "Structure your software following object-oriented principles. Learn one of the most used design patterns, the Model-View-Controller (MVC) and master it by coding several MVC apps from scratch.", builds: []}
]



export default function Curriculum2() {

    const [index, setIndex] = useState(0);

    return (
        <section className="bg-gray-800 py-16 sm:py-16">
        
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-300 pb-4">
                        Curriculum
                    </h2>
                    <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        What you'll learn in this Solidity development bootcamp
                    </p>
                    <p className="text-gray-100 pt-4">
                        Master the technical skills needed to successfully contribute to the Web3 movement, learning how to develop great products in Web3 using the most up to date workflows.
                    </p>
                </div>
                <div className="h-px flex-auto bg-gray-100 mt-8 mx-8" />
            </div>
            <div className="flex mt-16 mx-auto max-w-7xl mx-8">
                <div className="w-1/3 p-4">
                    <ul>
                        {chapters.map((chapter, i) => 
                            {
                                if(i === index) {
                                    return (
                                        <li key={chapter.title} className="flex gap-x-3 p-2 bg-gray-700 ">
                                            <p onClick={()=>{setIndex(i)}} className="text-md font-semibold leading-6 text-gray-100">
                                                {i}.{" "}{chapter.title} <span aria-hidden="true">→</span>
                                            </p>
                                        </li>
                                    )
                                }
                                return (
                                    <li key={chapter.title} className="flex gap-x-3 p-2">
                                        <p onClick={()=>{setIndex(i)}}  className="text-md font-semibold leading-6 text-gray-100">
                                            {i}.{" "}{chapter.title} <span aria-hidden="true">→</span>
                                        </p>
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
                <div className="w-2/3 p-4">
                    <h2 className='text-3xl font-bold text-gray-100 mb-4'>{chapters[index].subtitle}</h2>
                    <p className='text-gray-100 mb-4'>{chapters[index].abstract}</p>
                    <p className='rounded-3xl p-8 ring-1 ring-gray-200'>
                        <p className='text-md font-semibold text-gray-100 mb-4'>What you will learn in practice</p>
                        {
                            <ul>
                                {
                                    chapters[index].builds.map(build => 
                                        (
                                            <div className='flex flex-row gap-x-2 my-1'>
                                                <CheckIcon
                                                    className="h-6 w-5 flex-none text-gray-100"
                                                    aria-hidden="true"
                                                    />
                                                <p className='text-gray-300'>{build}</p>
                                            </div>
                                        )
                                    )
                                }
                            </ul>
                        
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

