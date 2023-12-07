import Link from "next/link"

export default function Solutions() {
    return (
        <section className="min-h-[80vh] mx-5 mt-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center gap-y-7">
                    <h1 className="text-4xl font-bold">Çözümlerimiz</h1>
                    <div className="border-b-2 border-black w-20"/>
                    <p className="text-gray-500 text-center lg:mx-60 leading-loose w-full md:w-auto">
                        Sağlık sektöründeki yenilikçi yapay zeka çözümlerimizle, hastaların sağlık deneyimini iyileştirmek ve sağlık profesyonellerinin karar verme süreçlerini güçlendirmek için çalışıyoruz.
                    </p>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
                        <div className="flex flex-col items-start justify-center shadow-lg rounded-xl gap-y-5 p-5 hover:scale-105 hover:duration-300 duration-300">
                            <img className="w-40" src="/solutions1.png" alt="solutions"/>
                            <h1 className="text-xl font-bold">Anamnez Kaydı Tutma</h1>
                            <p className="text-gray-500 leading-loose">
                                Hasta doktor diyaloglarından önemli bilgileri tespit ederek Elektronik Kayıt Sistemlerine hasta sağlık bilgilerinin girişini sağlıyoruz.
                            </p>
                            <Link href='/autonote' className="bg-blue-500 text-white text-center font-semibold px-12 py-4 rounded-full">
                                Keşfet
                            </Link>
                        </div>
                        <div className="flex flex-col items-start justify-center shadow-lg rounded-xl gap-y-5 p-5 hover:scale-105 hover:duration-300 duration-300">
                            <img className="w-40" src="/xray-report.svg" alt="solutions"/>
                            <h1 className="text-xl font-bold">Radyoloji Raporu Oluşturma</h1>
                            <p className="text-gray-500 leading-loose">
                                Radyologların görüntüleri yorumlamak için aldığı ses kayıtlarını kusursuz bir şekilde radyoloji raporuna dönüştürüyor ve elektronik kayıt sistemine girişini sağlıyoruz.
                            </p>
                            <Link href='/voice2report' className="bg-blue-500 text-white text-center font-semibold px-12 py-4 rounded-full">
                                Keşfet
                            </Link>
                        </div>
                        <div className="flex flex-col items-start justify-center shadow-lg rounded-xl gap-y-5 p-5 hover:scale-105 hover:duration-300 duration-300">
                            <img className="w-40" src="/chat-bot.svg" alt="solutions"/>
                            <h1 className="text-xl font-bold">Sohbet Botları</h1>
                            <p className="text-gray-500 leading-loose">
                                Sağlık alanına özel eğittimiz dil modelleri ile hastanızın karşısında bir insanla konuşuyormuş hissi vererek ihtiyaçlarını 7/24 karşılamasını sağlıyoruz.
                            </p>
                            <Link href='/' className="bg-blue-500 text-white text-center font-semibold px-12 py-4 rounded-full">
                                Yakında
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}