const validateBody = (request, response , next) =>{

    const {body} = request

    if(body.name === undefined){
        return response.status(400).json({message: 'the field name is required'})
    }

    if(body.name === ''){
        return response.status(400).json({message: 'the field name can not be ampty'})
    }

    if(body.adress === undefined){
        return response.status(400).json({message: 'the field adress is required'})
    }

    if(body.adress === ''){
        return response.status(400).json({message: 'the field adress can not be ampty'})
    }

    if(body.CPF === undefined){
        return response.status(400).json({message: 'the field CPF is required'})
    }

    if(body.CPF === ''){
        return response.status(400).json({message: 'the field CPF can not be ampty'})
    }

    if(body.AGE === undefined){
        return response.status(400).json({message: 'the field AGE is required'})
    }

    if(body.AGE === ''){
        return response.status(400).json({message: 'the field AGE can not be ampty'})
    }

    
}

module.exports = {
    validateBody
}