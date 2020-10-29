const myQuestions = [
  {
    question: 'Tác giả của tác phẩm Truyện Kiều là ai?',
    answers:['Nguyễn Khuyến', 'Nguyễn Công Trứ','Nguyễn Du','Nguyễn Ánh'],
    correctAnswer: 'Nguyễn Du'
  },
  {
    question: 'Thúy Kiều mang họ gì?',
    answers: ['Vương', 'Lý', 'Kim','Hoạn'],
    correctAnswer: 'Vương'
  },
  {
    question: 'Ngoài Thúy Vân, Thúy Kiều còn 1 em trai tên là gì?',
    answers: ['Vương Thẩm', 'Vương Quan', 'Vương Quang', 'Vương Viên'],
    correctAnswer: 'Vương Quan'
  }
];
let myQ = myQuestions[Math.floor(Math.random()*myQuestions.length)];
for (let i=0; i<myQuestions.length; i++)
{
 myQuestions[i].answers = (myQuestions[i].answers).sort(function(a, b){return 0.5 - Math.random()});
}
let y = prompt(myQ.question + '\n' + myQ.answers);
if (y == myQ.correctAnswer)
{
    alert('true');
}
else
{
    alert('false');
}
