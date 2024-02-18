'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function threeDScanning() {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between" style={{ backgroundColor: '#fff' }}>
            <div className="row mt-5 " style={{ paddingLeft: 200, paddingRight: 200 }}>
                <div className="col-md-6 offset-md-1">
                    <button onClick={handleGoBack} className="btn button-1 mb-5" style={{ width: 'fit-content' }}>
                        Back
                    </button>
                    <h1>
                        3D Scanning Services
                    </h1>
                    <p className="mt-5">
                        Utilizing the speed and precision of structured light technology, we create 3D models
                        of real-world objects. This method's accuracy has made it popular across various
                        applications, including quality control, archiving, prototyping, reverse engineering, and more.
                    </p>
                    <Link href="/contact" className="btn button-2 mt-5">
                        Request a Qutoe
                    </Link>
                </div>
                <div className="relative flex place-items-center " style={{ width: '40%', maxWidth: '100%' }}>
                    <Image
                        className="relative mt-4"
                        src="/3d-scan/skull-21-1.jpg"
                        alt="Triceratops Skull 3D Scan Image"
                        style={{ borderRadius: 16 }}
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>

            <div className="row justify-content-center mt-5 p-20" style={{ backgroundColor: "#fae2cf" }}>
                <div className="col-md-4 offset-md-1">
                    <div className=" ">
                        <h1 className="text-left">How We Work?</h1>
                        <p className="text-left mb-5">
                            The essential part of our work is alongside museums, artists, designers, scientists,
                            and 3D modelers to deliver the scanned 3D data suitable to their requirements. Using
                            structured light hand-held 3D scanner, we deliver on-site 3D scanning services as well
                        </p>
                    </div>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-items-center">
                    <div className="d-inline-block">
                        <Image
                            style={{ borderRadius: 16 }}
                            className=""
                            src="/3d-scan/3d-scanning.jpg"
                            alt="3D Scanning "
                            width={800}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="row justify-content-center p-20" style={{ backgroundColor: "#fff" }}>
                <div className="col-md-4 d-flex justify-content-center align-items-center offset-md-1">
                    <div className="d-inline-block me-5">
                        <Image
                            style={{ borderRadius: 16 }}
                            className=""
                            src="/3d-scan/trike-dentary.jpg"
                            alt="Ticeratops Dentary 3D Scan Image"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
                <div className="col-md-4 mt-5">
                    <div className="ms-5">
                        <h1 className="text-left">
                            3D Scanning Applications
                        </h1>
                        <p className="text-left">
                            The structured light 3d scanning is among the most popular 3d scanning methods that are used
                            widely in various fields. Thanks to the accuracy, speed and the level of details provided by
                            this technology, professionals in many fields such as Art, Fashion Design,  Medical Science,
                            Palaeontology, Archeology,  Heritage Preservation, and CGI Industry apply this method for
                            digitizing their targets
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center p-20" style={{ backgroundColor: "#fff" }}>
                <div className="col-md-4 mt-5 offset-md-1">
                    <div className="">
                        <h1 className="text-left">
                            3D Scanning & Reverse Engineering
                        </h1>
                        <p className="text-left">
                            With the Reverse Engineering services, you will receive a CAD model compatible with Solidworks, Inventor,
                            and Rhinoceros, from the 3d scanned data of your object
                        </p>
                    </div>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center offset-md-1">
                    <div className="d-inline-block me-5">
                        <Image
                            style={{ borderRadius: 16 }}
                            className=""
                            src="/3d-scan/re-2.png"
                            alt="Reverse Engineering Image"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}