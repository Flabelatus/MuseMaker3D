'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function threeDPrinting() {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="row mt-5 p-20">
                <div className="col-md-6 offset-md-1">
                    <button onClick={handleGoBack} className="btn button-1 mb-5" style={{ width: 'fit-content' }}>
                        Back
                    </button>
                    <h1>
                        Large Scale 3D Pinrintg
                    </h1>
                    <p className="mt-5">
                        Specializing in large-scale 3D printing services, we utilize industrial FDM
                        3D printers capable of printing objects up to 1.7 meters tall. Our services
                        are ideal for creating prototypes, tools, molds, and statues with the quality you require.
                    </p>
                    <Link href="#!" className="btn button mt-5">
                        Learn More
                    </Link>
                </div>
                <div className="relative flex place-items-center " style={{ width: '40%', maxWidth: '100%' }}>
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
                        src="/landing/hero.jpg"
                        alt="Hero Image"
                        width={500}
                        height={37}
                        priority
                    />
                </div>
            </div>



            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            </div>
        </main>
    )
}