let updatePreview = () => {
  let editorInput = document.getElementById('text-input').value
  let markdown = marked(editorInput)
  document.getElementById('preview-render-box').innerHTML = markdown
}

let saveFile = () => {
  let markdownData = document.getElementById('text-input').value
  let fileName = window.location.pathname
  console.log(fileName)
  let data = JSON.stringify({text: markdownData, file: fileName})
  fetch('/save', {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: data
  })
  .then( response => {
    console.log('we did it!', response);
  })
}

let createFile = () => {
  let fileName = prompt("Please enter a file name")
  fetch('/newfile', {
    method: 'post',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: fileName
  })
  .then ( response => {
    console.log('we did it!', response);
  })
}

window.onload = () => {
  updatePreview
  document.getElementById('text-input').addEventListener('input', updatePreview)
  document.getElementById('list').addEventListener('click', updatePreview)
  document.getElementById('button-save').addEventListener('click', saveFile)
  document.getElementById('new-file-button').addEventListener('click', createFile)
}
