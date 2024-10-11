import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const testimonials = [
    {
      title: "Service de Climatisation",
      text: "Le service de climatisation est incroyable, l'équipe a fait un travail exceptionnel. Très satisfait !",
      author: "Omar El Alami, 3 jours",
      rating: 5,
    },
    {
      title: "Installation de Ventilation",
      text: "Excellente expérience avec la ventilation. Les délais ont été respectés et le résultat est au rendez-vous.",
      author: "Fatima Zahra Benkirane, 1 semaine",
      rating: 4,
    },
    {
      title: "Système de Chauffage",
      text: "Le système de chauffage est parfait pour notre maison, il est économique et facile à utiliser. Bravo !",
      author: "Youssef Fassi, 2 jours",
      rating: 5,
    },
    {
      title: "Service de Plomberie",
      text: "Le service de plomberie était rapide et efficace. Je recommande fortement cette entreprise !",
      author: "Sara Majdoubi, 5 jours",
      rating: 5,
    },
    {
      title: "Réparation rapide",
      text: "Travail propre et bien réalisé, je suis très content des résultats. Merci à toute l'équipe.",
      author: "Amine Bouskoura, 3 jours",
      rating: 4,
    },
    {
      title: "Service de Sécurité",
      text: "Le système de vidéosurveillance installé a été un excellent choix pour la sécurité de mon entreprise.",
      author: "Khalid Essaadi, 2 jours",
      rating: 5,
    },
    {
      title: "Maintenance Électrique",
      text: "Le service d'électricité a été rapide et efficace. Nous avons pu résoudre nos problèmes en un rien de temps.",
      author: "Rania Hassani, 1 semaine",
      rating: 5,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper id="Temoignages">
      {" "}
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Ce que disent nos clients</h1>
            <p className="font13">
              Nos clients sont notre meilleure publicité. Voici ce qu'ils ont à
              dire sur nos services.
            </p>
          </HeaderInfo>

          {/* Slider de témoignages */}
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index}>
                <QuoteWrapper className="flexCenter darkBg radius8">
                  <QuotesWrapper>
                    <QuotesIcon />
                  </QuotesWrapper>
                  <div>
                    <p className="font15 whiteColor">
                      <em>{testimonial.text}</em>
                    </p>
                    <Rating>
                      {[...Array(5)].map((star, i) => (
                        <FaStar
                          key={i}
                          color={i < testimonial.rating ? "#f49e38" : "#e4e5e9"}
                          size={20} // Ajustement de la taille pour correspondre au design
                        />
                      ))}
                    </Rating>
                    <p
                      className="font13 orangeColor textRight"
                      style={{ marginTop: "10px" }}
                    >
                      {testimonial.author}
                    </p>
                  </div>
                </QuoteWrapper>
              </TestimonialCard>
            ))}
          </Slider>

          {/* Formulaire pour ajouter un commentaire */}
          <CommentForm>
            <h3>Ajoutez votre témoignage</h3>
            <InputGroup>
              <textarea
                placeholder="Votre commentaire..."
                rows="2"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </InputGroup>
            <Rating>
              <p>Évaluez nos services :</p>
              {[...Array(5)].map((star, i) => (
                <FaStar
                  key={i}
                  color={i < rating ? "#f49e38" : "#e4e5e9"}
                  size={30}
                  onClick={() => setRating(i + 1)}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    transform: i < rating ? "scale(1.1)" : "scale(1)",
                  }}
                />
              ))}
            </Rating>
            <SubmitButton
              onClick={() => alert("Merci pour votre commentaire !")}
            >
              Soumettre
            </SubmitButton>
          </CommentForm>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  h1 {
    color: #273136;
  }
  p {
    color: #273136;
  }
`;

const TestimonialCard = styled.div`
  padding: 30px;
  background: transparent;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const QuoteWrapper = styled.div`
  display: flex;
  background-color: #273136; /* Arrière-plan sombre */
  border-radius: 8px;
  padding: 20px;
  color: #fff;
  align-items: center;
`;

const QuotesWrapper = styled.div`
  margin-right: 20px;
`;

const QuotesIcon = styled.div`
  width: 40px;
  height: 40px;
  background: url("/path/to/quote-icon.png") no-repeat center center;
  background-size: contain;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

const CommentForm = styled.div`
  background: #f0f0f0;
  padding: 30px;
  margin-top: 50px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;

  h3 {
    color: #273136;
    margin-bottom: 15px;
  }

  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
    color: #273136;
    background: #fff;
    resize: none;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.05);
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
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
