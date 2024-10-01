import linkedin from "@/assets/linkedin.svg"
import github from "@/assets/github.svg"

import Image from "next/image"


export default function Nav() {
  return (
    <>
      <div className="navigator">
        <h4>Sudenur Taştekin</h4>
        <ul className="menu">
          <li>Anasayfa</li>
          <li>Hakkımda</li>
          <li>Projelerim</li>
          <li>İletişim</li>
        </ul>
        <ul className="socialmedia">
          <li> <Image
            src={linkedin}
            alt="LinkedIn"
            width={24}
            height={24}
          /></li>
          <li> <Image
            src={github}
            alt="Github"
            width={24}
            height={24}
          /></li>
        </ul>
      </div>


    </>
  )
}