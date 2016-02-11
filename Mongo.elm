module Mongo where

import Native.Mongo

type alias Sort =
  { a : Int
  , b : Int
  }

type alias FindOptions =
  Maybe
    { limit : Maybe Int
    , sort : Maybe Sort
    , skip : Maybe Int
    , fields : Maybe () -- Fake Type
    , reactive : Maybe Bool
    , transform : Maybe ()
    }

type alias Collection =
  { name : String
  , collection : () -- Fake Type
  }

type alias Cursor =
  { cursor : () -- Fake Type
  }

find : FindOptions -> x -> Collection -> Cursor
find = Native.Mongo.find

