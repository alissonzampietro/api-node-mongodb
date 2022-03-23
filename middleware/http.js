const setBodyFormat = (body) => ({
    data: body
})

const middleware = function (req, res, next) {
    res.success = function(data) {
        res.status(200)
        res.json(setBodyFormat(data))
        return
    }

    next()
}

module.exports = {
    middleware,
    setBodyFormat
}