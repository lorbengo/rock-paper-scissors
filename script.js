function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randNum = Math.floor(Math.random() * 3);
  return choices[randNum]
}
