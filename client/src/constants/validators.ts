const emailValidator = function(emailId:string = ""): boolean {
    return (/\S+@\S+\.\S+/.test(emailId));
};

export const Validators = {
    emailValidator
};