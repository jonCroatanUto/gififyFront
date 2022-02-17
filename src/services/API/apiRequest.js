import axios from "axios";

//THIS IS IMGFLIP API:

export async function displayMemesTemplates() {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "GET",
    url: " https://api.imgflip.com/get_memes",
  });
}
export async function createMemes(template_id, text0, text1) {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "POST",
    url: "https://api.imgflip.com/caption_image",
    params: {
      template_id: template_id,
      username: "creoatan",
      password: `${process.env.REACT_APP_IMGFLIP_PASS}`,
      text0: text0,
      text1: text1,
    },
  });
}

// This comented api requests givem a encrypted response, i'm not able to solve so i change and i use a imgflip api below witch have really simple usage
// export async function generateMeme(like, dislike) {
//   //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
//   return axios({
//     method: "GET",
//     url: `https://memeados.p.rapidapi.com/drakelikehate?text2=${like}&text1=${dislike}`,

//     headers: {
//       "X-RapidAPI-Host": "memeados.p.rapidapi.com",
//       "X-RapidAPI-Key": "5155b19931msheb97389fa721affp10acdfjsn10b9c1bb84e8",
//       Cookie: "rapidapi_user_group=r10a",
//       "Content-Type": "image/png",
//     },
//   });
// }
// export async function generateMeme2() {
//   //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
//   return axios.request({
//     method: "GET",
//     url: "https://ronreiter-meme-generator.p.rapidapi.com/meme",
//     params: {
//       top: "Top Text",
//       bottom: "Bottom Text",
//       meme: "Condescending-Wonka",
//       font_size: "50",
//       font: "Impact",
//     },
//     headers: {
//       "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com",
//       "x-rapidapi-key": "5155b19931msheb97389fa721affp10acdfjsn10b9c1bb84e8",
//     },
//   });
// }
