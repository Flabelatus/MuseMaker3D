import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="row mt-5 p-20 justify-content-center">
                <div className="col-md-8 offset-md-3">
                    <h1>
                        Blog Page
                    </h1>
                    <p className="mt-5">
                        We would post blogs here soon!
                    </p>
                    
                </div>
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">

            </div>
        </main>
    )
}