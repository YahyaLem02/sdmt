import React from "react";
import styled, { keyframes } from "styled-components";
import { FaSnowflake, FaWind, FaFire, FaWater, FaBolt, FaNetworkWired, FaVideo, FaShieldAlt, FaHome } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

const services = [
    {
      title: "Climatisations",
      icon: FaSnowflake,
      description: "Nous offrons des solutions complètes de climatisation, adaptées à vos besoins. De l'installation à la maintenance, nous garantissons des systèmes fiables, économes en énergie et contrôlables à distance pour un confort optimal.",
      testimonial: "Grâce à leur expertise, ma maison est toujours à la bonne température. Très professionnels et rapides. Je recommande fortement !"
    },
    {
      title: "Ventilations",
      icon: FaWind,
      description: "Un système de ventilation efficace assure la circulation d'air dans vos espaces. Nous installons des systèmes de ventilation performants pour maintenir une qualité d'air saine, réduisant les polluants intérieurs.",
      testimonial: "Depuis l'installation de leur système de ventilation, l'air est beaucoup plus pur. Mon bureau est maintenant plus agréable à vivre."
    },
    {
      title: "Chauffage",
      icon: FaFire,
      description: "Nous vous proposons des systèmes de chauffage modernes, économiques et respectueux de l'environnement. Que ce soit pour un chauffage central ou au sol, nos solutions sont adaptées à vos besoins.",
      testimonial: "Leur système de chauffage est incroyable. Je réalise des économies sur mes factures et ma maison reste chaude tout l'hiver."
    },
    {
      title: "Plomberie",
      icon: FaWater,
      description: "Des solutions complètes pour toutes vos installations sanitaires. Nous intervenons pour des réparations, de nouvelles installations et des systèmes d'eau chaude performants. Service d'urgence disponible 24/7.",
      testimonial: "Ils sont intervenus très rapidement pour une fuite. Service impeccable et réactif."
    },
    {
      title: "Électricité",
      icon: FaBolt,
      description: "Nos services d'électricité couvrent les installations résidentielles et commerciales. Nous garantissons la sécurité de votre réseau électrique et offrons des services de réparation et de maintenance rapide.",
      testimonial: "J'ai eu besoin d'une mise à jour complète de mon installation électrique et le travail a été réalisé à la perfection."
    },
    {
      title: "Réseaux Informatiques",
      icon: FaNetworkWired,
      description: "Nous concevons et mettons en place des réseaux informatiques stables et performants pour les entreprises et les particuliers, avec une maintenance continue pour garantir la connectivité de vos équipements.",
      testimonial: "Leur expertise en réseau informatique a transformé notre entreprise. Connectivité impeccable et service après-vente irréprochable."
    },
    {
      title: "Vidéosurveillance",
      icon: FaVideo,
      description: "Protégez vos biens avec nos systèmes de vidéosurveillance. Nous installons des caméras de haute qualité avec surveillance en temps réel et enregistrement sécurisé, pour votre tranquillité d'esprit.",
      testimonial: "Je me sens beaucoup plus en sécurité avec leur système de vidéosurveillance. Installation rapide et efficace."
    },
    {
      title: "Systèmes d'Alarme",
      icon: FaShieldAlt,
      description: "Renforcez la sécurité de vos locaux avec nos systèmes d'alarme avancés. Nous proposons des solutions intelligentes pour détecter toute intrusion, avec des alertes en temps réel sur vos appareils mobiles.",
      testimonial: "Leur système d'alarme est simple à utiliser et très efficace. Depuis que je l'ai installé, je dors beaucoup mieux."
    },
    {
      title: "Maison Intelligente",
      icon: FaHome,
      description: "Transformez votre maison en un espace intelligent. Grâce à nos solutions de domotique, contrôlez vos appareils, vos lumières et votre sécurité depuis votre smartphone, où que vous soyez.",
      testimonial: "J'adore contrôler tout dans ma maison avec mon téléphone. Leur solution de domotique est révolutionnaire."
    },
  
  ];

export default function DetailedServices() {
  return (
    <Wrapper id="services">
      <div className="lightBg">
        <div className="container">
          <Header>
            <h1 className="font40 extraBold">Nos Services</h1>
            <p className="font15">Découvrez une gamme complète de services adaptés à vos besoins, alliant technologie moderne et expertise professionnelle.</p>
          </Header>

          <ServiceGrid>
            {services.map((service, index) => (
              <ServiceCard key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <IconWrapper>
                  {React.createElement(service.icon, { size: 60, color: "#f49e38" })}
                </IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <TestimonialBox>
                  <FaQuoteLeft size={20} color="#273136" />
                  <TestimonialText>{service.testimonial}</TestimonialText>
                </TestimonialBox>
                <CallToAction href="#contact">Contactez-nous</CallToAction>
              </ServiceCard>
            ))}
          </ServiceGrid>
        </div>
      </div>
    </Wrapper>
  );
}

// Animations CSS
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Wrapper = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  animation: ${fadeInUp} 0.5s ease both;

  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #273136;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
`;

const TestimonialBox = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  position: relative;
  font-style: italic;
`;

const TestimonialText = styled.p`
  font-size: 0.9rem;
  color: #273136;
  text-align: left;
`;

const CallToAction = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #f49e38;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #273136;
  }
`;
