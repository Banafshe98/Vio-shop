import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/Login");
  };

  const [showWelcome, setShowWelcome] = useState(true);

  const onHideWelcome = () => {
    setShowWelcome(false);
    localStorage.setItem("show_welcome", JSON.stringify(false));}

    useEffect(() => {
      let welcomeMessage = localStorage.getItem("show_welcome")
      if (welcomeMessage) {
        setShowWelcome(JSON.parse(welcomeMessage));
      }
    }, []);
  
  return (
    <>
      {showWelcome && (
        <div className="bg-pink-400 flex flex-nowrap flex-col h-15 px-3 py-2 justify-between items-center">
          <svg
            onClick={onHideWelcome}
            className="justify-end"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
          <div>به ویو شاپ خوش آمدید</div>
          <button
            className="px-4 py-1 bg-slate-100 text-xs rounded"
            onClick={handleLoginClick}
          >
            برای لاگین کلیک کنید
          </button>
        </div>
      )}
    </>
  );
};
