'use client'
import Image from "next/image";
import ContactForm from "../contact-form/page";
import RootLayout from "../layout";
import Call from "./../../public/contact/call.png";
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between">
            <button onClick={handleGoBack} style={{ width: 'fit-content' }} className="btn button-1 text-start">Back</button>
            <div className="row p-10 justify-content-center">

                <div className="col" style={{ width: "fit-content" }}>
                    <h1 className="text-center mb-5">
                        Request a Quote
                    </h1>
                    <div className="row justify-content-center">
                        <p className="text-center mb-5" style={{ maxWidth: 600 }}>
                            Submit your request and we will return to you within 24 hours
                        </p>
                    </div>

                    <div className="row justify-content-center mb-4" style={{ boxShadow: "1px 1px 10px #eee", borderRadius: 16, width: 'fit-content' }}>
                        <ContactForm />
                    </div>
                    <div className="row text-center justify-content-center mt-5">
                        <h1 className="text-center mb-5">
                            Quick Call
                        </h1>
                        <p className="text-center" style={{ maxWidth: 600 }}>
                            Schedule Your Session Now via Phone Call
                        </p>
                    </div>

                    <div className="row text-center justify-content-center mb-4">
                        <a href="tel:+31617691117" className="btn button-2 mb-4 px-4 mt-4" style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                            Give us a Call
                            <Image src={Call} style={{ width: 35, marginLeft: 20 }} alt="call" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            </div>
        </div>

    )
}