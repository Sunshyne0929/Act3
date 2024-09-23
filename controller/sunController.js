const sun = {
    ind: (req, res) => {
        res.render('index');
    },
    shp: (req, res) => {
        res.render('shop');
    },
    abt: (req, res) => {
        res.render('about');
    },
    srv: (req, res) => {
        res.render('services');
    },
    blg: (req, res) => {
        res.render('blog');
    }
};

module.exports = sun;