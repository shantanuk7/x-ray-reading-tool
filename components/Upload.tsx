"use client"

import { useState } from "react";
import axios from "axios";

export default function Upload() {
    const [data, setData] = useState("No results yet");
  
    const clickToUpload = async () => {
        const response = await axios.get("/api/runModel");
        console.log(response);
        
    };
  
    return (
      <div className="flex-all-center">
        <h1>{data}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="uploadIcon"
        >
        </svg>
        <div>
          <h2>DRAG & DROP OR</h2>
          <button className="accent-btn" onClick={clickToUpload}>
            UPLOAD
          </button>
        </div>
      </div>
    );
  }
  