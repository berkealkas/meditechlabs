export default function Services() {
    return (
        <section className="min-h-screen mx-10">
            <div className="container mx-auto my-28">
                <div className="flex flex-col items-center justify-center gap-y-7">
                    <h1 className="text-4xl font-bold text-center">
                        Yapay Zeka ile Sağlık Hizmetlerinizi Birlikte Mükemmelleştirelim
                    </h1>
                    <div className="border-b-2 border-black w-40"/>
                </div>
                <div className="mt-20 text-center md:text-start space-y-20">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img className="w-full md:w-1/2" src="/services1.svg" alt="services"/>
                        <div className="flex flex-col gap-y-7 items-center justify-center md:items-start">
                            <h1 className="text-4xl font-bold">
                                Sağlık Alanına Özel Eğitilmiş Dil Modelleri
                            </h1>
                            <div className="border-b-2 border-black w-20"/>
                            <p className="text-gray-500 leading-loose">
                                MediTechLabs olarak sağlık alanında yüksek isabetli sonuçlar alabilmek adına, sağlık kaynaklarından oluşturduğumuz veri seti ile modellerimizi eğitiyoruz. Böylece çözümlerimizi faaliyetlerinize entegre ederken, tıbbi doğruluktan ve hizmet kalitesinden taviz vermezsiniz.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse items-center justify-center gap-10">
                        <div className="flex flex-col gap-y-7 items-center justify-center md:items-start">
                            <h1 className="text-4xl font-bold">
                                Hafif ve Ölçeklenebilir Sistemler
                            </h1>
                            <div className="border-b-2 border-black w-20"/>
                            <p className="text-gray-500 leading-loose">
                                Ürünlerimiz, kurumunuzun teknik alt yapısına yük olmayacak ve iş süreçlerinizi aksatmayacak şekilde optimize edilmiştir. Bu sayede, düşük işlem gücü ile yüsek performansalara ulaşabilirsiniz. Ürünlerimizin modüler yapısı sayesinde, ihtiyaçlarınız artıkça sistem taleplerinizi karşılayacak şekilde ölçeklenecektir.
                            </p>
                        </div>
                        <img className="w-full md:w-1/2" src="/services2.svg" alt="services"/>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        <img className="w-full md:w-1/2" src="/services3.svg" alt="services"/>
                        <div className="flex flex-col gap-y-7 items-center justify-center md:items-start">
                            <h1 className="text-4xl font-bold">
                                Yapay Zeka Alanında Partneriniz
                            </h1>
                            <div className="border-b-2 border-black w-20"/>
                            <p className="text-gray-500 leading-loose">
                                MediTechLabs olarak kurumunuzun iş süreçlerini yeni çağa uygun hale getirmenizde yanınızdayız. Çözümlerimiz ile süreçlerinizi daha verimli, daha kaliteli ve daha erişilebilir hale getirmek için hazırız.
                            </p>
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}