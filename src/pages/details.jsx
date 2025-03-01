import React from 'react'
import details1 from '../assets/Ellipse 15 (2).png'
import details2 from '../assets/Rectangle 44.png'
import details3 from '../assets/Rectangle 45.png'
import details4 from '../assets/Frame 1171275083.png'
import footer1 from '../assets/Logo (19).png'
import footer2 from '../assets/Social media (1).png'

const Details = () => {
  return (
    <>
    <div className="w-[90%] sm:w-[65%] m-auto">
      <p className="font-bold text-[30px] sm:leading-[85px] mt-[70px] sm:px-[0px] sm:text-[70px] m-auto">
        How we perform long-running tasks using AWS services
      </p>

      <div className="py-[40px]">
        <div className="flex flex-col sm:flex-row gap-[30px] sm:gap-[0px] justify-between sm:items-center py-[40px]">
          <div className="flex gap-[20px] items-center">
            <img src={details1} alt="Renee Wells" />
            <div>
              <p className="font-bold">Renee Wells</p>
              <p className="text-[gray]">Product Designer, Quotient</p>
            </div>
          </div>
          <p className="text-[gray]">10 min read  November 10, 2023</p>
        </div>
        <img className="w-[1100px]" src={details2} alt="Long-running tasks AWS" />

        <p className="text-[20px] py-[70px]">
          Depending on the input, this can result in using a lot of processing power and time. The whole process would take
          approximately 5 seconds to return a result to the client. Keep in mind we’re talking about 1 item, a contact from a
          contact book. After a while, a new requirement is added. Solution must support companies that manage their contacts
          organized in files. We agreed to develop a web application that would support upload of dataset files, like .csv. The
          new web application should support third party integrations. Some of them are the ESP/CRM services, like Mailchimp. User
          does not need to see the result immediately. System can later notify the user about the result, when the process finishes.
          This information is the key that we need to leverage on when developing our solution. So here’s how we did it.
        </p>

        <h1 className="font-bold text-[30px]">Initial approach</h1>
        <p className="text-[20px] py-[70px]">
          Our initial approach went like this: The web application would read a .csv file line-by-line and submit an array of
          entries to the backend REST API. Processing is in real time, immediately after the user makes a request for the process
          to start, he expects a result. Another approach is to apply vertical scaling to AWS architecture. Meaning we used
          larger, more expensive instances that have more RAM and processing power. This system worked well for smaller datasets,
          maybe up to 5k entries, but for larger datasets multiple problems arose. This solution is prone to failure due to long
          request time. Also, because of some 3rd party services that aren’t optimized for large scale loads or they don’t have
          batch endpoints. 3rd party services also tend to protect their architecture from making a huge bill on their end. The
          whole process was done in real-time. The request can take a lot of time hanging in there while the backend would do all
          the work and return the result to the client. The request was limited to 300 seconds (at time of writing the article)
          before AWS would cancel it… Also I need to mention that the user has to wait a few minutes to see the results. They can’t
          use the app during the process, which makes for a bad user experience.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-[80px] items-start m-auto pb-[130px]">
        <img src={details3} alt="AWS Architecture" />
        <div className="flex flex-col gap-[20px]">
          <img className="w-[383px] h-[32px]" src={details4} alt="Design illustration" />
          <p className="text-[gray]">Written by</p>
          <h1 className="font-bold text-[30px]">Renee Wells</h1>
          <p className="text-[gray]">Product Designer, Quotient</p>

          <p>
            Skilled in React Native, iOS and backend, Toni has a demonstrated knowledge of the information technology and
            services industry, with plenty of hands-on experience to back it up.
          </p>
        </div>
      </div>
    </div>

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

export default Details