function searchUser(){
    const username= document.getElementById("gitUsername").value;
 
    fetch(`https://api.github.com/users/${username}`)
    .then ((response) =>  response.json())
    .then((data) => displayUserDetails(data))
    . catch (error =>console.log(error));
    
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

userDetailsDiv.appendChild(userProfile);
}