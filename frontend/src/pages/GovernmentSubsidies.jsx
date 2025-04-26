import React from 'react'
import modi from '../assets/modi.jpg';

const GovernmentSubsidies = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <div className="relative">
        <img
          src={modi}
          alt="PM Surya Ghar"
          className="w-full object-cover h-[400px]"
        />
      </div>

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <p className="text-lg">
          <strong>Visit the official government website to avail the scheme: </strong>
          <a href="#" className="text-blue-600 hover:underline">Avail Now</a>
        </p>

        <p className="text-base">
          Join the solar revolution with PM Surya Ghar: Muft Bijli Yojana, a
          groundbreaking government initiative aimed at lighting up Indian
          households with free electricity. Launched with a visionary zeal by
          Prime Minister Narendra Modi on February 15, 2024, this scheme is
          poised to transform the energy landscape of the nation.
        </p>

        <div>
          <h2 className="text-xl font-bold mb-2">Empowering Homes, Empowering Lives</h2>
          <p>
            At the heart of PM Surya Ghar: Muft Bijli Yojana lies the commitment
            to empower every household in India with access to clean and
            affordable energy. Under this pioneering scheme, households are
            offered a substantial subsidy to install solar panels on their
            rooftops. With the government covering up to 40% of the
            installation costs, the barriers to embracing solar power are
            significantly reduced.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">A Brighter Future for Millions</h2>
          <p>
            The impact of PM Surya Ghar: Muft Bijli Yojana is poised to reach
            every corner of the nation, benefiting an estimated 1 crore
            households. Beyond mere numbers, this initiative promises to usher
            in a new era of sustainability, self-reliance, and economic
            prosperity for millions of families across India.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Savings for the Nation, Savings for You</h2>
          <p>
            By harnessing the power of solar energy, PM Surya Ghar: Muft Bijli
            Yojana is not just illuminating homes; it's also lighting the path
            to substantial savings. With the scheme expected to save the
            government an impressive Rs. 75,000 crore annually in electricity
            costs, the dividends of this investment in renewable energy are
            clear.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Join the Solar Movement Today</h2>
          <p>
            Don't miss out on this historic opportunity to embrace clean,
            renewable energy and contribute to a brighter, more sustainable
            future for India. Explore how PM Surya Ghar: Muft Bijli Yojana can
            benefit your household and community. Together, let's harness the
            power of the sun to illuminate our homes and transform our lives.
          </p>
        </div>

        <div className="bg-gray-100 p-4 border-l-4 border-yellow-500 text-center italic">
          AUITS PVT LTD is an authorized and approved vendor by UPNEDA for
          rooftop solar installations as part of the PMSG: MBY initiative. We
          are just a call away. Contact / Whatsapp on 9911791555 to know about
          more details.
        </div>

        <div className="flex gap-4 text-sm text-gray-600 pt-6 border-t">
          <span># Government Initiatives</span>
          <span># Solar Energy</span>
          <span># Clean Energy</span>
          <span># Sustainability</span>
        </div>
      </div>
    </div>
  );
}

export default GovernmentSubsidies