module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || !members.length) {
    return false;
  };

  const updatedMembers = members.filter(el => typeof el === 'string').map(el => el.trim().toUpperCase()).sort();
  
  const DreamTeam = [];

  for (let i = 0; i < updatedMembers.length; i++) {
    DreamTeam.push(updatedMembers[i][0]);
  }
  
  return DreamTeam.join('');
};