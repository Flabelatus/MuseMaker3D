import Image from "next/image";
import ContactForm from "../contact-form/page";
import RootLayout from "../layout";
import Call from "./../../public/contact/call.png";

export default function Contact() {
    return (
        <RootLayout showFooter={false}>
            <div className="flex min-h-screen flex-col items-center justify-between">
                <div className="row mt- p-10 justify-content-center">
                    <div className="col-md-12 offset-md-4">
                        <h1 className="text-center mb-5">
                            Get in Touch!
                        </h1>
                        <div className="row text-center justify-content-center">
                            <h2 className="text-center" style={{ maxWidth: 600 }}>
                                Schedule Your 3D Scanning or Consultation Appointment Now
                            </h2>
                        </div>

                        <div className="row text-center justify-content-center mb-4">
                            <a href="tel:+31617691117" className="btn button-2 mb-4 px-4 mt-4" style={{ display: 'flex', alignItems: 'center', width: 'fit-content' }}>
                                Give us a Call
                                <Image src={Call} style={{ width: 35, marginLeft: 20 }} alt="call" />
                            </a>
                        </div>

                        <div className="row justify-content-center" style={{ width: 'fit-content' }}>
                            <ContactForm />
                        </div>

                    </div>
                </div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

                </div>
            </div>
        </RootLayout>

    )
}