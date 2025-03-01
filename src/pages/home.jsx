import React from 'react'
import sectionone1 from '../assets/Ellipse 124 (1).png'
import sectionone2 from '../assets/Ellipse 125 (2).png'
import sectionone3 from '../assets/Customer Growth - Light (1).png'
import sectionone4 from '../assets/Sales - Light (1).png'
import sectionone5 from '../assets/Statistic - Light (1).png'
import sectiontwo1 from '../assets/Icon (15).png'
import sectiontwo2 from '../assets/Image (73).png'
import sectiontwo3 from '../assets/Bar Chart (1).png'
import sectiontwo4 from '../assets/Icon (16).png'
import image1 from '../assets/Image (74).png'
import bnb from '../assets/Airbnb Logo (1).png'
import amazon from '../assets/Amazon Logo (1).png'
import fedex from '../assets/FedEx Logo (1).png'
import microsoft from '../assets/Microsoft Logo (1).png'
import img1 from '../assets/Frame 1171275175 (1).png'
import img2 from '../assets/Frame 1171275176 (1).png'
import img3 from '../assets/Frame 1171275177 (1).png'
import img4 from '../assets/Frame 1171275178 (1).png'
import img5 from '../assets/Rectangle 5650 (1).png'
import img6 from '../assets/Rectangle 5651 (1).png'
import img7 from '../assets/Group 3260 (1).png'
import img8 from '../assets/“ (1).png'
import img9 from '../assets/Rating (1).png'
import img10 from '../assets/Ellipse 15 (1).png'
import img11 from '../assets/Button Arrow (2).png'
import logoLast from '../assets/Logo (18).png'

