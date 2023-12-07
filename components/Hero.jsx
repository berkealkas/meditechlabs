'use client'

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="mt-20 xl:min-h-[70vh] min-h-[50vh]">
            <div className="flex items-center w-full">
                <div className="xl:pl-52 lg:pl-32 md:pl-20 mt-24 w-full text-center md:text-start mx-6 md:mx-0">
                    <h1 className="text-4xl font-bold">
                        Sağlık Hizmetlerinize Çağ Atlatın
                    </h1>
                    <p className="my-8 w-90 text-lg font-light leading-7 text-gray-500">
                        Sağlık hizmetlerinizi derin öğrenme ve doğal dil işleme teknolojilerinizi kullanarak daha verimli daha kaliteli ve daha erişilebilir hale getiriyoruz.
                    </p>

                    <button className="bg-blue-500 rounded-full px-8 py-4 text-lg text-white font-semibold">Demo Randevusu</button>
                </div>

                <motion.div
                    className="w-full md:flex flex-col right-0 items-end justify-center hidden"
                    animate={{
                        y: [-25, 80, -25],
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: 6,
                        repeat: Infinity,
                    }}
                >
                    <div className="w-10/12 flex items-center mt-10">
                        <img className="w-full" src="/robot.gif" alt="robot" />
                    </div>
                </motion.div>

            </div>
        </section>
    )
}