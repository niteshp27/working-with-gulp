# working-with-gulp
Perform operations using the gulp utility to watch multiple LESS and SCSS CSS files and JS files and should chnages to files occur 
they will bundle it to a sing files and update it to a single minified CSS file and minified and uglified JS file. It also perform css beautification, formatting. Copy fonts, html to dist directory. 

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

		"npm install browser-sync --save-dev"

		"npm install gulp-if --save-dev"

		"npm install gulp-beautify --save-dev"

		"npm install del --save-dev"

		"npm install run-sequence --save-dev"

-Run the Gulp "Task". Task are operations that need to be performed.
Open command prompt, browse to the path where the project is located and run below commands:-


		first run command-
			"gulp default"  
		
		and then run command-
			"gulp watch" 
			
		run command- 
			"gulp"
		
		run command- 
			"gulp watch"

    
- "default" is a task name. If Gulp task name is default it need not be mentioned to run it. Only mentioning gulp will run the task.

- The final compiled single CSS file will be "style.min.css" and final single JS file will be "script.min.js".

- The file to be used will be found in dist directory.

Note*-
Operation to be need to rework- Clean unsed files, run sequence for calling clean before second task are run simultaneously
