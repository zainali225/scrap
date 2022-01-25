export default (path, method = "GET", body,) => {
    let options = {
        method,
        headers: {
            'content-type': 'application/json'
        },

    }

    if (body) {
        options.body = JSON.stringify(body)
    }
    return fetch(path, options)
        .then(res => res.text())
        .then(text => {
            console.log('-->', path, ' ',
                '\nbody:', JSON.stringify(body),
                '\nres:', text, '\n------------------\n',
            )
            try {
                return JSON.parse(text)
            } catch (error) {

                return text
            }

        })
        .catch(err => {
            console.log('-->', path, ' ',
                '\nbody:', JSON.stringify(body))
            alert(err.message)


            return false
        })



}