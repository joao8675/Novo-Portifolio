function showDetails(detailsId) {
    const details = {
        details1: {
            title: 'Delicacy Pizzaria',
            info: 'Este é um site de restaurante de pizza para auxiliar no processo das entregas. nele e possivel ver as promocoes, realizar pedidos, realizar o pagamento online e conversar com o atendente se necessario.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla praesentium quae, optio expedita sunt consequatur vitae accusamus perspiciatis explicabo et reprehenderit ipsa nemo modi natus eos consectetur debitis officia? Ex.',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/Delicacy.png', '../Styles/Assets/Delicacy.png'], // URLs das imagens do projeto
            link: 'https://joao8675.github.io/Delicacy-site-/'
        },
        details2: {
            title: 'Dashboard Invester',
            info: 'Este é um painel de controle para um banco.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa repellendus voluptates. Odio odit praesentium similique officiis molestiae veniam laboriosam quidem nesciunt, et dolorem ea, aperiam, maiores saepe vitae fuga.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit dolorem amet, fuga officia, numquam exercitationem dignissimos quibusdam sit consequuntur facilis porro eligendi voluptatibus quo provident, laborum deleniti velit incidunt!',
            skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
            images: ['../Styles/Assets/Delicacy.png', '../Styles/Assets/Delicacy.png'],
            link: 'http://www.dashboard-invester.com'
        },
        // Adicione mais projetos conforme necessário
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