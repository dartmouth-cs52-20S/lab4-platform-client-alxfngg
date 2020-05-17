# Lab 4
## Alex Feng

## Description
This site was built using React, Yarn, Redux, and MongoDB (hosted via Heroku). This website is currently hosted on alexfeng-cs52-blog.surge.sh.
### What Worked
I was able to succesfully implement all the basic functionalities of the blog, such as all CRUD operations; routing for pages displaying all posts, creating a new post, and displaying the full details for a post; and Markdown support for the content. I was also able to use the Material-UI library for styling and managed to display a cover image only if a link was entered, though I didn't implement verification for the validity of links as cover images.
### What Didn't Work
I wasn't able to change the color theme for Material-UI, and I wasn't able to implement error handling in the event the API sends an error dispatch message. Additionally, I couldn't figure out how to style the posts page so that each post would fit into an evenly spaced grid, so I used a flexed row instead. I also couldn't figure out how to properly use the onBlur event, so I gave up on using clickable fields to edit/update a post.
### Demo
<img src="demo1.png">
Above is the home screen for the blogs. Each blog can also display a cover photo.
<img src="demo2.png">
Above is an individual blog, which can be updated and deleted on this page. The blog content also supports Markdown.
<img src="demo3.png">
Above is the page for creating a blog.