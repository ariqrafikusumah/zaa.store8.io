import React from 'react'
import { BuildingLibraryIcon, Cog6ToothIcon, QrCodeIcon, QuestionMarkCircleIcon, TagIcon, WalletIcon } from '@heroicons/react/24/solid';

function Dashboard() {
  return (
    <>
      <div className="container xl:px-52 lg:px-32 md:px-5 xs:px-5 mt-5">
        <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 mt-3" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="inline-flex no-underline items-center text-sm font-medium text-gray-700 hover:text-blue-600 ">
                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                Dashboard
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 "></a>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold mb-10 mt-10">- Product Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          <a href="/admin/mobile-legend-1" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends </h2>
                  <p className="text-gray-700 text-lg font-bold">Fast</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-2" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Slow</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-3" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Flash Sale</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-4" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Weekly Diamond Pass</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-5" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Pre Order Skin</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-6" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Pre Order Skin</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-7" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Gift Skin</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-8" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Mobile Legends</h2>
                  <p className="text-gray-700 text-lg font-bold">Promo Gift Skin</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/mobile-legend-9" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Pre Order</h2>
                  <p className="text-gray-700 text-lg font-bold">Recharge JJK X MLBB</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/free-fire" className=' no-underline'>
            <div className="hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Free Fire</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/genshin-impact" className=' no-underline'>
            <div className="hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Genshin Impact</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-10 mt-10">- Payment</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/admin/qris" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <QrCodeIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">QRIS</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit Payment</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/bank" className=' no-underline'>
            <div className="hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <BuildingLibraryIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Bank</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit Payment</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/admin/e-wallet" className=' no-underline'>
            <div className="hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <WalletIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">E-Wallet</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit Payment</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-10 mt-10">- Category</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/admin/category-game" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <TagIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Game</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a>
          <a href="https://www.w3schools.com/tags/ref_byfunc.asp" target="_blank" rel="noopener noreferrer" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <QuestionMarkCircleIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Cara Membuat Deskripsi</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-10 mt-10">- Setting</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/admin/banner-setting" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <Cog6ToothIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Banner</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a>
          {/* <a href="/admin/pop-up" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <Cog6ToothIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Pop Up</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a> */}
          <a href="/admin/whatsapp-setting" className=' no-underline'>
            <div className=" hover:text-blue-500 hover:bg-blue-200 border shadow rounded-lg p-6">
              <div className='flex gap-2'>
                <div className='py-3'>
                  <Cog6ToothIcon className='w-8 h-8' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-2">Whatsapp Setting</h2>
                  <p className="text-gray-700 text-lg font-bold">Edit</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Dashboard