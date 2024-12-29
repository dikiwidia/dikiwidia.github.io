import { FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import mochdikiwidianto from "../assets/mochdikiwidianto_fix.png";
import jasper from "../assets/projects/jasper.png";
import siakad_unilam from "../assets/projects/siakad_unilam.png";
import siraja from "../assets/projects/siraja.png";
import kamus_baduy from "../assets/projects/kamus_baduy.png";
import qudwahqu from "../assets/projects/qudwahqu.png";
import unilam from "../assets/projects/unilam.png";
import certified1 from "../assets/certificates/certified1.png";
import certified2 from "../assets/certificates/certified2.png";
import certified3 from "../assets/certificates/certified3.png";
import certified4 from "../assets/certificates/certified4.png";
import ProgramLangComponent from "../components/ProgramLang";
import ProjectExpComponent from "../components/ProjectExp";
import WorkExpComponent from "../components/WorkExp";
import { MdVerifiedUser } from "react-icons/md";
import CertificateComponent from "../components/Certificate";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center bg-sky-50">
      <div className="container border border-slate-200 rounded-lg my-2 mx-2 bg-slate-50">
        {/* Header */}
        <img
          src="https://picsum.photos/1336/400"
          alt="Picture"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="flex flex-col justify-start lg:flex-row lg:justify-between lg:items-start lg:my-8 lg:mx-8 my-4 mx-4 lg:relative">
          <div className="-mt-28 mx-auto lg:mt-0 lg:absolute lg:left-0 lg:-top-28">
            <img
              src={mochdikiwidianto}
              alt=""
              className="rounded-full w-40 h-40 object-cover bg-slate-300 border-2 border-slate-50"
            />
          </div>
          <div className="flex flex-col lg:w-1/2 items-center lg:items-start lg:ml-44 lg:pr-16 lg:mt-0 mt-5 lg:mb-0 mb-5">
            <h1 className="flex items-center gap-1 text-2xl font-bold mb-2 text-center lg:text-left">
              Moch Diki Widianto
              <span className="text-sky-600">
                <MdVerifiedUser className="w-5 h-5" />
              </span>
            </h1>
            <p className="text-md text-center lg:text-left">
              Halo semua, Selamat datang di situs web portofolio sederhana ini,
              Saya adalah seorang <i>fullstack developer</i> dari Rangkasbitung,
              Banten, Indonesia
            </p>
          </div>
          <div className="flex justify-center lg:justify-end items-center gap-1">
            <a
              href="https://github.com/dikiwidia"
              target="_blank"
              className="flex justify-start items-center border border-slate-700 text-slate-700 shadow-md hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaGithub className="mr-2 w-6 h-6" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mochdikiwidianto/"
              target="_blank"
              className="flex justify-start items-center border border-blue-800 text-blue-800 shadow-md hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded"
            >
              <FaLinkedin className="mr-2 w-6 h-6" />
              LinkedIn
            </a>
          </div>
        </div>
        {/* Profile */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start mx-4 lg:mx-8 mt-8 mb-8">
          <div className="flex flex-col justify-start lg:w-2/3 w-full lg:pr-16 pr-0 lg:mb-0 mb-2">
            <h1 className="text-xl font-bold mb-2 text-teal-600">
              Tentang Saya
            </h1>
            <p className="text-md mb-2 lg:text-left text-justify">
              Perkenalkan Saya Moch Diki Widianto dari Rangkasbitung, Banten,
              Indonesia. Saya merupakan seorang <i>fullstack developer</i> yang
              mempelajari bahasa pemrograman secara mandiri mencari informasi
              dari berbagai sumber di internet. Saya menyukai dunia pemrograman
              dan familiar dengan beberapa bahasa pemrograman juga berbagai
              macam <i>framework</i>.
            </p>
            <p className="text-md lg:text-left text-justify">
              Beberapa diantaranya PHP, Laravel, React, VueJs, Flutter dan masih
              banyak lagi. Untuk dapat terhubung, Anda dapat menghubungi Saya
              melalui Whatsapp, Email, LinkedIn atau sosial media lainnya yang
              terdapat pada halaman ini.
            </p>
          </div>
          <div className="flex justify-start items-start flex-wrap lg:w-1/3 w-full">
            <div className="flex flex-col xl:w-1/2 w-full xl:py-2 xl:px-2">
              <h1 className="font-bold text-slate-600">Wilayah Negara</h1>
              <p className="text-md">Rangkasbitung, Banten, Indonesia 🇮🇩</p>
            </div>
            <div className="flex flex-col xl:w-1/2 w-full xl:py-2 xl:px-2">
              <h1 className="font-bold text-slate-600">Situs Web</h1>
              <a
                href="https://dikiwidia.github.io"
                target="_blank"
                className="flex items-center gap-1 text-md text-sky-600 hover:text-sky-700"
              >
                dikiwidia.github.com
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col xl:w-1/2 w-full xl:py-2 xl:px-2">
              <h1 className="font-bold text-slate-600">Surat Elektronik</h1>
              <a
                href="mailto:diki.widianto@unilam.ac.id"
                target="_blank"
                className="flex items-center gap-1 text-md text-sky-600 hover:text-sky-700"
              >
                diki.widianto@unilam.ac.id
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col xl:w-1/2 w-full xl:py-2 xl:px-2">
              <h1 className="font-bold text-slate-600">GitHub</h1>
              <a
                href="https://github.com/dikiwidia"
                target="_blank"
                className="flex items-center gap-1 text-md text-sky-600 hover:text-sky-700"
              >
                Moch Diki Widianto
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="flex flex-col justify-center lg:items-center lg:mx-8 lg:my-8 mx-4 my-4 mb-8">
          <h1 className="text-xl font-bold text-teal-600 mb-4">
            Pengalaman Bekerja
          </h1>
          <ol className="flex flex-col gap-4 border-l-2 border-dashed border-teal-600 list-decimal list-inside pl-8 mx-4 lg:mx-0 xl:w-2/3">
            <WorkExpComponent
              title="Fullstack Developer"
              place="Universitas La Tansa Mashiro"
              desc="Jul 2023 - Saat ini, Rangkasbitung, Banten, Indonesia"
            >
              Bertanggung jawab secara penuh terhadap sistem informasi yang ada
              di Universitas La Tansa Mashiro, membuat perencanaan pembuatan
              aplikasi berbasis web atau mobile, backup data dan maintenance
              server.
            </WorkExpComponent>
            <WorkExpComponent
              title="Fullstack Supervisor"
              place="PT Bumi Lancang Kuning Pusaka (BLKP)"
              desc="Jan 2023 - Jul 2023, Cikande, Banten, Indonesia"
            >
              Bertanggung jawab dalam perancangan module pada ERP, Menugaskan
              pekerjaan pada anggota tim, meninjau dan mengevaluasi (source
              code) hasil pekerjaan anggota tim dan melaporkan progress kinerja
              mingguan. Manajemen kode sumber dan basis data di server lokal dan
              repository git. Membuat mockup untuk modul yang akan dibuat dan
              dikembangkan berdasarkan analisa kebutuhan user dari QA.
            </WorkExpComponent>
            <WorkExpComponent
              title="Fullstack Staff"
              place="PT Bumi Lancang Kuning Pusaka (BLKP)"
              desc="Mar 2020 - Des 2022, Cikande, Banten, Indonesia"
            >
              Membuat berbagai macam modul seperti, modul penjualan, pembelian,
              hris, keuangan dan lain-lain dengan menggunakan framework Laravel
              sebagai backend dan VueJS sebagai frontend. Memastikan tidak ada
              bug pada aplikasi.
            </WorkExpComponent>
            <WorkExpComponent
              title="Information Technology Support Staff"
              place="PT Bumi Lancang Kuning Pusaka (BLKP)"
              desc="Agu 2019 - Mar 2020, Cikande, Banten, Indonesia"
            >
              Bertanggung jawab dalam troubleshooting dan maintenance jaringan
              server atau client di lingkungan perusahaan menggunakan Mikrotik
              di seluruh anak perusahaan dan cabang seluruh Indonesia
            </WorkExpComponent>
            <WorkExpComponent
              title="IT Support Staff"
              place="Perguruan Tinggi La Tansa Mashiro"
              desc="Jan 2016 - Mar 2019, Rangkasbitung, Banten, Indonesia"
            >
              Bertanggung jawab dalam troubleshooting dan maintenance jaringan
              server atau client di lingkungan perusahaan menggunakan Mikrotik.
            </WorkExpComponent>
          </ol>
        </div>
        {/* Certified */}
        <div className="flex flex-col justify-center lg:items-center lg:mx-8 lg:my-8 mx-4 my-4 mb-8">
          <h1 className="text-xl font-bold text-teal-600 mb-4">
            Sertifikat Kemampuan / Pelatihan
          </h1>
          <div className="flex justify-center flex-wrap">
            <CertificateComponent
              title="Sertifikat Javascript dan Node.js"
              lang="Course-Net Indonesia"
              link="https://coursenet.s3.ap-southeast-3.amazonaws.com/Course-Net/CompletionCertificateMoch%20Diki%20Widianto-111141.pdf"
              image={certified1}
            >
              Teknik Pembuatan Aplikasi menggunakan Javascript dan Node.js bagi
              Javascript Engineer sebagai Programer Aplikasi
            </CertificateComponent>
            <CertificateComponent
              title="Sertifikat Database SQL"
              lang="Course-Net Indonesia"
              link="https://coursenet.s3.ap-southeast-3.amazonaws.com/Course-Net/CompletionCertificateMoch%20Diki%20Widianto-110930.pdf"
              image={certified2}
            >
              Merancang Database dan Membangun Karir Data Engineer
            </CertificateComponent>
            <CertificateComponent
              title="Sertifikat Kotlin"
              lang="Dicoding Indonesia"
              link="https://1drv.ms/b/s!AtKg0q7P7W25sWvMdK2lwvaFz6Vh?e=iWN9Wf"
              image={certified3}
            >
              Memulai Pemrograman dengan Kotlin
            </CertificateComponent>
            <CertificateComponent
              title="Sertifikat Cyber Security"
              lang="BSSN"
              link="https://1drv.ms/b/c/b96dedcfaed2a0d2/ERxwV5ksOn1IhwmJ0tbQE6wBq13_ao77oHV4ggu1hup4FQ?e=IIyau7"
              image={certified4}
            >
              Cyber Security Workshop Sektor Pendidikan
            </CertificateComponent>
          </div>
        </div>
        {/* Projects */}
        <div className="flex flex-col justify-center lg:items-center lg:mx-8 lg:my-8 mx-4 my-4 mb-8">
          <h1 className="text-xl font-bold text-teal-600 mb-4">
            Portofolio / Proyek Pekerjaan
          </h1>
          <div className="flex justify-center flex-wrap">
            <ProjectExpComponent
              title="Jasper - ERP"
              lang="Laravel, VueJs"
              image={jasper}
            >
              Jasper adalah aplikasi ERP (Enterprise Resource Planning) yang
              didalamnya mencakup beberapa modul yang dibutuhkan oleh sebuah
              perusahaan.
            </ProjectExpComponent>
            <ProjectExpComponent
              title="Siakad Unilam"
              lang="Laravel"
              image={siakad_unilam}
            >
              Siakad Unilam adalah Sistem Informasi Akademik Universitas La
              Tansa Mashiro yang merupakan aplikasi penunjang kegiatan akademik
              di Universitas La Tansa Mashiro.
            </ProjectExpComponent>
            <ProjectExpComponent title="Siraja" lang="Laravel" image={siraja}>
              Siraja (Sistem Informasi Rakyat Sejahtera) adalah sebuah aplikasi
              analisis data kemiskinan ekstrem yang dikembangkan bersama
              Pemerintah Kabupaten Lebak
            </ProjectExpComponent>
            <ProjectExpComponent
              title="Kamus Baduy"
              lang="Flutter, Dart"
              image={kamus_baduy}
            >
              Kamus Baduy adalah aplikasi mobile yang dikembangkan bersama Dosen
              Pendidikan Bahasa Inggris yang tujuannya untuk mempermudah
              masyarakat adat Suku Baduy dalam berkomunikasi dengan wisatawan
              mancanegara
            </ProjectExpComponent>
            <ProjectExpComponent
              title="QudwahQu"
              lang="Flutter, Dart"
              image={qudwahqu}
            >
              QudwahQu merupakan aplikasi mobile milik salah satu lembaga
              pendidikan yang dikembangkan dengan flutter.
            </ProjectExpComponent>
            <ProjectExpComponent
              title="Website Unilam"
              lang="Laravel"
              image={unilam}
            >
              Official Website Universitas La Tansa Mashiro yang berfungsi
              sebagai media informasi dan berita terkini seputar Universitas La
              Tansa Mashiro
            </ProjectExpComponent>
          </div>
        </div>
        {/* Skills */}
        <div className="flex flex-col justify-center lg:items-center lg:mx-8 lg:my-8 mx-4 my-4 mb-8">
          <h1 className="text-xl font-bold text-teal-600 mb-4">
            Bahasa Pemrograman / Framework / Keahlian
          </h1>
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-2 mb-8 w-full">
            <ProgramLangComponent lang="html5" rating={5.0} />
            <ProgramLangComponent lang="css3" rating={4.5} />
            <ProgramLangComponent lang="php" rating={5.0} />
            <ProgramLangComponent lang="js" rating={4.5} />
            <ProgramLangComponent lang="dart" rating={4.5} />
            <ProgramLangComponent lang="react" rating={4.0} />
            <ProgramLangComponent lang="laravel" rating={5.0} />
            <ProgramLangComponent lang="vuejs" rating={4.0} />
            <ProgramLangComponent lang="tailwindcss" rating={4.5} />
            <ProgramLangComponent lang="jquery" rating={4.5} />
            <ProgramLangComponent lang="bootstrap" rating={4.0} />
            <ProgramLangComponent lang="ubuntu-server" rating={5.0} />
            <ProgramLangComponent lang="ms-excel" rating={4.5} />
            <ProgramLangComponent lang="ms-word" rating={5.0} />
            <ProgramLangComponent lang="figma" rating={4.0} />
          </div>
        </div>
        {/* Footer */}
        <div className="flex justify-center items-center mx-8 border-t-2 border-slate-100 py-4">
          <p className="text-sm text-slate-500">
            Hak Cipta &copy; {new Date().getFullYear()} Moch Diki Widianto
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
