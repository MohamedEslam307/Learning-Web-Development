exports.get404 = (req,res,err)=>{
    console.log('In page not found middleware');
    res.status(404).render('page-not-found',{pageTitle: 'Page Not Found'});
    return res.end();
}