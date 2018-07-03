const Handlebars = require("handlebars")
const tmplString = `
{{> anonymousHeader isHome=true }}
    <form action="/login" method="POST" class="form form-large">
        <label>
            <div class="field field-large">
                <div class="field-label">Email</div>
                <input name="email" type="text" />
            </div>
        </label>
        <label>
            <div class="field field-large">
                <div class="field-label">Password</div>
                <input name="password" type="password" />
            </div>
        </label>
        <input class="button button-right" type="submit" value="Login">
    </form>
{{> footer }}
`

module.exports = Handlebars.compile(tmplString)