pipeline {
    agent {
        docker {
            image 'node:18.4.0-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "TESTING"'
            }
        }
        stage('Deliver') { 
            steps {
               
                sh 'npm run start' 
            }
        }
    }
}