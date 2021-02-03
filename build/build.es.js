import Parcel from 'parcel-bundler'
import path from 'path'
import fs from 'fs'

const option = {
  publicUrl: './'
}

let files = fs.readdirSync(path.join(__dirname, '../src/pages'))
files.forEach((file) => {
  let ext = path.extname(file)
  let fileName = path.basename(file).replace(ext, '')
  if (ext === '.html') {
    new Parcel(path.join(__dirname, `../src/pages/${fileName}.html`), option).bundle()
  }
})

new Parcel(path.join(__dirname, '../src/index.html'), option).bundle()
