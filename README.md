# 	** **URL: https://shape-generator-tool.vercel.app/	** **

## 	** **Summary	** **
This Shape Pattern Generator is a space to play with primary shapes, scale, and space to create a pattern that can be downloaded as a PNG. This project is a v2 of my previous polygon generator in the first class (pictured below).
<br>![intro](https://github.com/user-attachments/assets/49849c61-59d3-4d41-ac26-4b5d82863185)<br>

Some of my inspiration:
Talia Cotton: https://web.archive.org/web/20230131030402/https://branding.sva.edu/tool/ <br>
Martin Lorenz: https://flexiblevisualsystems.info/ <br>
Tim Rodenbroeker: https://timrodenbroeker.de/about/ <br>


## Process
![layout](https://github.com/user-attachments/assets/9fe2062b-3cfb-41cd-bc09-1303f0e31521)<br/>
Wireframe<br/>

![Firebase](https://github.com/user-attachments/assets/db6cc7cc-d5c4-422b-b9e1-32c6e86504e0)<br>
Firebase database of color combinations<br/>


### What worked well in this project (what was easy/straightforward)?
Because this was a V2 of my previous project, I had time and resources to evolve this design tool a bit more. This is definitely the area of code that interests me the most, and I have been able to find a lot of helpful resources specific to coding as drawing and SVGs.
  
### What didn't work well (what was difficult to understand or parse)?
The most challenging aspect of developing my design tool was undoubtedly constructing and deploying the Firebase color combination database. I encountered numerous roadblocks when attempting to structure the database schema to efficiently store thousands of color palettes while maintaining quick retrieval times. Authentication issues plagued the early development stages, with user permissions requiring significant troubleshooting when accessing saved color profiles. Implementing real-time updates across concurrent user sessions demanded complex synchronization logic that I hadn't initially anticipated. The deployment process itself introduced an entirely new set of complications—environment configuration discrepancies between development and production repeatedly broke functionality that worked perfectly locally.  

<img width="848" alt="Screenshot 2025-03-10 at 8 51 12 PM" src="https://github.com/user-attachments/assets/f089c2ad-87d5-4592-8db8-3a678a739577" /><br/>
Error screen during deployment<br/>

  
### What changes would you make to this project now that it's deployed? What would you improve and/or add to this project now that it's deployed?

I'd totally revamp my layout options to make them way more flexible. First, I'd throw in a simple drag-and-drop system so I can move text boxes and shapes around fluidly. Then I'd add some quick templates - maybe a few columns, some image-text combos. I would love to continue to iterate on this as an internal tool for my marketing team, so that they are able to create simple on-brand graphics for events and social media with some design constraints to keep consistency. 
