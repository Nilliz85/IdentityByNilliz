/**/
/*-------------------- WP REST API GET Request --------------------*/
fetch("https://headless-wp.pernilsen.dev/wp-json/wp/v2/posts?per_page=10")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
