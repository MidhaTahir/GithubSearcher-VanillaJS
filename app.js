const github = new Github();
const ui = new UI();

const search = document.getElementById("btn");

search.addEventListener("click", (e) => {
  e.preventDefault();
  const searchUser = document.getElementById("searchUser");
  const userText = searchUser.value;
    if (userText !== "") {
      github
        .getUser(userText)
        .then((data) => {
          if (data.profile.message === "Not Found") {
            //show alert
            ui.showAlert("User not found", "alert alert-danger");
          } else {
            //show profile
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
          }
        })
        .catch((err) => console.log(err));
    } else {
      //clear profile
      ui.clearProfile();
    }
});
