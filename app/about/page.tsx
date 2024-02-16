import Image from 'next/image';
import AboutImage from './../../public/landing/about.jpg';

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="row mt-5 p-20 justify-content-center">
                <div className="col-md-12 offset-md-3">

                    <div className='row' style={{ display: 'flex' }}>
                        <div className='col-md-4 py-5'>
                            <Image
                                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mt-5"
                                src={AboutImage}
                                alt="About Image"
                                width={400}
                                height={37}
                                priority
                            />
                        </div>
                        <div className='col-md-6'>
                            <h1 className='py-5'>
                                About Mega Maker 3D
                            </h1>
                            <p className="" style={{ fontWeight: 300 }}>
                                Our journey began with a personal interest in the vast world of 3D technology.
                                As we delved deeper, we discovered overlapping areas in the fields of design,
                                product development and engineering. By blending our expertise in these areas,
                                we’re able to provide a comprehensive and holistic approach to product development
                                using 3D technology. <br /><br/> It all starts with imagination, which then turns into ideas.
                                Share your ideas with The 3rd Party, and we'll see them through from start to finish
                                or jump in to tackle any challenges if you already have a project in motion.
                                The core team is highly experienced in engineering, design and architecture.
                                Javid is an engineer and designer specialized in digital design and production with
                                10 years of professional experience. For him, the most fulfilling aspect is enabling
                                each client’s vision and helping them overcome their challenges.<br /><br /> Designer Anntje has
                                a background in product and architectural design. She’s inspired by the limitless
                                opportunities that 3D technology provides, both technically and creatively.
                                Having all these possibilities motivate our team to be innovative and discover fresh approaches
                                to assist clients in achieving their goals.
                                From the dynamic city of Rotterdam, we welcome clients from all over the world.
                                It doesn’t matter if you’re in the neighborhood, Rio, Reykjavik or anywhere else – our
                                doors are open.
                            </p>
                        </div>



                    </div>

                </div>
            </div>
        </main>
    )
}