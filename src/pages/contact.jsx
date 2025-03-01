import React from 'react'
import map from '../assets/Map (5).png'
import bnb from '../assets/Airbnb Logo (1).png'
import amazon from '../assets/Amazon Logo (1).png'
import fedex from '../assets/FedEx Logo (1).png'
import microsoft from '../assets/Microsoft Logo (1).png'
import lastimg from '../assets/Image (80).png'
import footer1 from '../assets/Logo (19).png'
import footer2 from '../assets/Social media (1).png'


const Contact = () => {
  return (
    <>
    <section className='flex flex-col gap-[70px] py-[80px] w-[85%] m-auto '>
      <p className='text-[40px] sm:text-[72px] leading-[50px] sm:leading-[80px] font-semibold text-[#1d1e25]'>Contact our team to <br /> find out more</p>
      <div className='flex  flex-col sm:flex-row gap-[50px] sm:gap-[0px] justify-between items-center'>
        <img src={map} alt="" />
        <div className='flex flex-wrap sm:flex-nowrap sm:flex-col gap-[20px]'>
          <div className='flex flex-col gap-[10px] border-b-1 border-solid border-gray-400 pb-[20px]'>
            <p className='text-[24px] font-semibold text-[#1d1e25]'>Support</p>
            <p className='text-[16px] text-[#7e8492] tracking-[1px]'>Our friendly team is <br /> here to help.</p>
            <p className='text-[#1d1e25]'>support@sans.com</p>
          </div>
          <div className='flex flex-col gap-[10px] border-b-1 border-solid border-gray-400 pb-[20px]'>
            <p className='text-[24px] font-semibold text-[#1d1e25]'>Support</p>
            <p className='text-[16px] text-[#7e8492] tracking-[1px]'>Our friendly team is <br /> here to help.</p>
            <p className='text-[#1d1e25]'>support@sans.com</p>
          </div>
          <div className='flex flex-col gap-[10px] border-b-1 border-solid border-gray-400 pb-[20px]'>
            <p className='text-[24px] font-semibold text-[#1d1e25]'>Support</p>
            <p className='text-[16px] text-[#7e8492] tracking-[1px]'>Our friendly team is <br /> here to help.</p>
            <p className='text-[#1d1e25]'>support@sans.com</p>
          </div>
        </div>
      </div>
    </section>

    <section className="w-[85%] m-auto sm:my-[60px]  py-[50px] sm:px-[80px] flex flex-col sm:flex-row gap-[50px]">
          <aside className="sm:w-[30%] text-center sm:text-left">
            <p className="text-[#1D1E25] text-[64px]">890+</p>
            <p className="text-[#7E8492] text-[18px]">
              Some big companies that we work <br /> with, and trust us very much
            </p>
          </aside>
          <aside>
            <div className="flex flex-col sm:flex-row items-center gap-[50px] justify-between">
              <img src={bnb} alt="Airbnb" />
              <img src={amazon} alt="Amazon" />
              <img src={fedex} alt="FedEx" />
              <img src={microsoft} alt="Microsoft" />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-[50px] justify-between mt-[20px]">
            <img src={bnb} alt="Airbnb" />
              <img src={amazon} alt="Amazon" />
              <img src={fedex} alt="FedEx" />
              <img src={microsoft} alt="Microsoft" />
            </div>
          </aside>
        </section>

        <section className='w-[90%] m-auto sm:m-0 sm:w-[92.5%] relative sm:h-[800px]  top-0 sm:ml-[7.5%]  '>
          <div className=' flex flex-col  gap-[20px] bg-white relative border-2 border-solid border-gray-300 p-[40px] sm:w-[600px] top-0 z-20'>
            <div>
            <p className='text-[36px] text-[#1d1e25] font-semibold'>Let’s level up your brand</p>
            <p className='text-[18px] text-[#7e8492]'>You can reach us anytime <span className='text-[#1463ff]'>hellosansbrothers@gmail.com</span> </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-between gap-[30px] sm:gap-[0px] sm:items-center '>
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor="inp1" className='text-[14px] text-[#1d1e25] font-medium'>First Name</label>
                <input type="text" placeholder='First Name' id='inp1' className=' w-[100%] sm:w-[250px] border-2 border-solid border-gray-300 py-[7px] px-[20px] rounded-[10px]' />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor="inp2" className='text-[14px] text-[#1d1e25] font-medium'>Last Name</label>
                <input type="text" placeholder='Last Name' id='inp2' className='w-[100%] sm:w-[250px] border-2 border-solid border-gray-300 py-[7px] px-[20px] rounded-[10px]' />
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
                <label htmlFor="inp3" className='text-[14px] text-[#1d1e25] font-medium'>Email</label>
                <input type="text" placeholder='example@gmail.com' id='inp3' className='w-[100%] border-2 border-solid border-gray-300 py-[7px] px-[20px] rounded-[10px]' />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor="inp4" className='text-[14px] text-[#1d1e25] font-medium'>Phone number</label>
                <input type="text" placeholder='phone number' id='inp4' className='w-[100%] border-2 border-solid border-gray-300 py-[7px] px-[20px] rounded-[10px]' />
              </div>
              <div className='flex flex-col gap-[10px]'>
                <label htmlFor="inp5" className='text-[14px] text-[#1d1e25] font-medium'>Message</label>
                <textarea name="" id="inp5" placeholder='Write something'  className='w-[100%] h-[150px] border-2 border-solid border-gray-300 py-[7px] px-[20px] rounded-[10px]'></textarea>
              </div>
              <button className='bg-black text-white py-[10px] px-[30px] rounded-[20px]'>Get started</button>
          </div>
          <img src={lastimg} className='absolute hidden sm:block top-0 right-0 h-[790px]' alt="" />
        </section>


        <footer className="w-[100%] mt-[80px] bg-[#1D1E25]">
                      <section className="w-[85%] m-auto pt-[100px] pb-[60px] relative gap-[30px] sm:gap-[0px] flex flex-col sm:flex-row justify-between">
                        <aside className="flex flex-col">
                          <p className="text-white text-[30px] sm:text-[70px] mb-[20px] font-bold sm:leading-[120px]">
                            Think beyond the wave
                          </p>
                          <p className="text-[#AFB3BB] text-[18px] sm:text-[18px]">
                            Ask about Sans products, pricing, implementation, or anything <br />
                            else. Our highly trained reps are standing by, ready to help
                          </p>
                        </aside>
                        <aside className="relative top-0 flex flex-col justify-center">
                          <button className="py-[15px] relative z-10 px-[50px] rounded-[30px] bg-white text-[#1D1E25] tracking-[2px]">
                            Try for free
                          </button>
                        </aside>
                      </section>
                
                      <section className="w-[85%] py-[100px] border-b-2 border-solid border-gray-400 justify-between flex flex-col sm:flex-row gap-[40px] m-auto">
                        <div>
                          <img src={footer1} alt="Logo" />
                          <p className="text-[#7E8492] text-[16px]">
                            We built an elegant solution. Our team <br />
                            created a fully integrated sales and <br />
                            marketing solution for SMBs
                          </p>
                        </div>
                        <div className="flex flex-col text-[#7E8492] gap-[15px]">
                          <p className="text-white font-bold">Company</p>
                          <p>Pricing</p>
                          <p>About</p>
                          <p>Blog</p>
                          <p>Jobs</p>
                        </div>
                        <div className="flex flex-col text-[#7E8492] gap-[15px]">
                          <p className="text-white font-bold">Product</p>
                          <p>Sales Software</p>
                          <p>Marketplace</p>
                          <p>Terms & Conditions</p>
                          <p>Privacy Policy</p>
                        </div>
                        <div className="flex text-[#7E8492] flex-col gap-[15px]">
                          <p className="text-white font-bold">Discover</p>
                          <p>CRM Comparison</p>
                          <p>Partner Program</p>
                          <p>What is CRM</p>
                          <p>Resource</p>
                        </div>
                        <div className="flex flex-col text-[#7E8492] relative z-10 gap-[15px]">
                          <p className="text-white font-bold">Help Center</p>
                          <p>Community</p>
                          <p>Knowledge Base</p>
                          <p>Academy</p>
                          <p>Support</p>
                        </div>
                      </section>
                
                      <div className="text-[#AFB3BB] w-[85%] m-auto text-[18px] flex gap-[30px] sm:gap-[0px] flex-col sm:flex-row justify-between items-start sm:items-center tracking-[2px] py-[30px]">
                        <div className="flex flex-col sm:flex-row gap-[40px]">
                          <img src={footer2} alt="Social Media" />
                          <p>Privacy Policy</p>
                          <p>Terms & Conditions</p>
                          <p>Support</p>
                        </div>
                
                        <p>© Copyright 2023 All Rights Reserved</p>
                      </div>
                    </footer>
    </>
  )
}

export default Contact