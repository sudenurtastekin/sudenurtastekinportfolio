import Link from "next/link";
import linkedin from "@/assets/linkedin.svg";
import github from "@/assets/github.svg";
import cv from "@/assets/cv.svg";

import Image from "next/image";


export default function Nav() {
  return (
    <>
      <div className="navigator">
        <h4><Link href="/">Sudenur Taştekin</Link></h4>
        {/* <ul className="menu">
          <li><Link href="/">Anasayfa</Link></li>
          <li><Link href="/hakkimda">Hakkımda</Link></li>
          <li><Link href="/projelerim">Projelerim</Link></li>
          <li><Link href="/iletisim">İletişim</Link></li>
        </ul> */}
        <ul className="socialmedia">
          <li>
            <a href="https://www.linkedin.com/in/sudenur-ta%C5%9Ftekin-567031204/" target="_blank" >
              <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/sudenurtastekin" target="_blank" >
              <Image src={github} alt="Github" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1bpXYRD1cIcEarpfq2zpw1o__n7sv2xQW/view?usp=sharing" target="_blank" rel="noopener noreferrer" >
              <Image src={cv} alt="cv" width={24} height={24} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
