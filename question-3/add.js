const fs = require('fs')
const path = require('path')

const logs = path.join(__dirname, 'logs')

function createDir(dirPath){
    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath)
    }
}

function createLogFile(file){
    const filepath = path.join(logs, file)
    fs.writeFileSync(filepath, 'log data')
}

function createLogFiles(){
    createDir(logs)
    process.chdir(logs)
    console.log('Current Directory: ', process.cwd())

    for (let i = 0; i <= 10; i++){
        const fileName = `log${i}.txt`
        createLogFile(fileName)
        console.log(fileName)
    }
}
createLogFiles();