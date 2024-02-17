'use client'
import Image from "next/image";

import FacebookIcon from "./../../public/socials/fb.png"
import InstagramIcon from "./../../public/socials/ig.png"
import YouTubeIcon from "./../../public/socials/yt.png"
import { FormEvent, useState } from "react";

export default function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();
        console.log({
            name: name,
            email: email,
            subject: subject,
            message: msg
        });
    };

    return (
        <div>
            <div className="row justify-content-center px-5" style={{ backgroundColor: '#fff', height: 'fit-content', width: '100vw' }}>
                <hr />
                <div className="col-md-4 mt-5">
                    <h5 className="text-center mb-4" style={{ color: "#333" }}>Contact info</h5>
                    <p className="text-center" style={{ color: "#333", fontSize: 16, fontWeight: 400 }}>Email: info@javidjooshesh.com</p>
                    <p className="text-center" style={{ color: "#333", fontSize: 16, fontWeight: 400 }}>Post Address: Schermlaan 35, 3021KH<br />
                        Rotterdam, The Netherlands</p>
                    <p className="text-center" style={{ color: "#333", fontSize: 20, fontWeight: 400 }}>Mega Maker 3D</p>

                </div>
                <div className="col-md-4 mt-5">
                    <h5 className="text-center mb-4" style={{ color: "#333" }}>Support</h5>
                    <p className="text-center" style={{ color: "#333", fontSize: 16, fontWeight: 400 }}>Privacy Policy</p>
                    <p className="text-center" style={{ color: "#333", fontSize: 16, fontWeight: 400 }}>Terms & Conditions</p>

                </div>
                <div className="col-md-4 mt-5">
                    <h5 className="text-center" style={{ color: "#333" }}>Social Media</h5>
                    <div className="row justify-content-center mt-4">
                        <Image
                            src={FacebookIcon}
                            alt="Facebook"
                            style={{ width: 75, height: 50, scale: 0.6 }}
                            className="text-center"
                        />
                        <Image
                            src={InstagramIcon}
                            alt="Facebook"
                            style={{ width: 75, height: 50, scale: 0.6 }}
                            className="text-center"
                        />
                        <Image
                            src={YouTubeIcon}
                            alt="Facebook"
                            style={{ width: 75, height: 50, scale: 0.6 }}
                            className="text-center"
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center px-3" style={{ height: 'fit-content' }}>
                <h1 className="text-center mb-4">Get in touch</h1>
                <form onSubmit={handleSubmitForm} className="text-right px-5 py-5" style={{ width: 'fit-content' }}>
                    <label className="form-label input-text-transition me-4" style={{ fontSize: 18, color: "#00000090", fontWeight: 400 }}>
                        Name
                    </label>
                    <input
                        style={{ color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="text"
                        className="mb-3"
                        placeholder="John Doe"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label className="form-label input-text-transition me-4" style={{ fontSize: 18, color: "#00000090", fontWeight: 400 }}>
                        Email
                    </label>
                    <input
                        style={{ color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="email"
                        className="mb-3"
                        placeholder="johndoe@email.com"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label className="form-label input-text-transition me-4" style={{ fontSize: 18, color: "#00000090", fontWeight: 400 }}>
                        Subject
                    </label>
                    <input
                        style={{ color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="text"
                        className="mb-3"
                        placeholder="Saying Hi..."
                        id="subject"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <br />
                    <label className="form-label text-left input-text-transition me-4" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, verticalAlign: 'top' }}>
                        Message
                    </label>
                    <textarea
                        style={{
                            color: "#00224C",
                            borderRadius: 8,
                            minHeight: 140, // Set minimum height for the textarea
                            fontSize: 15,
                            width: 350,
                            padding: '10px', // Combined padding property
                            backgroundColor: "#F1F1F1",
                            resize: 'vertical', // Allow vertical resizing
                            alignItems: 'flex-start' // Ensure text starts from the top
                        }}
                        placeholder="Message"
                        id="message"
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <br />
                    <button value="Submit" className="btn button mt-3">Submit</button>
                </form>
                <hr />
                <div className="row justify-content-center px-3 py-4" style={{ height: 'fit-content' }}>
                    <p className="text-center" style={{ fontSize: 16, fontWeight: 300, color: "#555" }}>Copyright 2024 © Mega Maker 3D <br></br> All rights reserved</p>
                </div>
            </div>
        </div>
    );
}