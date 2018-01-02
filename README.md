# working-with-gulp
Perform operations using the gulp utility to build multiple LESS CSS files to a single CSS file.

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

- Run the Gulp "Task". Task are operations that need to be performed.
Open command prompt, browse to the path where the project is located and run below commands:-

		"gulp compileless"
		
- "compileless" is a task name. If Gulp task name is default it need not be mentioned to run it. Only mentioning gulp will run the task.

- The final compiled single CSS file will be "final.min.css".
