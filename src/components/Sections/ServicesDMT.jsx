import React from "react";
import styled from "styled-components";
import { FaSnowflake, FaWind, FaFire, FaWater, FaBolt, FaNetworkWired, FaVideo, FaShieldAlt, FaHome, FaDoorClosed } from "react-icons/fa";
import ProjectImg1 from "../../assets/img/climatisation.jpg";
import ProjectImg2 from "../../assets/img/ventilations.jpg";
import ProjectImg3 from "../../assets/img/chauffage.jpg";
import ProjectImg4 from "../../assets/img/plomberie.jpg";
import ProjectImg5 from "../../assets/img/electricite.jpg";  // Répétition pour d'autres services
import ProjectImg6 from "../../assets/img/reseau.jpg";
import ProjectImg7 from "../../assets/img/camera.jpg";
import ProjectImg8 from "../../assets/img/ventilations.jpg";
import ProjectImg9 from "../../assets/img/smartHome.jpg";
import ProjectImg10 from "../../assets/img/ventilations.jpg";

// Tableau des services avec leurs images respectives
const services = [
  { title: "Climatisations", icon: FaSnowflake, img: ProjectImg1, description: "Installation et maintenance de climatisation moderne." },
  { title: "Ventilations", icon: FaWind, img: ProjectImg2, description: "Ventilation performante pour air sain." },
  { title: "Chauffage", icon: FaFire, img: ProjectImg3, description: "Systèmes de chauffage économiques." },
  { title: "Plomberie", icon: FaWater, img: ProjectImg4, description: "Réparation et installation de plomberie." },
  { title: "Électricité", icon: FaBolt, img: ProjectImg5, description: "Installation électrique sécurisée." },
  { title: "Réseaux Informatiques", icon: FaNetworkWired, img: ProjectImg6, description: "Installation de réseaux informatiques." },
  { title: "Vidéosurveillance", icon: FaVideo, img: ProjectImg7, description: "Systèmes de vidéosurveillance modernes." },
  { title: "Maison Intelligente", icon: FaHome, img: ProjectImg9, description: "Automatisation de la maison." },
];


export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Nos Activités</h1>
          <p className="font13">
            Découvrez nos services adaptés à vos besoins, alliant innovation et efficacité.
          </p>
        </HeaderInfo>

        <GridWrapper>
          {services.map((service, index) => (
            <ServiceCard key={index} img={service.img}>
              <Overlay>
                <IconWrapper>{React.createElement(service.icon, { size: 50, color: "#f49e38" })}</IconWrapper>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </Overlay>
            </ServiceCard>
          ))}
        </GridWrapper>
      </div>
    </Wrapper>
  );
}

// Styled Components

const Wrapper = styled.section`
  padding: 80px 0;
  background-color: #f9f9f9;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  position: relative;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(39, 49, 54, 0.8); /* Overlay sombre */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #f49e38;
  margin-bottom: 10px;
  text-align: center;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #fff;
  text-align: center;
  max-width: 80%;
`;

