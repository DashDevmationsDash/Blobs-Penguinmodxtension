## Disclaimer: This Extension Must Run Unsandboxed
# Blobs
A [Penguinmod](https://studio.penguinmod.com/editor.html) Extension That Lets you reference Binary Large OBjects

Blocks: 
- [Basic Blocks](#basic-blocks)
   - [`(New Blob(ARRAY))`](#new-blobarray---blob)
   - [`(New Blob(ARRAY)Type(TYPE))`](#new-blobarraytypetype---blob)
   - [`(Slice(BLOB)From(START)To(END))`](#sliceblobfromstarttoend---blob)

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
