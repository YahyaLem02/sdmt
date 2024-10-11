import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderImage from "../../assets/img/technician-working-air-conditioner(1).jpg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import Typical from "react-typical";

const services = [
  {
    title: 'Climatisations',
    description: 'Notre service de climatisation vous offre des solutions modernes et efficaces pour assurer un confort optimal dans vos espaces de vie ou de travail. Nous proposons l\'installation, la maintenance et la réparation de systèmes de climatisation adaptés à vos besoins spécifiques.'
  },
  {
    title: 'Ventilations',
    description: 'La ventilation est essentielle pour maintenir une bonne qualité de l\'air intérieur. Nous offrons des systèmes de ventilation performants qui garantissent une circulation d\'air saine et agréable, tout en réduisant l\'humidité et en évitant les mauvaises odeurs.'
  },
  {
    title: 'Chauffage',
    description: 'Nous proposons des solutions de chauffage adaptées à chaque environnement, qu\'il s\'agisse de systèmes centralisés ou décentralisés. Notre équipe d\'experts s\'assure de vous fournir des installations fiables, économiques et respectueuses de l\'environnement.'
  },
  {
    title: 'Plomberie',
    description: 'Nos services de plomberie couvrent l\'installation, la réparation et l\'entretien de toutes vos installations sanitaires. Que ce soit pour des fuites, des canalisations obstruées ou des nouvelles installations, nous mettons notre expertise à votre service pour garantir un fonctionnement optimal.'
  },
  {
    title: 'Électricité',
    description: 'Tous les travaux d\'électricité, y compris les installations et les réparations. Nous garantissons la sécurité et l\'efficacité de votre réseau électrique, que ce soit dans des bâtiments résidentiels ou commerciaux.'
  },
  {
    title: 'Réseaux Informatiques',
    description: 'Installation et maintenance de réseaux informatiques performants. Nous mettons en place des infrastructures réseaux adaptées à vos besoins pour assurer la connectivité de vos équipements.'
  },
  {
    title: 'Système Vidéo Surveillance',
    description: 'Protégez vos espaces avec nos solutions de vidéosurveillance de haute qualité. Nous proposons des caméras modernes et un suivi en temps réel pour garantir la sécurité de vos biens.'
  },
  {
    title: 'Système d\'Alarme',
    description: 'Mettez en place des systèmes d\'alarme efficaces pour renforcer la sécurité de votre maison ou de votre entreprise. Nous offrons des solutions intelligentes et personnalisées.'
  },
  {
    title: 'Maison Intelligente',
    description: 'Automatisez votre maison avec nos systèmes domotiques. Contrôlez à distance vos éclairages, vos appareils et même vos systèmes de sécurité via des technologies intelligentes.'
  },
  {
    title: 'Motorisation de Rideaux et Portes',
    description: 'Ajoutez confort et sécurité à votre maison ou votre entreprise avec la motorisation de vos rideaux métalliques et portes automatiques.'
  },
  {
    title: 'Travaux Divers',
    description: 'Nous effectuons divers travaux pour répondre à tous vos besoins, qu\'il s\'agisse de petites réparations ou de rénovations plus importantes.'
  }
];


export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <CustomTitle>
            <Typical
              steps={["DOUKKALA-MAROC TRAV-", 1000, "", 500]}
              loop={Infinity}
              wrapper="span"
            />
          </CustomTitle>
          <SliderWrapper>
            <SlideContent>
              <ServiceTitle>{services[currentSlide].title}</ServiceTitle>
              <ServiceDescription>{services[currentSlide].description}</ServiceDescription>
            </SlideContent>
            <DotIndicators>
              {services.map((_, index) => (
                <Dot 
                  key={index} 
                  active={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </DotIndicators>
          </SliderWrapper>
          <NewButtonWrapper>
            <NewButton href="#services">Découvrez nos services</NewButton>
          </NewButtonWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>
                  Experts en climatisation, ventilation, chauffage et plomberie,
                  nous proposons des solutions sur mesure et un service après-vente réactif, garantissant votre satisfaction.
                </em>
              </p>
              <p className="font13 orangeColor textRight" style={{ marginTop: "10px" }}>
                JAWAD KAOUKABI
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin-top: 30px;
  }
`;

const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img = styled.img`
  max-width: 90%;
  height: auto;
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const CustomTitle = styled.h1`
  font-size: 1.8rem;
  color: #f49e38;
  font-weight: 700;
  margin-bottom: 20px;
  @media (max-width: 560px) {
    font-size: 1.5rem;
  }
`;

const SliderWrapper = styled.div`
  max-width: 450px;
  margin: 20px auto;
  @media (max-width: 960px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const SlideContent = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #273136;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #555;
`;

const DotIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#273136' : '#f49e38'};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const NewButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const NewButton = styled.a`
  background-color: #f49e38;
  color: #273136;
  padding: 10px 20px;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #273136;
    color: #f49e38;
  }

  @media (max-width: 560px) {
    font-size: 1rem;
    padding: 8px 16px;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
    bottom: 20px;
    padding: 20px;
  }
  @media (max-width: 560px) {
    left: 10px;
    bottom: 0;
    padding: 15px;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;