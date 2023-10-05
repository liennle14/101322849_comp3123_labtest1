const resolvedPromise = () => {
    var p1 = new Promise((resolve) => {
        setTimeout(()=> {
            let success = {'message': 'delayed success!'}
            console.log(success)
            resolve()
        }, 500)
    })
}

const rejectedPromise = () => {
    var p2 = new Promise((reject) =>{
        setTimeout(() => {
            try {
                throw new Error('error: delayed exception!')
            } catch (e) {
                console.error(e)
                reject()
            }
        },500)
    })
}
resolvedPromise()
rejectedPromise()