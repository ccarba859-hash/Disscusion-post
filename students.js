const board = document.getElementById("discussion-board");
//get element by id so it can be used 

if (board) {

  let html = "";
  
//loop for post gongz
  for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  const categories = post.categories;

  let categoryHTML = "";

  // Loop through every category for the current post
  for (let c = 0; c < categories.length; c++) {
    categoryHTML += `
      <span class="category">${categories[c]}</span>
    `;
  }
    if (i % 3 === 0) {
      html += `
        <article class="discussion-post version-one" id="${post.id}">
          <div class="post-author">
            <img class="profile-image"
              src="${post.author.image}"
              alt="${post.author.name} profile picture">

            <div class="author-info">
              <h2 class="author-name">${post.author.name}</h2>
              <p class="author-username">@${post.author.username}</p>
            </div>

            <p class="post-date">${post.postedDate}</p>
          </div>

          <h3 class="post-title">${post.title}</h3>

          <img class="article-image"
            src="${post.articleImage}"
            alt="${post.title}">

          <p class="post-message">${post.message}</p>

           <div class="post-categories">
                            <span class="category" ${post.categories[0]}>Technology</span>
                            <span class="category" ${post.categories[1]}>Education</span>
                            <span class="category" ${post.categories[2]}>Artificial Intelligence</span>
            </div>

          <div class="post-engagement">
            <p class="likes">♥ <strong>${post.likes}</strong> Likes</p>
            <p class="views">👁 <strong>${post.views}</strong> Views</p>
            <p class="replies">💬 <strong>${post.replies}</strong> Replies</p>
          </div>
        </article>
      `;
      //with else it loopes throught the cars and it the reminder isn't 0 
      // and 1 than it will style it this way using S
    } else if (i % 3 === 1) {
      html += `
        <article class="discussion-post version-two" id="${post.id}">
          <img class="article-image"
            src="${post.articleImage}"
            alt="${post.title}">

          <div class="version-two-overlay">
            <div class="post-top-row">
              <div class="post-categories">
                            <span class="category" ${post.categories[0]}>Technology</span>
                            <span class="category" ${post.categories[1]}>Education</span>
                            <span class="category" ${post.categories[2]}>Artificial Intelligence</span>
                 </div>

              <div class="post-author">
                <img class="profile-image"
                  src="${post.author.image}"
                  alt="${post.author.name} profile picture">

                <div class="author-info">
                  <h2 class="author-name">${post.author.name}</h2>
                  <p class="author-username">@${post.author.username}</p>
                </div>
              </div>
            </div>

            <div class="post-glass-content">
              <h3 class="post-title">${post.title}</h3>
              <p class="post-message">${post.message}</p>
            </div>

            <div class="post-bottom-row">
              <p class="post-date">${post.postedDate}</p>

              <div class="post-engagement">
                <p class="likes">♥ <strong>${post.likes}</strong> Likes</p>
                <p class="views">👁 <strong>${post.views}</strong> Views</p>
                <p class="replies">💬 <strong>${post.replies}</strong> Replies</p>
              </div>
            </div>
          </div>
        </article>
      `;
      // i/3 so baically example would be 6%3=2 and what ever is left over makes it version 2 
      //bassically how may times 3 can go into a number and hwat ever left over makes
      //it ether version 1,2 or 3
    } else if (i % 3 === 2) {
      html += `
        <article class="discussion-post version-three" id="${post.id}">
          <img class="article-image"
            src="${post.articleImage}"
            alt="${post.title}">

          <div class="post-content">
            <div class="post-author">
              <img class="profile-image"
                src="${post.author.image}"
                alt="${post.author.name} profile picture">

              <div class="author-info">
                <h2 class="author-name">${post.author.name}</h2>
                <p class="author-username">@${post.author.username}</p>
              </div>

              <p class="post-date">${post.postedDate}</p>
            </div>

            <h3 class="post-title">${post.title}</h3>

            <p class="post-message">${post.message}</p>

           
                <div class="post-categories">
                            <span class="category" ${post.categories[0]}>Technology</span>
                            <span class="category" ${post.categories[1]}>Education</span>
                            <span class="category" ${post.categories[2]}>Artificial Intelligence</span>
                </div>
         

            <div class="post-engagement">
              <p class="likes">♥ <strong>${post.likes}</strong> Likes</p>
              <p class="views">👁 <strong>${post.views}</strong> Views</p>
              <p class="replies">💬 <strong>${post.replies}</strong> Replies</p>
            </div>
          </div>
        </article>
      `;
    }
  }
  // Set the innerHTML of the discussion board to the generated HTML
  board.innerHTML = html;
}
