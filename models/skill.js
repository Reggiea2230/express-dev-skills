const skills = [
    {id: 123333, skill: 'HTML', improve: true},
    {id: 123433, skill: 'CSS', improve: false},
    {id: 123233, skill: 'Javascript', improve: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function getAll(){
    return skills;
  };
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function getOne(id) {
      
    return skills.find(skill => skill.id === parseInt(id));

  }

  function create(skill){
    skill.id = Date.now() % 1000000;
    skill.improve = false;
    skills.push(skill);
  }