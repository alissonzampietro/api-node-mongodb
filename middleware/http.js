export const setBodyFormat = (body) => ({
    data: body
})

const httpMiddleware = function (req, res, next) {
    res.success = function(data) {
        res.status(200)
        res.json(setBodyFormat(data))
        return
    }

    next()
}

export default httpMiddleware