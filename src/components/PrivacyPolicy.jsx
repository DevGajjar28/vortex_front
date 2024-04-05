import React from 'react';

function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header style={{ backgroundColor: '#333', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <h1>Privacy Policy</h1>
      </header>

      <div className="container">
        <div className="E8P2f" style={{ margin: '20px 0', padding: '0 20px' }}>
          <div className="hdP0R">
            <div>
              <span>
                <div id="whats-in-this-privacy-policy"></div>
                <h2>What's in this Privacy Policy?</h2>
                <ul>
                  <li>
                    <p>
                      <a href="#privacy-policy-amendments">Privacy Policy Amendments</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#personal-information-we-collect">Personal Information We Collect</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#how-we-use-personal-information">How We Use Personal Information</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#how-share-personal-information">How We Share Personal Information</a>
                    </p>
                  </li>
                  <li>
                    <p><a href="#information-security">Information Security</a></p>
                  </li>
                  <li>
                    <p>
                      <a href="#retention-of-personal-information">Retention of Personal Information</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="#rights-regarding-your-personal-information">Rights Regarding your Personal Information</a>
                    </p>
                  </li>
                  <li>
                    <p><a href="#direct-marketing">Direct Marketing</a></p>
                  </li>
                  <li>
                    <p><a href="#data-transfer">Data Transfer</a></p>
                  </li>
                  <li>
                    <p>
                      <a href="#third-party-websites-and-services">Third Party Websites and Services</a>
                    </p>
                  </li>
                  <li>
                    <p><a href="#childrens-privacy">Children’s Privacy</a></p>
                  </li>
                  <li>
                    <p><a href="#contact-us">Contact Us</a></p>
                  </li>
                </ul>
                {/* Additional sections go here */}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-to-top" onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#007BFF', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
        <span className="arrow-up" style={{ border: 'solid white', borderWidth: '0 3px 3px 0', display: 'inline-block', padding: '3px', transform: 'rotate(-135deg)' }}></span>
      </div>
    </>
  );
}

export default PrivacyPolicy;
