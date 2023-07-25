function searchUser(){
    const username= document.getElementById('gitusername').value;
    if(!username){
        alert('Please enter a GitHub username');
        console.log('Please enter a GitHub username');
        return;
    }
    fetch(`https://api.github.com/users/${username}`)
    .then ((response) =>  response.json())
        .then((data) => displayUserDetails(data))
         . catch (error => {
            alert(`User not found or API error: ${error.message}`);
            console.log(error);
        
    });
    
    }


function displayUserDetails(user){
    const userDetails = getElementById(userDetail).value;
    userDetailsDiv.innerHTML = " ";

    // creating userProfile DIV in the html element
    const userProfile = createElement("div");
    userProfile.classList.add("userProfile");



}