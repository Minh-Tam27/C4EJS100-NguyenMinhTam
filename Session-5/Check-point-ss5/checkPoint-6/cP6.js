const myQuestions = [
    {
      question: 'Tác giả của tác phẩm Truyện Kiều là ai?',
      answers:[ 'Nguyễn Khuyến', 'Nguyễn Công Trứ','Nguyễn Du','Nguyễn Ánh'],
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
  for(let i in myQuestions)
    {
    let y = prompt(myQuestions[i].question + '\n' + myQuestions[i].answers);
         if (y == myQuestions[i].correctAnswer)
         {
             alert('true');
         }
         else
         {
             alert('false');
         }
    }
        alert('We out of question :(');