import axios from "axios";

export async function getAllGifs() {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "GET",
    url: `${process.env.REACT_APP_SERVER_URL}/gifs/`,

    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}
export async function uploadGif(body) {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_URL}/gifs/newGif`,
    data: body,
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}
