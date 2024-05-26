const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Sultan.',
}

const about = {
  
  name: 'Sultan Khan',
  role: 'Mobile Application Developer | Front End Developer | Full Stack Developer',
  description:
    'As an ambitious problem solver deeply passionate about crafting exceptional experiences on both web and mobile platforms, I am eager to collaborate with a team of innovative minds. My profound enthusiasm for technology, mobile applications, and user experience fuels my drive to continuously enhance my skills, ensuring I remain at the forefront of the ever-evolving tech landscape.',
  resume: 'https://docs.google.com/document/d/e/2PACX-1vRbJE8vxyk6VdYdLQWcR4FJ4cn2qWs_rur3jYb8mPVikjsER42eHaZBcHFwX6Q7Ng/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/khansultan1',
    github: 'https://github.com/khansultan1',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Flutter',
  'Dart',
  'API Integration',
  'FireBase',
  'IONIC',
  'Angular',
  'Vue',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'khansultan1@gmail.com',
}

export { header, about, projects, skills, contact }
