'use client'
import { FormEvent, useState } from "react";

export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();

    };

    return (
        <div >
            <div className=" px-5 py-5">
                <form onSubmit={handleSubmitForm} className="py-2" style={{ width: 'fit-content' }}>
                    <div className="row">
                        <div className="col">
                            <label className="form-label input-text-transition text-left align-item-right me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                First Name
                            </label>
                            <input
                                style={{ justifyContent: 'flex-end', color: "#00224C", borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                                type="text"
                                className="mt-3"
                                placeholder="John"
                                id="first-name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label input-text-transition text-left align-item-right me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                Last Name
                            </label>
                            <input
                                style={{ justifyContent: 'flex-end', color: "#00224C", borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                                type="text"
                                className="mt-3"
                                placeholder="Doe"
                                id="last-name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                Email
                            </label>
                            <input
                                style={{ justifyContent: 'flex-end', color: "#00224C", borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                                type="email"
                                className="mt-3"
                                placeholder="johndoe@email.com"
                                id="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                Phone
                            </label>
                            <input
                                style={{ justifyContent: 'flex-end', color: "#00224C", borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                                type="phone"
                                className="mt-3"
                                placeholder="e.g. +3161234567"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                Upload
                            </label>
                            <button className="btn text-center btn-secondary" style={{ justifyContent: 'flex-end', borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, }}>
                                Add a File
                            </button>
                        </div>
                        <div className="col">
                            <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                                Service
                            </label>
                            <select
                                style={{ justifyContent: 'flex-end', color: "#00224C", borderRadius: 8, height: 40, fontSize: 15, width: 200, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                                className="mt-3"
                                id="service"
                                onChange={(e) => setService(e.target.value)}
                            >
                                <option value="">Select Service Type</option>
                                <option value="3d-scanning">3D Scanning</option>
                                <option value="3d-printing">3D Printing</option>
                                <option value="3d-modelling">3D Modelling</option>
                                <option value="consultation">Design Consultation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120, verticalAlign: 'top' }}>
                                Message
                            </label>
                            <textarea
                                style={{
                                    color: "#00224C",
                                    borderRadius: 8,
                                    minHeight: 140,
                                    fontSize: 15,
                                    width: 565,
                                    padding: '10px',
                                    backgroundColor: "#F1F1F1",
                                    resize: 'vertical',
                                    alignItems: 'flex-start'
                                }}
                                className="mt-3"
                                placeholder="Message"
                                id="message"
                                onChange={(e) => setMsg(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <button value="Submit" className="btn button mt-5 px-5" style={{ width: 'fit-content' }}>Submit</button>
                    </div>
                </form>


            </div>
        </div>
    );
}