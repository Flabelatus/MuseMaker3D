import Image from "next/image";
import Link from "next/link";
import Reliable from "./../../public/landing/reliable.png";
import Tailored from "./../../public/landing/tailored.png";
import Personal from "./../../public/landing/personal.png";
import TimeEfficient from "./../../public/landing/time.png"

export default function WhyChooseUs() {
    return (
        < div className=" justify-content-center row py-5 container-fluid px-5 mb-4" style={{ width: '100vw', height: 'fit-content', backgroundColor: "#eee" }}>
            <div className="row justify-content-center">
                <h1 className="text-center mb-5 mt-3 py-2 px-3" style={{ color: '#000000CC', width: 'fit-content', height: 'fit-content', borderRadius: 16 }}>Why Choose Mega Maker 3D?</h1>
            </div>

            <div className="col-md-3 mb-3 text-start">
                <div className="container-fluid px-3" style={{ borderRadius: 16, height: 'fit-content' }}>
                    <Image
                        src={Reliable}
                        alt="Reliable quality"
                        style={{ width: 80 }}
                        className="text-center"
                    />
                    <h3 className="mt-5" style={{ fontSize: 25, fontWeight: 800 }}>Reliable quality</h3>
                    <p className="mt-4" style={{ fontWeight: 400, fontSize: 18 }}>Our engineers and designers use their extensive knowledge and advanced
                        tools to deliver high-quality results</p>
                </div>
            </div>

            <div className="col-md-3 mb-3 text-start">
                <div className="container-fluid px-3" style={{ borderRadius: 16, height: 'fit-content' }}>
                    <Image
                        src={Tailored}
                        alt="Tailored solution"
                        style={{ width: 80 }}
                        className="text-center"
                    />
                    <h3 className="mt-5" style={{ fontSize: 25, fontWeight: 800 }}>Tailored solution</h3>
                    <p className="mt-4" style={{ fontWeight: 400, fontSize: 18 }}>We understand that every project is unique. That’s why we tailor our services
                        to your exact requirements and needs</p>
                </div>
            </div>

            <div className="col-md-3 mb-3 text-start">
                <div className="container-fluid px-3" style={{ borderRadius: 16, height: 'fit-content' }}>
                    <Image
                        src={Personal}
                        alt="Personal approach"
                        style={{ width: 80 }}
                        className="text-center"
                    />
                    <h3 className="mt-5" style={{ fontSize: 25, fontWeight: 800 }}>Personal approach</h3>
                    <p className="mt-4" style={{ fontWeight: 400, fontSize: 18 }}>Our team is personally involved from start to finish. We’re happy to answer every
                        single question and discuss all your ideas</p>
                </div>
            </div>

            <div className="col-md-3 mb-3 text-start">
                <div className="container-fluid px-3" style={{ borderRadius: 16, height: 'fit-content' }}>
                    <Image
                        src={TimeEfficient}
                        alt="Time and cost efficient"
                        style={{ width: 80 }}
                        className="text-center"
                    />
                    <h3 className="mt-5" style={{ fontSize: 25, fontWeight: 800 }}>Time and cost-efficient</h3>
                    <p className="mt-4" style={{ fontWeight: 400, fontSize: 18 }}>Our deliverables and fast turnaround times help you speed up the process
                        so you can enter the market faster at lower costs</p>
                </div>
            </div>
        </div >
    );
}