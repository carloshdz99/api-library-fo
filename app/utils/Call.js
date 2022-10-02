const Call = (method) => (req, res, next) => method(req, res).catch((e) => {console.log(e); next(e)});

module.exports = Call;