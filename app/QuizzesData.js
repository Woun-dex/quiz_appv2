export const quizzesData = [
    {
      id: 0,
      title: 'Python',
      description: 'Python / Django Quizzes',
      questions: [
        {
          id: 0,
          mainQuestion: 'What is Python?',
          choices: [
            'A. A type of snake',
            'B. A programming language',
            'C. A web framework',
            'D. A database management system'
          ],
          answer: 1,
          statistics: {
            totalAttempts: 3,
            correctAttempts: 3,
            incorrectAttempts: 0
          }
        },
       
  
      ]
    },
    {
      id: 1,
      title: 'JavaScript',
      description: 'JavaScript Quizzes',
      questions: [
        {
          id: 0,
          mainQuestion: 'Which of the following is used to declare a variable in JavaScript?',
          choices: [
            'A. var',
            'B. let',
            'C. const',
            'D. All of the above'
          ],
          answer: 3,
          statistics: {
            totalAttempts: 7,
            correctAttempts: 6,
            incorrectAttempts: 1
          }
        },
        {
          id: 1,
          mainQuestion: 'What will the following code output? console.log(2 + "2")',
          choices: [
            'A. 4',
            'B. 22',
            'C. NaN',
            'D. Error'
          ],
          answer: 1,
          statistics: {
            totalAttempts: 8,
            correctAttempts: 6,
            incorrectAttempts: 2
          }
        },
        {
          id: 2,
          mainQuestion: 'What does DOM stand for?',
          choices: [
            'A. Document Object Model',
            'B. Digital Object Model',
            'C. Document Operating Model',
            'D. Data Object Model'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 6,
            correctAttempts: 5,
            incorrectAttempts: 1
          }
        },
        {
          id: 3,
          mainQuestion: 'Which method is used to add an element to the end of an array in JavaScript?',
          choices: [
            'A. push()',
            'B. pop()',
            'C. unshift()',
            'D. shift()'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 5,
            correctAttempts: 4,
            incorrectAttempts: 1
          }
        },
        {
          id: 4,
          mainQuestion: 'Which of the following is a correct way to create a function in JavaScript?',
          choices: [
            'A. function myFunction() {}',
            'B. function:myFunction() {}',
            'C. var myFunction = () => {}',
            'D. Both A and C'
          ],
          answer: 3,
          statistics: {
            totalAttempts: 6,
            correctAttempts: 5,
            incorrectAttempts: 1
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Algorithms',
      description: 'Algorithms and Data ',
      questions: [
        {
          id: 0,
          mainQuestion: 'What is the time complexity of a binary search?',
          choices: [
            'A. O(n)',
            'B. O(log n)',
            'C. O(n^2)',
            'D. O(1)'
          ],
          answer: 1,
          statistics: {
            totalAttempts: 5,
            correctAttempts: 4,
            incorrectAttempts: 1
          }
        },
        {
          id: 1,
          mainQuestion: 'Which algorithm is used for finding the shortest path in a graph?',
          choices: [
            'A. Merge Sort',
            'B. Quick Sort',
            'C. Dijkstra’s Algorithm',
            'D. Binary Search'
          ],
          answer: 2,
          statistics: {
            totalAttempts: 4,
            correctAttempts: 3,
            incorrectAttempts: 1
          }
        },
        {
          id: 2,
          mainQuestion: 'What is a hash table?',
          choices: [
            'A. A data structure used for sorting',
            'B. A key-value pair based data structure',
            'C. A linked list data structure',
            'D. A tree-like data structure'
          ],
          answer: 1,
          statistics: {
            totalAttempts: 6,
            correctAttempts: 5,
            incorrectAttempts: 1
          }
        },
        {
          id: 3,
          mainQuestion: 'What is the best case time complexity of quicksort?',
          choices: [
            'A. O(n log n)',
            'B. O(n^2)',
            'C. O(n)',
            'D. O(log n)'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 5,
            correctAttempts: 4,
            incorrectAttempts: 1
          }
        },
        {
          id: 4,
          mainQuestion: 'What is a greedy algorithm?',
          choices: [
            'A. An algorithm that makes the locally optimal choice at each step',
            'B. An algorithm that uses dynamic programming',
            'C. An algorithm that sorts elements before making a decision',
            'D. None of the above'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 4,
            correctAttempts: 3,
            incorrectAttempts: 1
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Data Structures',
      description: 'Data Structures Quizzes',
      questions: [
        {
          id: 0,
          mainQuestion: 'Which of the following is an example of a linear data structure?',
          choices: [
            'A. Linked List',
            'B. Binary Tree',
            'C. Graph',
            'D. Stack'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 5,
            correctAttempts: 4,
            incorrectAttempts: 1
          }
        },
        {
          id: 1,
          mainQuestion: 'Which data structure uses the FIFO (First In First Out) principle?',
          choices: [
            'A. Stack',
            'B. Queue',
            'C. Linked List',
            'D. Array'
          ],
          answer: 1,
          statistics: {
            totalAttempts: 6,
            correctAttempts: 5,
            incorrectAttempts: 1
          }
        },
        {
          id: 2,
          mainQuestion: 'What is the worst-case time complexity of searching for an element in a binary search tree?',
          choices: [
            'A. O(n)',
            'B. O(log n)',
            'C. O(n^2)',
            'D. O(1)'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 5,
            correctAttempts: 3,
            incorrectAttempts: 2
          }
        },
        {
          id: 3,
          mainQuestion: 'Which of the following is not a type of tree traversal?',
          choices: [
            'A. In-order',
            'B. Pre-order',
            'C. Post-order',
            'D. Iterative-order'
          ],
          answer: 3,
          statistics: {
            totalAttempts: 4,
            correctAttempts: 3,
            incorrectAttempts: 1
          }
        },
        {
          id: 4,
          mainQuestion: 'What is the time complexity of inserting an element at the beginning of a singly linked list?',
          choices: [
            'A. O(1)',
            'B. O(n)',
            'C. O(log n)',
            'D. O(n^2)'
          ],
          answer: 0,
          statistics: {
            totalAttempts: 6,
            correctAttempts: 5,
            incorrectAttempts: 1
          }
        }
      ]
    }
  ]
  