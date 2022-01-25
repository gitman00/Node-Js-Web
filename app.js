// importing the express package
const express = require('express');

// express app
const app = express();

// making global folder
app.use(express.static('Global'));

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'Pages');

// listening the request made by the user on port 3000
app.listen(3000);

// creating the blogs array to store blogs
const projects = [ 
    { author:"Baburam and AtomicDev", title:"Virtual Keyboard", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque, doloremque officiis id corrupti asperiores consectetur delectus eveniet, nesciunt libero ipsum, nemo non? Animi ipsum nostrum beatae laudantium, dicta quas delectus fuga similique reiciendis veritatis distinctio, a inventore optio perferendis doloremque cupiditate quidem recusandae vero autem qu"}, 
    { author:"Baburam", title:"Solar System", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque, doloremque officiis id corrupti asperiores consectetur delectus eveniet, nesciunt libero ipsum, nemo non? Animi ipsum nostrum beatae laudantium, dicta quas delectus fuga similique reiciendis veritatis distinctio, a inventore optio perferendis doloremque cupiditate quidem recusandae vero autem qu"}, 
    { author:"Baburam", title:"New Project", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam neque, doloremque officiis id corrupti asperiores consectetur delectus eveniet, nesciunt libero ipsum, nemo non? Animi ipsum nostrum beatae laudantium, dicta quas delectus fuga similique reiciendis veritatis distinctio, a inventore optio perferendis doloremque cupiditate quidem recusandae vero autem qu"}
];

// if path is './Views/' then executing the following function
app.get('/', (req, res) => {
    res.render('home', { title: "Home", projects });
});

// if path is './Views/blogs' then executing the following function
app.get('/projects', (req, res) => {
    res.render('projects', { title: "My Projects", projects });
});

// if path is './Views/about'
app.get('/about', (req, res) => {
    res.render('about', { title: "About Us", projects });
});

// if path is './Views/blogs/create'
 app.get('/projects/comment', (req, res) => {
    res.render('comment', { title: "Create a comment", projects });
});
// if path is './Views/contact'
app.get('/contact', (req, res) => {
    res.render('contact', { title: "Contsct Us", projects });
});

// if path is undefined 
app.use((req, res) => {
    res.status(404).render('404', { title: "Page Not Found" , projects});
});