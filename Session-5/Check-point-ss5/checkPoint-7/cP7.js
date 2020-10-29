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
  let Count = 0;
    for (let x in myQuestions)
    {
       let y = prompt(myQuestions[x].question + '\n' + myQuestions[x].answers);
       if (y == myQuestions[x].correctAnswer)
       {
           alert('true');
           Count++;
       }
       else
       {
           alert('false');
       }
    }
    alert('We out of question :(');
    alert(`You answered correctly ${Count} of ${myQuestions.length} questions`);