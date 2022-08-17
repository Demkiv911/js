
let url = new URL(location.href);
let postDate = JSON.parse(url.searchParams.get('date'));

function postBlock(item, box) {
    for (const itemKey in item) {
        if (typeof item[itemKey] !== 'object') {
            let p = document.createElement('p');
            p.innerText = `${itemKey}:${item[itemKey]}`;
            box.appendChild(p);
        } else {

            postBlock(item[itemKey], box);
        }
    }
}

let postContainer = document.getElementsByClassName('post')[0];
postBlock(postDate, postContainer)

fetch(`https://jsonplaceholder.typicode.com/posts/${postDate.id}/comments`)
    .then(value => value.json())
    .then(posts => {
        let commentsContainer = document.getElementsByClassName('comments')[0];
        for (const post of posts) {
            let comment = document.createElement('div');
            comment.classList.add('comment');
            postBlock(post, comment);
            commentsContainer.appendChild(comment);

        }
    })