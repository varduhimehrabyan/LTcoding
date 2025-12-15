"use client";
import React from "react";

export default function Button({
  className = "",
  text = "Schedule a Call",
  onClick = () => { },
}) {
  return (
    <button className={`schedule-call-btn ${className}`} onClick={onClick}>
      <span className="btn-text">{text}</span>
      <div className="btn-shine"></div>
      <div className="btn-particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <style jsx>{`
        .schedule-call-btn {
          position: relative;
          padding: 16px 32px;
          background: linear-gradient(135deg, #6201fa 0%, #0c1682 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 10px 30px rgba(98, 1, 250, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          text-transform: uppercase;
          letter-spacing: 1px;
          min-width: 200px;
          /* Always active pulse animation */
          animation: pulse 2s infinite ease-in-out;
        }

        .schedule-call-btn:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, #7a1bff 0%, #1a2299 100%);
          /* Faster pulse on hover */
          animation: pulseFast 1s infinite ease-in-out;
        }

        .schedule-call-btn:active {
          transform: scale(1.01);
          transition: all 0.1s ease;
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        /* Shine effect - only on hover */
        .btn-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.6s ease;
        }

        .schedule-call-btn:hover .btn-shine {
          left: 100%;
        }

        /* Floating particles - always active */
        .btn-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          border-radius: 50px;
        }

        .btn-particles span {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float 3s infinite ease-in-out;
        }

        .btn-particles span:nth-child(1) {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .btn-particles span:nth-child(2) {
          top: 60%;
          left: 80%;
          animation-delay: 0.75s;
        }

        .btn-particles span:nth-child(3) {
          top: 80%;
          left: 40%;
          animation-delay: 1.5s;
        }

        .btn-particles span:nth-child(4) {
          top: 40%;
          left: 70%;
          animation-delay: 2.25s;
        }

        @keyframes float {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-10px) scale(1);
          }
        }

        /* Always active pulse effect */
        @keyframes pulse {
          0% {
            box-shadow: 0 10px 30px rgba(98, 1, 250, 0.4),
              0 0 0 0 rgba(98, 1, 250, 0.7);
          }
          70% {
            box-shadow: 0 10px 30px rgba(98, 1, 250, 0.4),
              0 0 0 10px rgba(98, 1, 250, 0);
          }
          100% {
            box-shadow: 0 10px 30px rgba(98, 1, 250, 0.4),
              0 0 0 0 rgba(98, 1, 250, 0);
          }
        }

        /* Faster pulse on hover */
        @keyframes pulseFast {
          0% {
            box-shadow: 0 20px 40px rgba(98, 1, 250, 0.5),
              0 0 0 0 rgba(98, 1, 250, 0.8);
          }
          70% {
            box-shadow: 0 20px 40px rgba(98, 1, 250, 0.5),
              0 0 0 15px rgba(98, 1, 250, 0);
          }
          100% {
            box-shadow: 0 20px 40px rgba(98, 1, 250, 0.5),
              0 0 0 0 rgba(98, 1, 250, 0);
          }
        }

        /* Focus effect - remove separate animation since it's always pulsing */
        .schedule-call-btn:focus {
          outline: none;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .schedule-call-btn {
            padding: 14px 28px;
            font-size: 14px;
            min-width: 180px;
          }
        }
      `}</style>
    </button>
  );
}
