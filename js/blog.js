/*---------- Get Element ----------*/
const blogPostsContainer = document.getElementById("blog-layout");
const loadMoreBtn = document.getElementById("load-more-btn");
const hiddenPostsContainer = document.getElementById("hidden");
const hideButtonContainer = document.getElementById("load-more-container");

/*---------- Number Of Posts To Load ----------*/
const postsPerLoad = 10;

/*---------- Get Blog Posts ----------*/
const allBlogPosts = document.querySelectorAll(".blog");

/*---------- Track Visible Posts ----------*/
let visiblePosts = 6;

/*---------- Show button ----------*/
if (visiblePosts < allBlogPosts.length) {
  loadMoreBtn.style.display = "block";
}

/*---------- Event Listener ----------*/
loadMoreBtn.addEventListener("click", function () {
  console.log("Clicked load more button");
  const lastPostIndex = Math.min(visiblePosts + postsPerLoad, allBlogPosts.length);
  console.log("Last post index: ", lastPostIndex);

  for (let i = visiblePosts; i < lastPostIndex; i++) {
    allBlogPosts[i].style.display = "block";
    allBlogPosts[i].classList.add("blog-visible");
  }

  visiblePosts = lastPostIndex;
  console.log("Visible posts: ", visiblePosts);

  if (visiblePosts >= allBlogPosts.length) {
    loadMoreBtn.style.display = "none";
    hiddenPostsContainer.style.display = "block";
    hideButtonContainer.style.display = "none";
  }
});
