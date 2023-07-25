function searchUser(){
    const username= document.getElementById('gitusername').value;
    if(!username){
        alert('Please enter a GitHub username');
        return;
    }
    axios.get(`https://api.github.com/users/${username}`);
    
}