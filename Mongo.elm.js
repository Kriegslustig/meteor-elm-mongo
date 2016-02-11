Elm.Native.Mongo = {}
Elm.Native.Mongo.make = elm => {
  elm.Native = elm.Native || {}
  elm.Native.Mongo = elm.Native.Mongo || {}
  if(elm.Native.Mongo.value) return elm.Native.Mongo.value

  const find = (options, selector, coll) => {
    let opts = {}
    for(key in options) {
      console.log(options[key])
    }
    return {
      cursor: coll.collection.find(selector, opts)
    }
  }

  return elm.Native.Mongo.value = {
    find
  }
}

