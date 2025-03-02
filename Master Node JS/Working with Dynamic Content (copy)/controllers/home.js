exports.getHome = (req, res, next) => {
    console.log('In get home middleware'); 
    res.render('home',{
        pageTitle: 'Home'
    });
    return res.end();
}