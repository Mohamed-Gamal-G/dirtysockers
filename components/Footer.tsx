import Image from "next/image"
const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-continer flex items-center justify-center">
                <div className="left-side flex">
                    <p className="text-base font-medium leading-8 text-left">Pilot project of</p>
                    <div className="content flex">
                    <Image className="w3" src={"/w3.png"} width={55.41} height={15.98} alt="" />
                    <p className="text-base font-medium leading-8 text-left">CONSULTING</p>
                    </div>
                    {/* <Image className="w3" src={"/w3.png"} width={55.41} height={15.98} alt="" />
                    <p className="text-base font-medium leading-8 text-left">CONSULTING</p> */}
                </div>
                <div className="center flex flex-col justify-center items-center m-32">
                    <div className="icons flex">
                        <Image className="mr-3 cursor-pointer" src={"/Group 36068.png"} width={32} height={32} alt="" />
                        <Image className="mr-3 cursor-pointer" src={"/Instagram_white.png"} width={32} height={32} alt="" />
                        <Image className="mr-3 cursor-pointer" src={"/Telegram.png"} width={32} height={32} alt="" />
                        <Image className="mr-3 cursor-pointer" src={"/Medium.png"} width={32} height={32} alt="" />
                    </div>
                    <div className="Copyright mt-6 mb-2">
                        Copyright © 2023
                        dirtysockers.xyz
                        All Rights Reserved
                    </div>
                    <div className="Policy">
                        Legal Policy - Terms & Conditions
                    </div>
                </div>
                <div className="discord relative">
                    <Image className="absolute top-10 left-10" src={"/Logo.png"} width={79.43} height={61.96} alt="" />
                    <Image src={"/Group 5.png"} width={162.04} height={160} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Footer