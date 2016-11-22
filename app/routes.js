module.exports = {
    bind: function(app, assetPath)
    {
        app.get('/', function(req, res) {
            res.render('index', {
                'asset_path': assetPath
            })
        })

        // Redirect snippets page to the index page
        app.get('/index', function(req, res) {
            res.redirect('/index')
        })

        // Get a grant page
        app.get('/getgrant', function(req, res) {
            var pageName = "Get a grant, if you don't pay the levy"
            res.render('getgrant', {
                'page_name': pageName
            })
        })


        // funding, if you pay levy page
        app.get('/fundinglevy', function(req, res) {
            var pageName = 'Funding, if you pay the levy'
            res.render('fundinglevy', {
                'page_name': pageName
            })
        })


       // Pay and conditions for apprentices page
        app.get('/payconditions', function(req, res) {
            var pageName = 'Pay and conditions for apprentices'
            res.render('payconditions', {
                'page_name': pageName
            })
        })

      // Make an apprenticeship agreement page
        app.get('/apprenticeship-agreement', function(req, res) {
            var pageName = ' Make an apprenticeship agreement'
            res.render('apprenticeship-agreement', {
                'page_name': pageName
            })
        })

     //Apprenticeship training agencies page
        app.get('/training-agencies', function(req, res) {
            var pageName = 'Apprenticeship training agencies'
            res.render('training-agencies', {
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

        // blank template page
        app.get('/blank_template', function(req, res) {
            var pageName = 'Blank template'
            res.render('blank_template', {
                'page_name': pageName
            })
        })


    }
}
