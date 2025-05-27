import React, { useState } from "react";

const Home = ({ cookie }) => {
  const [fortune, setFortune] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const drawCard = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * cookie.length);
      setFortune(cookie[randomIndex]);
      setIsDrawing(false);
    }, 1000); 
  };

  return (
    <div className="min-vh-100 d-flex align-items-center bg-gradient-primary">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-4 fw-bold text-white mb-3">
              Fortune Cookie Wisdom
            </h1>
            <p className="lead text-light mb-5">
              Draw a card to reveal your fortune and glimpse into your destiny
            </p>

            <div className="position-relative mb-5" style={{ height: "300px" }}>
              <img 
                src="/fortune.png" 
                alt="Fortune cookie" 
                className="img-fluid position-absolute"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  maxHeight: "250px",
                  zIndex: 1,
                  filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))"
                }}
              />
              
              <button 
                onClick={drawCard}
                disabled={isDrawing}
                className="btn btn-lg btn-light rounded-pill position-absolute"
                style={{
                  bottom: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                  width: "120px",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                }}
              >
                {isDrawing ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <img 
                    src="/card.png" 
                    alt="Draw card" 
                    className="img-fluid"
                    style={{ maxHeight: "80px" }}
                  />
                )}
              </button>
            </div>

            {fortune && (
              <div className="card border-0 shadow-lg mx-auto" style={{ maxWidth: "600px" }}>
                <div className="card-body p-4">
                  <div className="bg-light p-4 rounded-3">
                    <h3 className="display-6 text-dark mb-0">
                      "{fortune.fortune}"
                    </h3>
                  </div>
                  <div className="mt-3 text-muted small">
                    <i className="bi bi-stars me-2"></i>
                    Your fortune for today
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 text-light small">
              <p>Click the card above to draw your fortune</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;