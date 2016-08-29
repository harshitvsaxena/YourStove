# YourStove

This is live at www.yourstove.in

To test this application

#### Run:

- switch to the root directory of this project
- npm install
- npm run production
- npm run start
- Open http://localhost:8080 in your browser

#### File Structure

```sh
App 
|
|-- components
|    |
|    |-- LandingPage.js
|    |-- Main.js - Nothing but just the container of everthing
|    |-- Home.js - Actual loader of page - contains left nav bar, top toggle bar, search area
|    |-- Timeline.js - Feed which appears first + shows search result accordingly
|    |-- EatOuts.js - List of all eat outs places.
|    |-- EatOutsBlog.js - Shows the blog selected in EatOuts.js in detail.
|    |-- QuickCooks.js
|    |-- QuickCooksBlog.js
|    |-- Page404.js
|
|-- ui
|    |
|    |-- LeftMenu.js
|    |-- ToggleHeader.js
|    |-- Search.js
|    |-- Feed.js
|    |-- Card.js
|    |-- Page404.js
|
|-- config
|    |
|    |-- routes.js
|
|-- styles
|    |
|    |-- All the stylesheets - will explain it later
|
|-- img
|    |
|    |-- All the images
|   
|-- index.html
|-- index.js
```

#### RethinkDB Structure 

```sh
Admins 
|
|-- username
|-- password
|-- id

QuickCooks
|
|-- title
|-- label (Easy/Hard/Moderate) -- or any other label
|-- shortDescription (For card view)
|-- category -- ["category1", "category2", "category3"]
|-- publishDate (timestamp)
|-- likes
|-- coverPic (for card view) -- file save directly here
|-- profilePic (for card view) -- file saved directly here
|-- article (the whole article written by admin -- used summernote to generate html in admin view)
|-- id

EatOuts
|-- title
|-- label (Any Label - Veg/Non-veg etc.)
|-- shortDescription (For Card View)
|-- category -- ["category1", "category2", "category3"]
|-- publishDate (timestamp)
|-- likes
|-- coverPic (for card view)
|-- profilePic (for card view)
|-- article (the whole article written by admin)
|-- id
```

