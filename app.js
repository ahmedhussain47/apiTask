const apiKey = `https://jsonplaceholder.typicode.com/posts`;
const tbody = document.querySelector("#todos-listing");

// Create Post
const creatPost = document.querySelector("#create-post-form");
const postTitle = document.querySelector("#post-title");
const postBody = document.querySelector("#post-body");

creatPost.addEventListener("submit",(event)=>{
    event.preventDeafault();
    const btn = document.querySelector("#create-post-form btn")
    postTitleValue = postTitle.value()
    postBodyValue = postBody.value()
})


fetch(apiKey)
    .then((response)=>response.json())
    .then((data)=>{
        let output="";
        data?.forEach((singleData)=>{
            output+=` <td>${singleData?.id}</td>
            <td>${singleData?.userId}</td>
            <td>${singleData?.title}</td>
            <td>
             <a class="btn btn-primary edit-btn"  href="#edit-post">Edit</a>
             </td>
            <td>
            <a href="#" class="btn btn-danger delete-btn">Delete</a>
            </td>
          </tr>`;
        })
        tbody.innerHTML = output;
    })
    .catch((error)=>console.log(error))