import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-white min-h-[50vh]">
            <div className="container mx-auto flex flex-col items-center justify-center w-full mt-20">
                <div className="flex items-center justify-between w-11/12">
                    <div className="flex items-center justify-center ">
                        <div className="">
                            <Link href='/'>
                                <img src="logo.png" className="w-11/12"/>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-start justify-center text-sky-900 text-lg gap-x-20 mr-32">
                        <div className="flex flex-col items-start justify-center gap-y-3">
                            <Link href='/'>Anasayfa</Link>
                            <Link href='/about'>Hakkımızda</Link>
                            <Link href='/health-guide'>Sağlık Rehberi</Link>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-y-3">
                            <Link href='/'>KVKK</Link>
                            <Link href='/contact'>İletişim</Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-5 py-7 px-14 rounded-3xl bg-sky-900 mt-20">
                    <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                        <Link href='https://twitter.com/meditechlabs_ai'>
                            <FaXTwitter className="text-black text-4xl"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                        <Link href='https://www.linkedin.com/company/meditechlabs/'>
                            <FaLinkedinIn className="text-[#0A66C2] text-4xl"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                        <Link href='https://github.com/MediTechLabs'>
                            <FaGithub className="text-[#171515] text-4xl"/>
                        </Link>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="text-center text-sky-900">
                        Copyright © 2023 
                        <Link href='/' className="ml-1">
                            MediTechLabs.
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}