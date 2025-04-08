const posts = [
    { title:'Post One', body:'This is post one'},
    {title:'Post Two', body:' This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output ='';
        //looping through them
        posts.forEach((post, index) => {   
            output += `<li>${post.title}</li>`;

        });

        document.body.innerHTML = output; // outputting them into the page


    }, 1000);
}

function createPost(post,callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

getPosts();

createPost({title:'Post Three', body:'This is post three'},getPosts);