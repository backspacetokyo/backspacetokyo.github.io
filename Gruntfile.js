
module.exports = function(grunt) 
{
	// config
	grunt.initConfig({
		
		connect: {
			local: {
				options: {
					base:"./",
			      	port: 9000,
					keepalive: true
			    }
			}
		},
		
		watch:
		{
			options:
			{
				livereload: 10101
			},
			html:
			{
				files: ["./*.html"],
				tasks: ['']
			}
		}
		
		// watch: {
		// 	entrance: {
		// 		files: ['./*.*'],
		// 		tasks: tasks.entrance
		// 	}
		// }
	});
	
	// plugins
	grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	// tasks
	// grunt.registerTask('default', ['watch']);
	grunt.registerTask('default', ['connect']);
}