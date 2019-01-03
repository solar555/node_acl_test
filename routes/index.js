/**
 * Created by Administrator on 2019/1/3.
 */
module.exports=function (app) {
    app.get('/', function (req, res) {
        res.render('index');
    });

    app.get('/user', function (req, res) {
        res.render('user');
    });

    app.get('/role', function (req, res) {
        res.render('role');
    });

    app.get('/resource', function (req, res) {
        res.render('resource');
    });
}