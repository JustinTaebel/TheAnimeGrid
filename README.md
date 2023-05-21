The Anime Grid is a blog about anime, manga, and other topics in the same genre.

Created by me from scratch using npm, Node.JS, EJS, Passport, MongoDB database, and HTML/CSS.

<h1>Home Page</h1>
The Home page of the website shows numerous random posts from the database with the most recent post being in the featured position (bottom right corner)
The pink square is a secret button for writers with an account to push that will direct them to a post upload page where they will be able to create a post within the website and after see it on the home page.
<picture>![Home1](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/e680be05-b8db-4e26-8907-06fe6560b620)</picture>
When hovering over a post icon, the picture will expand and bring up a short description for what the post is about.
![HomeHover](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/89ddc370-1b4c-4e78-8e27-dee0d2d0941c)
The second half of the home page shows the 5 most recent posts and 2 categories on the right hand side (News and Funkos). When posts are made, it has certain attributes assigned to it (date, categories, etc.), so it searches through the database and finds the 5 most recents, posts with the displayed category(News and Funkos) and displays them in their sections
![Home2](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/83f170f8-bc47-49ce-ae21-a985dde369d2)
Footer section contains a login and logout button for users with accounts to use.
![Home3](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/28c202b0-0ff7-4881-81fd-7cf90ddf6d49)


<h1>Sign In</h1>
The Sign in page comes up when clicking the login button at the footer, or whenever a user navigates to a site that is only allowed by users with accounts (Post upload page for example)
![SignIn1](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/7fe4a1f8-098f-4ef8-a406-1dc89ec88e64)
Searches through database for account information. Used the bycrypt package to encrypt and decrypt the passwords and if the wrong username or password is entered displays error message.
![SignIn2](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/9462ef46-d802-45eb-9bd9-4b43c2892a59)

<h1>Post Upload</h1>
Upload page allows the user to write the post directly from the website and upload it to the blog. Simulates what it would like as the actual post with input boxes where the writer can add Titles, descriptions, and images using links.
![PostUp1](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/4625195d-407e-42c5-941c-ce171a77e376)
Side shows tips on what to put for each category and sticks to the side on scroll.
Markdown section allows the user to use HTML Markdown features and uses DOMpurify to prevent anyone from injecting java(unlikely this would happen, but just to be safe).
![PostUp2](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/bd5bf744-8456-40c2-88d0-06239eaa00b5)
If a field is wrongly entered or the user forgot to enter something in the input box it will ask to fill in the box with the correct input.
![PostUp3](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/ec5f1f9e-1e8c-44d2-9ed8-8747aee61353)
After posting, it will redirect to the post page. Going back to the home page also shows the newly made post in the
![PostUp4](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/56000748-6a6a-4b11-9e81-795108284b8b)
![PostUp5](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/a264f676-0f95-4920-b21e-b335f45693d3)


<h1>Post</h1>
Image is shown and has a source underneath that when clicks will redirect to the link where the image was found.
![Post](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/71101060-bdf6-48bb-990d-6974b53edcec)
Post content shows the Markdown design (Heading is in a bigger font).
![Post2](https://github.com/JustinTaebel/TheAnimeGrid/assets/83143731/1636b1ac-617b-4153-95bb-0cc6c110954b)
