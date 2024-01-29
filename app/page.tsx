import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


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

      {/* SERVICES */}
      <div className=" justify-content-center  " style={{ backgroundColor: '#dfe', width: '100vw' }}>
        <div className="mb-32 grid text-center lg:max-w-8xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-center ">

          <Link
            href='/design'
            style={{ backgroundColor: '#fff' }}
            className="me-2 rounded-lg px-4 py-5"
          >
            <div style={{ width: 150, height: 120 }}>
              <Image
                className="relative"
                src="/landing/design.png"
                alt="Hero Image"
                width={130}
                height={60}
                priority
              />
            </div>

            <div className="flex flex-col justify-end">
              <h2 className={`mb-3 text-2xl font-semibold btn`}>
                Design Service{" "}
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50 `}>
                We capture precise dimensions and intricate details using structured light technology,
                resulting in accurate models for applications such as quality control, prototyping,
                reverse engineering and many more.
              </p>
            </div>
          </Link>

        </div>
      </div>

    </main>
  );
}
