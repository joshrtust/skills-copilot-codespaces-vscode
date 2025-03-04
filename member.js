function skillsMember() {
  // fetch all the skills
  fetch('http://localhost:3000/skills')
    .then(response => response.json())
    .then(skills => {
      // fetch all the skills of the member
      fetch('http://localhost:3000/members/1/skills')
        .then(response => response.json())
        .then(memberSkills => {
          // filter the skills of the member
          const filteredSkills = skills.filter(skill => memberSkills.some(memberSkill => memberSkill.id === skill.id))
          // display the skills of the member
          filteredSkills.forEach(skill => {
            const li = document.createElement('li')
            li.textContent = skill.name
            document.getElementById('skills').appendChild(li)
          })
        })
    })
}