import Image from "next/image";
import Link from "next/link";

export default function threeDModelling() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="row mt-5 p-20">
                <div className="col-md-6 offset-md-1">
                    <h1>
                        3D Modelling and Modification
                    </h1>
                    <p className="mt-5">
                        Benefiting from extensive experience across various projects and a profound passion
                        for the 3D realm, our team has cultivated expertise in multiple 3D modeling techniques.
                        These include 3D sculpting, polygon modeling, NURBS surface modeling, and parametric modeling.
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