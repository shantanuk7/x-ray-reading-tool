'use client'
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Upload() {
  const [data, setData] = useState<string | null>(null);
  const router = useRouter();

  const handleUpload = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("/api/runModel");
      console.log(response);
      setData(response.data.data);

      // Prevent the page from changing route.
      router.push("/", false);
    } catch (error) {
      console.error("Error occurred while uploading:", error);
    }
  };

  return (
    <div className="flex-all-center">
      <h1>{data}</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="uploadIcon"
      ></svg>
      <div>
        <h2>DRAG & DROP OR</h2>
        <h4>Select Image</h4>
      </div>
      <form
        action="/api/upload"
        method="post"
        encType="multipart/form-data"
        onSubmit={handleUpload}
      >
        <input type="file" name="file" required />
        <button className="accent-btn" type="submit">
          UPLOAD
        </button>
      </form>
    </div>
  );
}