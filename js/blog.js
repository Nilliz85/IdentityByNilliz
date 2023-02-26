/*-------------------- Blog Content --------------------*/

/*---------- Get Element ----------*/
const blogPostsContainer = document.getElementById("blog-posts");
const loadMoreBtn = document.getElementById("load-more-btn");
const loadMoreContainer = document.getElementById("load-more-container");

/*---------- Number Of Posts To Load ----------*/
const postsPerLoad = 3;

/*---------- Get Blog Posts ----------*/
const allBlogPosts = document.querySelectorAll(".blog");

/*---------- Track Visible Posts ----------*/
let visiblePosts = 6;

/*---------- Show button ----------*/
if (visiblePosts < allBlogPosts.length) {
  loadMoreContainer.style.display = "block";
}

/*---------- Event Listener ----------*/
loadMoreBtn.addEventListener("click", () => {
  /*---------- Index Of Last Post To Show ----------*/
  const lastPostIndex = Math.min(visiblePosts + postsPerLoad, allBlogPosts.length);

  /*---------- Show Next Groupo Of Posts ----------*/
  for (let i = visiblePosts; i < lastPostIndex; i++) {
    allBlogPosts[i].style.display = "grid";
  }

  /*---------- Update Number Of Visible Post ----------*/
  visiblePosts = lastPostIndex;

  /*---------- Hide Button When All Posts Are Shown----------*/
  if (visiblePosts >= allBlogPosts.length) {
    loadMoreContainer.style.display = "none";
  }
});
