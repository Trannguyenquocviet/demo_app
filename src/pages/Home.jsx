import React from 'react'
import screen from '../assets/dscimg.png'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className='absolute inset-0 w-full'>
      <div>
        <img src={screen} alt='background'></img>
      </div>
      <div className='w-1232 h-673 absolute inset-x-40 inset-y-20 rounded-2xl bg-white px-6 '>
        <div>
          <h1 className='font-Lato w-682px h-58px absolute inset-x-10 inset-y-36 order-none flex-none grow-0 content-center text-5xl font-medium not-italic leading-normal tracking-normal'>
            Google Developer Student Club
          </h1>
          <p className='w-670 h-84 font-Lato absolute inset-x-10  inset-y-60 order-none flex-none grow-0 text-lg  not-italic leading-7 text-neutral-400'>
            Developed by Google Developer Student Club - Danang University of Science and<br></br> Technology Created
            with purpose for the community. Students from all undergraduate<br></br> or graduate programs with an
            interest in growing as a developer are welcome.
          </p>
        </div>
        <div className='absolute inset-x-10 inset-y-2/3'>
          <button className=' order-none flex h-10 w-40 flex-none grow-0 flex-row items-center justify-center gap-1 rounded-3xl bg-yellow-400 px-3 shadow '>
            <p className=' w-119px h-24px font-Lato order-none flex-none grow-0 text-center text-xs font-medium not-italic tracking-wide text-white'>
              Discover GDSC
            </p>
          </button>
        </div>
        <div className='absolute inset-x-64 inset-y-2/3'>
          <button className='order-1 flex h-10 w-40 flex-none grow-0 flex-row items-center justify-center gap-1 rounded-3xl bg-slate-200 px-3 shadow'>
            <p className=' w-135px h-24px font-Lato order-none flex-none grow-0 text-center text-xs font-medium not-italic leading-6 tracking-wide text-black'>
              See our members
            </p>
          </button>
        </div>
        <div className='absolute inset-y-24 right-10 h-96 w-96 rounded-xl bg-slate-200'></div>
      </div>
      <div>
        <img className='absolute inset-x-40 inset-y-3 h-14 w-28 bg-none' src={logo} alt='GDSC_DUT'></img>
      </div>
      <div>
        <ul className='absolute inset-y-3 right-36 m-0 block list-none p-0 text-white'>
          <li className='float-left m-2'>
            <button className='grow-1 flex h-10 w-36 flex-none flex-row items-center justify-center gap-1 rounded-3xl bg-yellow-400 px-3 shadow'>
              <a href='#about' className='active'>
                About GDSC
              </a>
            </button>
          </li>
          <li className='float-left m-2'>
            <button className='grow-1 flex h-10 w-36 flex-none flex-row items-center justify-center gap-1 rounded-3xl bg-slate-400 px-3 shadow'>
              <a href='#members'>Our members</a>
            </button>
          </li>
          <li className='float-left m-2'>
            <button className='grow-1 flex h-10 w-36 flex-none flex-row items-center justify-center gap-1 rounded-3xl bg-slate-400 px-3 shadow'>
              <a href='#event'>Our Events</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Home
