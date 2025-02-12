import React, { useEffect, useState, useRef } from "react";

function TypingEffect(text, delay = 50, commaPause = 3000){
    const [visibleLetters, setVisibleLetters] = useState([]);
    
    useEffect(() => {
      let isCancelled = false; // To handle cleanup
  
      const showLetters = async () => {
        for (let i = 0; i < text.length; i++) {
          if (isCancelled) return;
  
          setVisibleLetters((prev) => [...prev, i]);
          const currentDelay = text[i] === "," ? commaPause : delay;
          await new Promise((resolve) => setTimeout(resolve, currentDelay));
        }
      };
      
      showLetters(); // Start the fade-in effect
  
      return () => {
        isCancelled = true; // Cleanup to cancel typing effect if component unmounts
      };
    }, [commaPause, delay, text]);
  
    return (
      <div className="typing-effect">
        {text.split("").map((char, index) => (
          <div key={index} className={visibleLetters.includes(index) ? "typeletter" : "hideletter"}>
            {char}
          </div>
        ))}
      </div>
    );
  };
  
  export default TypingEffect;