## Disclaimer: This Extension Must Run Unsandboxed
# Blobs
A [Penguinmod](https://studio.penguinmod.com/editor.html) Extension That Lets you reference Binary Large OBjects

Blocks: 
- [Basic Blocks](#basic-blocks)
   - [`(New Blob(ARRAY))`](#new-blobarray---blob)
   - [`(New Blob(ARRAY)Type(TYPE))`](#new-blobarraytypetype---blob)
   - [`(Slice(BLOB)From(START)To(END))`](#sliceblobfromstarttoend---blob)
- [Buffers](#buffers)
   - [`(Buffer Of(BLOB))`](#buffer-ofblob---array-buffer)
- [Blob Atributes](#blob-atributes)
   - [`(Text Of(BLOB))`](#text-ofblob---string)
   - [`(Type Of(BLOB))`](#type-ofblob---string)
   - [`(Size Of(BLOB))`](#size-ofblob---number)
- [URLS](#urls)
   - [`(URL Of(BLOB))`](#url-ofblob---string)
   - [`(From URL(URL))`](#from-urlurl---blob)

# Basic Blocks

## `(New Blob(ARRAY))` -> Blob
![blobobb](Asset/Blocks/newblob.png)

Lets You Create A Blob From The Array `(ARRAY)`

## `(New Blob(ARRAY)Type(TYPE))` -> Blob
![blobobb](Asset/Blocks/newblobtype.png)

Lets You Create A Blob From The Array `(ARRAY)` With Type `(TYPE)`

## `(Slice(BLOB)From(START)To(END))` -> Blob
![blobobb](Asset/Blocks/slice.png)

Returns A New Blob Thats All The Characters Of `(BLOB)` That Goes From `(START)` To `(END)`

# Buffers

## `(Buffer Of(BLOB))` -> Array Buffer
![blobobb](Asset/Blocks/bufferof.png)

Returns `(BLOB)` As An Array Buffer

# Blob Atributes

## `(Text Of(BLOB))` -> String
![blobobb](Asset/Blocks/textof.png)

Returns The Plaintext Of `(BLOB)`

## `(Type Of(BLOB))` -> String
![blobobb](Asset/Blocks/type.png)

Returns The Mime Type Of `(BLOB)`

## `(Size Of(BLOB))` -> Number
![blobobb](Asset/Blocks/size.png)

Returns How Big Is `(BLOB)`

# URLS

## `(URL Of(BLOB))` -> String
![blobobb](Asset/Blocks/url.png)

Returns The Url Of `(BLOB)`

## `(From URL(URL)` -> Blob
![blobobb](Asset/Blocks/fromurl.png)

Fetches From `(URL)` And Returns As A Blob
