pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                script {
                    dir('./') {
                        sh 'cp /var/www/happy-snippet/happy-snippet-fe/.env ./.env'
                        sh 'docker stop happy-snippet-fe || true'
                        sh 'docker rm happy-snippet-fe || true'
                        sh 'docker rmi happy-snippet-fe:0 || true'
                        sh 'docker build -t happy-snippet-fe:0 .'
                        //sh 'rm ./.env'
                    }
            }
          }
        }
        stage('Create and start docker containers') {
            steps {
                script {
                    // Create and start the Docker containers for frontend and back end
                    sh 'docker create --name happy-snippet-fe -p 5401:5401 --restart=always happy-snippet-fe:0'
                    //sh 'docker create --name mosf-fe -p 5401:5401 --restart=always -v /var/www/mosf-fe/.env:/usr/src/app/.env mosf-fe:0'
                    sh 'docker start happy-snippet-fe'
                }
            }
        }
    }
}