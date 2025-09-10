import styled from 'styled-components';
import { Phone as PhoneIcon } from 'lucide-react';

const PhoneLoader = () => {
  return (
    <StyledWrapper>
      <a
        href="tel:+40316320183"
        aria-label="Sună acum"
        className="loader-link"
      >
        <div className="loader" role="button">
          <div className="box">
            <div className="logo" aria-hidden>
              <PhoneIcon className="svg" />
            </div>
          </div>
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader-link {
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }

  .loader {
    --size: 220px;
    --duration: 2s;
    --logo-color: #8a8a8a;
    --ring-bg-a: rgba(50, 50, 50, 0.2);
    --ring-bg-b: rgba(100, 100, 100, 0.2);
    --ring-border: rgba(100, 100, 100, 1);
    height: var(--size);
    aspect-ratio: 1;
    position: relative;
    transition: transform 0.2s ease-in-out;
  }

  .loader:hover {
    transform: scale(1.02);
  }

  .loader .box {
    position: absolute;
    background: var(--ring-bg-a);
    background: linear-gradient(0deg, var(--ring-bg-a) 0%, var(--ring-bg-b) 100%);
    border-radius: 50%;
    border-top: 1px solid var(--ring-border);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    backdrop-filter: blur(5px);
    animation: ripple var(--duration) infinite ease-in-out;
  }

  .loader .box:nth-child(1) {
    inset: 40%;
    z-index: 99;
  }

  .loader .box:nth-child(2) {
    inset: 30%;
    z-index: 98;
    border-color: rgba(100, 100, 100, 0.8);
    animation-delay: 0.2s;
  }

  .loader .box:nth-child(3) {
    inset: 20%;
    z-index: 97;
    border-color: rgba(100, 100, 100, 0.6);
    animation-delay: 0.4s;
  }

  .loader .box:nth-child(4) {
    inset: 10%;
    z-index: 96;
    border-color: rgba(100, 100, 100, 0.4);
    animation-delay: 0.6s;
  }

  .loader .box:nth-child(5) {
    inset: 0%;
    z-index: 95;
    border-color: rgba(100, 100, 100, 0.2);
    animation-delay: 0.8s;
  }

  .loader .logo {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    padding: 30%;
  }

  .loader .logo .svg {
    width: 100%;
    height: 100%;
    color: var(--logo-color);
    stroke-width: 2.25px;
    animation: logo-color var(--duration) infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
    50% {
      transform: scale(1.3);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 20px -0px;
    }
    100% {
      transform: scale(1);
      box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px -0px;
    }
  }
  
  @keyframes logo-color {
    0% { color: #6b7280; }
    50% { color: #ffffff; }
    100% { color: #6b7280; }
  }
  
  @media (max-width: 768px) {
    .loader {
      --size: 180px;
    }
  }
`;

export default PhoneLoader;
