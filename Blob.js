(function (Scratch) {
  'use strict';
  const vm = Scratch.vm;
  function loadExtension(id) {
    if (!vm.extensionManager.isExtensionLoaded(id)) {
      vm.extensionManager.loadExtensionIdSync(id);
    }
  }
  if (Scratch.gui) {
    Scratch.gui.getBlockly().then(Scratchblocks => {
      Scratchblocks.BlockSvg.registerCustomShape("dvBlobs-dovebird", {
        emptyInputPath: 'm 30 0 h 10 v 10 l -5 -5 v 20 l 5 -5 v 12 h -10 h -20 h -10 v -12 l 5 5 v -20 l -5 5 v -10 h 10 z',
        leftPath: (Block) => {
          const edgeWidth = Block.height / 2;
          const s = edgeWidth / 16;
          return [`h ${-10 * s} v ${-12 * s} l ${5 * s} ${5 * s} v ${-20 * s} l ${-5 * s} ${5 * s} v ${-10 * s} h ${10 * s}`]
        },
        rightPath: (Block) => {
          const edgeWidth = Block.edgeShapeWidth_;
          const s = edgeWidth / 16;
          return [`h ${10 * s} v ${10 * s} l ${-5 * s} ${-5 * s} v ${20 * s} l ${5 * s} ${-5 * s} v ${12 * s} h ${-10 * s}`]
        }
      });
    });
  };
  const Template = {
    Block: {
      blockType: Scratch.BlockType.REPORTER,
      blockShape: 'dvBlobs-dovebird',
      forceOutputType: 'dvBlobs'
    },
    Argument: {
      shape: 'dvBlobs-dovebird',
      check: ['dvBlobs'],
      exemptFromNormalization: true
    },
    Pause: "---"
  }
  class dvBlob {
    constructor(blob = new Blob([])) {
      this.blob = blob
      this.customId = 'dvBlob'
      this.url = URL.createObjectURL(this.blob)
    }
    toReporterContent() {
      let root = document.createElement('span');
      root.textContent = 'Loading blob...';
      this.blob.text().then(text => {
        root.textContent = `Blob: ${text === '' ? '(Blank Blob)' : text}\nType: ${this.blob.type}`;
      });
      return root;
    }
    toString() {
      return this.text
    }
    jwArrayHandler() {
      return `Blob`
    }
    static toBlob(blobobb) {
      if (blobobb instanceof dvBlob) return blobobb
      if (typeof blobobb === 'string') return new dvBlob(new Blob([blobobb]))
      if (blobobb instanceof vm.jwArray.Type) return new dvBlob(new Blob(blobobb.toJSON()))
      return new dvBlob(new Blob([]))
    }
  }
  class Extension {
    constructor() {
      vm.registerSerializer('dvBlob',(blobobb) => {
        return blobobb.text
      }, (string) => {
        return new dvBlob(new Blob([string]))
      })
      loadExtension('jwArray');
      (async () => {
        if(!vm.agBuffer) await vm.extensionManager.loadExtensionURL("https://extensions.penguinmod.com/extensions/AndrewGaming587/agBuffer.js");
      })();
    }
     getInfo() {
        return {
            id: 'dvBlobs',         
            name: 'Blobs',         
            color1: '#2de65f',     
            menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCwwLDIwLDIwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjMwLC0xNzApIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0yMzEsMTgwYzAsLTQuOTcwNTYgNC4wMjk0NCwtOSA5LC05YzQuOTcwNTYsMCA5LDQuMDI5NDQgOSw5YzAsNC45NzA1NiAtNC4wMjk0NCw5IC05LDljLTQuOTcwNTYsMCAtOSwtNC4wMjk0NCAtOSwtOXoiIGZpbGw9IiMyZGU2NWYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMTVkYzVkIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTIzNi41ODM1NywxODQuNTUxMDdjLTEuMTMxMjYsLTAuNjg1MDUgLTAuMjc3NTksLTEuNDE4OCAtMC4yNzc1OSwtMS40MTg4Yy0wLjM3Njk3LC0xLjI5NjYzIC0xLjA2Mzk2LC0zLjI1ODA1IC0wLjgyMTk0LC00LjUzMTkyYzAuMjk3MTksLTEuNTY0MjQgMC45ODkxNiwtMi43ODczNyAzLjAyNzI1LC0zLjExNzI0YzEuMTI5NzEsLTAuMTgyODQgMi42MjY3LC0wLjY1ODk2IDMuNzA0MDYsLTAuMzE3NDJjMC45ODQ0MiwwLjMxMjA4IDEuNzQ3MywxLjczOTMxIDIuMTcxNjEsMi44MDAzMWMwLjY3ODc1LDEuNjk3MjMgLTAuNzg2NTEsNS4wODkxNiAtMC43ODY1MSw1LjA4OTE2YzAsMCAwLjcyNDQsMC41MzA2NiAtMC4yNjIxNywwLjkwOTg4YzAsMCAtMi4xMTY2LDAuODc4MjQgLTMuMjUyMTksMC45NzY3NmMtMS4xMTU2MiwwLjA5Njc5IC0zLjUwMjUxLC0wLjM5MDc0IC0zLjUwMjUxLC0wLjM5MDc0eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjwvZz48L3N2Zz4=',    
            blocks: [  
              {
                opcode: 'newblob',
                text: 'new blob[ARRAY]',
                arguments: {
                  ARRAY: vm.jwArray.Argument
                },
                ...Template.Block
              },
              {
                opcode: 'newblobtype',
                text: 'new blob[ARRAY]type[TYPE]',
                arguments: {
                  ARRAY: vm.jwArray.Argument,
                  TYPE: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'text/plain'
                  }
                },
                ...Template.Block
              },
              {
                opcode: 'slice',
                text: 'slice[BLOB]from[START]to[END]',
                arguments: {
                  BLOB: Template.Argument,
                  START: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 0
                  },
                  END: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: 100
                  }
                },
                ...Template.Block
              },
              Template.Pause,
              {
                opcode: 'bufferof',
                text: 'buffer of[BLOB]',
                arguments: {
                  BLOB: Template.Argument
                },
                blockType: Scratch.BlockType.REPORTER,
                blockShape: Scratch.BlockShape.SQUARE,
                forceOutputType: "ArrayBuffer",
                disableMonitor: true
              },
              Template.Pause,
              {
                opcode: 'textof',
                text: 'text of[BLOB]',
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                  BLOB: Template.Argument
                }
              },
              {
                opcode: 'type',
                text: 'type of[BLOB]',
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                  BLOB: Template.Argument
                }
              },
              {
                opcode: 'size',
                text: 'size of[BLOB]',
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                  BLOB: Template.Argument
                }
              },
              Template.Pause,
              {
                opcode: 'url',
                text: 'url of[BLOB]',
                blockType: Scratch.BlockType.REPORTER,
                arguments: {
                  BLOB: Template.Argument
                }
              },
              {
                opcode: 'fromurl',
                text: 'from url[URL]',
                arguments: {
                  URL: {
                    type: Scratch.ArgumentType.STRING,
                    defaultValue: 'https:/example.com'
                  }
                },
                ...Template.Block
              }
            ],       
        };     
    }
    newblob({ ARRAY }) {
      return new dvBlob(new Blob(vm.jwArray.Type.toArray(ARRAY).toJSON(), { type: 'text/plain' }))
    }
    newblobtype({ ARRAY, TYPE }) {
      return new dvBlob(new Blob(vm.jwArray.Type.toArray(ARRAY).toJSON(), { type: TYPE }))
    }
    type({ BLOB }) {
      return dvBlob.toBlob(BLOB).blob.type
    }
    url({ BLOB })  {
      return dvBlob.toBlob(BLOB).url
    }
    async fromurl({ URL }) {
      try {
        const r = await fetch(URL);
        if (!r.ok) return new dvBlob();
        const blob = await r.blob();
        return new dvBlob(blob)
      } catch {
        return new dvBlob();
      }
    }
    async textof({ BLOB }) {
      return dvBlob.toBlob(BLOB).blob.text()
    }
    async bufferof({ BLOB }) {
      const buffer = await dvBlob.toBlob(BLOB).blob.arrayBuffer();
      return new vm.agBuffer.Type(buffer)
    }
    size({ BLOB }) {
      return dvBlob.toBlob(BLOB).blob.size
    }
    slice({ BLOB, START, END }) {
      return new dvBlob(dvBlob.toBlob(BLOB).blob.slice(START - 1, END))
    }
}   Scratch.extensions.register(new Extension()); 
})(Scratch);