const educacion = [
    {
        imagen: 'unsalogo.jpg',
        lugar: 'Universidad Nacional de Salta ',
        anio: '(2020-2021)',
        descripcion: 'Primer año de la carrera "Tecnicatura Universitaria en Programación"'
    },
    {
        imagen: 'logoAP.png',
        lugar: '#SeProgramar ',
        anio: '(2021)',
        descripcion: 'Primera etapa de la capacitación del plan nacional de formación en programación "Argentina Programa".'
    },
    {
        imagen: 'logoAP.png',
        lugar: '#YoProgramo ',
        anio: '(2022-2023)',
        descripcion: 'Segunda etapa de la capacitación del plan nacional de formación en programación "Argentina Programa" .'
    },
    {
        imagen: '1000programadoressalta.png',
        lugar: '#1000ProgramadoresSalteños ',
        anio: '(2022)',
        descripcion: 'Capacitación en Python, en el plan provincial en conjunto con la Universidad nacional de Salta "1000 Programadores Salteños".'
    }
]

function armareduyexp(qs, src, titulo, anio, descrip) {
    let educaciones = document.querySelector(qs)
    let li = document.createElement("li");
    li.className = 'lista-item'
    let img = document.createElement("img");
    img.src = src;
    img.className = 'logo';
    let p = document.createElement('p');
    p.innerHTML = titulo;
    p.className = 'lugar';
    let span = document.createElement("span");
    span.innerHTML = anio;
    let desc = document.createElement("p");
    desc.className = 'descripcion';
    desc.innerHTML = descrip

    li.appendChild(img);
    p.appendChild(span)
    li.appendChild(p);
    li.appendChild(desc);
    educaciones.appendChild(li);
}

educacion.forEach(({ imagen, lugar, anio, descripcion }) => armareduyexp('#listaedu', imagen, lugar, anio, descripcion));


const hardskills = [
    {
        nombre: 'HTML',
        porcentaje: '90'
    },
    {
        nombre: 'CSS',
        porcentaje: '70'
    },
    {
        nombre: 'JavaScript',
        porcentaje: '60'
    },
    {
        nombre: 'Bootstrap',
        porcentaje: '70'
    },
    {
        nombre: 'Angular',
        porcentaje: '75'
    },
    {
        nombre: 'Github',
        porcentaje: '60'
    }
]

const softskills = [
    {
        nombre: 'Capacidad analítica y de resolución de problemas',
        porcentaje: '90'
    },
    {
        nombre: 'Trabajo en equipo',
        porcentaje: '80'
    },
    {
        nombre: 'Comunicación asertiva',
        porcentaje: '80'
    },
    {
        nombre: 'Liderazgo',
        porcentaje: '100'
    },
    {
        nombre: 'Adaptación',
        porcentaje: '90'
    },
    {
        nombre: 'Ganas de aprender',
        porcentaje: '100'
    }
]

function armarhabilidades(qs, nombre, porcentaje) {
    let habilidades = document.querySelector(qs);
    let divfila = document.createElement("div");
    divfila.className = 'row my-3';
    let divcolumna = document.createElement("div");
    divcolumna.className = 'col';
    divcolumna.innerHTML = nombre;
    divcolumna.style.color = 'var(--details-color)';
    divcolumna.style.fontWeight = '500';
    let divcentral = document.createElement("div");
    divcentral.className = 'progress';
    let divpb = document.createElement("div");
    divpb.className = 'progress-bar progress-bar-striped progress-bar-animated';
    divpb.role = 'progressbar';
    divpb.ariaValueNow = porcentaje;
    divpb.ariaValueMin = '0';
    divpb.ariaValueMax = '100';
    divpb.style.width = porcentaje + '%';

    divcentral.appendChild(divpb);
    divcolumna.appendChild(divcentral);
    divfila.appendChild(divcolumna);
    habilidades.appendChild(divfila);
}

hardskills.forEach(({ nombre, porcentaje }) => armarhabilidades('#habilidadesduras', nombre, porcentaje));
softskills.forEach(({ nombre, porcentaje }) => armarhabilidades('#habilidadesblandas', nombre, porcentaje));

const experiencia = [
    {
        imagen: 'construccion-logo.jpg',
        lugar: 'Proximamente ',
        anio: '(2023)',
        descripcion: 'Esperando la oportunidad de comenzar a rellenar ésta sección...'
    }
]

experiencia.forEach(({ imagen, lugar, anio, descripcion }) => armareduyexp('#listaexp', imagen, lugar, anio, descripcion));
