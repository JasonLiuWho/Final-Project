const daoCommon = require("./common/daoCommon")

const userDao = {
    ...daoCommon,
    ...require("./api/userDao")
}

const mangaDao = {
    ...daoCommon, 
    ...require("./api/mangaDao")
}

const authorDao = {
    ...daoCommon,
    ...require("./api/authorDao")
}

const genreDao = {
    ...daoCommon,
    ...require("./api/genreDao")
}

const publisherDao = {
    ...daoCommon,
    ...require("./api/publisherDao")
}

module.exports = {
    userDao,
    mangaDao,
    authorDao,
    genreDao,
    publisherDao
}