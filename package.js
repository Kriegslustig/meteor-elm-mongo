Package.describe(
  { name: 'elm:mongo'
  , summary: 'Mongo bindings for Elm'
  , version: '0.0.1'
  , git: 'https://github.com/Kriegslustig/meteor-elm-mongo.git'
  }
)

Package.onUse(function (api) {
  api.use(['ecmascript@0.1.6', 'elm:make', 'mongo'])
  api.addFiles(
    [ 'Mongo.elm'
    , 'Mongo.elm.js'
    ]
  )
})

Package.onTest(function (api) {
  api.use(['ecmascript@0.1.6'])
  api.addFiles('Mongo.elm')
})

