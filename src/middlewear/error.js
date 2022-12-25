const errorhandler = (routerFunc) => {
    return async (req, res, next) => {
        try {
            await routerFunc(req, res)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = errorhandler;