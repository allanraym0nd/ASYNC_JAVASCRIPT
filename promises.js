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

function createPost(post) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        posts.push(post);

        const error = false;
        if (!error) {
            resolve();
             } else {
                reject ('Error: Something went wrong');
             }
    }, 2000);
});
} 

// createPost({title:'Post Three', body:'This is post three'}).then(getPosts)
// .catch( err => console.log(err));

//Asyn/await

// async function init() {
//     await createPost({title:'Post Three', body:'This is post three'});

//     getPosts();
// }

// init();

//asyn/await / fetch

async function fetchUsers() {
    const res = await fetch 
    ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json();

    console.log(data);

}

fetchUsers();

// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject) => 
//     setTimeout(resolve, 2000, 'Goodbye')

// );

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());


// Promise.all([promise1, promise2, promise3,promise4]).then (values => console.log(values));


