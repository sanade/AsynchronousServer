should = require 'should'
user = require '../src/user.coffee'

describe 'test', ->
  it 'test number', (done) ->
    user.get "one", (name) ->
      name.should.equal "one"
      done()

  it 'other test', (done) ->
    user.get "one", (name) ->
      name.should.not.equal "two"
      done()
