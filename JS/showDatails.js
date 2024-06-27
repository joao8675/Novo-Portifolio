function showDetails(detailsId) {
    const details = {
        details1: {
            title: 'Delicacy Pizzaria',
            info: 'Tem o objetivo de facilitar o processo de entregas e garantir que você tenha a melhor experiência possível com nossas deliciosas pizzas. No nosso site, você pode acompanhar promoções exclusivas que oferecemos regularmente. Desde descontos em pizzas tradicionais até combos especiais com bebidas e sobremesas, você sempre encontrará algo para satisfazer seu apetite.Além disso, você pode navegar pelo nosso menu diversificado, que inclui uma ampla variedade de pizzas com diferentes sabores e ingredientes. Escolha suas preferidas e monte seu pedido de forma rápida e fácil.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/Delicacy.png', '../Styles/Assets/Delicacy.png'], // URLs das imagens do projeto
            link: 'https://joao8675.github.io/Delicacy-site-/'
        },
        details2: {
            title: 'Dashboard Invester',
            info: 'O Inverster é uma plataforma intuitiva e dinâmica, projetada para proporcionar uma visão clara e detalhada das suas finanças. Através de gráficos interativos e personalizáveis, você pode monitorar o desempenho das suas contas, acompanhar transações, analisar investimentos e muito mais. Cada gráfico foi desenvolvido com tecnologia de ponta para garantir precisão e facilidade de interpretação, ajudando você a tomar decisões informadas.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/FirstDashboard.png', '../Styles/Assets/SecondDashboard.png'],
            link: 'https://joao8675.github.io/Dashboard/'
        },
        details3: {
            title: 'Login Page',
            info: 'Nossa página de login foi projetada com o usuário em mente, garantindo que o acesso à sua conta seja feito de maneira simples e eficiente. Ao acessar a página, você encontrará um layout limpo e organizado, com campos claramente identificados para inserir seu endereço de e-mail e senha. A interface é responsiva, adaptando-se perfeitamente a qualquer dispositivo, seja ele um desktop, tablet ou smartphone, para que você possa acessar sua conta de qualquer lugar.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/LoginPagefirst.png', '../Styles/Assets/LoginPagefirst.png'],
            link: 'https://joao8675.github.io/Login-Page/'
        },
        details4: {
            title: 'To-Do List',
            info: 'Nossa To-Do List foi criada utilizando a poderosa biblioteca React, que garante uma experiência de usuário rápida e responsiva. Combinamos isso com o Tailwind CSS para oferecer uma interface moderna e estilizada, que é ao mesmo tempo funcional e agradável aos olhos.',
            skills: ['HTML:5', 'React', 'Tailwind', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/To-do-List.png', '../Styles/Assets/To-do-List.png'],
            link: 'https://joao8675.github.io/To-do-list/'
        },
        details5: {
            title: 'Portifolio v1',
            info: 'sta versão do meu portfólio foi desenvolvida com uma combinação de tecnologias modernas para garantir uma experiência de usuário rápida, responsiva e visualmente atraente. Utilizei HTML, CSS e JavaScript para estruturar e estilizar o site Os projetos estão destacados em uma seção dedicada, onde cada um é apresentado com uma descrição detalhada, tecnologias utilizadas e links para o repositório no GitHub e para a versão ao vivo, quando aplicável.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/PortfolioFirst.png', '../Styles/Assets/PortfolioSecond.png'],
            link: 'https://joao8675.github.io/Portifolio/'
        },
    };

    const modalTitle = document.querySelector('.topModal h2');
    const modalInfos = document.querySelector('.Infos');
    const modalSkills = document.querySelector('.UsedSkills');
    const modalLink = document.querySelector('.bottomModal a');
    const modalImages = document.querySelectorAll('.projectImage');

    modalTitle.textContent = details[detailsId].title;
    modalInfos.textContent = details[detailsId].info;
    modalSkills.innerHTML = details[detailsId].skills.map(skill => `<div class="skill">${skill}</div>`).join('');
    modalLink.href = details[detailsId].link;
    modalLink.textContent = 'Enter the Site';

    // Atualizar as imagens do modal
    details[detailsId].images.forEach((imageSrc, index) => {
        if (modalImages[index]) {
            modalImages[index].src = imageSrc;
        }
    });

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');

    overlay.style.display = 'block';
    modal.style.display = 'block';

    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.opacity = '1';
        modal.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
}

function hideDetails() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');

    overlay.style.opacity = '0';
    modal.style.opacity = '0';
    modal.style.transform = 'translate(-50%, -50%) scale(0.9)';

    setTimeout(() => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    }, 300);
}