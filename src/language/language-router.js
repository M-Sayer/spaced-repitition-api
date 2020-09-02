const express = require('express')
const LanguageService = require('./language-service')
const { requireAuth } = require('../middleware/jwt-auth')

const languageRouter = express.Router()

languageRouter
  .use(requireAuth)
  .use(async (req, res, next) => {
    try {
      const language = await LanguageService.getUsersLanguage(
        req.app.get('db'),
        req.user.id,
      )

      if (!language)
        return res.status(404).json({
          error: `You don't have any languages`,
        })

      req.language = language
      next()
    } catch (error) {
      next(error)
    }
  })

languageRouter
  .get('/', async (req, res, next) => {
    try {
      const words = await LanguageService.getLanguageWords(
        req.app.get('db'),
        req.language.id,
      )

      res.json({
        language: req.language,
        words,
      })
      next()
    } catch (error) {
      next(error)
    }
  })

languageRouter
  .use(requireAuth)
  .get('/head', async (req, res, next) => {
    // return word at head/top of list
    // get user from req.body, get use language from user table, get head from language table
    const userId = req.user.id;
    const db = req.app.get('db');

    const userLanguage = await LanguageService.getUsersLanguage(db, userId);
    const head = await LanguageService.getLanguageHead(db, userLanguage.id);



    const response = {
      nextWord: head[0].original,
      wordCorrectCount: head[0].correct_count,
      wordIncorrectCount: head[0].incorrect_count,
      totalScore: head[0].total_score,
    }
   
    res.send(response)
  })

languageRouter
  .post('/guess', async (req, res, next) => {
    // implement me
    res.send('implement me!')
  })

module.exports = languageRouter
