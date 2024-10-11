import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ah1qmtg", // Remplace par ton Service ID EmailJS
        "template_bzrec4c", // Remplace par ton Template ID EmailJS
        {
          from_name: formData.fname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: "Jawad", // Optionnel : Nom du destinataire de l'email
        },
        "eJ2VidhSlIBkiyd2W" // Remplace par ton User ID EmailJS
      )
      .then(
        (result) => {
          alert("Message envoyé avec succès !");
        },
        (error) => {
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Contactez-nous</h1>
            <p className="font13">
              Nous serons ravis de vous aider. Veuillez remplir les informations ci-dessous pour que nous puissions vous recontacter rapidement.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            {/* Formulaire de contact */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={sendEmail}>
                <label className="font13">Nom complet :</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="font20 extraBold"
                  value={formData.fname}
                  onChange={handleInputChange}
                  required
                />
                <label className="font13">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="font20 extraBold"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label className="font13">Numéro de téléphone :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="font20 extraBold"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <label className="font13">Message :</label>
                <textarea
                  rows="4"
                  id="message"
                  name="message"
                  className="font20 extraBold"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <SumbitWrapper className="flex">
                  <SubmitButton
                    type="submit"
                    className="pointer animate radius8"
                    style={{ maxWidth: "220px" }}
                  >
                        Envoyer le message
                        </SubmitButton>
                </SumbitWrapper>
              </Form>
            </div>
            {/* Carte Google Maps et informations de contact */}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <MapContainer>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.962676792314!2d-7.490036!3d33.618754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdff492c5b4f%3A0x9a3e8f1b7c5e8752!2sHay%20Al%20Qods%2C%20Rue%206%2C%20N%C2%B045%20RDC%2C%20Sidi%20Bernoussi%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1695829455555!5m2!1sfr!2sma"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                ></iframe>
              </MapContainer>
              <ContactInfo>
                <p><FaMapMarkerAlt /> <strong>Adresse :</strong> HAY AL QODS, RUE 6 N°45, RDC, SIDI BERNOUSSI-CASA</p>
                <p><FaEnvelope /> <strong>Email :</strong> DoukkalaMarocTrav@gmail.com</p>
                <p><FaPhone /> <strong>Téléphone :</strong> +212 6 61 93 88 81 / +212 5 21 04 72 83</p>
              </ContactInfo>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// STYLED COMPONENTS

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 50px 0;
`;

const HeaderInfo = styled.div`
  padding: 50px 0 30px 0;
  text-align: center;
  h1 {
    color: #273136;
  }
  p {
    color: #707070;
  }
`;
const SubmitButton = styled.button`
  background-color: #f49e38;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d88e32;
  }
`;


const Form = styled.form`
  padding: 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;
    border-bottom: 2px solid #273136;
    height: 40px;
    margin-bottom: 30px;
    font-size: 16px;
    color: #273136;
    padding: 8px 0;
    transition: border-color 0.3s;
  }
  textarea {
    min-height: 120px;
  }
  input:focus,
  textarea:focus {
    border-color: #f49e38;
  }
`;
const ButtonInput = styled.input`
  border: 2px solid #f49e38; /* Couleur de la bordure */
  background-color: #f49e38; /* Couleur de fond du bouton */
  color: #fff; /* Couleur du texte (blanc) pour un contraste avec le fond orange */
  width: 100%;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  /* Effet de survol */
  :hover {
    background-color: #d87d18; /* Changer la couleur de fond au survol */
    border-color: #d87d18; /* Changer la couleur de bordure au survol */
  }
`;


const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const MapContainer = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  p {
    font-size: 16px;
    color: #273136;
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;
