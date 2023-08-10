import axios from "axios";
import { useState } from "react";
import { setting } from "../store";

export const getArtInfo = async (theme) => {
  //const [pins, setPins] = useState([]);
  const result = await axios.get(
    `https://openaccess-api.clevelandart.org/api/artworks/?has_image=1`
  );
  return result.data.data;
};
