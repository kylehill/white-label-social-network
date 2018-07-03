module.exports = {
    prompt: (req, res) => {
        res.send(req.app.locals.templates.login())
        res.end()
    },

    attempt: (req, res) => {

    }
}