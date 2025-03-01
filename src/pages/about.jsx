import React from 'react'
import circle from '../assets/Linked Path.png'
import circle1 from '../assets/Rectangle 13.png'
import circle2 from '../assets/Rectangle 37 (1).png'
import circle3 from '../assets/Rectangle 38.png'
import circle4 from '../assets/Ellipse 125 (2).png'
import circle5 from '../assets/Ellipse 124 (1).png'
import circle6 from '../assets/Rectangle 4.png'
import circle7 from '../assets/Rectangle 5 (6).png'
import circle8 from '../assets/Rectangle 6.png'
import circle9 from '../assets/Group 3258 (2).png'
import circle10 from '../assets/Frame 1171275130.png'
import footer1 from '../assets/Logo (19).png'
import footer2 from '../assets/Social media (1).png'


const About = () => {
  return (
    <>
    <section className='w-[90%] sm:w-[85%] m-auto flex flex-col gap-[70px] py-[80px]'>
        <aside>
            <p className='sm:w-[900px] font-semibold text-[40px] sm:text-[70px] color-[#1D1E25]'>Everything you need to get the attention of your audience</p>
        </aside>
        <aside>
            <div className='flex flex-col sm:flex-row justify-between items-end sm:items-center'>
                <div className='flex items-start gap-[20px] sm:gap-[30px]'>
                    <hr className='w-[50px] sm:w-[100px] mt-[20px]'/>
                    <p className='text-[24px] sm:text-[30px]  w-[300px] sm:w-[650px] leading-[35px] color-[#1D1E25]'>Our digital agency helps clients develop, implement and maintain successful digital marketing strategies across all channels. Also work with you to build your website and create online businesses that grow.</p>
                </div>
                <img src={circle} alt="" className='w-[100px] sm:w-[180px]' />
            </div>
        </aside>
    </section>

     
     <div className='relative  overflow-hidden sm:py-[50px]'>
      <section className='w-[90%] sm:w-[100%] relative z-20 mb-[130px] sm:mx-[7.5%] sm:py-[40px] m-auto grid sm:grid-cols-[500px_500px_300px] gap-[30px] '>
        <img src={circle1} alt="" className='hidden sm:block'/>
        <div className='flex flex-col gap-[20px] items-start'>
            <img src={circle2} alt="" />
            <p className='text-[30px] font-semibold color-[#1D1E25]'>What we believe in</p>
            <p className='text-[18px] color-[#7E8492]'>Over the years at Sans, we’ve put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and...</p>
            <button className='border-0 bg-black text-[white] py-[8px] px-[30px] rounded-[20px]'>See details </button>
        </div>
        <img src={circle3} alt="" className='w-[100%] hidden sm:block'/>
    </section>  
    <div className='flex flex-col gap-[30px] sm:gap-[0px] sm:flex-row border-t-2 border-b-2 border-solid border-gray-300 justify-between py-[90px] items-center w-[90%] sm:w-[85%] m-auto'>
        <p className='text-[40px] sm:text-[52px] sm:w-[450px] font-semibold text-[#1d1e25]'>Powerful ideas & sales acceleration</p>
        <p className='text-[24px]  text-[#1d1e25] sm:w-[470px]'>We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all.</p>
    </div>
    <img src={circle4} className='absolute top-[200px] sm:top-[400px]' alt="" />
     </div>
    
    <section className='w-[90%] sm:w-[85%] m-auto relative flex flex-col gap-[80px] pb-[70px] pt-[150px]'>
        <aside className='flex flex-col relative z-[30] gap-[30px]'>
        <p className=' text-[40px] sm:text-[52px] sm:w-[700px] leading-[45px] sm:leading-[65px] font-semibold text-[#1d1e25]'>Meet our team of creators, designers, and world-class problem solvers</p>
        <p className='text-[18px] sm:w-[497px] text-[#7e8492]'>To become the company that customers want, it takes a group of passionate people. Get to know the people who lead</p>
        </aside>
        <aside className='grid sm:grid-cols-3 relative z-[20] gap-[30px]'>
            <div className='flex flex-col gap-[10px] items-start'>
                <img src={circle6} alt="" className='w-[100%]' />
                <div className='flex  justify-between w-[100%] items-center'>
                    <p className='text-[24px] font-semibold text-[#1d1e25]'>Arlyne Stefano</p>
                    <img src={circle10} alt="" />
                </div>
                <p className='text-[18px] text-[#7e8492] pb-[20px]'>Founder & CEO</p>
            </div>
            <div className=' flex-col hidden sm:flex gap-[10px] items-start'>
                <img src={circle7} alt="" className='w-[100%]' />
                <div className='flex  justify-between w-[100%] items-center'>
                    <p className='text-[24px] font-semibold text-[#1d1e25]'>Arlyne Stefano</p>
                    <img src={circle10} alt="" />
                </div>
                <p className='text-[18px] text-[#7e8492] pb-[20px]'>Founder & CEO</p>
            </div>
            <div className='hidden sm:flex flex-col gap-[10px] items-start'>
                <img src={circle8} alt="" className='w-[100%]' />
                <div className='flex  justify-between w-[100%] items-center'>
                    <p className='text-[24px] font-semibold text-[#1d1e25]'>Arlyne Stefano</p>
                    <img src={circle10} alt="" />
                </div>
                <p className='text-[18px] text-[#7e8492] pb-[20px]'>Founder & CEO</p>
            </div>
            <img src={circle9} className='absolute hidden sm:block top-[33%] left-[29.7%]' alt="" />
        </aside>
        <img src={circle5} className='absolute top-[100px] right-[0] w-[500px]' alt="" />
    </section>

    <section className='flex flex-col sm:flex-row w-[90%] sm:w-[85%] m-auto mb-[120px] justify-between gap-[20px] sm:gap-[50px]'>
        <p className='font-semibold sm:hidden block text-[40px]'>Join our team</p>
        <p className='text-[52px] hidden sm:block font-semibold leading-[65px] text-[#1d1e25]'>Join our team, The one with the master touch</p>
        <div className='flex flex-col gap-[20px]'>
            <p className='text-[18px] leading-[30px] text-[#7e8492] sm:w-[600px]'>We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.</p>
            <p className='text-[16px] font-semibold'>See Open Position - </p>
        </div>
    </section>


    <footer className="w-[100%] bg-[#1D1E25]">
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

export default About