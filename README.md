# Lab 8 - Xavier Sevcik

## Answers to questions:
1. The best place to fit automated testing like this is within a Github Action whenever something is pushed (or pull requested).
This is because it's the best idea to give developers the most immediate feedback possible - it would be no good if you found out your very first line of code
was wrong after writing 50,000 more.
2. End-to-end testing would not be appropriate to test the output of a function, because this style of testing is directed toward the user interface.
3. Unit testing would not be appropriate to test such a messaging feature because it probably would be a combination of multple components of the code, which is
   really a better fit for end-to-end testing.
4. A unit test would be appropriate to test a "max message length" function because one can manipulate the length of a message and test corner cases easily.