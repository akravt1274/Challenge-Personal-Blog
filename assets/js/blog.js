 
//Retrieving 'post' object from the Local storage by using getItem method
const storedPosts = localStorage.getItem('posts');

//Checking if there is any 'post' stored in the Local Storage
if(storedPosts) { 

    let posts = JSON.parse(storedPosts); 
    
    //Adding posts to the page by retrieving data from the local storage
    posts.forEach(post => {

        const blog = document.querySelector('#posts');

        //Creating blog elements (section, h3 for title, p for content, p for username)
        const sectionEl = document.createElement('section');
        const titleEl = document.createElement('h2');
        const contentEl = document.createElement('p');
        const usernameEl = document.createElement('p');
        
        //Adding content to the blog elements -> from the local storage
        titleEl.textContent = post.title;
        contentEl.textContent = post.content;
        usernameEl.textContent = `Posted by: ${post.username}`;

        //Adding classes to elements using setAttribute() method
        sectionEl.setAttribute('class', 'post');

        //Appending elements using appendChild() method
        sectionEl.appendChild(titleEl);
        sectionEl.appendChild(contentEl);
        sectionEl.appendChild(usernameEl);
        blog.appendChild(sectionEl);
        
    });

} else {
    console.log('No posts found in local storage');        
} 

//Navigating to the index.html page
const backBtn = document.querySelector('#back-btn');

backBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    window.location = "index.html"; 
});

