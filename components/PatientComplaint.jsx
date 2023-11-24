'use client'

import { useState } from "react"
import { TypeAnimation } from "react-type-animation";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function PatientComplaint() {
    const [typingStatus, setTypingStatus] = useState('');
    const [microphone, setMicrophone] = useState(false);

    const handleClick = () => {
        setMicrophone(!microphone);
    }

    return (
        <section className="bg-white rounded-3xl min-h-[80vh]">
            <div className="container mx-auto flex flex-col items-center justify-center text-sky-900">
                <h1 className="text-7xl mt-14">Örnek Hasta Şikayeti</h1>
                <div className="grid grid-cols-2 items-center justify-items-center mt-14">
                    <div className="text-2xl text-start leading-loose">
                        <TypeAnimation
                            sequence={[
                                1000,
                                () => {
                                    setTypingStatus('Typing...');
                                },
                                '38 yaşındayım ve son birkaç aydır göğsümde sıkışma ve nefes darlığı yaşıyorum. Bu semptomlar özellikle merdiven çıktığımda veya hızlı yürüdüğümde daha da kötüleşiyor. Ailemde kalp hastalığı öyküsü var.',
                                () => {
                                    setTypingStatus('Done Typing');
                                },
                                3000,
                                () => {
                                    setTypingStatus('Deleting...');
                                },
                                '',
                                () => {
                                    setTypingStatus('Done Deleting');
                                },
                            ]}
                            speed={80}
                            deletionSpeed={90}
                            repeat={Infinity}
                        />
                    </div>
                    {
                        typingStatus === 'Done Typing' ?
                            <div className="bg-sky-900 text-white flex flex-col gap-y-5 items-center justify-center w-10/12 px-20 py-10 ml-12 rounded-3xl">
                                <h2 className="text-2xl">Gitmeniz Gereken Bölüm</h2>
                                <h1 className="text-4xl">Kardiyoloji</h1>
                            </div>
                            : ''
                    }
                </div>
                <div className="shadow-lg w-full mt-20 py-5">
                    <div className="flex items-center justify-between gap-x-7 px-7">
                        <textarea className="ml-5 w-11/12 border pl-3 rounded-lg py-3 outline-none" placeholder="Sorgulamak istediğiniz soruyu yazınız."></textarea>
                        <button className="text-3xl" title="Sesli sorgu" onClick={handleClick}>
                            {microphone ? <FaMicrophoneSlash /> : <FaMicrophone />}
                        </button>
                        <button className="text-3xl" title="Gönder">
                            <FaCircleArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}