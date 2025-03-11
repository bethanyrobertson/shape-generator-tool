#URL: https://shape-generator-tool.vercel.app/

#Summary
This Shape Pattern Generator is a space to play with primary shapes, scale, and space to create a pattern that can be downloaded as a PNG. This project is a v2 of my previous polygon generator in the first class (pictured below).

<img width="823" alt="Screenshot 2025-03-11 at 12 39 06 PM" src="https://github.com/user-attachments/assets/c0f013cb-6a5a-4861-838f-cf646b64c5bb" />

#Process

![layout](https://github.com/user-attachments/assets/292cc1bb-5873-4f13-8229-02fa2cfcdfb5)
Wireframe

<img width="1256" alt="Screenshot 2025-03-11 at 12 33 34 PM" src="https://github.com/user-attachments/assets/aae8f2b3-2103-477b-b8f1-79e3c273841f" />
Firebase database of color combinations


<img width="478" alt="Screenshot 2025-03-11 at 12 33 46 PM" src="https://github.com/user-attachments/assets/2b31ab28-9825-4ded-848d-60d98922b88f" />
Six color combinations



#What worked well in this project (what was easy/straightforward)?
Because this was a V2 of my previous project, I had time and resources to evolve this design tool a bit more. 
  
#What didn't work well (what was difficult to understand or parse)?
The most challenging aspect of developing my design tool was undoubtedly constructing and deploying the Firebase color combination database. I encountered numerous roadblocks when attempting to structure the database schema to efficiently store thousands of color palettes while maintaining quick retrieval times. Authentication issues plagued the early development stages, with user permissions requiring significant troubleshooting when accessing saved color profiles. Implementing real-time updates across concurrent user sessions demanded complex synchronization logic that I hadn't initially anticipated. The deployment process itself introduced an entirely new set of complications—environment configuration discrepancies between development and production repeatedly broke functionality that worked perfectly locally.  

<img width="848" alt="Screenshot 2025-03-10 at 8 51 12 PM" src="https://github.com/user-attachments/assets/f089c2ad-87d5-4592-8db8-3a678a739577" />
Error screen during deployment

  
#What changes would you make to this project now that it's deployed?

  
#What would you improve and/or add to this project now that it's deployed?
I'd totally revamp my layout options to make them way more flexible. First, I'd throw in a simple drag-and-drop system so I can move text boxes wherever I want without all that coding hassle. Then I'd add some quick templates - maybe a few columns, some image-text combos, and those cool card layouts everyone's using now. For text inputs, I'd make them actually look good for once! Different sizes, custom borders, maybe even some color options to match my style. Nothing too fancy, just practical stuff that lets me arrange things my way without fighting with the interface. I'd definitely add some toggles for spacing too
  
