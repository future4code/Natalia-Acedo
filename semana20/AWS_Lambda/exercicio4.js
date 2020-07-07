exports.handler = async (event) => {

    let isEmail = true
    let reason = ""

    if(event.text.indexOf("@") === -1 ) {
        isEmail = false
        reason = "Does not have the @ character"
    } else {
        isEmail = true
    }


    return {
      body: JSON.stringify({isEmail, reason})  
    }
}