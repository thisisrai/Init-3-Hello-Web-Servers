let updatePreview = () => {
  let editorInput = document.getElementById('text-input').value
  let markdown = marked(editorInput)
  document.getElementById('preview-render-box').innerHTML = markdown
}

let saveFile = () => {
  let markdownData = document.getElementById('text-input').value
  fetch('/save', {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: markdownData
  })
  .then( response => {
    console.log('we did it!', response);
  })
}


let load = () => {
  fetch('/load', {
    method: 'get',
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  .then((response) => {
    return response.text()
  })
  .then((response) => {
    document.getElementById('text-input').value = response
    updatePreview()
  }).catch(console.log)
}

let createFile = () => {
  let fileName = prompt("Please enter a file name. File name must be a string with no spaces and add .md after the name.")
}

window.onload = () => {
  document.getElementById('text-input').addEventListener('input', updatePreview)
  document.getElementById('button-save').addEventListener('click', saveFile)
  document.getElementById('new-file-button').addEventListener('click', createFile)
  load()
}
