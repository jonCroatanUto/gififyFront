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

export async function deleteImage({
  //owner,
  id,
}) {
  return axios({
    method: "DELETE",
    url: `${process.env.REACT_APP_SERVER_URL}gifs/deleteGif/${id}`,
  });
}
export async function updateImage({
  //owner,
  id,

  title,
}) {
  return axios({
    method: "PATCH",
    url: `${process.env.REACT_APP_SERVER_URL}}gifs/updateGif/${id}`,
    data: {
      title: title,
    },
  });
}
export async function register(body) {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_URL}/users/register`,
    data: body,
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}
export async function login(body) {
  //   console.log(`${process.env.REACT_APP_SERVER_URL}/gifs/`);
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
    data: body,
    // headers: {
    //   Authorization: `Bearer ${userToken}`,
    // },
  });
}
