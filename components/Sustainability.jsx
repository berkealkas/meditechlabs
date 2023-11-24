import { IoDocumentText } from "react-icons/io5";
import { IoFingerPrintOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

export default function Sustainability() {
  return (
    <section className="min-h-[70vh]">
        <div className="container mx-auto flex flex-col items-center justify-center mt-32">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-6xl">Sürdürülebilirlik</h1>
            </div>
            <div className="grid grid-cols-5 items-center mt-20 gap-x-10">
                <div className="flex col-span-3 items-center gap-x-10 px-10">
                    <div className="flex items-center justify-center bg-white rounded-full h-20 w-64">
                        <IoDocumentText className="text-5xl text-sky-900" />
                    </div>
                    <div>
                        <p className="text-white text-xl leading-loose">Proje çalışmalarında makineler, yani bilgisayarlar ve yazılımlar, önemli bir rol oynamaktadır. Ayrıca projelerin başarıyla tamamlanabilmesi için doğru ve eksiksiz bir şekilde belgelenmeleri gerekmektedir.</p>
                    </div>
                </div>
                <div className="flex flex-col col-span-2 items-start justify-center gap-y-5 w-full">
                    <div className="flex items-center justify-center gap-x-5">
                        <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                            <IoFingerPrintOutline className="text-3xl text-sky-900" />
                        </div>
                        <h1 className="text-white text-2xl">Araştırma ve Geliştirme</h1>
                    </div>
                    <div className="flex items-center justify-center gap-x-5">
                        <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                            <FaGraduationCap className="text-3xl text-sky-900" />
                        </div>
                        <h1 className="text-white text-2xl">Akademik Çalışmalara Destek</h1>
                    </div>
                    <div className="flex items-center justify-center gap-x-5">
                        <div className="flex items-center justify-center bg-white rounded-full h-16 w-16">
                            <BsFillSendFill className="text-3xl text-sky-900" />
                        </div>
                        <h1 className="text-white text-2xl">Eğitime Destek</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}