module.exports = (role) => {
    return async function (req, res, next) {
        if(req.user.role !== role) {
            res.status(403).json({
                status: 'failed',
                message: `anda tidak memiliki akses disini, karena anda bukan ${role}`
            })
        }else {
            next()
        }
    }
}