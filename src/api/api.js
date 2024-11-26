import axios from "axios";

export const getArtInfo = async (theme, number) => {
  //const [pins, setPins] = useState([]);
  const result = await axios.get(
    `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=${number}&q=${theme}`
  );
  return result.data.data;
};
