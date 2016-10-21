module.exports = {
    bind: function(app, assetPath) 
    {
        app.get('/', function(req, res) {
            res.render('index', {
                'asset_path': assetPath
            })
        })

        // blank template page
        app.get('/blank_template', function(req, res) {
            var pageName = 'Blank template'
            res.render('blank_template', {
                'page_name': pageName
            })
        })

        // Redirect snippets page to the index page
        app.get('/home', function(req, res) {
            res.redirect('/')
        })

        // index page version 1.0
        app.get('/landingPage', function(req, res) {
            var pageName = 'Landing Page'
            res.render('landingPage', {
                'page_name': pageName
            })
        })


        // index page version 2.0
        app.get('/indexv2', function(req, res) {
            var pageName = 'Index Page - Version 2.0'
            res.render('indexv2', {
                'page_name': pageName
            })
        })

        // Guidance page old
        app.get('/guidance', function(req, res) {
            var pageName = 'Guidance Page'
            res.render('guidance', {
                'page_name': pageName
            })
        })

     // Guidance page new
        app.get('/guidanceNew', function(req, res) {
            var pageName = 'Guidance Page'
            res.render('guidanceNew', {
                'page_name': pageName
            })
        })
  
     
    }
}
