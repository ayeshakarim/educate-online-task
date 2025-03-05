# Educate Online, Assessment


## Task 1 - Elegant code

> For this task I have put forth a multi-level sorting funtion that I created as  part of a larger project consisting of an analytics dashboard. One of the aims of the sort function was that it should be completley generic so as to be used by multiple components within the dashboard. Each of the components would have had unique object values and all object variables were always expected to be either string or number values.

I find this code to be elegant due to following reasons:

* The function is stuctured variables are named in such a way that the function of this function is easily understood just by reading the code. While slightly more verbose than what may traditionally be considered 'elegant'. I believe that having code thatis easy to understand is just as important as code that is consise. This function showcases the latter aspect to a degree by utlilsing built-in javascript functionality with the use of .sort and .toLowerCase() for the bulk of the functionality as well as utlilisng both if/else statements and ternary operators for a compromise between consiseness and clarity. This code can be read and interpreted by developers from junior to senior while being to the point and free of verbose code.

* This code uses interfaces to enforce type saftey as is a large feature of Typscript as a language. In this instance I am using them to clarify the intent of the function and its parameters by defining a standard by which I want the 'ordering' to confrom to. I am also utilising the 'any' type to harness the looser structure of the base language (Javascript), I found that this was a good compromise in achieveing felxibility abd extensibility of the function as was its requirement.

 

## Task 2 - Sort list unit tests

> I have written a set of tests for the 'SortStrings' function checks that the function returns a sorted array without modifying the original array. It also checks that the function can handle an empty array, a single element array, duplicate values in the array, a pre-sorted array, and text casing to ensure the function behaves correctly in all cases including edge cases.
>
> To complete this task I used Jest Testing Framework as it is a common and easy to understand by non-developers due to the BDD testing style. More importantly, it is a framework I am very familiar with and so found I naturally gravitated towards it. The test cases are fairly simple and self explanatory, utilising Jest's 'describe' and 'it' functions to define test suites and test cases.
The test is an example of a unit test, which checks the behavior of my function while being focused, and fast-running. As a result I have chosen to use hard-coded expected values in the assertions to check the actual output of the function. This also allows the tests to be performed in isolation,as it does not depend on external systems or resources such as databases, web services ect.


## Task 3 - System Design

> To tackle the architecture of an AI Chat application. As it is an MVP, I am focussing my architecture on the core functionality, prioritising simplicity over any advanced features.

#### Backend
* On refrencing the OpenAI documentation for accessing stream data, I saw that Node was listed as supported for integration. As I am most familiar with NodeJs for API developement, I decided to stick with it for our backend with Express.js as a framework. My logic in choosing express is because of its simplicity, for an MVP it will be smooth and easy to implement an event-driven architecture. I am keeping simplicty at the forefront so that it can be created quickly and so that there is room for flexibility during further development phases.

* As the application will require real-time streaming of data, I have chosen to use an event-driven architecture utilising Websocket. Websocket is industry standard for when it comes to message streaming and is seamlesly supported in node.

* The backend logic would be broken down as follows:
    * Establish a WebSocket connection for real-time communication.
    * Get user messages via WebSocket.
    * Send messages to the OpenAI API.
    * Receive streaming responses from the OpenAI API.
    * Send all messages and chatbot responses to all connected clients via WebSocket.

#### Frontend
* I would most likely go with a lightweight React front end for the MVP, as it is written in Typescript, the same as out APIs which simplifies the developement process. As the front end will be a simple chat interface, there is not much in terms of front end functionality so the simplicity of React is perfect for this implementation.

* The front end would be broken down into the following components:
    * Text input for user to write their messages
    * Scrollable display area where chat history is displayed with differentiators for:
        * current user
        * bot
        * other users (identified by their anon Id)

#### Logic
The way I would structure the logic of this system would be as follows. 
* To facilitate anonymous interaction with the chat bot, I would create a new session for each user who has accessed the application. After the Websocket connection is established, a temporary ID will be generated to maintain context for the session and corresponding chats. This would be stored in our database so that the chat history is persistent in our application.
* records would consist of 
    * session: 
        ````
        {
            _id: ObjectId(),
            userId: String
            wsMetadata: { port, address...},
            sessionStart: Date,
            sessionEnd: Date,
        }
        ````
    * chatMessage:
        ````
        {
            _id: ObjectId(),
            userId: String,
            text: String, 
            type: String, // 'user', 'bot'
            timestamp: Date
        },
        ````
* To deal with db server space, messages should periodically get deleted, so that only the last say 500 messages exist and are displayed. (arbitrary value).
* For an MVP, i would use a simple in memory Map to store records, this is not ideal for a real world live app as if the servers go down all data is lost. A database structure might be overkill for this kind of application after doing some quick research Redis looks like a viable happy medium as it is an in-memory store that can be scaled easily.

* For application deployment, I would opt for using docker as it is a popular for deployment. It supports cloud and on-prem solutions and is quite an industry standard at this point.


#### On-Prem considerations

All of the technologies I have outlined above by and large all support on prem implementations.

