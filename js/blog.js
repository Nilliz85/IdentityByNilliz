/*-------------------- Blog Content --------------------*/

/*---------- Get Element ----------*/
const blogPostsContainer = document.getElementById("blog-layout");
const loadMoreBtn = document.getElementById("load-more-btn");
const hiddenPostsContainer = document.getElementById("hidden");

/*---------- Number Of Posts To Load ----------*/
const postsPerLoad = 3;

/*---------- Get Blog Posts ----------*/
const allBlogPosts = document.querySelectorAll(".blog");

/*---------- Track Visible Posts ----------*/
let visiblePosts = 6;

/*---------- Show button ----------*/
if (visiblePosts < allBlogPosts.length) {
  loadMoreBtn.style.display = "block";
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
    loadMoreBtn.style.display = "none";
  }

  /*---------- Show Hidden Posts When All Posts Are Shown----------*/
  if (visiblePosts >= allBlogPosts.length) {
    hiddenPostsContainer.style.display = "block";
  }
});
