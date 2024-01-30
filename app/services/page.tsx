import Image from "next/image";
import Link from "next/link";

export default function Services() {
    return (
        <main>
            < div className=" justify-content-center row mb-5 py-5 container-fluid" style={{ backgroundColor: '#2200FF', width: '100vw' }
            }>
                <div className="row justify-content-center">
                    <h1 className="text-center mb-5 mt-3 py-2 px-3" style={{ color: '#000000CC', backgroundColor: 'white', width: 'fit-content', height: 'fit-content', borderRadius: 16 }}>Our Services</h1>
                </div>

                <div className="col-md-3 mb-3 text-center">
                    <div className="container-fluid px-3 py-5" style={{ backgroundColor: 'white', borderRadius: 16, height: 'fit-content', minHeight: 450 }}>
                        <div style={{ height: 60 }}>
                            <Link href="/design">
                                <Image
                                    className="services-img"
                                    src="/landing/design.png"
                                    alt="Design Service Logo"
                                    width={160}
                                    height={50}
                                    style={{ display: 'block', margin: 'auto' }}
                                />
                            </Link>
                        </div>
                        <Link href="/design" className="btn mt-5" style={{ fontSize: 18, fontWeight: 800 }}>Product Design Development</Link>
                        <p className="mt-4" style={{ fontWeight: 400, fontSize: 15 }}>It doesn’t matter if you’re in the concept phase or ready to start production, we’re specialized in various 3D modeling
                            techniques to provide you highly realistic and accurate representations of your product or idea.</p>
                    </div>
                </div>

                <div className="col-md-3 mb-3 text-center">
                    <div className="container-fluid px-3 py-5" style={{ backgroundColor: 'white', borderRadius: 16, height: 'fit-content', minHeight: 450 }}>
                        <div style={{ height: 60 }}>
                            <Link href="/3d-scanning">
                                <Image
                                    className="services-img"
                                    src="/landing/scan.png"
                                    alt="3D Scan Service Logo"
                                    width={80}
                                    height={50}
                                    style={{ display: 'block', margin: 'auto' }}
                                />
                            </Link>
                        </div>
                        <Link href="/design" className="btn mt-5" style={{ fontSize: 18, fontWeight: 800 }}>3D Scanning Service</Link>
                        <p className="mt-4" style={{ fontWeight: 400, fontSize: 15 }}>We capture precise dimensions and intricate details using structured light technology, resulting in accurate models for applications
                            such as quality control, prototyping, reverse engineering and many more.</p>
                    </div>
                </div>

                <div className="col-md-3 mb-3 text-center">
                    <div className="container-fluid px-3 py-5" style={{ backgroundColor: 'white', borderRadius: 16, height: 'fit-content', minHeight: 450 }}>
                        <div style={{ height: 60 }}>
                            <Link href="/3d-printing">
                                <Image
                                    className="services-img"
                                    src="/landing/print.png"
                                    alt="3D Print Logo"
                                    width={80}
                                    height={50}
                                    style={{ display: 'block', margin: 'auto' }}
                                />
                            </Link>
                        </div>
                        <Link href="/design" className="btn mt-5" style={{ fontSize: 18, fontWeight: 800 }}>Large Scale 3D Printing</Link>
                        <p className="mt-4" style={{ fontWeight: 400, fontSize: 15 }}>With our large scale 3D printers we deliver high-quality parts and models such as prototypes, manufacturing moulds or statues,
                            from small parts to large objects up to 1.7 m tall and for all industries.</p>
                    </div>
                </div>

                <div className="col-md-3 mb-3 text-center">
                    <div className="container-fluid px-3 py-5" style={{ backgroundColor: 'white', borderRadius: 16, height: 'fit-content', minHeight: 450 }}>
                        <div style={{ height: 60 }}>
                            <Link href="/3d-modelling">
                                <Image
                                    className="services-img"
                                    src="/landing/model.png"
                                    alt="3D Modelling Service Logo"
                                    width={100}
                                    height={50}
                                    style={{ display: 'block', margin: 'auto' }}
                                />
                            </Link>
                        </div>
                        <Link href="/design" className="btn mt-5" style={{ fontSize: 18, fontWeight: 800 }}>3D Modelling & Modification</Link>
                        <p className="mt-4" style={{ fontWeight: 400, fontSize: 15 }}>It doesn’t matter if you’re in the concept phase or ready to start production, we’re specialized in various 3D modeling
                            techniques to provide you highly realistic and accurate representations of your product or idea.</p>
                    </div>
                </div>
            </div >
        </main>
    );
}