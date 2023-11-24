import Link from "next/link";

export default function Contact() {
    return (
        <section className="min-h-[95vh]">
            <div className="container mx-auto flex items-center justify-center">
                <div className="flex flex-col items-center justify-center mt-32 text-white gap-y-10">
                    <h1 className="text-6xl">Teknolojik Yetenekler</h1>
                    <p className="text-3xl text-center leading-relaxed">Sağlık sektöründeki yenilikçi yapay zeka çözümlerimizle, hastaların sağlık deneyimini iyileştirmek ve sağlık profesyonellerinin karar verme süreçlerini güçlendirmek için çalışıyoruz. Teknolojik destek sağlayarak, doğru teşhislerin daha hızlı yapılması için hemen iletişime geçin.</p>
                    <div className="flex flex-col items-center justify-center bg-white text-sky-900 w-3/4 py-10 rounded-3xl gap-y-10 mt-10">
                        <h1 className="text-5xl">İletişime Geçmek İçin</h1>
                        <Link href='/contact' className="text-white bg-sky-900 px-7 py-5 rounded-3xl text-4xl">
                            Tıklayınız
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}