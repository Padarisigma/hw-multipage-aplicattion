import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/Logo (17).png'
import burger from '../assets/Icon (20).png'


const Layout = () => {
  return (
    <div>
        <div>
            <header>
                <nav class="w-[85%] items-center  m-auto flex py-[20px] justify-between"> 
                            <img src={logo} alt="" />
                            <div class="flex gap-[80px] items-center">
                                <ul class="hidden sm:flex gap-[60px] text-[#1D1E25] text-[18px]">
                                    <Link to='/'> <li class="hover:underline ">Home</li></Link>
                                    <Link to='/about' > <li class="hover:underline ">About</li></Link>
                                    <Link to='/blog' > <li class="hover:underline ">Blog</li></Link>
                                    <Link to='/pricing'> <li class="hover:underline ">Pricing</li></Link>
                                    <Link to='/details'> <li class="hover:underline ">Details</li></Link>
                                </ul>
                                <Link to='/contact'>
                                    <p class="text-[#1D1E25] hidden sm:block text-[18px] hover:underline  pb-[5px]">Contact</p>
                                </Link>
                                <img src={burger} className='sm:hidden block' alt="" />
                            </div>
                </nav>
            </header>
            <main>
            <Outlet/>
            </main>
            <footer></footer>
        </div>
        </div>
  )
}

export default Layout