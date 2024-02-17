'use client'
import { FormEvent, useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmitForm = (event: FormEvent) => {
        event.preventDefault();

    };

    return (
        <div >
            <div className="container px-5 py-5" style={{ boxShadow: "1px 1px 10px #eee", borderRadius: 16 }}>
                <h3 className="text-center">Contact form</h3>
                <form onSubmit={handleSubmitForm} className="py-5" style={{ width: 'fit-content' }}>
                    <label className="form-label input-text-transition text-left align-item-right me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                        Name
                    </label>
                    <input
                        style={{ justifyContent: 'flex-end', color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="text"
                        className="mt-3"
                        placeholder="John Doe"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                        Email
                    </label>
                    <input
                        style={{ justifyContent: 'flex-end', color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="email"
                        className="mt-3"
                        placeholder="johndoe@email.com"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120 }}>
                        Subject
                    </label>
                    <input
                        style={{ justifyContent: 'flex-end', color: "#00224C", border: "0px solid #00000060", borderRadius: 8, height: 40, fontSize: 15, width: 350, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F1F1F1" }}
                        type="text"
                        className="mt-3"
                        placeholder="Saying Hi..."
                        id="subject"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <br />
                    <label className="form-label text-left input-text-transition me-4 mt-3" style={{ fontSize: 18, color: "#00000090", fontWeight: 400, minWidth: 120, verticalAlign: 'top' }}>
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
                        className="mt-3"
                        placeholder="Message"
                        id="message"
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <br />
                    <div className="row justify-content-center">
                        <button value="Submit" className="btn button mt-5 px-5" style={{ width: 'fit-content' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}