export const Person = {
    firstname: 'Annika',
    lastname: 'Fuhge',
    email: 'annikafuhge96@gmail.com',
    birthdate: '27.06.1996',
    github: 'https://github.com/afuhge',
    programminglanguages: [
        {skill1: 'Java', width: 95},
        {skill1: 'Xtend', width: 95},
        {skill1: 'HTML/CSS', width: 60},
        {skill1: 'Dart', width: 40},
        {skill1: 'JavaScript', width: 30},

    ],
    languages: [
        {skill1: 'Deutsch', width: 100},
        {skill1: 'Englisch', width: 80},

    ],
    frameworks: [
        {framework: 'Angular', width: 50},
        {framework: 'Bootstrap', width: 50},
        {framework: 'Vue.js', width: 10}
    ]
}

export const education = {
    education: [
        {
            degree: 'Master of Science',
            school: 'Technische Universität Dortmund',
            major: 'Informatik',
            year: '04/2018 – 07/2020',
            title: 'LiveDocs: Document-Centric Process Management'
        },
        {
            degree: 'Bachelor of Science',
            school: 'Technische Universität Dortmund',
            major: 'Informatik',
            year: '10/2014 – 05/2018',
            title: 'Graphische Modellierung von Cinco Produktspezifikationen'
        },
        {
            degree: 'Allgemeine Hochschulreife (Abitur)',
            school: 'Riesener Gymnasium Gladbeck',
            major: '',
            year: '2006 - 06/2014',
            title: ''
        },

    ]
}

export const work = {
    work: [
        {
            name: 'Wissenschaftliche Mitarbeiterin',
            chair: 'Lehrstuhl für Programmiersysteme',
            university: 'Technische Universität Dortmund',
            year: '08/2020 – heute',
            tasks: 'Entwicklung von DSLs inkl. Model2Model Transformation mit <a target="_blank" href="https://www.jetbrains.com/mps/" class="links">MPS</a>, Qualitätssicherung von <a target="_blank" href="https://pyro.scce.info/" class="links">Pyro</a>, Weiterentwicklung von <a target="_blank" href="https://ls5vs023.cs.tu-dortmund.de/home" class="links">Pyrus</a> mit Fokus auf UX, Weiterentwicklung von <a target="_blank" href="https://dime.scce.info/" class="links">DIME</a> mit Fokus auf UX',
            technologies: [{name: 'MPS', link: 'https://www.jetbrains.com/mps/'}, {
                name: 'Eclipse',
                link: 'https://www.eclipse.org/downloads/'
            }, {name: 'Java', link: 'https://www.java.com/de/'}, {
                name: 'Xtend',
                link: 'https://www.eclipse.org/xtend/'
            }, {name: 'Graphiti', link: 'https://www.eclipse.org/graphiti/'}]
        },
        {
            name: 'Wissenschaftliche Hilfskraft',
            chair: 'Lehrstuhl für Programmiersysteme',
            university: 'Technische Universität Dortmund',
            year: '06/2018 – 07/2020',
            tasks: 'Weiterentwicklung der BA: Integration von kannwas, Weiterentwicklung von <a target="_blank" href="https://dime.scce.info/" class="links">DIME</a> mit Fokus auf Usability und Design',
            technologies: [{name: 'Eclipse', link: 'https://www.eclipse.org/downloads/'}, {
                name: 'Java',
                link: 'https://www.java.com/de/'
            }, {name: 'Xtend', link: 'https://www.eclipse.org/xtend/'}, {
                name: 'Graphiti',
                link: 'https://www.eclipse.org/graphiti/'
            }]
        },
        {
            name: 'Studentische Hilfskraft',
            chair: 'Lehrstuhl für Programmiersysteme',
            university: 'Technische Universität Dortmund',
            year: '06/2016 – 06/2018',
            tasks: 'Weiterentwicklung von <a target="_blank" href="https://cinco.scce.info/" class="links">Cinco</a>: Entwicklung von neuen Features und Views in Java/Xtend, Validierung von bestehenden Grammatiken in Java/Xtend, Testen der API via Unit Tests mit JUnit',
            technologies: [{name: 'Eclipse', link: 'https://www.eclipse.org/downloads/'}, {
                name: 'Java',
                link: 'https://www.java.com/de/'
            }, {name: 'Xtend', link: 'https://www.eclipse.org/xtend/'}, {
                name: 'Graphiti',
                link: 'https://www.eclipse.org/graphiti/'
            }, {name: 'JUnit', link: 'https://junit.org/junit5/'}]
        },
    ]
}

export const teaching = {
    teaching: [
        {
            name: 'Lehrende für Mathematik für Informatiker 1',
            university: 'Technische Universität Dortmund',
            year: '10/2020 – 04/2021'
        },
        {
            name: 'Tutorin für Mathematik für Informatiker 1',
            university: 'Technische Universität Dortmund',
            year: '10/2016 – 04/2017'
        },
    ]
}

export const sonstiges = {
    skills: [
        {name: 'Git'}, {name: 'LaTeX'}, {name: 'Maven'}, {name: 'MPS'}, {name: 'Docker'}, {name: 'REST API'}, {name: 'Quarkus'}, {name: 'MongoDB'}
    ]
}
