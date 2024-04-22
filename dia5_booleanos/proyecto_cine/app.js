
function recomendar(genero){

    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
    switch(genero){
        case "drama":
            if(edad < 13){
                recomendacion.textContent = "Recomendamos ver la película 'El niño con el pijama de rayas'";
            }else if(edad < 16){
                recomendacion.textContent = "Recomendamos ver la película 'La vida es bella'";
            } else {
                recomendacion.textContent = "Recomendamos ver la película 'Titanic'";
            }
            break;
            case "comedia":
                if(edad < 13){
                    recomendacion.textContent = "Recomendamos ver la película 'Mi pobre angelito'";
                }else if(edad < 16){
                    recomendacion.textContent = "Recomendamos ver la película 'Supercool'";
                } else {
                    recomendacion.textContent = "Recomendamos ver la película 'Mi gran boda griega'";
                }
                break;
                case "musical":
                    if(edad < 13){
                        recomendacion.textContent = "Recomendamos ver la película 'La la land'";
                    }else if(edad < 16){
                        recomendacion.textContent = "Recomendamos ver la película 'Mamma mia!'";
                    } else {
                        recomendacion.textContent = "Recomendamos ver la película 'Bohemian Rhapsody'";
                    }
                    break;
                    case "crimen":
                        if(edad < 13){
                            recomendacion.textContent = "Recomendamos ver la película 'Coraline'";
                        }else if(edad < 16){
                            recomendacion.textContent = "Recomendamos ver la película 'El silencio de los corderos'";
                        } else {
                            recomendacion.textContent = "Recomendamos ver la película 'El padrino'";
                        }
                        break;
                            default:
                                recomendacion.textContent = "No tenemos recomendaciones para ese género";
    }

    
}