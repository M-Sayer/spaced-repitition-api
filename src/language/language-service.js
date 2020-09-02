const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from('language')
      .select(
        'language.id',
        'language.name',
        'language.user_id',
        'language.head',
        'language.total_score',
      )
      .where('language.user_id', user_id)
      .first()
  },

  getLanguageWords(db, language_id) {
    return db
      .from('word')
      .select(
        'id',
        'language_id',
        'original',
        'translation',
        'next',
        'memory_value',
        'correct_count',
        'incorrect_count',
      )
      .where({ language_id })
  },
  //get head from language
  getLanguageHead(db, languageId) {
    return db('word')
      .join('language', {'word.id': 'language.head'})
      .select()
      .where({'language.id': languageId})
  },
  //get next word for quiz
  getNextWord(db, next) {
    return db('word')
      .select()
      .where({'id': next})
  }

  //correct count for next word

  //incorrect count for next word

  //total score for user thus far
}

module.exports = LanguageService
