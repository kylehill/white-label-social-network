const Handlebars = require("handlebars")

Handlebars.registerPartial('header', `
<!DOCTYPE html>
<html>
    <head>
        <title>White Label Community System</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        {{> nav}}
        <main class="with-nav">
`)

Handlebars.registerPartial('anonymousHeader', `
<!DOCTYPE html>
<html>
    <head>
        <title>White Label Community System</title>
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <main>
`)

Handlebars.registerPartial('nav', `
    <nav>
        <ul class="left">
            <li class="{{#if isHome}}active{{/if}}">
                <a href="/">Home</a>
            </li>
            <li class="{{#if isAttendees}}active{{/if}}">
                <a href="/users">Attendees</a>
            </li>
            <li class="{{#if isGroups}}active{{/if}}">
                <a href="/groups">Cabin Groups</a>
            </li>
        </ul>

        <ul class="right">
            <li class="{{#if isProfile}}active{{/if}}">
                <a href="/profile">{{ badgeName }}</a>
            </li>
            <li class="{{#if isMessages}}active{{/if}}">
                <a href="/messages">Inbox</a>
            </li>
        </ul>
    </nav>
`)

Handlebars.registerPartial('footer', `
        </main>
    </body>
</html>
`)
