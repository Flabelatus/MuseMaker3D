import Image from "next/image";

export default function Clients() {
    return (
        <main>
            < div className=" justify-content-center row mb-5 py-5 container-fluid" style={{ backgroundColor: '#FFF', width: '90vw', boxShadow: '1px 1px 10px #ccc', borderRadius: 16 }}>
                <div className="row justify-content-center">
                    <h3 className="text-center mb-5 mt-3 py-2 px-3" style={{ color: '#000000CC', fontWeight: 700, width: 'fit-content', height: 'fit-content', borderRadius: 16 }}>Trusted by companies like</h3>
                </div>

                <div className="col-md-2 mb-3 text-center">
                    <div className="container-fluid px-3 py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/tudelft.jpg"
                                alt="TU Delft logo"
                                width={200}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-2 mb-3 text-center">
                    <div className="container-fluid px-3 py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/avl.jpg"
                                alt="Atelier van Lieshout logo"
                                width={400}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center">
                    <div className="container-fluid px-3 py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/advario.png"
                                alt="Advario logo"
                                width={200}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center">
                    <div className="container-fluid px-3 py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/depot.png"
                                alt="Depot logo"
                                width={180}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center">
                    <div className="container-fluid px-3 py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/eneco.png"
                                alt="Eneco logo"
                                width={160}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3 text-center p-10">
                    <div className="container-fluid py-5">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/holland.png"
                                alt="Holland Casino logo"
                                width={180}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center p-20">
                    <div className="container-fluid ">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/mx3d.png"
                                alt="MX3D logo"
                                width={160}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center p-10">
                    <div className="container-fluid ">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/naturalis.jpg"
                                alt="Naturalis logo"
                                width={140}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center p-10">
                    <div className="container-fluid ">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/hva.png"
                                alt="Hogeschool van Amsterdam logo"
                                width={180}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-2 mb-3 text-center p-20">
                    <div className="container-fluid px-3 ">
                        <div style={{ height: 60 }}>
                            <Image
                                src="/landing/hr.png"
                                alt="Hogeschool Rotterdam logo"
                                width={160}
                                height={50}
                                style={{ display: 'block', margin: 'auto' }}
                            />
                        </div>
                    </div>
                </div>
            </div >
        </main>
    );
}