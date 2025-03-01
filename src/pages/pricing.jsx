import React from 'react'
import plans from '../assets/Badge base.png'
import toggle from '../assets/_Toggle base.png'
import pricing1 from '../assets/Icon (17).png'
import pricing2 from '../assets/Icon (18).png'
import pricing3 from '../assets/Icon (19).png'
import sectionone1 from '../assets/Ellipse 124 (1).png'
import sectionone2 from '../assets/Ellipse 125 (2).png'
import footer1 from '../assets/Logo (19).png'
import footer2 from '../assets/Social media (1).png'


const Pricing = () => {
  return (
    <>
    <div className='overflow-hidden relative top-[0px]'>

    <section className='w-[85%] overflow-hidden  m-auto py-[70px] flex flex-col gap-[200px]'>
      <div className='flex flex-col relative top-0 z-20 text-center items-center gap-[20px]'>
      <img src={plans} alt="" />
      <p className=' text-[30px] sm:text-[70px] font-bold text-[#1d1e25]'>Choose a plan for a more <br /> advanced business</p>
      <div className='flex items-center gap-[20px]'>
        <img src={toggle} alt="" />
        <p className='text-[16px] text-[#7e8492]'>Annual pricing (save 20%)</p>
      </div>
      </div>

      <div className='grid sm:grid-cols-3 gap-[30px]'>
        <div className='border-2 relative z-[20] bg-[white] border-solid border-gray-400 p-[20px] rounded-[20px] flex flex-col gap-[20px] items-start'>
          <img src={pricing1} alt="" />
          <p className='text-[24px] text-[#1d1e25] font-semibold'>Starter</p>
          <p className='text-[16px] text-[#7e8492]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='text-[56px] font-semibold text-[#1d1e25]'>$100 <span className='text-[18px] text-[#7e8492]'>/mo</span></p>
          <p className='text-[16px] font-semibold text-[#1d1e25]'>What’s included:</p>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] text-[#7e8492] line-through'>Unlimited Upload</p>
          </div>
          <div className='flex w-[100%] items-center  content-center '>

          <button className='ml-[100px] border-2 my-[20px] border-solid border-gray-300 py-[7px] px-[30px] rounded-[20px] text-gray-500'>Choose plan</button>
          </div>
        </div>
        <div className='bg-[#161A34] relative sm:top-[-60px] shadow-2xl text-[white] p-[20px] rounded-[20px] flex flex-col gap-[20px] items-start'>
          <img src={pricing1} alt="" />
          <p className='text-[24px] text-[white] font-semibold'>Starter</p>
          <p className='text-[16px] text-[#7e8492]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='text-[56px] font-semibold text-[white]'>$1400 <span className='text-[18px] text-[#7e8492]'>/mo</span></p>
          <p className='text-[16px] font-semibold text-[white]'>What’s included:</p>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[white] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[white] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[white] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] line-through text-[#7e8492]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing3} alt="" />
            <p className='text-[16px] text-[#7e8492] line-through'>Unlimited Upload</p>
          </div>
          <div className='flex w-[100%] items-center  content-center '>

          <button className='ml-[100px] border-2 my-[20px] bg-[white] text-[black
          ] py-[7px] px-[30px] rounded-[20px] text-gray-500'>Choose plan</button>
          </div>
        </div>
        <div className='border-2 border-solid border-gray-400 bg-[white] p-[20px] rounded-[20px] flex flex-col gap-[20px] items-start'>
          <img src={pricing1} alt="" />
          <p className='text-[24px] text-[#1d1e25] font-semibold'>Starter</p>
          <p className='text-[16px] text-[#7e8492]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p className='text-[56px] font-semibold text-[#1d1e25]'>$2100 <span className='text-[18px] text-[#7e8492]'>/mo</span></p>
          <p className='text-[16px] font-semibold text-[#1d1e25]'>What’s included:</p>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex items-center gap-[10px]'>
            <img src={pricing2} alt="" />
            <p className='text-[#1d1e25] text-[16px]'>Unlimited Upload</p>
          </div>
          <div className='flex w-[100%] items-center  content-center '>

          <button className='ml-[100px] border-2 my-[20px] border-solid border-gray-300 py-[7px] px-[30px] rounded-[20px] text-gray-500'>Choose plan</button>
          </div>
        </div>
      </div>
      
      
    </section>
    <img src={sectionone2} className='absolute sm:top-[20px] top-[-30px] sm:left-0 left-[-90px]' alt="" />
      <img src={sectionone1}  className='absolute top-[180px] sm:top-[-60px] sm:right-0 right-[-70px]' alt="" />
    </div>

    <section className='w-[85%] m-auto flex flex-col gap-[60px] py-[70px]'>
      <aside className='flex flex-col text-center items-center gap-[20px]'>
        <p className='text-[40px] sm:text-[52px] text-[#1d1e25] font-semibold'>Frequently asked questions</p>
        <p className='text-[18px] text-[#7e8492]'>Everything you need to know about the product and billing.</p>
      </aside>
      <aside>
        <div className='flex flex-col gap-[20px] py-[10px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Is there a free trial available?</p>
            <p className='text-[30px] leading-0'>-</p>
          </div>
          <p className='text-[18px] text-[#738492] sm:w-[500px] mb-[10px]'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>How Can I Add More Emails To My Account?</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Can I Change Plans Or Cancel My Subscription At Any Time</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>How Secure Is My Date With Sans CRM</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
        <div className='flex flex-col gap-[20px] py-[25px] border-b-2 border-solid border-gray-400'>
          <div className='flex justify-between items-center '>
            <p className='text-[18px] sm:text-[24px] font-semibold text-[#1d1e25]'>Is there a free trial available?</p>
            <p className='text-[30px] leading-0'>+</p>
          </div>
        </div>
      </aside>
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

export default Pricing