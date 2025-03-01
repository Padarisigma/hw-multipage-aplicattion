import React from 'react'
import sectionone1 from '../assets/Ellipse 124 (1).png'
import sectionone2 from '../assets/Ellipse 125 (2).png'
import sectionone3 from '../assets/Image (75).png'
import sectionone4 from '../assets/Image (76).png'
import sectionone5 from '../assets/Group 3258.png'
import rec1 from '../assets/Rectangle 34 (1).png'
import rec2 from '../assets/Rectangle 35 (1).png'
import rec3 from '../assets/Rectangle 37.png'
import rec4 from '../assets/Rectangle 36.png'
import arrow from '../assets/Button Arrow (3).png'
import arrow1 from '../assets/Image (77).png'
import arrow2 from '../assets/Image (78).png'
import arrow3 from '../assets/Image (79).png'
import logoLast from '../assets/Logo (18).png'

const Blog = () => {
  return (
    <>
    <section className="w-[100%] px-[7.5%] m-auto pt-[100px]  relative flex flex-col overflow-hidden sm:flex-row justify-between">
      <aside className="flex flex-col gap-[60px] py-[40px] sm:py-[0px]">
        <p className="text-[#1D1E25] text-[50px] sm:text-[80px] mb-[30px] text-center sm:text-left font-bold sm:leading-[120px]">
          Activity & Updates
        </p>
        <div className="flex gap-[20px]">
          <hr className="w-[100px] mt-[30px] border-solid border-t-2 border-black" />
          <p className="text-[#1D1E25] text-[30px]">
            Our biggest challenge is making sure we're <br /> always designing and building products that <br /> will help you run your business better.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[50px] py-[20px] sm:py-[60px] text-[18px] text-[#7E8492]">
          <p className="border-solid border-b-2 border-black text-black">View all</p>
          <p>Design</p>
          <p>Articles</p>
          <p>Product</p>
          <p>Software Development</p>
          <p>Customer Success</p>
        </div>

        <section className="m-auto relative z-10 overflow-hidden" >
          <aside className="grid grid-cols-1 sm:grid-cols-[500px_500px_500px]   pb-[60px] relative top-0 gap-[30px]">
            <div className="sm:w-[100%] flex flex-col gap-[10px]">
              <img src={sectionone3} alt="" className="w-[100%]" />
              <div className="flex justify-between">
                <p className="text-[#7E8492] text-[14px]">Published in Insight Jan 30, 2021</p>
                <p className="text-[#7E8492] text-[14px]">by : Albert Sans</p>
              </div>
              <p className="text-[#1D1E25] text-[25px] font-bold tracking-[1px]">
                What makes an authentic employee <br /> profile, and why does it matter ?
              </p>
              <p className="text-[#848892] text-[18px]">In this article, we'll cover how to <br /> create user flows</p>
            </div>

            <div className="sm:w-[100%] flex flex-col gap-[10px]">
              <img src={sectionone4} alt="" className="w-[100%]" />
              <div className="flex justify-between">
                <p className="text-[#7E8492] text-[14px]">Published in Insight Jan 30, 2021</p>
                <p className="text-[#7E8492] text-[14px]">by : Albert Sans</p>
              </div>
              <p className="text-[#1D1E25] text-[25px] font-bold tracking-[1px]">
                What makes an authentic employee <br /> profile, and why does it matter ?
              </p>
              <p className="text-[#848892] text-[18px]">
                What are Design Principles?… To understand <br /> design principles, we first discuss the principles.
              </p>
            </div>
            <div className="sm:w-[100%] flex flex-col gap-[10px]">
              <img src={sectionone4} alt="" className="w-[100%]" />
              <div className="flex justify-between">
                <p className="text-[#7E8492] text-[14px]">Published in Insight Jan 30, 2021</p>
                <p className="text-[#7E8492] text-[14px]">by : Albert Sans</p>
              </div>
              <p className="text-[#1D1E25] text-[25px] font-bold tracking-[1px]">
                What makes an authentic employee <br /> profile, and why does it matter ?
              </p>
              <p className="text-[#848892] text-[18px]">
                What are Design Principles?… To understand <br /> design principles, we first discuss the principles.
              </p>
            </div>

            <img src={sectionone5} alt="" className="hidden sm:block absolute top-[180px] left-[475px] w-[78px]" />
          </aside>
        </section>

        <img src={sectionone2} alt="" className="absolute top-[-40px] left-[-90px]" />
        <img src={sectionone1} alt="" className="hidden sm:block absolute top-[300px] right-[-110px]" />
      </aside>
    </section>

    <section className="w-[100%] bg-[#1D1E25] py-[80px]">
      <div className="w-[85%] m-auto flex flex-col sm:flex-row gap-[50px]">
        <div className="sm:w-[50%] flex flex-col gap-[30px] sm:gap-[190px]">
          <aside className="flex flex-col gap-[30px]">
            <img src={rec1} alt="" className="w-[100%]" />
            <p className="text-[40px] text-white">
              How we perform long-running tasks using AWS services
            </p>
            <p className="text-[#7E8492] text-[18px]">
              Webflow is web design tool as well as a hosting platform <br />
              and CMS all in one. While you are probably familiar with all <br />
              of these, they are usually entirely separate tools.
            </p>
          </aside>

          <aside className="flex flex-col gap-[30px]">
            <img src={rec2} alt="" className="w-[100%]" />
            <p className="text-[40px] text-white">
              Layout Exploration — Simple <br /> exercise but big effect
            </p>
            <p className="text-[#7E8492] text-[18px]">
              Make alternatives or other options for the design we are making.
              For example, we are <br /> creating a website design. <br /> Then
              there is the testimonial section.
            </p>
          </aside>
        </div>

        <div className="sm:w-[50%] flex flex-col gap-[30px] sm:gap-[180px]">
          <aside className="flex flex-col gap-[20px]">
            <img src={rec3} alt="" className="w-[100%]" />
            <p className="text-[40px] text-white">
              Layout Exploration — Simple <br /> exercise but big effect
            </p>
            <p className="text-[#7E8492] text-[18px]">
              Make alternatives or other options for the design we are making.
              For example, we are <br /> creating a website design. <br /> Then
              there is the testimonial section.
            </p>
          </aside>

          <aside className="flex flex-col gap-[30px]">
            <img src={rec4} alt="" className="w-[100%]" />
            <p className="text-[40px] text-white">
              How we perform long-running tasks using AWS services
            </p>
            <p className="text-[#7E8492] text-[18px]">
              Webflow is web design tool as well as a hosting platform <br />
              and CMS all in one. While you are probably familiar with all <br />
              of these, they are usually entirely separate tools.
            </p>
          </aside>
        </div>
      </div>
    </section>

    <section className="w-[85%] m-auto flex flex-col sm:flex-row justify-between gap-[30px] sm:gap-[0px] sm:items-center pt-[100px] pb-[70px]">
      <div>
        <p className="text-[#1D1E25] text-[56px]">Articles</p>
        <p className="text-[#7E8492] text-[18px]">
          Complex tech decoded by engineers, business <br /> trends analyzed by experts.
        </p>
      </div>

      <div>
        <img src={arrow} alt="" />
      </div>
    </section>


    <section className="w-[85%] m-auto grid pb-[60px] gap-[50px] sm:gap-[20px] sm:grid-cols-3">
      <aside className="flex flex-col gap-[20px] items-start">
        <img src={arrow1} alt="" />
        <p className="text-[#1D1E25] text-[32px]">
          List of UX Designer <br /> Portfolio / Case Studies <br /> where you can make money
        </p>
        <p className="text-[#7E8492] text-[18px]">
          Here are some portfolios / Case Studies from <br /> UX Designers that you can use as a reference <br />
          for creating a portfolio. Two interesting things <br /> from their portfolio are:
        </p>
        <button className="py-[10px] px-[60px] rounded-[20px] bg-transparent border-solid border-2 border-gray-300 text-black text-[18px]">
          <a href="./detalblog.html" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
      </aside>

      <aside className="flex flex-col gap-[20px] items-start">
        <img src={arrow2} alt="" />
        <p className="text-[#1D1E25] text-[32px]">
          List of UX Designer <br /> Portfolio / Case Studies <br /> where you can make money
        </p>
        <p className="text-[#7E8492] text-[18px]">
          Here are some portfolios / Case Studies from <br /> UX Designers that you can use as a reference <br />
          for creating a portfolio. Two interesting things <br /> from their portfolio are:
        </p>
        <button className="py-[10px] px-[60px] rounded-[20px] bg-transparent border-solid border-2 border-gray-300 text-black text-[18px]">
          <a href="./detalblog.html" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
      </aside>

      <aside className="flex flex-col gap-[20px] items-start">
        <img src={arrow3} alt="" />
        <p className="text-[#1D1E25] text-[32px]">
          List of UX Designer <br /> Portfolio / Case Studies <br /> where you can make money
        </p>
        <p className="text-[#7E8492] text-[18px]">
          Here are some portfolios / Case Studies from <br /> UX Designers that you can use as a reference <br />
          for creating a portfolio. Two interesting things <br /> from their portfolio are:
        </p>
        <button className="py-[10px] px-[60px] rounded-[20px] bg-transparent border-solid border-2 border-gray-300 text-black text-[18px]">
          <a href="./detalblog.html" target="_blank" rel="noopener noreferrer">
            Read more
          </a>
        </button>
      </aside>
    </section>

   <footer className="relative top-0 pt-[60px] overflow-hidden">
         <section className="w-[85%] m-auto pt-[100px] relative gap-[30px] sm:gap-[0px] flex flex-col sm:flex-row justify-between">
           <aside className="flex flex-col gap-[30px]">
             <p className="text-[#1D1E25] text-[30px] sm:text-[70px] mb-[30px] font-bold sm:leading-[120px]">
               Think beyond the wave
             </p>
             <div className="flex gap-[20px]">
               <hr className="w-[100px] mt-[30px] border-solid border-t-2 border-black" />
               <p className="text-[#1D1E25] text-[18px] sm:text-[30px]">
                 Ask about Sans products, pricing, <br /> implementation, or anything else. Our highly <br /> trained reps are standing by, ready to help
               </p>
             </div>
           </aside>
           <aside className="relative top-0 flex flex-col justify-center">
             <button className="py-[15px] relative z-10 px-[50px] rounded-[30px] bg-black text-white tracking-[2px]">
               Try for free
             </button>
           </aside>
         </section>
   
         <section className="w-[85%] py-[100px] border-b-2 border-solid border-gray-400 justify-between flex flex-col sm:flex-row gap-[40px] m-auto">
           <div>
             <img src={logoLast} alt="Logo" />
             <p className="text-[#1D1E25] text-[16px]">
               We built an elegant solution. Our team <br /> created a fully integrated sales and <br /> marketing solution for SMBs
             </p>
           </div>
   
           <div className="flex flex-col gap-[15px]">
             <p className="text-[#1D1E25] font-bold">Company</p>
             <p>Pricing</p>
             <p>About</p>
             <p>Blog</p>
             <p>Jobs</p>
           </div>
   
           <div className="flex flex-col gap-[15px]">
             <p className="text-[#1D1E25] font-bold">Product</p>
             <p>Sales Software</p>
             <p>Marketplace</p>
             <p>Terms & Conditions</p>
             <p>Privacy Policy</p>
           </div>
   
           <div className="flex flex-col gap-[15px]">
             <p className="text-[#1D1E25] font-bold">Discover</p>
             <p>CRM Comparision</p>
             <p>Partner Program</p>
             <p>What is CRM</p>
             <p>Resource</p>
           </div>
   
           <div className="flex flex-col relative z-10 gap-[15px]">
             <p className="text-[#1D1E25] font-bold">Help Center</p>
             <p>Community</p>
             <p>Knowledge Base</p>
             <p>Academy</p>
             <p>Support</p>
           </div>
         </section>
   
         <div className="text-[#AFB3BB] text-[18px] text-center tracking-[2px] py-[30px]">
           <p>© Copyright 2023 All Rights Reserved</p>
         </div>
   
         <img src={sectionone2} alt="Ellipse 125" className="absolute top-0  sm:left-[100px]" />
         <img src={sectionone1} alt="Ellipse 124" className="absolute hidden sm:block top-[50px] right-[-110px]" />
       </footer>

    </>
  )
}

export default Blog