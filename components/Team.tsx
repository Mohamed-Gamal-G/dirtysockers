import Image from "next/image"
const Team = () => {
    return (
        /* Start Team */
        /* Team Section */
      <section className='team w-full p-5 relative'>
      <h2 className='text-6xl font-bold text-center uppercase mb-16 mt-16 '>The bad ass team</h2>
      <div className="items">
        <div className="item">
          <Image src={"/team-01.png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>evolsven</h3>
            <span className='text-sm font-normal leading-4 text-left'>Project Manager</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (1).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>dark</h3>
            <span className='text-sm font-normal leading-4 text-left'>Design Manager</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (2).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>tallsome</h3>
            <span className='text-sm font-normal leading-4 text-left'>Dev Manager</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (3).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>kawasaki</h3>
            <span className='text-sm font-normal leading-4 text-left'>Creative Director</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (4).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>nordic sock</h3>
            <span className='text-sm font-normal leading-4 text-left'>Marketing Designer</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (5).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>sunny sock</h3>
            <span className='text-sm font-normal leading-4 text-left'>Twitter Wizard</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (6).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>k-fit</h3>
            <span className='text-sm font-normal leading-4 text-left'>Lead Mod</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
        <div className="item">
          <Image src={"/team-01 (7).png"} width={246.49} height={264.47} alt='' />
          <div className="title relative">
            <h3 className='text-lg font-bold leading-5 text-left mt-4'>shaaker</h3>
            <span className='text-sm font-normal leading-4 text-left'>Collabs Manager</span>
            <Image className='absolute right-0 bottom-4' src={"/Group 36060.png"} width={24} height={24} alt='' />
          </div>
        </div>
      </div>
      <Image className='temSectionImg1' src={"/Vector.png"} width={296.38} height={274.02} alt='' />
      <Image className='temSectionImg2' src={"/Vector (1).png"} width={242.18} height={248.6} alt='' />
    </section>
    /* // Team Section */
    /* End Team */
    )
}
export default Team