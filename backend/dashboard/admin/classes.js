// form validation
export function formValidationSubject(name,code,sessions){
    if(name==""){
        return 1;
    }
    if(code==""){
        return 2;
    }
    if(sessions==""){
        return 3;
    }
    return 0;
}

export function formValidationStudent(name,stdkey){
    if(name==""){
        return 1;
    }
    if(stdkey==""){
        return 2;
    }
    return 0;
}

export function formValidationClass(name){
    if(name==""){
        return 1;
    }
    return 0;
}