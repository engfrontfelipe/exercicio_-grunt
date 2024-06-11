module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less:{
                development:{
                    files:{
                        'dev/styles/style.css' : 'src/styles/style.less'
                    }
                },
                production:{
                    options:{
                        compress: true
                    },
                    files:{
                        'dist/styles/styles.min.css' : 'src/styles/style.less'
                    }
                }
        },

        replace:{
            dev: {
                options: {
                    patterns: [
                        
                        {
                            match: 'ENDERECO-DO-CSS',
                            replacement: './styles/style.css'
                        },
                        
                        {
                            match: 'ENDERECO-DO-JS',
                            replacement: './scripts/script.js'
                        }

                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    },

                    {
                       expand: true,
                       flatten: true, 
                        src:['src/scripts/script.js'],
                        dest: './dev/scripts'   
                    }

                ]
            },

            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO-DO-CSS',
                            replacement: './styles/styles.min.css'
                        },

                        {
                            match: 'ENDERECO-DO-JS',
                            replacement: './scripts/script.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],   
                        dest: 'dist/'
                    }
                ]

            }

        },

        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files:{
                    'prebuild/index.html' : 'src/index.html'
                }
            }

        },

        clean:[
            'prebuild'
        ],
      
        uglify:{
            target:{
                files:{
                    'dist/scripts/script.min.js' : 'src/scripts/script.js'
                }
            }

        }





    }) // separação dos registros de funções e dos registros de tarefas.

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-uglify')



    grunt.registerTask('default', ['less:development', 'replace:dev']);
    grunt.registerTask('build', ['less:production', 'htmlmin', 'replace:dist', 'clean', 'uglify'])
    
}