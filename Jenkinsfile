pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
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