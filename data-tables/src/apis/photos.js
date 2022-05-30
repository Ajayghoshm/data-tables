import axios from "axios";

export const photosApi = async () => {
  try {
    let data = await axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        return res.data;
      });
    return data;
  } catch (error) {
    console.debug("error in api call", error);
  }
};
