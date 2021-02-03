import Parcel from 'parcel-bundler'
import path from 'path'
import open from 'opn'


function generateSource() {

}

let page = new Parcel(path.join(__dirname, `../src/index.html`), {})
page.bundle().then((bundle) => {
  page.serve(1234)
  open('http://localhost:1234')
}).catch(error => {
  console.error(error)
})

function foreach() {
  
}

