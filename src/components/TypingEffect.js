import React, { useEffect, useState, useRef } from "react";

function TypingEffect(text, delay = 80, commaPause = 3000){
    const [typedText, setTypedText] = useState("");
    let textIndex = useRef(0);
    
    useEffect(() => {
      let isCancelled = false; // To handle cleanup
  
      const typeCharacter = async () => {
        for (let i = 0; i < text.length; i++) {
          if (isCancelled) return;
  
          textIndex.current = i;
          setTypedText((prev) => prev + text[i]);
  
          if (text[i] === ",") {
            await blinkCursor(commaPause);
          }
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      };
      
      async function blinkCursor(msDelay) {
        setTypedText((prev) => prev + "_");
        await new Promise((resolve) => setTimeout(resolve, msDelay));
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      }

      if (textIndex.current === 0)
        typeCharacter(); // Start the typing effect
  
      return () => {
        isCancelled = true; // Cleanup to cancel typing effect if component unmounts
      };
    }, [commaPause, delay, text]);
  
    return typedText.split("").map((char, index) =>
      char === "_" ? (
        <div key={index} class="typecursor">
          &nbsp;&nbsp;
        </div>
      ) : (
        <div key={index} class="typeletter">
          {char}
        </div>
      )
    );
  };
  
  export default TypingEffect;