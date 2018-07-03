const express = require("express")
const router = express.Router()

const controllers = require("./controllers")

/* 
routes pre-authentication 
*/


// Login flow
router.get("/", controllers.login.prompt)
router.post("/login", controllers.login.attempt)

// Invitation code
router.get("/invitation", controllers.invitation.attempt)
router.post("/invitation", controllers.invitation.create)

// Password reset
router.get("/reset", controllers.reset.prompt)
router.post("/reset", controllers.reset.attempt)
router.get("/reset/code", controllers.reset.code)
router.post("/reset/code", controllers.reset.update)

/* 
Authentication middleware 
*/

router.use((req, res, next) => {    
  if (!req.session.user) {
    req.session = null
    return res.send(req.app.locals.templates.login())
  }

  next()
})


/* 
routes post-authentication
*/

// Landing page
router.get("/home", controllers.landing.home)

// View/edit own profile
router.get("/profile", controllers.profile.view)
router.post("/profile", controllers.profile.edit)

// View others' profiles
router.get("/users", controllers.users.list)
router.get("/users/:id", controllers.users.view)

// View groups
router.get("/groups", controllers.groups.list)
router.get("/groups/:id", controllers.groups.view)


module.exports = router
