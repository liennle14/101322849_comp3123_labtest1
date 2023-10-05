const fs = require('fs')
const path = require('path')

const logs = path.join(__dirname, 'logs')

function removeFile(filepath){
    fs.unlink(filepath, (err) =>{
        if (err){
            console.log(err)
        }
        else{
            console.log("SUCCESS")
        }
    })
}

function removeLogFiles(filepath){
    try{
        if(fs.existsSync(logs)){
            const files = fs.readdirSync(logs)
            files.forEach((file) => {
                const filepath = path.join(logs, file)
                removeFile(filepath)
                console.log("delete files...", file)
            
            })

            fs.rmdirSync(logs)
        }
    }
    catch(err){
        console.log(err)
    }
}
removeLogFiles();