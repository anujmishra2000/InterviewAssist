const Archive = require('../Models/archive');

const archive_index = (req, res) => {
    Archive.find()
    .then((result) => {
        res.render('archives/index', {archives : result, title : 'All Interview Experiences'})
    })
    .catch((err) => (console.log(err)));
}

const archive_post = (req, res) => {
    const archive = new Archive(req.body);
    archive.save()
    .then((result) => {
        res.redirect('/archives');
    })
    .catch((err) => (console.log(err)));
}

const archive_create = (req, res) => {
    res.render('archives/create', { title : 'Create new archive'});
}

const archive_get_id = (req, res) => {
    const id = req.params.id;
    Archive.findById(id)
    .then((result) => {
        res.render('archives/details', {title : result.title, archive : result});
    })
    .catch((err) => res.status(404).render('404', {title : 'archive Not Found'}));
}

const archive_delete_id = (req, res) => {
    const id = req.params.id;
    archive.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect : '/archives'})
    })
    .catch((err) => (console.log(err)));
}

module.exports = {
    archive_index,
    archive_delete_id,
    archive_get_id,
    archive_create,
    archive_post
}