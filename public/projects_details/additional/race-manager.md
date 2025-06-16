### Race Format:
#### Round 1: Initial heats
These heats can be generated well before the event starts, so athletes can be notified of which round 1 heat they are in. Make sure when loading racer the xlsx has First Name, Last Name, Gender, Team, Bib Number, Swim Times and Run Times. Round 1 heats are exported as both a txt file, and a csv file to be loaded into the womens race program.

* **Sorting Racers:** Athletes are initially sorted into heats based on their swim and run times using an optimization process. This process minimizes the variance in average times within each heat, ensuring balanced competition.
* **Number of Heats:** The men are sorted into 3 heats, and the women into 2.
* **Output:** The program assigns athletes to heats and saves their bib numbers, teams, and times into files for reference.

#### Round 2: Heat Assignments Based on Round 1 Performance
As racers come across the finish line, enter their bib numbers into the system. Their name and bib number will populate a small display, and once everyone has finished, a table will pop up allowing you to edit the results should a mistake have been made.

* **Top Performers:** After Round 1, the top 2/3rds of male finishers from each heat advance to the semi finals in Round 2, and the top 1/2 of women advance to the finals in Round 2.
    * In order to ensure as close to even rest between all racers, racers from Mens Round 1 heat 1 will always be placed in Mens Round 2 heat 1 and racers from Mens Round 1 heat 3 will always be placed in Mens Round 2 heat 2, with the racers in Mens Round 1 heat 2 being split randomly between the two heats.
    * The racers in the bottom third will be placed in a consolation race (Mens Round 2 heat 3)
    * The top 50% of women are sorted into the womens final (Womens Round 2 heat 2) and the rest will go to a consolation race (Womens Round 2 heat 1)
* **Lucky Losers:** Two "lucky losers" (The first athlete from outside the top 2/3rds) from Round 1 heats are randomly selected and reassigned to higher-performing heats.

#### Round 3: Mens Final
As the first two heats in Round 2 are completed, the top 50% from each heat will be moved to one heat for the final. The rest of the athletes are done.

#### Saving and Exporting Results
Results are saved at the end of each round in a text file. After each round a dialog box allows you to review and edit entries prior to saving it.
#### Issues
I know there are a lot of issues with the program, and I want to keep improving this.
1. There is no way to handle if someone doesnt show up for the race/doesn't finish.
2. Currently the womens program cannot properly load in the heats generated in the mens program
3. The current save format is not great as it does not print in a visually clear way and needs to be first printed to pdf before actually being printed.

#### Future Plans:
1. Combine Mens and Womens programs into one
2. Allow for heats to be loaded into the program, so it doesnt have to stay running the whole time prior to a race
3. Have a way to handle DNS's and DNF's
4. Record a finishing timestamp to help later with results processing
5. Add a way to input start time in order to calculate full finish time

The full code for both programs can be found on my [GitHub](https://github.com/Pilon2020/Mustang-Showdown-Race-Manager) `,