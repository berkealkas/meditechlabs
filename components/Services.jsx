import { BsClipboard2HeartFill } from "react-icons/bs";
import { FaStethoscope } from "react-icons/fa6";
import { FaMagnifyingGlassChart } from "react-icons/fa6";

export default function Services() {
    return (
        <section className="bg-white rounded-3xl min-h-[95vh]">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-sky-900 mt-20 gap-y-10">
                        <h1 className="text-6xl">Ürün ve Hizmetler</h1>
                        <p className="text-3xl text-center mx-52 leading-relaxed">İşbirliği yaptığımız sağlık kuruluşlarına, hastalara ve sağlık profesyonellerine yönelik çözümler geliştirerek sağlık hizmetlerinin kalitesini artırmayı hedefliyoruz.</p>
                    </div>
                    <div className="grid grid-cols-3 items-center justify-items-center mt-20 gap-x-10">
                        <div className="flex flex-col items-center justify-center gap-y-8 bg-sky-900 text-white rounded-xl w-full h-72 px-5">
                            <BsClipboard2HeartFill className="text-5xl"/>
                            <h1 className="text-3xl text-center">Tanı Sistemi</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-8 bg-sky-900 text-white rounded-xl w-full h-72 px-5">
                            <FaStethoscope className="text-5xl"/>
                            <h1 className="text-3xl text-center">Sağlık Danışmanı</h1>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-y-8 bg-sky-900 text-white rounded-xl w-full h-72 px-5">
                            <FaMagnifyingGlassChart className="text-5xl"/>
                            <h1 className="text-3xl text-center">Analiz ve Optimizasyon</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}