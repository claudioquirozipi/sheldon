export const passwordComparison = (value1: string, value2: string) {
    if (value1 === value2) {
        return({
            valid: true,
            error: ""
        })
    } else {
        return({
            valid: false,
            error: "* Password does not match."
        })
    }
}




export const validate = (value: any ,type: string,required: boolean) => {
    if (required) {
        if (value.length == 0 ) {
        return({
            valid: false,
            error: "* Obligatory field."
        })}
    } 
    if (type == "text") {
        if( /[^a-zA-Z0-9]/.test(value)) {
            return({
                valid: false,
                error: "* You must not use special characters"
            })
        }
    } if (type == "number") {
        if( /[^0-9]/.test(value)) {
            return({
                valid: false,
                error: "* You must use only numbers"
            })
        }
    } if (type == "email") {
        if ( /^[\w-.]+\@[\w-]+\.[a-z]{2,3}(\.[a-z]{2})?$/i.test(value) !== true ) {
            return({
                valid: false,
                error: "* Add a valid email"
            })
        }
        if ( /gmail\.com$/i.test(value) || /hotmail\.com$/i.test(value)) {
            return({
                valid: false,
                error: "* Add a corporate email"
            })
        }
    } if(type == "password") {
        if( 
            !(/[a-z]/.test(value) &&
            /[A-Z]/.test(value) && 
            /[0-9]/.test(value) && 
            /[^a-z0-9]/i.test(value) &&
            value.length>8 )
        ) {
            return({
                valid: false,
                error: "* It must contain at least one lowercase letter, capital letter and a special character."
            })
        }
    }

    return({
        valid: true,
        error: ""
    })
}

