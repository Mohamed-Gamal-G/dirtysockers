import Link from "next/link"

const Faqs = () => {
    return (
        /* Start Faqs */
        <section className='Faqs'>
      <h2 className='font-bold text-center mt-32'>Faq’s</h2>
      <div className="continer mx-auto my-20 w-[859px] drop-shadow ">
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title0"> ?What are THE Dirty Sockers </span></summary>
          <div className="mt-5">
              <p>A collection of 10,000 unique, degen Dirty Sockers and 100 OG Sockers that promote freedom, individuality, and diversity in the NFT space and give back to the community.
              </p>
          </div>
      </details>
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title1"> ?Is there a Dirty Sockers Discord</span></summary>
          <div className="mt-5">
              <p>Yes, our Discord the open, Join our community, you can Join <Link href={"https://discord.com/invite/fcB9RYzHjy"}>Here</Link>
              </p>
          </div>
      </details>
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title2"> When will I be able to buy a Dirty Sockers NFT</span></summary>
          <div className="mt-5">
              <p>Our OG collection is sold out. Early Sockers, consist of 1000 NFTs are dropping on 5th May 2023 and the drop date of Dirty Sockers 9000 NFTs will be announced after Early Sockers mint.
              </p>
          </div>
      </details>
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title3"> ?How many Early Sockers can I mint</span></summary>
          <div className="mt-5">
              <p>Every wallet will be permitted to mint maximum of 5 Sockers.
              </p>
          </div>
      </details>
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title4"> ?How much is a Dirty Sockers NFT</span></summary>
          <div className="mt-5">
              <p>Our OG collection was minted on $150 UDS, Early Sockers are set to $100 USD and the price of Dirty Sockers main collection is to be announced.
              </p>
          </div>
      </details>
      <details className="duration-300">
          <summary className="cursor-pointer text-3xl font-bold text-left"><span className="title5"> ?What is the benefit of holding a Dirty Sockers NFT</span></summary>
          <div className="mt-5">
              <p>A % of all sales will be allocated to the DIRTY CASH CLUB Fund and Several other perks.
                You own the IP rights to your Dirty Sockers as provided by this agreement.
                Exclusive access to the HD file.
                Automatic admission to our DIRTY CASH CLUB - This is our community wallet as a way of making rewarding our holders. It will serve as a solid benefit for the long-term holders in our Sockers community.
                A voting system where all Dirty Sockers holders are seen as stakeholders and will have a say in where funds of the DIRTY CASH CLUB will be allocated to.
                Guest list access to Dirty Sockers events.
                You’ll have the privilege of being a Badass Dirty Socker.
              </p>
          </div>
      </details>
      </div>
    </section>
    /* End Faqs */
    )
}
export default Faqs