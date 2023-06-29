import lomba1 from "./7.jpg";
import lomba2 from "./6.jpg";
import fajar from "./fajar.jpg";
import msu from "./1.png";
import jgu from "./2.png";
import ui from "./3.png";
import logo_pnj from ".././view/4.png";

function home() {
  return (
    <div className="Poppins text-white bg-gray-100">
      <div className="bg">
        <div className="font-extrabold text-4xl py-80">
          <div className="bg-blue-950 bg-opacity-60 py-5 mx-24">
            TIK PNJ IS WHERE <br /> THE IT ENGINEER PRACTITIONERS IS INVENTED
          </div>
          <div className="text-2xl bg-gray-400 bg-opacity-60 mx-48 py-10">
            Dengan Pendidikan Vokasional, Mahasiswa TIK <br />
            Belajar langsung Dunia Industri IT sehingga Tercipta Lulusan Siap
            Kerja
          </div>
        </div>
      </div>

      <div className="text-3xl bg-gray-500 font-extrabold py-14 px-14">
        The PNJ Departement of IT Engineering’s mission is to educate the next
        generation of IT engineering leaders, to create new knowledge, and to
        serve society.
      </div>

      <div className="mx-48 flex justify-center">
        <div className="">
          <div className=" bg-white flex justify-between items-center margin">
            <div className="">
              <img src={lomba1} alt="" className="max-w-md" />
            </div>
            <div className="mx-3">
              <a href="" className="text-blue-500 underline text-xl">
                Mahasiswa Prodi TMJ Lakukan Studi Industri ke XL Axiata
              </a>
            </div>
          </div>

          <div className="bg-white flex justify-between items-center margin">
            <div className="mx-2">
              <a href="" className="text-blue-500 underline text-xl">
                Mahasiswa TIK PNJ juara 1 Perancangan Bisnis KMIPN 2019
              </a>
            </div>
            <div>
              <img src={lomba2} alt="" className="max-w-md" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-950 mx-20 mt-24">
        <div className="ml-10 py-6">
          <h1 className="underline flex text-left text-2xl">
            AGENDA YANG AKAN DATANG
          </h1>
        </div>
        <div className="flex justify-between items-center mx-24 pt-10 py-12">
          <div className="max-w max">
            <img src={fajar} alt="" className="w-56 rounded-3xl" />
          </div>
          <div className="max-w max">
            <img src={fajar} alt="" className="w-56 rounded-3xl" />
          </div>
          <div className="max-w max">
            <img src={fajar} alt="" className="w-56 rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-4">
          <h1 className="text-blue-950 text-3xl font-semibold">
            UNIVERSITAS REKANAN
          </h1>
        </div>

        <div className="flex justify-between items-center mx-64 mb-6">
          <div>
            <img src={msu} alt="" />
          </div>
          <div>
            <img src={ui} alt="" className="w-72 ml-10" />
          </div>
          <div>
            <img src={jgu} alt="" className="w-72" />
          </div>
        </div>
      </div>

      <div className="bg-zinc-800 py-16">
        <div className="flex justify-between items-center mx-28">
          <div className="flex justify-between items-center">
            <div className="mx-3">
              <img src={logo_pnj} alt="" className="w-28" />
            </div>
            <div className="mx-3">
              <h1 className="text-left text-xl font-bold">
                Department of <br /> Informatics and Computer <br />
                engineering
              </h1>
            </div>
          </div>

          <div className="text-left">
            <div>
              <h1 className="text-xl font-bold">Akademik</h1>
            </div>
            <ul>
              <li>Sarjana Terapan Teknik Informatika</li>
              <li>Sarjana Terapan Teknik Multimedia Digital</li>
              <li>Sarjana Terapan Teknik Multimedia Digital dan Jaringan</li>
              <li>D1 Teknik Komputer dan Jaringan</li>
            </ul>
          </div>

          <div className="text-left">
            <div className="text-xl font-bold">Akses Cepat</div>
            <ul>
              <li>WEweb Utama PNJ</li>
              <li>Siak Mahasiswa</li>
              <li>E-Learning</li>
              <li>Gudang Ilmu TIK</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
