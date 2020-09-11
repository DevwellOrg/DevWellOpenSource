exports.test = {
  lessonTitle: "This is a test lesson",
  lessonDescription:
    "This is a lesson designed to test slack's ability to handle doing stuff about thingies.",
  lessonQuiz: {
    questions: [
      {
        question: "What is the Capital of Denmark?",
        type: "multipleChoice",
        multipleChoiceAnswers: ["Laputa", "London", "Lilliput"],
        correctAnswer: "Laputa",
      },
      {
        question: "How old is Josh?",
        type: "input",
        correctAnswer: "68",
      },
    ],
  },
}