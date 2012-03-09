jsp = require("uglify-js").parser
pro = require("uglify-js").uglify
muffin = require 'muffin'
fs = require 'fs'
crush = require './lib/crush'
utf8Length = require './lib/length'

option '-w', '--watch',  'continue to watch the files and rebuild them when they change'

task 'build', (options)->
  muffin.run
    files: './**/*.js'
    options: options
    map:
      'submission.js'     : (matches) ->
        muffin.readFile(matches[0], options).then (orig_code) ->
          origLength = utf8Length(orig_code)
          ast = jsp.parse(orig_code)
          ast = pro.ast_mangle ast,
            toplevel: true
          ast = pro.ast_squeeze(ast)
          minifiedCode = pro.gen_code(ast)

          finalCode = crush(minifiedCode)
          length = utf8Length(finalCode)

          muffin.writeFile("build/minified.js", minifiedCode, options).then ->
            muffin.writeFile("build/crushed.js", finalCode, options).then ->
              result = "#{origLength} -> #{length} (#{(length/origLength*100).toFixed(1)}%)"
              muffin.notify result, "Compiled bin successfully, length: #{result}"
