import Image from "next/image";
import styles from "./page.module.css";
import Nav from  "@/app/nav/page"
import Anasayfa from  "@/app/anasayfa/page"
import Yetenekler from  "@/app/anasayfa/yetenekler"



export default function Home() {
  return (
    <>
    <Anasayfa/>
    <Yetenekler/>

    </>
  );
}
