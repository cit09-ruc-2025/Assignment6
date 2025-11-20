import { useEffect, useState } from "react";
import { API_KEY, IMAGE_BASE, TMDB_BASE } from "../utils/api";

export default function ImagesFor({ id }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${TMDB_BASE}/person/${id}/images?api_key=${API_KEY}`
      );

      const data = await res.json();
      setImages(data.profiles || []);
    })();
  }, [id]);

  if (!images || !images.length) {
    return <></>;
  }

  return (
    <>
      <p style={{ textDecoration: "underline", fontWeight: "600" }}>Images</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={`${IMAGE_BASE}/w185${img.file_path}`}
            alt=""
            style={{ borderRadius: "8px" }}
          />
        ))}
      </div>
    </>
  );
}
