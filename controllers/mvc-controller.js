function setup(app, data) {
  app.get('/', function(req, res) {
    let visitors = 0;
    console.log(" Calculation total visitors cont ...")
    for (let urls in data.urls) {
      console.log(urls);
      visitors += urls.visitors
    }

    let model = { urls: data.urls, visitors: 50 }
    res.render('home', model);
  });


  app.get('/urls', function(req, res) {
    let model = { urls: data.urls };
    res.render('urls', model);
  });
  app.get('/add-url', function(req, res) {
    let model = { url: '', shortCode: 'newCode'};
    res.render('add-url', model);
  });
   app.get('/add-url', function(req, res) {
    res.redirect('/');
  });
  
}
  module.exports = {
    setup
  }; 