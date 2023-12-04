"use client";

import Image from 'next/image'
import React from 'react';
import Petals from '@/components/Petals';


export default function Home() {
  return (
    <main className="relative z-auto flex flex-col min-h-screen bg-gradient-sky">
      <Image src='/branch.gif' className='sticky z-auto z-40' width={600} height={400} alt='Cherry Branch'/>
      <Petals />
      <div className='w-full px-16 lg:px-24 py-20 flex flex-col space-y-12'>
        <div>
          <h1 className='text-6xl text-black relative z-50'>Project: Blossom</h1>
          <div className='w-full lg:w-3/4 h-3/4 relative z-20 border-t-peach border-b-black border-t-4 border-b-2 shadow-white-glow'>
          </div>
        </div>
        <div className='flex flex-col space-y-16'>
          <p className='text-black relative z-50'>Do you dream of the perfect image? Whether it is your beauty standard or someone else&apos;s, we cannot deny one&apos;s radiant beauty when they are confident in their image. Project: Blossom is a social campaign to fund plastic surgery to gift beauty and empower individuals to blossom.</p>
          <div className='h-fit flex flex-col lg:flex-row gap-16'>
            <a href='https://www.stockpile.so/project/GPzDmkye4B2y379G2yJRfz3BwuH9nugxMKhHGPSAbPEn' target='_blank' rel='noreferrer'>
              <Image src='/banner.png' className='relative border-2 border-black flex shadow-dark-glow-sm hover:shadow-dark-glow-lg cursor-pointer' width={600} height={400} alt='Banner image'/>
            </a>
            <div className='w-full h-full lg:w-1/2 relative z-40 flex flex-col gap-8 align-center justify-around'>
              <h1 className='text-4xl'>Crowdfunding Plastic Surgery</h1>
              <ul className='px-12'>
                <li className='list-disc'>Public contributions</li>
                <li className='list-disc'>Funding-based milestones</li>
                <li className='list-disc'>Squads Vault and Treasury</li>
              </ul>
              <p className='whitespace-pre-line'>Project: Blossom is crowdfunding on Stockpile and accepting USDC donations to a vault secured by the SQUADS protocol.
              <br />
              Funding cannot be withdrawn until the campaign&apos;s milestones are met.</p>
              <a href='https://www.stockpile.so/project/GPzDmkye4B2y379G2yJRfz3BwuH9nugxMKhHGPSAbPEn' target='_blank' rel='noreferrer'>
                <div className='w-full h-fit relative z-40 py-8 text-2xl border-2 border-black shadow-dark-glow-sm hover:shadow-dark-glow-lg bg-peach text-center'>
                  <p>Check Fundraiser</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
