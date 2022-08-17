pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('test') {
              steps {
                   echo 'building the app'
              }
        }
        stage('deploy') {
              steps {
                    echo 'deploying the app'
              }
        }
    }
}


