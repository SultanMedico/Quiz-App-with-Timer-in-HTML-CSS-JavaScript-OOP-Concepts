        // Quiz questions
        const questions = [


            {
                question: "What is abstraction in OOP?",
                options: [
                    "Showing only essential features while hiding implementation details",
                    "Creating multiple instances of a class",
                    "Converting objects to primitive data types",
                    "Removing methods from a class"
                ],
                answer: "Showing only essential features while hiding implementation details"
            },
            {
                question: "What is the main purpose of a constructor?",
                options: [
                    "To destroy objects",
                    "To initialize newly created objects",
                    "To convert classes to objects",
                    "To inherit properties from parent class"
                ],
                answer: "To initialize newly created objects"
            },
            {
                question: "What is method overloading?",
                options: [
                    "Creating methods with same name but different parameters",
                    "Deleting methods from a class",
                    "Making methods run slower",
                    "Converting methods to properties"
                ],
                answer: "Creating methods with same name but different parameters"
            },
            {
                question: "Which OOP concept is demonstrated by interfaces?",
                options: [
                    "Encapsulation",
                    "Polymorphism",
                    "Abstraction",
                    "Inheritance"
                ],
                answer: "Abstraction"
            },
            {
                question: "What is composition in OOP?",
                options: [
                    "Creating objects from multiple classes",
                    "Combining simple objects to create more complex ones",
                    "Writing code comments",
                    "Converting classes to functions"
                ],
                answer: "Combining simple objects to create more complex ones"
            },
            {
                question: "What is a static method?",
                options: [
                    "A method that belongs to the class rather than instances",
                    "A method that cannot be overridden",
                    "A method that doesn't move",
                    "A method that is always public"
                ],
                answer: "A method that belongs to the class rather than instances"
            },
            {
                question: "What is the 'this' keyword used for?",
                options: [
                    "To refer to the current object instance",
                    "To create a new object",
                    "To refer to the parent class",
                    "To terminate program execution"
                ],
                answer: "To refer to the current object instance"
            },
            {
                question: "What is the difference between 'is-a' and 'has-a' relationship?",
                options: [
                    "'Is-a' is inheritance, 'has-a' is composition",
                    "'Is-a' is composition, 'has-a' is inheritance",
                    "They are the same thing",
                    "Neither relates to OOP"
                ],
                answer: "'Is-a' is inheritance, 'has-a' is composition"
            },
            {
                question: "What is a singleton pattern?",
                options: [
                    "A class that can have only one instance",
                    "A class with a single method",
                    "A class that inherits from itself",
                    "A class with only static methods"
                ],
                answer: "A class that can have only one instance"
            },
            {
                question: "What is the purpose of the 'final' keyword in Java (or similar in other languages)?",
                options: [
                    "To prevent inheritance or method overriding",
                    "To mark a method as complete",
                    "To indicate the last method in a class",
                    "To make a method run faster"
                ],
                answer: "To prevent inheritance or method overriding"
            },
            

            
            {
                question: "OOP ka pura naam kya hai?",
                options: [
                    "Object-Oriented Programming",
                    "Object-Oriented Protocol",
                    "Object-Oriented Process",
                    "Object-Oriented Paradigm"
                ],
                answer: "Object-Oriented Programming"
            },
            {
                question: "OOP mein 'Class' kya hai?",
                options: [
                    "Ek function ka naam",
                    "Objects ka blueprint",
                    "Ek special variable",
                    "Ek programming language"
                ],
                answer: "Objects ka blueprint"
            },
            {
                question: "Inheritance in OOP allows:",
                options: [
                    "Objects to inherit properties from other objects",
                    "Classes to inherit properties from other classes",
                    "Functions to inherit variables from other functions",
                    "Variables to change their data types"
                ],
                answer: "Classes to inherit properties from other classes"
            },
            {
                question: "Polymorphism in OOP means:",
                options: [
                    "Objects can take many forms",
                    "Variables can store multiple data types",
                    "Functions can have multiple names",
                    "Classes can have multiple inheritance"
                ],
                answer: "Objects can take many forms"
            },
            {
                question: "Encapsulation in OOP refers to:",
                options: [
                    "Hiding implementation details",
                    "Combining data and functions into a single unit",
                    "Both A and B",
                    "Creating multiple instances of a class"
                ],
                answer: "Both A and B"
            },
            {
                question: "Which of these is NOT an OOP concept?",
                options: [
                    "Abstraction",
                    "Inheritance",
                    "Polymorphism",
                    "Iteration"
                ],
                answer: "Iteration"
            },
            {
                question: "An object is:",
                options: [
                    "An instance of a class",
                    "A blueprint for creating objects",
                    "A function within a class",
                    "A variable in a program"
                ],
                answer: "An instance of a class"
            },
            {
                question: "What is method overriding in OOP?",
                options: [
                    "Changing a method's parameters",
                    "Providing a specific implementation for a method that is already defined in its parent class",
                    "Deleting a method from a parent class",
                    "Creating multiple methods with the same name in the same class"
                ],
                answer: "Providing a specific implementation for a method that is already defined in its parent class"
            },
            {
                question: "The 'super' keyword is used to:",
                options: [
                    "Call methods from the parent class",
                    "Create a superclass",
                    "Define a superior method",
                    "Access super variables"
                ],
                answer: "Call methods from the parent class"
            },
            {
                question: "Which access modifier provides the most restricted access?",
                options: [
                    "public",
                    "protected",
                    "private",
                    "default"
                ],
                answer: "private"
            }
        ];

        

        // DOM elements
        const quizBody = document.getElementById('quiz-body');
        const resultContainer = document.getElementById('result-container');
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const nextButton = document.getElementById('next-btn');
        const timeElement = document.getElementById('time');
        const scoreElement = document.getElementById('score');
        const restartButton = document.getElementById('restart-btn');

        // Quiz variables
        let currentQuestionIndex = 0;
        let score = 0;
        let timeLeft = 240; // 4 minutes in seconds
        let timer;
        let selectedOption = null;

        // Initialize the quiz
        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            timeLeft = 120;
            quizBody.style.display = 'block';
            resultContainer.style.display = 'none';
            startTimer();
            showQuestion();
        }

        // Start the timer
        function startTimer() {
            updateTimerDisplay();
            timer = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    endQuiz();
                }
            }, 1000);
        }

        // Update timer display
        function updateTimerDisplay() {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timeElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Display current question
        function showQuestion() {
            const question = questions[currentQuestionIndex];
            questionElement.textContent = `Q${currentQuestionIndex + 1}: ${question.question}`;
            
            optionsElement.innerHTML = '';
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.classList.add('option');
                optionElement.textContent = option;
                optionElement.addEventListener('click', () => selectOption(optionElement, option));
                optionsElement.appendChild(optionElement);
            });
            
            nextButton.disabled = true;
            selectedOption = null;
        }

        // Handle option selection
        function selectOption(optionElement, option) {
            // Deselect previous selection if any
            const options = document.querySelectorAll('.option');
            options.forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select new option
            optionElement.classList.add('selected');
            selectedOption = option;
            nextButton.disabled = false;
        }

        // Move to next question or end quiz
        function nextQuestion() {
            // Check if answer is correct
            if (selectedOption === questions[currentQuestionIndex].answer) {
                score++;
                document.querySelector('.option.selected').classList.add('correct');
            } else {
                // Highlight correct answer
                const options = document.querySelectorAll('.option');
                options.forEach(option => {
                    if (option.textContent === questions[currentQuestionIndex].answer) {
                        option.classList.add('correct');
                    }
                });
                if (selectedOption) {
                    document.querySelector('.option.selected').classList.add('incorrect');
                }
            }
            
            // Disable all options
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });
            
            // Change button text if last question
            if (currentQuestionIndex === questions.length - 1) {
                nextButton.textContent = 'Finish';
            }
            
            nextButton.disabled = true;
            
            // Wait 1 second before moving to next question
            setTimeout(() => {
                currentQuestionIndex++;
                
                if (currentQuestionIndex < questions.length) {
                    showQuestion();
                } else {
                    endQuiz();
                }
            }, 1000);
        }

        // End the quiz
        function endQuiz() {
            clearInterval(timer);
            quizBody.style.display = 'none';
            resultContainer.style.display = 'block';
            scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
        }

        // Event listeners
        nextButton.addEventListener('click', nextQuestion);
        restartButton.addEventListener('click', startQuiz);

        // Start the quiz when page loads
        startQuiz();
