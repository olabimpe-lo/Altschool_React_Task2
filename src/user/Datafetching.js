import React, { useState, useEffect } from "react";
import axios from "axios";
function Datafetching() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res);
        setPhotos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); //the empty array prevents the data from being infinite

  return (
    <div>
      <ul>
        {photos.map((photos) => (
          <li key={photos.id}>{photos.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Datafetching;
