pipeline {
     agent any
     tools {nodejs "NodeJS"}
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "pm2 start npm --name portfolio-website -- start -- -p 3000"
                sh 'echo "DONE"'
            }
        }
    }
}