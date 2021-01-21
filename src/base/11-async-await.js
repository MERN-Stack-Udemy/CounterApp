import { api_key } from "../giphy/api_key";

export const getImagen = async () => {
  try {
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    // console.error(error);
    return 'No existe'
  }
};
