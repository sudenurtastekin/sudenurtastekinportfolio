import profilePic from "@/assets/sude-pp.jpg"
import Image from "next/image"

export default function Hero() {

  return (
    <div className="hero-container">
      <Image src={profilePic} alt="profile pic" width={380} height={450} />

      <div className="hero-content-area">
        <h3>Merhaba! <br />
          Ben Sudenur,</h3>
        <div className="hero-content">
          <p>Merhaba! Ben Sudenur Taştekin, 22 yaşındayım. İstanbul Üniversitesi-Cerrahpaşa'da İşletme Yönetimi bölümünden mezun oldum ve şu anda <a target="_blank" href="https://acunmedyaakademi.com/"><strong>Acunmedya Akademi</strong></a>'de Front-End Yazılım Geliştirme eğitimi alıyorum. Yenilikçi çözümler üretmekten ve kod yazmaktan büyük keyif alıyorum. Tasarımın gücünü teknolojiyle birleştirerek kullanıcı deneyimini en üst seviyeye çıkarmak benim için bir tutku haline geldi. Frontend geliştirme konusundaki bilgi ve becerilerimi sürekli olarak geliştiriyor ve sektördeki en son trendleri takip ediyorum. Yenilikçi fikirlerimi ve enerjimi bir projeye dahil etmek isterseniz, sizinle işbirliği yapmaktan mutluluk duyarım. Beraber çalışmak için sabırsızlanıyorum!</p>
        </div>
        <button><a class="contactBtn" href="mailto:sude348tastekin@gmail.com">Bana Ulaşın</a></button>
      </div>
    </div>
  )
}