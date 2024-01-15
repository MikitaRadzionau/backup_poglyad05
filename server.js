const express = require('express'),
      path = require('path'),
      app = express(),
      PORT = 8900,
      fs=require('fs'),
      icon='/img/logo3.png',
      createPath = (page) => path.resolve(__dirname, 'views', `${page}.ejs`);
let basePath = "";
app.set('view engine', 'ejs');
app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`👽пачынаем на парту -->${PORT}`);
  }); 
app.use(express.static('public'))

// get
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render(createPath('index'), { title,icon });
  });
app.get('/home', (req, res) => {
  const title = 'Home';
  res.render(createPath('main'), { title,icon });
});
app.get('/profile', (req, res) => {
    const title = 'My Channel';
    let info = [
      { name: 'Mikita', subs: "100k", videos: 2012}
    ];
    res.render(createPath('profile'), {title,icon,info:info});
  });
app.get('/lib', (req, res) => {
    const title = 'Libary';
    res.render(createPath('libary'), {title,icon, });
  });
app.get('/subs', (req, res) => {
    const title = 'Subs';
    res.render(createPath('subs-page'), {title,icon, });
  });
app.get('/add-video', (req, res) => {
    const title = 'Add video';
    res.render(createPath('add-video'), {title,icon, });
  });  
app.get('/play-video', (req, res) => {
    const title = 'Video ';
    res.render(createPath('play-video'), {title,icon, });
  });  
app.get('/plists', (req, res) => {
  let likes =[];
  const title = 'Play video';
  res.render(createPath('playlists'), { title,icon });
});

// error . . . 404 X_X
app.use((req, res) => {
    const title = 'Error Page';
    res
      .status(404)
      .render(createPath('error'), { title,icon });
  });