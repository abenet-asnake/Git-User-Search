function searchUser(){
    const username= document.getElementById("gitUsername").value;
 
    fetch(`https://api.github.com/users/${username}`)
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
          displayUserDetails(data);
          return fetch(data.repos_url); 
        })
        .then(response => response.json())
        .then(repositories => displayRepositories(repositories))
        .catch(error => console.error(error));
    }


function displayUserDetails(user){
console.log('hello  world');
 const userDetailsDiv = document.getElementById("userDetail");
userDetailsDiv.innerHTML = " ";

// creating userProfile DIV in the html element
const userProfile = document.createElement("div");
userProfile.classList.add("user-Profile");
// creating user image element having the classList.add("user-image") method
const userImage = document.createElement("img");
userImage.src = user.avatar_url;
userImage.classList.add("user-image");
userProfile.appendChild(userImage);
// creating user name of git  
const userName = document.createElement("h2");
userName.textContent = user.login;
userProfile.appendChild(userName);
// creating user profile link 
const userProfileLink = document.createElement("a");
userProfileLink.href=user.html_url;
userProfileLink.textContent = "View Profile";
userProfile.appendChild(userProfileLink);
// creating follower profile link
const followerProfile = document.createElement("p");
followerProfile.textContent = "Follower: "+user.followers;
userProfile.appendChild(followerProfile);
// public repository 
const publicRepo=document.createElement("p");
publicRepo.textContent="Public Repository: "+ user.public_repos;
userProfile.appendChild(publicRepo);


userDetailsDiv.appendChild(userProfile);
}

//listing repositories
function displayRepositories(repositories) {
    const repoList = document.createElement("ul");
    repositories.forEach(repo => {
      const listItem = document.createElement("li");
      const repoLink = document.createElement("a");
      repoLink.href = repo.html_url;
      repoLink.textContent = repo.name;
      listItem.appendChild(repoLink);
      repoList.appendChild(listItem);
    });

    const userDetailsDiv = document.getElementById("userDetail");
    userDetailsDiv.appendChild(repoList);
  }