const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchPosts = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const renderPost = (title, body, parent) => {
  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `<h3 class="post__title">${title}</h3><span class="post__body">${body}</span>`;
  parent.appendChild(post);
};

const createPosts = async (url) => {
  const posts = await fetchPosts(url);
  await posts.forEach((post) => {
    renderPost(post.title, post.body, document.body);
  });
};

createPosts(url);
