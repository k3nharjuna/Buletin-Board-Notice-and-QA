const router = require('express').Router()
const userController = require('../controllers/userController')
const noticeController = require('../controllers/noticeController')
const authenticate = require('../middlewares/authenticate')
const authorizeAdmin = require('../middlewares/authorizeAdmin')

router.post('/signup', userController.signup) //sign up for user > req.body(email, password)
router.post('/signup/admin', userController.signupAdmin) //sign up as admin > req.body(email, password)
router.post('/signin', userController.signin) //sign in > req.body(email, password)
// router.post('/email', userController.findEmail) just for some testing, no need to think about this one
router.post('/questions/add', authenticate, noticeController.addQuestion) //post a question [login required] > req.body(title, question)
router.post('/questions/answer', authenticate, noticeController.addAnswer) //post an answer to a question picked [login required] > req.body(answer,id) we get id from question's _id from db
router.post('/notices/add', authenticate, authorizeAdmin, noticeController.addNotice) //post notice [login required as admin] > req.body(title, content)

router.get('/notices', noticeController.getAllNotices)
router.get('/questions', noticeController.getAllQuestions
)

module.exports = router