

let url = new URL(location.href);
let userDate = JSON.parse(url.searchParams.get('date'));


function newUserBlock(item, box) {
    for (const itemKey in item) {
        if (typeof item[itemKey] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${itemKey}:${item[itemKey]}`;
            box.appendChild(p);
        } else {

            newUserBlock(item[itemKey], box);
        }
    }
}

let postContainer = document.getElementsByClassName('user')[0];
newUserBlock(userDate, postContainer)


let buttonPost = document.createElement("button");
buttonPost.innerText = 'Post of current user';
buttonPost.classList.add('showPost');
document.body.appendChild(buttonPost);

let postsContainer = document.createElement('div');
postsContainer.classList.add('posts');
document.body.appendChild(postsContainer);

buttonPost.addEventListener('click', () => {

    fetch(`https://jsonplaceholder.typicode.com/users/${userDate.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let container=document.getElementsByClassName('posts')[0]
            container.innerHTML='';

            for (const post of posts) {
                let newPost = document.createElement('div');
                newPost.classList.add('post');

                let h4 = document.createElement('h4');
                h4.innerText = post.title;
                newPost.appendChild(h4);

                let postBtn = document.createElement('button');
                postBtn.innerText = 'Show details';
                postBtn.classList.add('btn')

                let userBlock = document.createElement('div');
                userBlock.classList.add('block');
                userBlock.append(newPost, postBtn)


                postBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    window.open(`../post-details/post-details.html?date=${JSON.stringify(post)}`, '_blank');
                })

                container.append(userBlock)
            }
        })
})