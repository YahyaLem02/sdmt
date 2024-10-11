import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            {/* Infos de l'entreprise */}
            <InfoSection>
              <p className="font15 extraBold whiteColor" style={{ marginBottom: "15px" }}>
                Doukkala Maroc Travaux
              </p>
              <p className="font13 whiteColor" style={{ marginBottom: "5px" }}>
                <strong>Adresse :</strong> HAY AL QODS RUE 6 N°45, RDC SIDI BERNOUSSI-CASA
              </p>
              <p className="font13 whiteColor" style={{ marginBottom: "5px" }}>
                <strong>Email :</strong> <a href="mailto:DoukkalaMarocTrav@gmail.com" className="whiteColor">DoukkalaMarocTrav@gmail.com</a>
              </p>
              <p className="font13 whiteColor" style={{ marginBottom: "15px" }}>
                <strong>Téléphone :</strong> +212 6 61 93 88 81 / +212 5 21 04 72 83
              </p>
            </InfoSection>

            {/* Infos sur le développeur */}
            <DeveloperSection>
              <p className="font15 extraBold whiteColor" style={{ marginBottom: "15px" }}>
                Développé par Yahya Lemkharbech
              </p>
              <a href="tel:+212697325495" className="whiteColor">
                <FaPhoneAlt /> 0697325495
              </a>
              <a href="mailto:yahya@example.com" className="whiteColor">
                <FaEnvelope /> lemkharbechy@gmail.com
              </a>
              <SocialIcons>
                <a href="https://www.facebook.com/yahya.widad3572?locale=fr_FR" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.linkedin.com/in/yahya-lemkharebech-5a25b0236/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
              </SocialIcons>
            </DeveloperSection>
          </InnerWrapper>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <StyleP className="whiteColor font13">
              © {getCurrentYear()} - Doukkala Maroc Travaux. Tous droits réservés.
            </StyleP>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #222;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    color: white;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

const DeveloperSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    color: white;
    margin-bottom: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: #f49e38;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-size: 20px;
    transition: color 0.3s;

    &:hover {
      color: #0072b1; /* Couleur pour LinkedIn */
    }
  }
`;

const StyleP = styled.p`
  margin: 0;
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;
