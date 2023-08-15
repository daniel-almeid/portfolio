const accessibilityToggle = document.getElementById('accessibility-toggle');
        const accessibilityOptions = document.getElementById('accessibility-options');
        const autismToggle = document.getElementById('autism-toggle');
        const dyslexiaToggle = document.getElementById('dyslexia-toggle');
        const physicalDisabilityToggle = document.getElementById('physical-disability-toggle');
        const visualImpairmentToggle = document.getElementById('visual-impairment-toggle');
        const body = document.body;
        const optionButtons = document.querySelectorAll('.accessibility-options .btn-secondary');

     

        autismToggle.addEventListener('click', () => {
            body.classList.toggle('autism-friendly');
            body.classList.toggle('autism-font-color');
        });

        dyslexiaToggle.addEventListener('click', () => {
            body.classList.toggle('dyslexia-friendly');
        });

        physicalDisabilityToggle.addEventListener('click', () => {
            body.classList.toggle('physical-disability-friendly');
        });

        visualImpairmentToggle.addEventListener('click', () => {
            body.classList.toggle('visual-impairment-friendly');
            
            if (body.classList.contains('visual-impairment-friendly')) {
                // Coletar todo o texto visível no corpo do site
                const allVisibleText = collectVisibleText(document.body);
                // Ativar a leitura em voz alta
                speakText(allVisibleText);
            } else {
                // Pausar a leitura em voz alta se a opção for desativada
                speechSynthesis.cancel();
            }
        });
        function collectVisibleText(element) {
            let text = '';
        
            if (window.getComputedStyle(element).display === 'none') {
                return '';
            }
        
            if (element.nodeType === Node.TEXT_NODE) {
                text += element.textContent.trim() + ' ';
            }
        
            for (const child of element.childNodes) {
                if (child.nodeType === Node.ELEMENT_NODE) {
                    text += collectVisibleText(child);
                }
            }
        
            return text;
        }
        
        // Função para ativar a leitura em voz alta
        function speakText(text) {
            const speech = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(speech);
        }
        
        accessibilityToggle.addEventListener('click', () => {
            accessibilityOptions.classList.toggle('visible');
        });

        contrastToggle.addEventListener('click', () => {
            body.classList.toggle('high-contrast');
        });

        fontSizeIncrease.addEventListener('click', () => {
            body.classList.toggle('large-font');
        });