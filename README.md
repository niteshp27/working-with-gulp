# working-with-gulp
Perform operations using the gulp utility to watch multiple LESS and SCSS CSS files and JS files and should chnages to files occur 
they will bundle it to a sing files and update it to a single minified CSS file and minified and uglified JS file.

Follow the following steps after downloading the repo.

- Install node.js on your machine. https://nodejs.org/en/

- Install Gulp on your Machine. https://gulpjs.com/

- Start with gulp.js

	A. we'll create a folder called project to server as our project root as we move through this tutorial.

	B. Run the npm init command from inside that directory:-

		"npm init"

	C. The npm init command creates a package.json file for your project which stores information about the project, 
	like the dependencies used in the project (Gulp is an example of a dependency).

	D. Install dependencies.
  
		"npm install gulp-less --save-dev"

		"npm install gulp-concat --save-dev"

		"npm install merge-stream --save-dev"

		"npm install gulp-minify-css --save-dev"

		"npm install gulp-sass --save-dev"

		"npm install gulp-uglify --save-dev"

		"npm install gulp-rename --save-dev"

-Run the Gulp "Task". Task are operations that need to be performed.
Open command prompt, browse to the path where the project is located and run below commands:-

		1. run command- 

			"gulp compiletocss" or //run command seperately- "gulp bundlejs"

		or run command- 

			"gulp bundlecssjs"
		
		2. first run command-

			"gulp default" and then run "gulp watch" command.

		run command- 

			"gulp watch"
    
- "compiletocss" is a task name. If Gulp task name is default it need not be mentioned to run it. Only mentioning gulp will run the task.

- The final compiled single CSS file will be "final.min.css" and final single JS file will be "script.min.js".

- The generated files to be used will be found in dist directory.
