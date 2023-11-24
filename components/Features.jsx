import { IoStatsChart } from "react-icons/io5";
import { RiFocus3Line } from "react-icons/ri";
import { VscSourceControl } from "react-icons/vsc";
import { BiAnalyse } from "react-icons/bi";

export default function Features() {
    return (
        <section className="bg-white rounded-3xl min-h-[85vh]">
            <div className="container mx-auto flex justify-center items-center">
                <div className="grid grid-cols-2 items-center justify-items-center gap-x-5">
                    <div className="flex flex-col w-10/12 items-center justify-center mt-20">
                        <div className="flex items-center justify-center bg-sky-900 py-3 w-full rounded-t-3xl">
                            <div className="flex items-center justify-center bg-white h-16 w-16 rounded-full">
                                <IoStatsChart className="text-4xl text-sky-900" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-slate-200 text-center rounded-b-3xl py-7 px-5 text-sky-900">
                            <h3 className="text-2xl">Yenilikçi Teknolojiler</h3>
                            <p className="text-lg">Şirketimiz, her zaman en son teknolojileri kullanarak yenilikçi projeler geliştirir.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 items-center justify-center mt-20">
                        <div className="flex items-center justify-center bg-sky-900 py-3 w-full rounded-t-3xl">
                            <div className="flex items-center justify-center bg-white h-16 w-16 rounded-full">
                                <RiFocus3Line className="text-4xl text-sky-900" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-slate-200 text-center rounded-b-3xl py-7 px-5 text-sky-900">
                            <h3 className="text-2xl">Kullanıcı Odaklı Yaklaşım</h3>
                            <p className="text-lg">Müşteri ihtiyaçlarına odaklanarak, kullanıcı dostu ve kolay kullanımlı projeler geliştiririz.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 items-center justify-center mt-20">
                        <div className="flex items-center justify-center bg-sky-900 py-3 w-full rounded-t-3xl">
                            <div className="flex items-center justify-center bg-white h-16 w-16 rounded-full">
                                <VscSourceControl className="text-4xl text-sky-900" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-slate-200 text-center rounded-b-3xl py-7 px-5 text-sky-900">
                            <h3 className="text-2xl">Süreç Yönetimi ve Kalite Kontrol</h3>
                            <p className="text-lg">Projelerimiz, sıkı bir süreç yönetimi ve kalite kontrol sürecinden geçer, müşterilerimizin beklentilerini karşılamak için yüksek standartlarda tamamlanır.</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-10/12 items-center justify-center mt-20">
                        <div className="flex items-center justify-center bg-sky-900 py-3 w-full rounded-t-3xl">
                            <div className="flex items-center justify-center bg-white h-16 w-16 rounded-full">
                                <BiAnalyse className="text-4xl text-sky-900" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-y-5 bg-slate-200 text-center rounded-b-3xl py-7 px-5 text-sky-900">
                            <h3 className="text-2xl">Veri Analizi ve İyileştirme</h3>
                            <p className="text-lg">Projelerimiz tamamlandıktan sonra, veri analizi yaparak projelerimizi daha da geliştirmek için gerekli iyileştirmeleri yapıyoruz.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}