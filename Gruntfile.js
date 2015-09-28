module.exports = function(grunt) {

    grunt.initConfig({

        // 監視
        watch: {
            typescript: {
                tasks: 'typescript',
                files: ['src/**/*.ts']
            },
            concat: {
                tasks: 'concat',
                files: ['dest/js/**/*.js']
            },
            uglify: {
                tasks: 'uglify',
                files: ['dest/concat/main.js']
            },
        },

        // TypeScript変換
        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'dest/js/',
                options: {
                    module: 'commonjs', //amd or commonjs 
                    //watch: true //Detect all target files root. eg: 'path/to/typescript/files/' 
                }
            }
        },

        // ファイル結合
        concat: {
            files: {
                // 元ファイルの指定。
                src: 'dest/js/**/*.js',
                // 出力ファイルの名前・パス指定
                dest: 'dest/concat/main.js'
            }
        },

        // 圧縮
        uglify: {
            dist: {
                src: "dest/concat/main.js",
                dest: "main-min.js"
            },
        },

    });

    //使うプラグインの読み込み
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};