exports.responseToClient = (status, msg, res) => {
    const data = {
        status,
        msg
    }

    res.status(data.status)
    res.json(JSON.stringify(data))
    res.end()
}