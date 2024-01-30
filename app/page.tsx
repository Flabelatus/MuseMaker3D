import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Services from "./services/page";
import Clients from "./clients/page";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="row mt-5 p-20">
        <div className="col-md-6 offset-md-1">
          <h1>
            Turn your vision into reality with 3D technology
          </h1>
          <p className="mt-5">
            Whether you’re launching a startup or taking your established company to the next level –
            with our cutting-edge technology, personal approach and tailored solutions, you’re only
            a few steps away from bringing your idea to life.
          </p>
          <Link href="#!" className="btn button">
            Get in touch
          </Link>
        </div>
        <div className="relative flex place-items-center " style={{ width: '40%', maxWidth: '100%' }}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
            src="/landing/hero.jpg"
            alt="Hero Image"
            width={500}
            height={37}
            priority
          />
        </div>
      </div>

      <Clients></Clients>

      {/* TEXT */}
      <div className=" justify-content-center row mb-5 py-5 container-fluid" style={{ backgroundColor: '#FFF', width: '100vw' }}>
        <div className="row justify-content-start px-5">
          <div className="col-md-5 offset-md-6">
            <h1 className="text-start mb-5 mt-3 py-2" style={{ color: '#000000CC', width: 'fit-content', height: 'fit-content' }}>3D solutions for every vision</h1>
            <p className="text-start">Our wide range of services allows us to craft a tailored solution for each and every client. In need of a straightforward 3D scan or print? We got you covered.
              But that’s not all we do. Our expertise lies in transforming your vision into reality, regardless of the stage you're at in the process. We can assist in the
              entire product development journey, including concept development, building physical prototypes and developing minimum viable products (MVPs). So if you're still
              exploring possibilities or have a crystal-clear vision in mind, our creative team is ready to support you every step of the way.

              It all starts with a first conversation. Get in touch or let us call you, so we can discuss your project and set the next steps.</p>
          </div>
        </div>
      </div>

      <Services></Services>
 
    </main>
  );
}
