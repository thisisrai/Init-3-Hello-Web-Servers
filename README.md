# Init-3-Hello-Web-Servers

### Specifications

These are the basic specs for “Hello, Web Servers”, broken into 5 stages. If you complete these specs, try taking on some of the Stretch specs.

#### Stage 1

Setup the repo and file structure, install and configure Express, and get a basic server running.

 - [x] Repo (your artifact) is created on GitHub
 - [x] Repo follows a conventional file structure for an Express.js app:
  - [x] package.json: standard for any Node.js app; includes package info and lists dependencies
  - [x] app.js: your Express server, with all routes defined
  - [x] views/: for storing your Pug HTML templates
  - [x] public/: for storing static files like CSS and images
  - [x] README.md: includes overview of your repo
 - [x] Express server can be started with $ node app.js
 - [x] Server renders a page at the root route (/) that looks like the mockup but does not have any functionality - it is just a static page
 - [x] All package dependencies are defined in package.json
 - [x] The artifact produced is properly licensed, preferably with the MIT license

#### Stage 2

Build out the template structure with Pug for a single-file editor. Don’t worry about multiple files for now, or implementing the markdown rendering.

- pug is installed and set up for HTML templating
 - [x] View template files are created in the /views subdirectory
 - [x] Main view file is called index
 - [x] Includes are created for the different “components” of the main view:
  - [x] Sidebar (shows list of files)
  - [x] Header (shows current filename, word count, and save button)
  - [x] Editor (shows markdown editor pane)
  - [x] Preview (shows rendered markdown)
 - [x] CSS is organized into one or more files in the public/ directory
 - [x] CSS declarations are well-named and formatted (consider using this small guide)

#### Stage 3

Setup real markdown rendering so that writing in the left panel updates the right panel, and make the “Save” button work.

- marked is installed
 - [x] Markdown text written in the “Editor” pane is rendered in the “Preview” pane automatically
 - [x] Preview is updated every time text in the editor changes
 - [x] Clicking the “Save” button saves the markdown text in the editor to a file in a subdirectory of the server data/
 - [x] The markdown file in data/ is loaded and used as the starter text in the editor (in other words, the last saved text is loaded by default)

#### Stage 4

Build out multiple-file functionality, and use cookies to remember the last opened file.

 - [ ] Users can create more than one markdown file
 - [ ] Each file has its own URL, named after its filename (for example, if the markdown file is called Todos.md, its URL would be http://localhost:3000/todos)
 - [ ] Markdown files are listed in the sidebar
 - [ ] Clicking on the “New File” button in the sidebar lets users create a new file and prompts for the file name using prompt()
 - [ ] Clicking on a file in the sidebar will navigate to the page, load the file contents into the editor, and render them in the preview
 - [ ] Markdown content can still be saved to files in data/, with one file in data/ for each file in the sidebar
 - [ ] Most recently edited file is tracked using a cookie
 - [ ] When visiting the root route (/), users are redirected to the file they last edited

#### Stage 5

No stage 5! Move into stretch specs, or use the time to polish up your code.
