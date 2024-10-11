import React from "react";
import styled from "styled-components";
import { FaSnowflake, FaWind, FaFire, FaWater, FaBolt, FaNetworkWired, FaVideo, FaShieldAlt, FaHome, FaDoorClosed } from "react-icons/fa"; // Import des icônes
import ProjectBox from "../Elements/ProjectBox";
// Assets
import ProjectImg1 from "../../assets/img/climatisation.jpg";
import ProjectImg2 from "../../assets/img/ventilations.jpg";
import ProjectImg3 from "../../assets/img/chauffage.jpg";
import ProjectImg4 from "../../assets/img/plomberie.jpg";
import ProjectImg5 from "../../assets/img/ventilations.jpg";
import ProjectImg6 from "../../assets/img/ventilations.jpg";
import ProjectImg7 from "../../assets/img/ventilations.jpg";
import ProjectImg8 from "../../assets/img/ventilations.jpg";
import ProjectImg9 from "../../assets/img/ventilations.jpg";
import ProjectImg10 from "../../assets/img/ventilations.jpg";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nos Activités</h1>
            <p className="font13">
              Explorez nos services modernes et innovants pour répondre à tous vos besoins en matière de confort et de sécurité.
            </p>
          </HeaderInfo>

          <div className="row" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg1}
                title="Climatisations"
                text={
                  <>
                    <FaSnowflake size={30} style={{ color: "#f49e38" }} />
                    <p>Installation et maintenance de systèmes de climatisation :</p>
                    <ul>
                      <li>- Climatisation centralisée</li>
                      <li>- Économies d'énergie</li>
                      <li>- Contrôle intelligent</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur les climatisations")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg2}
                title="Ventilations"
                text={
                  <>
                    <FaWind size={30} style={{ color: "#f49e38" }} />
                    <p>Améliorez la qualité de l'air :</p>
                    <ul>
                      <li>- Ventilation mécanique contrôlée</li>
                      <li>- Solutions résidentielles et industrielles</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur les ventilations")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg3}
                title="Chauffage"
                text={
                  <>
                    <FaFire size={30} style={{ color: "#f49e38" }} />
                    <p>Systèmes de chauffage modernes :</p>
                    <ul>
                      <li>- Chaudières efficaces</li>
                      <li>- Chauffage au sol</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur le chauffage")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg4}
                title="Plomberie"
                text={
                  <>
                    <FaWater size={30} style={{ color: "#f49e38" }} />
                    <p>Installation et réparation de plomberie :</p>
                    <ul>
                      <li>- Réparations rapides</li>
                      <li>- Systèmes d'eau chaude</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur la plomberie")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg5}
                title="Électricité"
                text={
                  <>
                    <FaBolt size={30} style={{ color: "#f49e38" }} />
                    <p>Travaux d'électricité professionnels :</p>
                    <ul>
                      <li>- Installations et réparations</li>
                      <li>- Sécurité électrique garantie</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur l'électricité")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg6}
                title="Réseaux Informatiques"
                text={
                  <>
                    <FaNetworkWired size={30} style={{ color: "#f49e38" }} />
                    <p>Solutions pour réseaux informatiques :</p>
                    <ul>
                      <li>- Installation de réseaux</li>
                      <li>- Maintenance et optimisation</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur les réseaux informatiques")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg7}
                title="Vidéosurveillance"
                text={
                  <>
                    <FaVideo size={30} style={{ color: "#f49e38" }} />
                    <p>Systèmes de vidéosurveillance modernes :</p>
                    <ul>
                      <li>- Caméras haute résolution</li>
                      <li>- Surveillance en temps réel</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur la vidéosurveillance")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg8}
                title="Systèmes d'Alarme"
                text={
                  <>
                    <FaShieldAlt size={30} style={{ color: "#f49e38" }} />
                    <p>Installation de systèmes d'alarme :</p>
                    <ul>
                      <li>- Alarmes anti-intrusion</li>
                      <li>- Alarmes connectées</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur les systèmes d'alarme")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg9}
                title="Maison Intelligente"
                text={
                  <>
                    <FaHome size={30} style={{ color: "#f49e38" }} />
                    <p>Automatisation des maisons :</p>
                    <ul>
                      <li>- Gestion à distance des appareils</li>
                      <li>- Contrôle intelligent</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur la maison intelligente")}
              />
            </ServiceCard>

            <ServiceCard className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <ProjectBox
                img={ProjectImg10}
                title="Motorisation de Rideaux et Portes"
                text={
                  <>
                    <FaDoorClosed size={30} style={{ color: "#f49e38" }} />
                    <p>Motorisation et automatisation :</p>
                    <ul>
                      <li>- Rideaux métalliques</li>
                      <li>- Portes automatiques</li>
                    </ul>
                  </>
                }
                action={() => alert("Détails sur la motorisation")}
              />
            </ServiceCard>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const ServiceCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }

  ul {
    padding-left: 15px;
    list-style-type: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;

      &:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #273136;  /* Couleur principale #273136 pour les puces */
        font-size: 1.5rem;
        line-height: 1rem;
      }
    }
  }
`;
