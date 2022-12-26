class Request {
  // Get Requesti
  async get(url) {
    const response = await fetch(url); // Response Object
    const responseData = await response.json(); // JSON Object
    return responseData;
  }
  // Post Requesti
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }); // Response Object
    const responseData = await response.json();
    return responseData;
  }

  // Put Request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }); // Response Object
    const responseData = await response.json();
    return responseData;
  }

  // Delete Request
  async delete(url) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1",
      {
        method: "DELETE",
      }
    ); // Response Object
    return "Veri silme işlemi başarılı";
  }
}

const request = new Request();

// Get Request

// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((albums) => {
//     console.log(albums); // sekron
//   })
//   .catch((err) => console.log(err));

// Post Request
// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: 1,
//     title: "Naber",
//   })
//   .then((newAlbum) => console.log(newAlbum))
//   .catch((err) => console.log(err));

// // Put Request
// request
//   .put("https://jsonplaceholder.typicode.com/albums/20", {
//     userId: 1,
//     title: "Naber",
//   })
//   .then((album) => console.log(album))
//   .catch((err) => console.log(err));

// // Delete Request
request
  .delete("https://jsonplaceholder.typicode.com/albums/20")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));

// // 90 satır
