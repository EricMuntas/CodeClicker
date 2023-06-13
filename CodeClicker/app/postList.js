/*const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item list-group-item-action">
        <h5>${post.correu}</h5>
        <p>${post.punts}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-white">Login to See Posts</h4>';
  }
};
*/

export const setupPosts = (data) => {
  if (data.length) {
    data.forEach((doc) => {
      const post = doc.data();
      const correu = post.correu;
      const punts = post.punts;
      console.log(correu);
      console.log(punts);
    });
    console.log("POST");
  } else {
    console.log("NO POST");
  }
};