document.addEventListener("DOMContentLoaded", function createPostList() {
    const postList = document.getElementById("postList");

    postList.innerHTML="";

     //*SEARCH POSTS*//
    fetch ('https://dummyjson.com/posts/search?q=love')
    .then(res => res.json())
    .then(console.log);

    //*GET ALL POSTS*//
    fetch('https://dummyjson.com/posts')
     .then(res => res.json())
     .then(console.log);
 
    //*GETS SINGLE POST*//
    fetch('https://dummyjson.com/posts/1')
     .then(res => res.json())
     .then(console.log);

     //*GET ALL POSTS USER ID
     fetch('https://dummyjson.com/posts/user/5')
     .then(res => res.json())
     .then(console.log);
            
     //*GET POSTS COMMENTS*//
     fetch('https://dummyjson.com/posts/1/comments')
     .then(res => res.json())
     .then(console.log);
     
     //*ADD A NEW POST*//
     fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      title: 'I am in love with someone.',
      userId: 5,
    /* other post data */
  })
})
.then(res => res.json())
.then(console.log);

       //*UPDATE POST*//
        fetch('https://dummyjson.com/posts/1', {
         method: 'PUT', /* or PATCH */
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
         title: 'I think I should shift to the moon',
     })
   })
      .then(res => res.json())
      .then(console.log);

   //*DELETE A POST*//
        fetch('https://dummyjson.com/posts/1', {
         method: 'DELETE',
    })
      .then(res => res.json())
      .then(console.log);
            

            
  
    // Simulated data (replace with actual data from DMM API)
    const posts = [
      { id: 1, title: "Search posts", content: "https://dummyjson.com/posts/search?q=love"}, 
      { id: 2, title: "Get all posts", content: "https://dummyjson.com/posts" },
      { id: 3, title: "Get single post", content: "https://dummyjson.com/posts/1" },
      { id: 4, title: "Get all post user id", content: "https://dummyjson.com/posts/user/5" },
      { id: 5, title: "Get post comments", content: "https://dummyjson.com/posts/1/comments" },
      { id: 6, title: "Add a new post", content: "https://dummyjson.com/posts/add" }
    ];


  
    // Populate post list
    posts.forEach(post => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.textContent = post.title;
      link.href = `#`; // Navigate to post page with ID parameter
      link.addEventListener('click',()=>{
          const urlSearchParams = new URLSearchParams({ id: post.id, filter: 'images' }); 
          const finalUrl = 'post-page.html' + '?' + urlSearchParams.toString();
          window.location.href = finalUrl;
      })
      link.style.cursor = 'pointer'
      listItem.appendChild(link);
      postList.appendChild(listItem);
    });
  });

  window.onload = createPostList;

