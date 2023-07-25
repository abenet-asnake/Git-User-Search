function searchUser(){
    const username= document.getElementById('gitusername').value;
    if(!username){
        alert('Please enter a GitHub username');
        return;
    }
    axios.get(`https://api.github.com/users/${username}`)
    .then ((response) => {
        const userDetails = response.data;
        displayUserDetails(userDetails);
        
    })
    . catch (error => {
        alert(`User not found or API error: ${error.message}`);
    });
}

function displayUserDetails(user){

}