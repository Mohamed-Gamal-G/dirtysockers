import Link from 'next/link'
import Image from 'next/image'
import Email from '@/components/Email'
import Faqs from '@/components/Faq\'s'
import Team from '@/components/Team'

export default function Home() {
  return (
    <main className=" Home flex flex-col items-center justify-between ">
      <section className='section1 pt-64'>
        <h1 className='font-black text-left uppercase'>dirty
          <br />
          Badass
        </h1>
        <p className='uppercase'>Rebel Sockers</p>
        <div className='links flex flex-col'>
          <Link className='text-base font-bold leading-10 text-center active' href={"/"} >Mint Lucky Edition</Link>
          <Link className='text-base font-bold leading-10 text-center' href={"/"} >Buy OG Edition</Link>
          <Link className='text-base font-bold leading-10 text-center' href={"/"} >Buy Early Edition</Link>
        </div>
        <div className='ntf'>
          <p className='text-base font-medium leading-6 tracking-normal text-left'>We are exclusively minting on </p>
          <Image src={"/Untitled-17 1.svg"} width={254} height={41} alt='' />
        </div>
        <Image className='img1' src={"/Tapped 1 1.png"} width={410} height={420} alt='' />
        <Image className='img2' src={"/Group 34692.png"} width={161} height={161} alt='' />
        <Image className='img3' src={"/Vector.png"} width={158} height={52.67} alt='' />
        <Image className='img4' src={"/Group 35963.png"} width={225.66} height={208.63} alt='' />
      </section>
      <section className='section2 flex flex-col'>
        <h1 className=' uppercase font-black text-center mt-5'>
          dirty Badass
        </h1>
        <p className='uppercase text-center text-3xl font-black leading-9 mt-5'>Rebel Sockers</p>
        <div className='flex flex-col items-center'>
          <Image className='' src={"/Tapped 1 1.png"} width={410} height={420} alt='' />
          <Image className='' src={"/Group 34692.png"} width={161} height={161} alt='' />
          <Image className='' src={"/Group 35963.png"} width={225.66} height={208.63} alt='' />
        </div>
      </section>
      <div className='mt-60 delete-mt'></div>
      <section className='section3 flex flex-col items-center pl-32 pr-32'>
        <div className='Heders ml-20 mb-8'>
          <h2 className='text-5xl font-medium text-left mb-2'>Ever wonder</h2>
          <h3 className='text-5xl font-black tracking-normal text-left'>Where they come from?</h3>
        </div>
        <div className='continer flex '>
          <div className="left-side w-4/12 text-2xl font-medium leading-9 text-left">
            Imagine being part of a community where being yourself is celebrated, where you can break free from the mundane and live life on your own terms. That's what being a Socker is all about
          </div>
          <div className="right-side w-8/12 ml-5 text-xl font-normal leading-7 text-left">
            You may have felt it growing up - that voice in your head urging you to go against the grain and do things differently. And now that you're an adult, you have the power to make your own choices and live your best life. No more living by someone else's rules.
            <br />
            <br />
            At Sockers, we embrace this spirit of independence and individuality. We don't care about fitting in or following social norms. Instead, we chart our own paths and blaze our own trails.
            <br />
            <br />
            And it's not just about art or NFTs. Being a Socker is a way of life - a feeling that transcends any one specific thing. We come together on the blockchain as Dirty Sockers to celebrate our shared ethos and support one another as we pursue our dreams.
            <br />
            <br />
            We're building a vibrant, dynamic community of Dirty Sockers - one that's flat and democratised, where everyone has a voice and every idea is welcome. Together, we're exploring new horizons, learning from one another, and making money while we do it.
            <br />
            <br />
            So if you're ready to embrace your inner Socker and join a community of like-minded individuals, we invite you to come be a part of the Dirty Socker way. The world is your oyster, and as a Socker, anything is possible.
          </div>
        </div>
      </section>
      <Image className='section4' src={"/news 1.png"} width={1972} height={960} alt='' />
      <Image className='section5' src={"/Wibsite visuals 5 1.png"} width={1972} height={960} alt='' />



      {/* Start universe section */}
      <section className='universe w-full'>
        <h2 className='text-5xl font-bold tracking-normal text-center uppercase'>Our universe</h2>
        <div className="items">

          
          <div className="item item1 flex items-center justify-center m-12">
            <div className="left-side">
            <Image src={"/Group (5).png"} width={282} height={282} alt='' />
            <span className='text-base font-bold leading-5 text-center m-4'>Sold Out. <span className='border-b-2'>Buy</span> at secondary.</span>
            </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>100</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Project Size</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>sold</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Mint Date</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>150$</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Public Mint Price</p>
              </div>
          </div>


          <div className="item item2 flex items-center justify-center m-12">
            <div className="left-side">
            <Image src={"/Group (4).png"} width={282} height={282} alt='' />
            <span className='text-base font-bold leading-5 text-center m-4'>Sold Out. <span className='border-b-2'>Buy</span> at secondary.</span>
            </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>1000</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Project Size</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>sold</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Mint Date</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>100$</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Public Mint Price</p>
              </div>
          </div>


          <div className="item item3 flex items-center justify-center m-12">
            <div className="left-side">
            <Image src={"/Group (2).png"} width={282} height={282} alt='' />
            <span className='text-base font-bold leading-5 text-center m-4'>Sold Out. <span className='border-b-2'>Buy</span> at secondary.</span>
            </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>4500</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Project Size</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>08 Nov</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Mint Date</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>59$</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Public Mint Price</p>
              </div>
          </div>


          <div className="item flex item4 items-center justify-center m-12">
            <div className="left-side">
            <Image src={"/Group (3).png"} width={282} height={282} alt='' />
            <span className='text-base font-bold leading-5 text-center m-4'>Sold Out. <span className='border-b-2'>Buy</span> at secondary.</span>
            </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>4500</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Project Size</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>TBA</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Mint Date</p>
              </div>
              <div className="Project-Size flex flex-col items-center m-2">
                <span className='text-5xl font-black text-center'>49$</span>
                <p className='text-base font-bold leading-5 text-center m-4'>Public Mint Price</p>
              </div>
          </div>
        </div>
      </section>




      {/* End universe section */}

      {/* Start Dirty traits */}
      <section className='Dirty-traits mb-40 ml-6 mr-6'>
        <h1 className='text-6xl font-bold text-center mb-16'>Dirty traits</h1>
        <div className='continer'>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35974.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Eyes</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35975.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Head Gear</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35976.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Mouth Gear</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35977.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Base Sock</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35978.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Dragon Fins</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35980.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Arm Bands</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35983.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Arms</span>
          </div>
          <div className='item flex flex-col justify-center items-center'>
            <div className='img-continer'>
              <Image className='' src={"/Group 35982.png"} width={275} height={287} alt='' />
            </div>
            <span className='text-xl font-normal leading-6 text-center mt-4 mb-4'>Backgrounds</span>
          </div>
        </div>
      </section>
      {/* End Dirty traits */}
      {/* Start Exclusive-traits */}
      <section className='Exclusive-traits'>
        <h1 className='text-6xl font-bold text-center mb-6'>Exclusive traits</h1>
        <div className='continer flex items-center justify-center text-center'>
          <div className="left-side">
            <Image className='' src={"/traits-07.png"} width={569} height={581} alt='' />
            <h3 className='text-2xl font-bold leading-7 text-center'>Legendary Sockers</h3>
            <p className='text-base font-normal leading-5 text-center mt-6 mb-2'>10 Most wanted legendary sockers are hidden in our
              <br />
              Lucky Edition. These NFTs are One-of-One.</p>
          </div>
          <div className="right-side">
            <Image className='' src={"/traits-08.png"} width={569} height={581} alt='' />
            <h3 className='text-2xl font-bold leading-7 text-center'>Treasure Trait</h3>
            <p className='text-base font-normal leading-5 text-center mt-6 mb-2'>It is used only on 2 NFTs in Dirty Sockers. Minters of
              <br />
              this trait will be rewarded 500$ cash-back.</p>
          </div>
        </div>
      </section>
      {/* End Exclusive-traits */}
      {/* Start Timeline Section */}
      <section className='timelineSection mt-80'>
        <section id="conference-timeline">
          <div className="timeline-start">our dirty roadmap</div>
          <div className="conference-center-line"></div>
          <div className="conference-timeline-content">
            {/* <!-- Article --> */}
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left one flex flex-col items-center justify-center dark-border relative">
                  <Image src={"/Untitled-9 2.png"} width={415} height={254} alt='' />
                  <span className='text-6xl font-black text-center'>01</span>
                  <p className='one text-4xl font-bold text-center'>
                    OG Edition Minting
                  </p>
                  <Link className='Delivered' href={"/"}>Delivered</Link>
                </div>
              </div>
              <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
                <div className="content-right wite-border">
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Mint OG collection
                    <br />
                    of 10 unique OG NFTs
                  </span>
                  <br />
                  This release is a strategic drop, to get the
                  right people involved early, and to build the
                  hype for the full drop. This will also be an
                  opportunity for early investors to take a
                  bigger part of the revenue when the full
                  collection is released. Besides sharing all of
                  the DS utilities, the OG holders part take in
                  some sick extra rewards, OG cashback and
                  airdrop. See further down in the roadmap
                  for more information.
                  <br />
                  <br />
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Result: </span>
                  Mint-out in under 2 minutes on
                  crypto.com/NFT
                </div>
              </div>
              <div className="meta-date">
                <div className='right_line'></div>
                <Image src={"/Group 36008.png"} width={73} height={73} alt='' />
              </div>
            </div>
            {/* <!-- // Article --> */}
            {/* <!-- Article --> */}
            <div className="timeline-article">
              <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
                <div className="content-left wite-border">
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Socks Merchandise
                  </span>
                  <br />
                  being released from W3. To start building
                  up the brand value, and promote the
                  collection, merchandise will be integrated
                  early on, starting out with DS socks.
                  <br />
                  <br />
                  W3 got a distribution center ready to ship these Socks
                  worldwide from Berlin. OG holders may expect to be
                  shipped DS socks for free. The DS socks will be the
                  first merchandise being released from the agency,
                  with more merch coming up later.
                </div>
              </div>
              <div className="content-right-container">
                <div className="content-right tow flex flex-col items-center justify-center dark-border">
                  <Image src={"/Image.png"} width={327} height={291} alt='' />
                  <span className='text-6xl font-black text-center'>02</span>
                  <p className='tow text-4xl font-bold text-center'>
                    OG Merchandise
                  </p>
                  <Link className='Delivered' href={"/"}>Delivered</Link>
                </div>
              </div>
              <div className="meta-date">
                <div className='left_line'></div>
                <Image src={"/Group 36008.png"} width={73} height={73} alt='' />
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left three flex flex-col items-center justify-center dark-border relative">
                  <Image src={"/Image1.png"} width={415} height={254} alt='' />
                  <span className='text-6xl font-black text-center'>03</span>
                  <p className='three text-4xl font-bold text-center'>
                    Early Edition Minting
                  </p>
                  <Link className='Delivered' href={"/"}>Delivered</Link>
                </div>
              </div>
              <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
                <div className="content-right wite-border">
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Mint of Early Edition
                  </span>
                  <br />
                  Early Sockers is a layered 1k drop from the
                  full 10k collection, meaning, the 1000 NFTs
                  are part of the 10.000 NFT Dirty Sockers
                  collection, but Early Sockers will be
                  dropped in advance of the rest.
                  <br />
                  <br />
                  Early Sockers brings the same utility as the Dirty
                  Sockers NFTs, and additionally three bonus utilities:
                  increased rarity on traits, cashback, and airdrop. For
                  more details on the cashback and the airdrop, see
                  step 7.
                </div>
              </div>
              <div className="meta-date">
                <div className='right_line'></div>
                <Image src={"/Group 36008.png"} width={73} height={73} alt='' />
              </div>
            </div>
            {/* <!-- // Article --> */}
            {/* <!-- Article --> */}
            <div className="timeline-article">
              <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
                <div className="content-left wite-border">
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Cashback for OG holders
                  </span>
                  <br />
                  15% of the gross mint revenue of Early
                  Sockers is being distributed to the OGs. At
                  a full mint out, this is equal to $150 for
                  every OG NFT. Sick.
                </div>
              </div>
              <div className="content-right-container">
                <div className="content-right one flex flex-col items-center justify-center dark-border">
                  <Image src={"/Image (1).png"} width={415} height={254} alt='' />
                  <span className='text-6xl font-black text-center'>04</span>
                  <p className='one text-4xl font-bold text-center'>
                    Cashback
                  </p>
                  <Link className='Delivered' href={"/"}>Delivered</Link>
                </div>
              </div>
              <div className="meta-date">
                <div className='left_line'></div>
                <Image src={"/Group 36008.png"} width={73} height={73} alt='' />
              </div>
            </div>
            <div className="timeline-article">
              <div className="content-left-container">
                <div className="content-left five flex flex-col items-center justify-center dark-border relative">
                  <Image src={"/Image2.png"} width={417} height={310} alt='' />
                  <span className='text-6xl font-black text-center'>05</span>
                  <p className='five text-4xl font-bold text-center'>
                    Lucky Edition Minting
                  </p>
                </div>
              </div>
              <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
                <div className="content-right wite-border">
                  <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                    Mint of Dirty Sockers Lucky Edition
                  </span>
                  <br />
                  We are here fam, with first phase of the
                  rest 9k NFTs of the Dirty Sockers
                  collection. This phase consist of 4500
                  NFTs including OG, early edition and WL air
                  drops.
                </div>
              </div>
              <div className="meta-date">
                <div className='right_line'></div>
                <Image src={"/Group 36026.png"} width={73} height={73} alt='' />
              </div>
            </div>
            {/* <!-- // Article --> */}
          </div>
        </section>
      </section>
      {/* End Timeline Section with completed line*/}
      {/* Start Timeline Section with dashed line */}
      <section id="conference-timeline">
        <div className="conference-center-line-dashed relative">
          <span className='last-sercle absolute bottom-1'></span>
        </div>
        <div className="conference-timeline-content">
          {/* <!-- Article --> */}
          <div className="timeline-article">
            <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-left wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Cashback and airdrop for OG holders
                </span>
                <br />
                7,5% of the gross mint revenue of the main
                Dirty Sockers collection is distributed
                evenly to the holders of the 100 OG NFTs.
                The cashback will equal approximately a 2,5x return on the OG mint price. Break-
                even is at 4000 regularly minted Dirty
                Sockers NFTs.
                <br />
                <br />
                Every OG holder will also be rewarded with an
                airdropped Dirty Sockers NFT. 100 Dirty Sockers NFTs
                will be airdropped into the 100 OG wallets.
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right six flex flex-col items-center justify-center dark-border">
                <Image src={"/Image5.png"} width={368} height={230} alt='' />
                <span className='text-6xl font-black text-center'>06</span>
                <p className='six text-4xl font-bold text-center'>
                  Cashback + Airdrop
                </p>
              </div>
            </div>
            <div className="meta-date">
              <div className='left_line'></div>
              <div className='sercleCenter sercleCenter6'></div>
            </div>
          </div>
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left seven flex flex-col items-center justify-center dark-border relative">
                <Image src={"/Image (9).png"} width={371} height={231} alt='' />
                <span className='text-6xl font-black text-center'>07</span>
                <p className='seven text-4xl font-bold text-center'>
                  Cashback + Airdrop
                </p>
              </div>
            </div>
            <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-right wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Cashback and airdrop for  Early Edition
                </span>
                <br />
                25% of the gross mint revenue of the Dirty
                Sockers drop will go to the Early Sockers.
                <br />
                <br />
                This will equal to about 1x return on every Early
                Sockers NFT on full mintout. Every Early Socker wallet
                will be airdropped one Dirty Sockers NFT after the
                mint of the 9k has been completed.
              </div>
            </div>
            <div className="meta-date">
              <div className='right_line'></div>
              <div className='sercleCenter sercleCenter7'></div>
            </div>
          </div>
          {/* <!-- // Article --> */}
          {/* <!-- Article --> */}
          <div className="timeline-article">
            <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-left wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Mint of Dirty Sockers Final Edition
                </span>
                <br />
                Finally, the end of this collection has come.
                With second phase of the rest 9k NFTs of
                the Dirty Sockers collection. This phase
                also consist of 4500 NFTs available for
                minting.
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right eight flex flex-col items-center justify-center dark-border">
                <Image src={"/Image (2).png"} width={417} height={312} alt='' />
                <span className='text-6xl font-black text-center'>08</span>
                <p className='eight text-4xl font-bold text-center'>
                  Final Edition Minting
                </p>
              </div>
            </div>
            <div className="meta-date">
              <div className='left_line'></div>
              <div className='sercleCenter sercleCenter8'></div>
            </div>
          </div>
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left nine flex flex-col items-center justify-center dark-border relative">
                <Image src={"/Image (3).png"} width={371} height={231} alt='' />
                <span className='text-6xl font-black text-center'>09</span>
                <p className='nine text-4xl font-bold text-center'>
                  Cashback + Airdrop
                </p>
              </div>
            </div>
            <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-right wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Cashback and airdrop for OG holders
                </span>
                <br />
                7,5% of the gross mint revenue of the main
                Dirty Sockers collection is distributed
                evenly to the holders of the 100 OG NFTs.
                The cashback will equal approximately a
                2,5x return on the OG mint price. Break-
                even is at 4000 regularly minted Dirty
                Sockers NFTs.
                <br />
                <br />
                Every OG holder will also be rewarded with an
                airdropped Dirty Sockers NFT. 100 Dirty Sockers NFTs
                will be airdropped into the 100 OG wallets.
              </div>
            </div>
            <div className="meta-date">
              <div className='right_line'></div>
              <div className='sercleCenter sercleCenter9'></div>
            </div>
          </div>
          {/* <!-- // Article --> */}
          {/* <!-- Article --> */}
          <div className="timeline-article">
            <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-left wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Cashback and airdrop for  Early Edition
                </span>
                <br />
                25% of the gross mint revenue of the Dirty
                Sockers drop will go to the Early Sockers.
                <br />
                <br />
                This will equal to about 1x return on every Early
                Sockers NFT on full mintout. Every Early Socker wallet
                will be airdropped one Dirty Sockers NFT after the
                mint of the 9k has been completed.
              </div>
            </div>
            <div className="content-right-container">
              <div className="content-right ten flex flex-col items-center justify-center dark-border">
                <Image src={"/Image (4).png"} width={368} height={230} alt='' />
                <span className='text-6xl font-black text-center'>10</span>
                <p className='ten text-4xl font-bold text-center'>
                  Cashback + Airdrop
                </p>
              </div>
            </div>
            <div className="meta-date">
              <div className='left_line'></div>
              <div className='sercleCenter sercleCenter10'></div>
            </div>
          </div>
          <div className="timeline-article">
            <div className="content-left-container">
              <div className="content-left eleven flex flex-col items-center justify-center dark-border relative">
                <Image src={"/Image (5).png"} width={382} height={240} alt='' />
                <span className='text-6xl font-black text-center'>11</span>
                <p className='eleven text-4xl font-bold text-center'>
                  Dirty Cash Club (DCC)
                </p>
              </div>
            </div>
            <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
              <div className="content-right wite-border">
                <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                  Initiate Dirty Cash Club (DCC)
                </span>
                <br />
                As a head start, for the Dirty Sockers
                holder fund, DCC gets 5% of the gross
                revenue from the initial mint.
                <br />
                <br />
                Over time, DCC will grow by profiting 50% of the
                creator fees of theDirty Sockers NFT sales and is
                rewarded with 10% of the gross revenue of W3.
              </div>
            </div>
            <div className="meta-date">
              <div className='right_line'></div>
              <div className='sercleCenter sercleCenter11'></div>
            </div>
          </div>
          {/* <!-- // Article --> */}
        </div>
        {/* <!-- Article --> */}
        <div className="timeline-article">
          <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
            <div className="content-left wite-border">
              <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                Implementing the Dirty DAO
              </span>
              <br />
              One of the biggest parts of the NFT world
              is the community — so the community
              should of course have a chance in taking
              part in big decisions.
              <br />
              <br />
              The DAO voting system will be implemented so that
              decisions about the treasury wallet and other bigger
              decisions can be taken on a community basis. The
              DAO system is a possibility for small holders to big
              whales in the Dirty Sockers community to make their
              voices heard, and take part in governing the
              community.
            </div>
          </div>
          <div className="content-right-container">
            <div className="content-right twelve flex flex-col items-center justify-center dark-border">
              <Image src={"/Image (6).png"} width={289} height={222} alt='' />
              <span className='text-6xl font-black text-center'>12</span>
              <p className='twelve text-4xl font-bold text-center'>
                Dirty DAO
              </p>
            </div>
          </div>
          <div className="meta-date">
            <div className='left_line'></div>
            <div className='sercleCenter sercleCenter12'></div>
          </div>
        </div>
        <div className="timeline-article">
          <div className="content-left-container">
            <div className="content-left thirteen flex flex-col items-center justify-center dark-border relative">
              <Image src={"/Image (7).png"} width={310} height={246} alt='' />
              <span className='text-6xl font-black text-center'>13</span>
              <p className='thirteen text-4xl font-bold text-center'>
                More Merch
              </p>
            </div>
          </div>
          <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
            <div className="content-right wite-border">
              <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                Merch, merch
              </span>
              <br />
              Dirty Sockers hoodies, t-shirts, and caps
              are being released as the next products in
              the merchandise line.
              <br />
              <br />
              The products will mainly be distributed from the
              distribution center in Berlin, but may also be
              distributed through offline stores, to get more people
              from the outside into the NFT community.
            </div>
          </div>
          <div className="meta-date">
            <div className='right_line'></div>
            <div className='sercleCenter sercleCenter13'></div>
          </div>
        </div>
        {/* <!-- // Article --> */}
        {/* <!-- Article --> */}
        <div className="timeline-article">
          <div className="content-left-container text-l font-normal leading-6 tracking-normal text-left">
            <div className="content-left wite-border">
              <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                Podcast series release
                <br />
                of project post mint
              </span>
              <br />
              “About how to build an NFT collection”. The
              team will share their experiences in
              building the Dirty Sockers collection.
              <br />
              <br />
              This will be professional video production, explaining
              the building of the Dirty Sockers NFT collection from
              start to finish. The podcast series will primarily be
              available on Youtube and Tiktok but also on other
              voice-only channels.
            </div>
          </div>
          <div className="content-right-container">
            <div className="content-right fourteen flex flex-col items-center justify-center dark-border">
              <Image src={"/Group 36029.png"} width={258} height={270} alt='' />
              <span className='text-6xl font-black text-center'>14</span>
              <p className='fourteen text-4xl font-bold text-center'>
                Podcast Series Release
              </p>
            </div>
          </div>
          <div className="meta-date">
            <div className='left_line'></div>
            <div className='sercleCenter sercleCenter14'></div>
          </div>
        </div>
        <div className="timeline-article">
          <div className="content-left-container">
            <div className="content-left fifteen flex flex-col items-center justify-center dark-border relative">
              <Image src={"/Image (8).png"} width={415} height={254} alt='' />
              <span className='text-6xl font-black text-center'>15</span>
              <p className='fifteen text-4xl font-bold text-center'>
                3D Sockers
              </p>
            </div>
          </div>
          <div className="content-right-container text-l font-normal leading-6 tracking-normal text-left">
            <div className="content-right wite-border">
              <span className='lite text-xl font-bold leading-6 tracking-normal text-left'>
                Next project of W3 — 3D Sockers
              </span>
              <br />
              The second project of the W3 agency will
              be a collection of 5000 3D Sockers.
              <br />
              <br />
              These Sockers will be adapted for the Metaverse
              when the time is right. So that Dirty Sockers can
              represent in this territory as well.
            </div>
          </div>
          <div className="meta-date">
            <div className='right_line'></div>
            <div className='sercleCenter sercleCenter15'></div>
          </div>
        </div>
      </section>
      {/* End Timeline Section with dashed line */}
      {/* Start our Utility section */}
      <section className='our-Utility flex flex-col justify-center items-center'>
        <h6 className='text-6xl font-semibold tracking-normal text-center uppercase'>
          our main <span>Utility</span>
        </h6>
        <div className='Utility-Continer flex mt-5 items-center justify-center mb-24'>
          <p className='text-3xl font-black tracking-normal text-left'>dirty cash club (DCC) </p>
          <p className='text-3xl font-black tracking-normal text-left ml-5'> OG holder’s BENEFITS</p>
        </div>
        <Image className='graf1' src={"/Group 36031.png"} width={1170.14} height={381.36} alt='' />
        <Image className='graf2' src={"/Group 36049.png"} width={414} height={1338} alt='' />
      </section>
      {/* End our Utility section */}
      {/* Start Other Utilities section */}
      <section className='Utilities-section flex flex-col justify-center'>
        <h6 className='text-6xl font-semibold tracking-normal text-center uppercase'>Other <span>Utilities</span></h6>
        <p className='text-3xl font-semibold tracking-normal text-center uppercase'>dirty staking</p>
        <small className='text-center'>Base index 100*</small>
        <div className="temout relative mt-32">
          <div className="left-line w-32"></div>
          <div className="center-line ml-32"></div>
          <div className="right-line w-36 absolute right-0"></div>
        </div>
        <div className="items relative ml-32 mr-32">
          <div className="continer continer1 flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus1 absolute left-16 top-0"></div>
            <div className="day day1 text-center mt-14">30 days</div>
            <div className="Rewards mt-3">100% Rewards</div>
          </div>
          <div className="continer continer2 flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus2 absolute left-16 top-0"></div>
            <div className="day day2 text-center mt-14">60 days</div>
            <div className="points mt-5 day2">+5 Index points</div>
            <div className="Rewards">105% Rewards</div>
          </div>
          <div className="continer continer3 flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus3 absolute left-16 top-0"></div>
            <div className="day day3 text-center mt-14">90 days</div>
            <div className="Rewards mt-3">105% Rewards</div>
          </div>
          <div className="continer continer4  flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus4 absolute left-16 top-0"></div>
            <div className="day day4 text-center mt-14">120 days</div>
            <div className="points mt-5 day4">+5 Index points</div>
            <div className="Rewards">110% Rewards</div>
          </div>
          <div className="continer continer5 flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus5 absolute left-16 top-0"></div>
            <div className="day day5 text-center mt-14">150 days</div>
            <div className="Rewards mt-3">110% Rewards</div>
          </div>
          <div className="continer continer6 flex flex-col justify-center text-center p-5 relative">
            <div className="redus redus6 absolute left-16 top-0"></div>
            <div className="day day6 text-center mt-14">160 days</div>
            <div className="points mt-5 day6">+5 Index points</div>
            <div className="Rewards">115% Rewards</div>
          </div>
        </div>
        <div className="mob-line"></div>
      </section>
      {/* End Other Utilities section */}
      {/* Start Dirty DAO section */}
      <section className='Dirty-DAO mt-64 flex items-center'>
        <div className="left-side">
          <h6 className='text-2xl font-extrabold tracking-normal text-left'>Dirty DAO</h6>
          <p className='text-lg font-normal leading-7 tracking-normal text-left'>
            All the major decisions will be made
            <br />
            on the Dirty DAO
          </p>
          <br />
          <span className='block text-2xl font-extrabold tracking-normal text-left'>Other Whale rewards</span>
        </div>
        <Image className='mr-32 ml-32' src={"/Group.png"} width={136.84} height={158} alt='' />
        <div className="right-side">
          <h6 className='text-2xl font-extrabold tracking-normal text-left'>FREE DIRTY SOCKER NFT FOR  OG HOLDERS</h6>
          {/* <br /> */}
          <p>
            On Mint Day Of The Full Collection, Every
            <br />
            OG Holder Will be Rewarded by an Airdropped Dirty
            <br />
            Sockers NFT.
          </p>
        </div>
      </section>
      {/* End Dirty DAO section */}
      {/* Start detailed information section */}
      <section className='detailed-information mt-32 flex flex-col items-center w-full'>
        <span className='mt-5 text-lg font-normal leading-5 text-center'>For detailed information visit</span>
        <Link className='mt-5 text-xl font-black leading-7 tracking-normal text-center uppercase' href={"/"}>Dirty Whitepaper</Link>
        <Image className='mt-24' src={"/Group 36069.png"} width={134.34} height={155.34} alt=''/>
      </section>
      <Image className='Podcast1' src={"/Podcast 1.png"} width={1972} height={931} alt=''/>
      {/* End detailed information section */}
      <Team />
      {/* after tem section */}
      <section className='after-tem'>
      <Image className='after-tem-img' src={"/Group12.png"} width={263} height={263} alt='' />
      </section>
      {/* // after tem section */}
      <Faqs />
      <Email />
      
    </main>
  )
}