const Home = () => {
  return (
   <>
   <section className="w-[85%] m-auto pt-[100px]  realtive flex flex-col sm:flex-row  justify-between ">
            <aside className="flex relative flex-col gap-[60px] py-[40px] sm:py-[0px]">
                <p className="text-[#1D1E25] text-[50px] sm:text-[80px] mb-[30px] text-center sm:text-left font-bold sm:leading-[120px]">Digitally forward <br/> creative</p>
                <div className="flex  gap-[20px]">
                 <hr className="w-[100px] mt-[30px] border-solid border-t-2 border-black" /> 
                <p className="text-[#1D1E25] text-[30px]">When it comes to interactive <br/> marketing, we've got you covered. <br/>
                    Be where the world is going</p>    
                </div>

                <div className="flex flex-col sm:flex-row gap-[20px]">
                    <input type="text" placeholder="Enter your email " 
                    className="py-[15px] outline-none border-b-2  w-[300px] border-solid border-gray-400" />
                    <button className="py-[15px] px-[50px] rounded-[30px] bg-black text-white tracking-[2px]">Try for free</button>
                </div>

                <img src={sectionone2} alt="" className="absolute top-0 left-[-30px]"/>
               
            </aside>
            <aside className="relative top-0 hidden sm:flex flex-col justify-center">
            <img src={sectionone4} alt="" className="mt-[60px] relative z-10"/>
                <img src={sectionone3} alt="" className="absolute top-[-70px] right-[-60px] z-10" />
                <img src={sectionone5} alt="" className="relative top-[-130px] z-[10]" />

                <img src={sectionone1} alt="" className="absolute top-0 right-[-110px]" />
            </aside>
        </section>
     
        <section className="bg-[#1D1E25] w-full">
      <div className="w-[85%] m-auto flex flex-col py-[80px] gap-[50px]">
        <aside className="flex flex-col gap-[30px]">
          <p className="text-white sm:leading-[65px] font-bold text-[30px] sm:text-[56px]">
            Coca help our client solve <br /> complex customer problems <br /> with data that does more.
          </p>
          <p className="text-[#7E8492] text-[18px]">
            Our platform offers the modern enterprise full control of how data can be <br />
            accessed and used with industry-leading software solutions for identity, <br />
            activation, and data collaboration.
          </p>
        </aside>
        <aside className="grid sm:grid-cols-2 grid-rows-2 gap-[70px]">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col gap-[20px] items-start">
              <img src={sectiontwo1} alt="Icon" />
              <p className="text-white text-[30px]">Build your data <br /> fundamental</p>
              <p className="text-[#7E8492] text-[18px]">
                {index === 1
                  ? "Effectively measure people-based campaigns with the freedom to choose from best-of-breed partners to optimize and drive media innovation."
                  : index === 3
                  ? "Protect your customer data with leading privacy-preserving technologies and advanced techniques to minimize data movement while still enabling insight generation."
                  : "Build access to data, develop valuable business insights and drive revenue while maintaining full control over access and use of data at all times."}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </section>

    <section className="w-[85%] m-auto flex flex-col sm:flex-row py-[150px] gap-[60px] items-center">
      <aside className="relative top-0 sm:w-[50%]">
        <img src={sectiontwo2} alt="Main" className="w-[100%]" />
        <img src={sectiontwo3} alt="Chart" className="absolute right-[40px] bottom-[40px]" />
      </aside>
      <aside className="flex flex-col gap-[35px]">
        <p className="text-[#1D1E25] leading-[65px] font-bold text-[56px]">
          Passion to increase <br /> company revenue up <br /> to 85%
        </p>
        <p className="text-[#7E8492] text-[17px]">
          Our platform offers the modern enterprise full control of how data can be <br />
          accessed and used with industry-leading software solutions for identity, <br />
          activation, and data collaboration.
        </p>
        <div className="flex gap-[10px] items-center">
          <img src={sectiontwo4} alt="Icon" />
          <p className="text-[18px] text-[#1D1E25]">
            Close more deals with single-page <br /> contact management
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <img src={sectiontwo4} alt="Icon" />
          <p className="text-[18px] text-[#1D1E25]">
            Close more deals with single-page <br /> contact management
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <img src={sectiontwo4} alt="Icon" />
          <p className="text-[18px] text-[#1D1E25]">
            Close more deals with single-page <br /> contact management
          </p>
        </div>
        <div className="flex gap-[10px] items-center">
          <img src={sectiontwo4} alt="Icon" />
          <p className="text-[18px] text-[#1D1E25]">
            Close more deals with single-page <br /> contact management
          </p>
        </div>
      </aside>
    </section>

    <section className="flex flex-col sm:flex-row w-[85%] m-auto pb-[60px] justify-between">
      <div className="border-r-2 border-gray-400 sm:pl-[0px] pl-[100px] sm:pr-[100px] border-solid">
        <p className="text-[#1D1E25] text-[64px]">17k</p>
        <p className="text-[#7E8492] text-[18px]">happy customers on <br /> worldwide</p>
      </div>
      <div className="border-r-2 border-gray-400 px-[100px] border-solid">
        <p className="text-[#1D1E25] text-[64px]">15+</p>
        <p className="text-[#7E8492] text-[18px]">happy customers on <br /> worldwide</p>
      </div>
      <div className="border-r-2 border-gray-400 px-[100px] border-solid">
        <p className="text-[#1D1E25] text-[64px]">50+</p>
        <p className="text-[#7E8492] text-[18px]">happy customers on <br /> worldwide</p>
      </div>
      <div className="pl-[100px]">
        <p className="text-[#1D1E25] text-[64px]">100+</p>
        <p className="text-[#7E8492] text-[18px]">happy customers on <br /> worldwide</p>
      </div>
    </section>

    <section className="w-[85%] m-auto py-[50px] flex flex-col gap-[100px] sm:gap-[50px]">
      <aside>
        <img src={image1} alt="Marketing Visual" className="w-[100%]" />
      </aside>
      <aside className="flex flex-col sm:flex-row justify-between">
        <p className="text-[#1D1E25] text-[30px] sm:text-[56px] font-bold">
          Lift your business to new <br /> heights with our digital <br /> marketing services
        </p>
        <p className="text-[#7E8492] text-[18px] pt-[30px]">
          To build software that gives customer-facing <br /> teams in small and medium-sized businesses <br />
          the ability to create rewarding and long-lasting <br /> relationships with customers
        </p>
      </aside>
    </section>

    <section className="w-[85%] m-auto my-[100px] border-solid border-t-2 border-b-2 border-gray-300 py-[50px] sm:px-[80px] flex flex-col sm:flex-row gap-[50px]">
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
        
     
    <section className="w-[85%] m-auto flex py-[60px] flex-col gap-[50px]">
      <aside className="flex flex-col gap-[30px]">
        <p className="text-[#1D1E25] sm:leading-[70px] font-bold text-[30px] sm:text-[56px]">
          Advertise, analyze, and <br /> optimize! We do it all for <br /> you
        </p>
        <p className="text-[#7E8492] text-[18px]">
          Build more meaningful and lasting relationships - <br /> better
          understand their needs, identify new <br /> opportunities to help
          address any problems faster
        </p>
      </aside>
      <aside className="grid  sm:grid-cols-2 sm:grid-rows-2 gap-[40px]">
        <div className="flex flex-col sm:flex-row gap-[50px] items-center">
          <aside>
            <img src={img1} alt="" />
          </aside>
          <aside className="flex flex-col gap-[20px]">
            <p className="text-[#1D1E25] text-[32px]">Lead happiness <br /> for customers</p>
            <p className="text-[#7E8492] text-[16px]">
              Build more meaningful and lasting <br /> relationships - better
              understand <br /> their needs, identify new <br /> opportunities to
              help address any <br /> problems faster
            </p>
          </aside>
        </div>
        <div className="flex flex-col sm:flex-row gap-[50px] items-center">
          <aside>
          <img src={img2} alt="" />
          </aside>
          <aside className="flex flex-col gap-[20px]">
            <p className="text-[#1D1E25] text-[32px]">Lead happiness <br /> for customers</p>
            <p className="text-[#7E8492] text-[16px]">
              Build more meaningful and lasting <br /> relationships - better
              understand <br /> their needs, identify new <br /> opportunities to
              help address any <br /> problems faster
            </p>
          </aside>
        </div>
        <div className="flex flex-col sm:flex-row gap-[50px] items-center">
          <aside>
          <img src={img3} alt="" />
          </aside>
          <aside className="flex flex-col gap-[20px]">
            <p className="text-[#1D1E25] text-[32px]">Lead happiness <br /> for customers</p>
            <p className="text-[#7E8492] text-[16px]">
              Build more meaningful and lasting <br /> relationships - better
              understand <br /> their needs, identify new <br /> opportunities to
              help address any <br /> problems faster
            </p>
          </aside>
        </div>
        <div className="flex flex-col sm:flex-row gap-[50px] items-center">
          <aside>
          <img src={img4} alt="" />
          </aside>
          <aside className="flex flex-col gap-[20px]">
            <p className="text-[#1D1E25] text-[32px]">Lead happiness <br /> for customers</p>
            <p className="text-[#7E8492] text-[16px]">
              Build more meaningful and lasting <br /> relationships - better
              understand <br /> their needs, identify new <br /> opportunities to
              help address any <br /> problems faster
            </p>
          </aside>
        </div>
      </aside>
    </section>

    <section className="w-[85%] m-auto">
      <aside className="text-center flex flex-col py-[50px] gap-[20px]">
        <p className="text-[#1D1E25] font-bold text-[30px] sm:text-[56px]">Trending news from Coca</p>
        <p className="text-[#7E8492] text-[20px]">we have some new Service to pamper you</p>
      </aside>
      
      <aside className="flex flex-col sm:flex-row pb-[60px] relative top-0 gap-[30px]">
        <div className="sm:w-[50%] flex flex-col gap-[10px]">
          <img src={img5} alt="News Image 1" className="w-[100%]" />
          <div className="flex justify-between">
            <p className="text-[#7E8492] text-[14px]">Published in Insight Jan 30, 2021</p>
            <p className="text-[#7E8492] text-[14px]">by : Albert Sans</p>
          </div>
          <p className="text-[#1D1E25] text-[32px] font-bold tracking-[2px]">
            What makes an authentic employee <br /> profile, and why does it matter ?
          </p>
        </div>
        
        <div className="sm:w-[50%] flex flex-col gap-[10px]">
          <img src={img6} alt="News Image 2" className="w-[100%]" />
          <div className="flex justify-between">
            <p className="text-[#7E8492] text-[14px]">Published in Insight Jan 30, 2021</p>
            <p className="text-[#7E8492] text-[14px]">by : Albert Sans</p>
          </div>
          <p className="text-[#1D1E25] text-[32px] font-bold tracking-[2px]">
            What makes an authentic employee <br /> profile, and why does it matter ?
          </p>
        </div>
        
        <img src={img7} alt="Decorative" className="hidden sm:block absolute top-[150px] left-[605px]" />
      </aside>
    </section>

    <section className="w-[85%] m-auto flex flex-col gap-[40px] py-[100px]">
      <aside className="flex flex-col sm:flex-row justify-between items-center">
        <p className="text-[#1D1E25] text-[40px] sm:leading-[70px] sm:text-[56px] font-bold">
          What our customer <br /> are saying
        </p>
        <p className="text-[#7E8492] text-[18px]">
          We are trusted by numerous companies from <br /> different businesses to meet their needs
        </p>
      </aside>

      <aside>
        <div>
          <img src={img8} alt="Customer Image" />
        </div>
        <div className="sm:w-[90%] sm:ml-[10%] flex flex-col gap-[20px]">
          <img src={img9} alt="Rating" className="w-[170px]" />
          <p className="text-[#1D1E25] text-[20px] sm:text-[40px]">
            “With Agency, the results are very satisfying. <br />
            Wrapped with high quality and innovative design <br />
            that makes a surge of visitors on my website”
          </p>
          <div className="flex justify-between items-center">
            <div className="flex gap-[15px]">
              <img src={img10} alt="Author Image" />
              <div>
                <p>Renee Wells</p>
                <p className="text-[#7E8492] text-[16px]">Product Designer, Quotient</p>
              </div>
            </div>
            <img src={img11} alt="Arrow Button" />
          </div>
        </div>
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

      <img src={sectionone2} alt="Ellipse 125" className="absolute top-0 left-0 sm:left-[150px]" />
      <img src={sectionone1} alt="Ellipse 124" className="absolute hidden sm:block top-[50px] right-[-110px]" />
    </footer>

      </>
  )
}

export default Home