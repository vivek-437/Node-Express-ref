const express = require("express");
const path=require("path");
const app = express();
// routing part
// get is an http method we can use get,post,all:-both get and post request
// app.get("/",(req,res)=>{
//     res.send('home');
// });
// // app.get("/:id",(req,res)=>{
// //     res.send('This page is not valid '+req.params.id);

// // });

// app.get("/about",(req,res)=>{
//     res.send('about');
// });

// app.get("/contact",(req,res)=>{
//     res.send('contact');
// });


// json part

// app.get("/home", (req, res) => {
//     res.send([{
//         id: 1,
//         name: 'None',
//         age: 12,
//     },
//     {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, {
//         id: 1,
//         name: 'None',
//         age: 12,
//     }, 
//     ]);
// })

// how to serve static website

// const staticPath=path.join(__dirname,'./');
// // built-in middleware
// app.use(express.static(staticPath));

// app.get("/",(req,res)=>{
//     // res.send('home');
// });





// template engine are used to fetch or get the data dynamic.
// eg.hanblebar,pug,ejs->they  are html with more functionality.
// first we have to install hbs:-handlebar(npm i hbs)
// with this we can pass dynamic contemt to the page
// app.set("view engine","hbs");
// app.get("/",(req,res)=>{
//     res.render("index",{
//         Name:'Vivek',
//     });
// });









// how to change the views dir name:-
// we need path of the dir where hbs file is stored 
// const dynamicPath=path.join(__dirname,"./dynamic");
// console.log(dynamicPath);
// app.set("view engine","hbs");
// app.set("views",dynamicPath);

// app.get("/",(req,res)=>{
//     res.render("index",{
//         Name:'Invalid',
//     });
// });


// partials is same as react components

// nodemon index.js -e js,hbs :-agar thoda bhi change hoga toh restart the server.

const hbs=require("hbs");
const partialsPath=path.join(__dirname,"./dynamic/partials");
const templatePath=path.join(__dirname,"./dynamic/views");
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
    res.render('index',{
        Name:'Vivek',
    });
});
app.get("/home",(req,res)=>{
    res.render("home");
});

// page error  handler
// * (special opreator) after all the app.get path checked if it is not exists then come to this.  
app.get("*",(req,res)=>{
    res.render('error',{
        errormanage:'page could not found',
    })
})


app.listen(8080);
