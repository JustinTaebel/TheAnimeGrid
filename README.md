<h1>THE ANIME GRID!</h1>
A server based blog website developed from scratch using node.js, express.js, HTML/CSS, javascript, and MongoDB.
<br><br>

<h1>Home Page</h1>
The Home page of the website shows numerous random posts from the database with the most recent post being in the featured position (bottom right corner)
The pink square is a secret button for writers with an account to push that will direct them to a post upload page where they will be able to create a post within the website and after see it on the home page.
<picture>
  <img alt="Home Page" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/e680be05-b8db-4e26-8907-06fe6560b620">
</picture>
When hovering over a post icon, the picture and text inside will expand and bring up a short description for what the post is about. The featured posts (bigger squares), will have the description of the post, while the smaller squares just say "click to read more". This is because the smaller squares don't have room to display the entire description.
<picture>
  <img alt="Home Page Hover" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/89ddc370-1b4c-4e78-8e27-dee0d2d0941c">
</picture>
The second half of the home page shows the 5 most recent posts and 2 categories on the right hand side (News and Funkos). When posts are made, it has certain attributes assigned to it (date, categories, etc.), so the server searches through the MongoDB database and finds the 5 most recents, posts with the displayed category(News and Funkos) and passes an array of these posts into the express.js files where then it will display the posts for each element in the array.
<picture>
  <img alt="Home Page 2" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/83f170f8-bc47-49ce-ae21-a985dde369d2">
</picture>
Footer section contains a login and logout button for users with accounts to use. Clicking login redirects the user to the login page. If a user that is not logged in clicks logout, nothing will happen. If a user that is already logged in and clicks login, nothing will happen. Footer also contains a short description of the website.
<picture>
  <img alt="Home Page 3" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/28c202b0-0ff7-4881-81fd-7cf90ddf6d49">
</picture>

<h1>Sign In</h1>
The Sign in page comes up when clicking the login button at the footer, or whenever a user navigates to a site that is only allowed by users with accounts. For example, if a user that is not signed in, clicks the pink sqaure on the home page (Post Upload Button), it will redirect them to sign in because they are not authorized. If a user that is already signed in, tries to go back to the Sign in page, it will redirect them to the home page.
<picture>
  <img alt="Sign In Page" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/7fe4a1f8-098f-4ef8-a406-1dc89ec88e64">
</picture>
Searches through MongoDB database for account information. Used the bycrypt package to encrypt and decrypt the passwords and store encrypted passwords into the database so it is impossible to hack passwords.<br> If the wrong username or password is entered, displays an error message.
<picture>
  <img alt="Sign In Error" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/9462ef46-d802-45eb-9bd9-4b43c2892a59">
</picture>

<h1>Post Upload</h1>
The upload page allows the user to write the post directly from the website and upload it to the blog. Upload page form simulates what it would look like as the actual post. A writer can add categories, titles, descriptions, main images using links, and the source of the image with input boxes.
<picture>
  <img alt="Upload Page" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/4625195d-407e-42c5-941c-ce171a77e376">
</picture>
Sidebar shows tips on what to put for each category and sticks to the side on scroll. This is to make it easier for the writer on writing their blog post and to make it look as good as possible.
Markdown section allows the user to use HTML Markdown features and uses DOMpurify to prevent anyone from injecting javascript into the website(unlikely this would happen, but just to be safe). This means they can add headings, images, bold letters, etc. 
<picture>
  <img alt="Upload Page 2" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/bd5bf744-8456-40c2-88d0-06239eaa00b5">
</picture>
If a field is wrongly entered or the user forgot to enter something in the input box it will ask to fill in the box with the correct input. The category section only allows certain strings in order to stop new categories that the database won't be able to find later from forming. Having a title be the same as another post will also result in an error since posts need to be unique. Some input boxes are optional and don't require input. If there is an issue, express.js will keep the text input rather than having to start over as well.
<picture>
  <img alt="Upload Page 3" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/ec5f1f9e-1e8c-44d2-9ed8-8747aee61353">
</picture>
After posting, it will redirect to the post the writer just made with a unique slug pertaining to the title of the post (unique link). Going back to the home page also shows the newly made post.
<picture>
  <img alt="Home Page 4" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/56000748-6a6a-4b11-9e81-795108284b8b">
</picture>
<picture>
  <img alt="Home Page 5" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/a264f676-0f95-4920-b21e-b335f45693d3">
</picture>


<h1>Post</h1>
Category above title will redirect the user to the page with all the posts belonging to that category.
Image is shown and has its source underneath, that when clicks will redirect to the link where the image was found.
<picture>
  <img alt="Post Page" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/71101060-bdf6-48bb-990d-6974b53edcec">
</picture>
Post content shows the Markdown design (Heading is in a bigger font). Side bar will show random other posts that the user can click on to read.
<picture>
  <img alt="Post Page 2" src="https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/1636b1ac-617b-4153-95bb-0cc6c110954b">
</picture>
