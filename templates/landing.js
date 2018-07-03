const Handlebars = require("handlebars")
const tmplString = `
{{> header isHome=true }}
    Hello, {{ badgeName }}
{{> footer }}
`

module.exports = Handlebars.compile(tmplString)