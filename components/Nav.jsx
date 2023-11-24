import Link from "next/link";

export default function Nav() {
    return (
        <nav className="fixed top-0 z-50 w-full bg-[#0BC1C8] py-5 rounded-b-3xl">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <Link href='/'>
                        <img className="w-1/2 inline-block" src="/logo.png" alt="Logo" />
                    </Link>
                </div>
                <div className="text-sky-900">
                    <ul className="flex items-center gap-x-5">
                        <li>
                            <Link href='/about'>
                                Hakkımızda
                            </Link>
                        </li>
                        <li>
                            <Link href='/health-guide'>
                                Sağlık Rehberi
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                İletişim
                            </Link>
                        </li>
                        <li>
                            <button>EN</button>
                        </li>
                        <li>
                            <Link href='/login' className="bg-sky-900 px-5 py-3 rounded-lg text-white">
                                Giriş Yap
                            </Link>
                        </li>
                        <li>
                            <Link href='/register' className="bg-sky-900 px-5 py-3 rounded-lg text-white">
                                Kayıt Ol
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}