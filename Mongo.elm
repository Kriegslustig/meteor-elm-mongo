module Mongo where

type alias Cursor =
  { _cursor : Tuple -- Faked type; this will actually be an object
  }

