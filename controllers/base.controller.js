
var express = require('express');
var router = express.Router();

class BaseController {
  constructor(model, routeString) {
    this.model = model
    this.routeString = routeString;
    }  
  
  //Simple version, without validation or sanitation
_get(req, res, next) {
  this.model.find(function(err, results) {
    if (err) return next(err);
    res.json(results);
  });
  }


_create(req, res, next) {
  if(req.body._id === null) {
    delete req.body._id;
  }
  this.model.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

_getOne(req, res, next) {
  this.model.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

_update (req, res, next) {
  var options = {new : true, upsert : true, useFindAndModify: false};
  this.model.findByIdAndUpdate(req.params.id, req.body, options,  function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

_delete(req, res, next) {
  this.model.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}
  
  
  route() {
    router.get('/' + this.routeString, (...args) => this._get(...args));
    router.post('/' + this.routeString , (...args) => this._create(...args));
    router.get('/' + this.routeString + '/:id', (...args) => this._getOne(...args));
    router.put('/' + this.routeString + '/:id', (...args) => this._update(...args));
    router.delete('/' + this.routeString + '/:id', (...args) => this._delete(...args));
    return router;
  }

}

module.exports = BaseController