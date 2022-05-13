# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: you would be able to fix the mistake by migrating the foreign key. The foreign key would be the name you give it and belong to Cohort model.



  Researched answer: A user can migrate a new or missed foreign key. With this situation you need to associate the model classes with a has_many and belongs_to. Foreign keys always goes on the belongs_to side. Best convention practices would have the foreign key be the modelname_id with the data type being an integer.

  Pseudo code written out

  class Cohort < Application
  has_many :students

  class Student < Application
  belongs_to :cohort

2. Which RESTful routes must always be passed params? Why?

  Your answer: delete is a RESTful route that needs to be passed with params because a param is needed to be identified to be deleted.

  Researched answer: Params allow users to add more information by passing values into a controller. The RESTful routes that must always pass a params are delete



3. Name three rails generator commands. What is created by each?

  Your answer: rails db:create which creates a new database. rails db:migrate which updates you schema. Will have to get back to you on the third.

  Researched answer:rails db:create which creates a new database. rails db:migrate which updates you schema. Rails g model creates a model that allows users to pass information through a command line in Rails. Naming conventions and data types are important in establishing your models.  



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students   
controller method index
will show a list of all students        

action: "POST"   location: /students   
controller method create
will create a new student entry     


action: "GET"    location: /students/new
controller method new
will return the html form for creating a new student  


action: "GET"    location: /students/2  
controller method show
will display the second student


action: "GET"    location: /students/2/edit
controller method show
will display the second student    

action: "PATCH"  location: /students/2
controller method update
will update the second student         

action: "DELETE" location: /students/2
controller method destroy
will delete the second student       



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).


As Van, I want to be more organized with my task so I can send more memes.
As LJ, I want to be efficient throughout my day so I can send Van more memes.
As a manger, I want see my overall task progression so I assess my workload more properly.
As a coworker, I want to see if I have duplicate action items so I can avoid being redundant.
As Natalia, I want to gauge my setup process so I can be less stressed taking photos.
As Zane, I want to flow throughout my day so I can rock out more to the music I love.
As Sarah, I want to have visual reminders of upcoming task so I can set myself up for success.
As Austin, I want to complete all my chores so I can go surfing quicker.
As Elyse, I want to finish all my task so I can watch more Star Wars.
as Charlean, I want conquer my list so I can continue my Aloha-Hola vibe.   
