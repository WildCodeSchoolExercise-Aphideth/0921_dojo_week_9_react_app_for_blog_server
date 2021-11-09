# React App Frontend For NODE Server Blog

### Clone this repo then run `npm install` 

### Launch app with `npm start`

- As you can see, there is already some code in this app, it's built with Tailwind (front framekork)
- Some components already exist for the Article Part
- Some UI components are already here (Navbar & Footer, you don't have to do nothing in this)
- The router of the App is Ok for now
- Axios is install and you will use it to fetch the server

### 1 Make available components for articles

In components/articles there is 3 components :
- Articles.jsx has to fetch with axios All Articles from Node Server
- ArticleCard.jsx is a child component, it's only display article info in a card
- Article.jsx has to display only one article, here you have to get a param id to get one article to fetch the server
- Follow the TODO in Articles.jsx to add Action Delete for one article
  
### BONUS

Finish to handle Article with :
- A component form (ArticleForm.jsx), this component allow to create & update an article
- Make sure to use Tailwind to respect the graphic chart of the app