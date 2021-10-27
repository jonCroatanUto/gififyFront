import axios from "axios";

export async function generateMeme(like, dislike) {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "GET",
    url: `https://memeados.p.rapidapi.com/drakelikehate?text2=${like}&text1=${dislike}`,

    headers: {
      "X-RapidAPI-Host": "memeados.p.rapidapi.com",
      "X-RapidAPI-Key": "5155b19931msheb97389fa721affp10acdfjsn10b9c1bb84e8",
    },
  });
}
