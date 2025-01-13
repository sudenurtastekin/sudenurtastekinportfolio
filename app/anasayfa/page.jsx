import profilePic from "@/assets/sude-pp.jpg";
import Image from "next/image";


export default function Hero() {
  return (
    <>
      <div className="hero-container">
        <Image src={profilePic} alt="profile pic" width={380} height={450} />

        <div className="hero-content-area">
          <h3>
            Merhaba! <br />
            Ben <span className="sudenur">Sudenur</span>,
          </h3>
          <div className="hero-content">
            <p>
              Merhaba! Ben Sudenur Taştekin, 22 yaşındayım. İstanbul Üniversitesi-Cerrahpaşa&apos;da İşletme Yönetimi bölümünden mezun oldum ve <a target="_blank" rel="noopener noreferrer" href="https://acunmedyaakademi.com/"><strong>Acunmedya Akademi</strong></a>&apos;de FrontEnd Yazılım Geliştirme Uzmanlığı eğitimi aldım. Yenilikçi çözümler üretmekten ve kod yazmaktan büyük keyif alıyorum. Tasarımın gücünü teknolojiyle birleştirerek kullanıcı deneyimini en üst seviyeye çıkarmak benim için bir tutku haline geldi. Frontend geliştirme konusundaki bilgi ve becerilerimi sürekli olarak geliştiriyor ve sektördeki en son trendleri takip ediyorum. Yenilikçi fikirlerimi ve enerjimi bir projeye dahil etmek isterseniz, sizinle işbirliği yapmaktan mutluluk duyarım. Beraber çalışmak için sabırsızlanıyorum!
            </p>
          </div>
          <a className="contactBtn" href="mailto:tastekinsudenur@gmail.com">Bana Ulaşın</a>
        </div>
      </div>
      
 
    </>
  );
}
