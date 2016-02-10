Package.describe(
  { name: 'elm:mongo'
  , summary: 'Mongo bindings for Elm'
  , version: '0.0.1'
  //, git: ''
  }
)

Package.onUse(function (api) {
  api.use(['ecmascript@0.1.6', 'mongo'])
  api.addFiles(
    [ 'Mongo.elm'
    ]
  )
})

Package.onTest(function (api) {
  api.use(['ecmascript@0.1.6'])
  api.addFiles('Mongo.elm')
})

