import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/Logo (17).png'
import burger from '../assets/Icon (20).png'
import { Modal } from 'antd'


const Layout = () => {
    const [openModal, setOpenModal]=useState(false)
  return (
    <div>
        <div>
            <header>
                <Modal open={openModal} onCancel={()=>setOpenModal(false)} footer={null}>
                <div class="flex flex-col  gap-[20px] items-start py-[30px]">
                                <ul class="flex flex-col gap-[20px] text-[#1D1E25] text-[18px]">
                                    <Link to='/'> <li class="hover:underline text-[#1D1E25] ">Home</li></Link>
                                    <Link to='/about' > <li class="hover:underline text-[#1D1E25]">About</li></Link>
                                    <Link to='/blog' > <li class="hover:underline text-[#1D1E25]">Blog</li></Link>
                                    <Link to='/pricing'> <li class="hover:underline text-[#1D1E25] ">Pricing</li></Link>
                                    <Link to='/details'> <li class="hover:underline text-[#1D1E25] ">Details</li></Link>
                                </ul>
                                <Link to='/contact'>
                                    <p class="text-[#1D1E25]  text-[18px] hover:underline  pb-[5px]">Contact</p>
                                </Link>
                        </div>
                </Modal>
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
                               
                                <img src={burger} onClick={()=>setOpenModal(true)} className='sm:hidden block' alt="" />
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