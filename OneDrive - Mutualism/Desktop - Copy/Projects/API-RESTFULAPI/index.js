let myPosts = ["https://dummyjson.com/posts", "https://dummyjson.com/posts/1", "https://dummyjson.com/posts/search?q=love","https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId","https://dummyjson.com/posts/user/5","https://dummyjson.com/posts/1/comments","https://dummyjson.com/posts/add", "https://dummyjson.com/posts/1", "https://dummyjson.com/posts/1"]
const ulEl = document.getElementById("ul-el")

// 2. Grab the unordered list and store it in a const variable called ulEl

for (let i = 0; i < myPosts.length; i++) {
    ulEl.innerHTML += "<li>" + myPosts[i] + "</li>"
}
