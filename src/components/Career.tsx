import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Chachaudhary.tech</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built a full-stack application motivating users towards cleaning the Ganga
              and raising awareness across various environmental causes. Powered by modern
              and scalable technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built powerful React applications with clean architecture and intuitive
              UX. Developed and delivered production-ready projects using modern,
              scalable technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Blockchain & Web3 Developer</h4>
                <h5>Real World Web3 Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learned Blockchain and Web3 technologies, building real-world decentralized
              applications with modern and scalable infrastructure. Exploring the future
              of the decentralized web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
