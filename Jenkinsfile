pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build -t sample:dev .'
      }
    }

    stage('run') {
      steps {
        sh 'docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev'
      }
    }

  }
}