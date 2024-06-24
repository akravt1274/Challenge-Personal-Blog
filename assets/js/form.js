// Adding a new post

const addBlog = document.querySelector('#add-blog');

addBlog.addEventListener('submit', function(event){    
    event.preventDefault();

    //Getting a value for each field input and storing it in a variable
    const username = addBlog.querySelector('#username').value;
    const title = addBlog.querySelector('#title').value;
    const content = addBlog.querySelector('#content').value;

    //Saving values into an object    
    const newPost = {username: username, title: title, content: content};    
   
    //Retrieving 'post' object from the Local storage by using getItem method
    const storedPosts = localStorage.getItem('posts');     

    //Initializing array to store posts
    let posts = [];

    //Checking if there is any 'post' stored in the Local Storage
    if(storedPosts) {                       
        posts = JSON.parse(storedPosts);  //Parsing the JSON string into a JavaScript object and storing into array                  
    } else {
        console.log('No posts found in local storage');        
    }   
    
    //Adding new post to the array
    posts.push(newPost);

    //Saving the updated data into the Local storage by using setItem method
    localStorage.setItem('posts', JSON.stringify(posts));

    //Navigating to the blog.html page
    window.location = "blog.html"; 
});

