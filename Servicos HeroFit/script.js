
document.querySelectorAll('.btn').forEach((button, index) => {
    
    button.addEventListener('click', (event) => {
        event.preventDefault(); 

       
        let message;
        switch (index) {
            case 0:
                message = "Mais informações sobre Musculação estarão disponíveis em breve!";
                break;
            case 1:
                message = "Mais informações sobre os treinos para Homens estarão disponíveis em breve!";
                break;
            case 2:
                message = "Mais informações sobre os treinos para Mulheres estarão disponíveis em breve!";
                break;
            default:
                message = "Mais informações estarão disponíveis em breve!";
        }

        
        alert(message);
    });
});
