import images from '../utils/imageLoader';
import pdfs from '../utils/pdfLoader'

  // {
  //     id: 0,
  //     layout: 1,
  //     images: [
  //       images[``],
  //     ],
  //     title: 'Blank Template',
  //     carddescription: ' ',
  //     date: 'Last Updated: Mon Day, Year',
  //     description: ` `,
  //     features: `
  //       <ul>
  //         <li>Feature 1: Athlete Search</li>
  //           <p> Description of Feature 1 </p>
  //         <li>Feature 2: Racer Analysis</li>
  //           <p> Description of Feature 2 </p>
  //         <li>Feature 3: Race Analysis</li>
  //           <p> Description of Feature 3 </p>
  //       </ul>
  //     `,
  //     additionalText: ``,
  //     specifications: '',
  //     cadFiles: '',
  //     extraFiles: ``,
  //     AddPhotos: '',
  //     hidden: true,
  //   },

const cardData = [

    {
      id: 7,
      layout: 3,
      images: [
        images[`EnveAero/AeroCockpitDesign.png`],
        images[`EnveAero/FEA_U3.png`],
      ],
      title: 'ENVE Aero Stem Redesign',
      carddescription: 'Due to full aero cockpits attaching aerobars to road bikes has become more difficult, this project aims to fix that for one specific stem design.',
      date: 'Last Updated: Dec 20, 2024',
      description: `This class project for a Finite Element Analysis (FEA) course focused on redesigning the <a href="https://enve.com/products/aero-stem?variant=45111154376988" target="_blank">ENVE Aero Stem</a> to work with standard 30mm aero bars,
       such as those used in the <a href="https://www.sram.com/en/zipp/models/hb-vkal-clpe-a1" target="_blank"> Zipp Vuka Clip</a>.
       With flat aero handlebars becoming more popular, the aim was to offer cyclists a simple solution that didnt involve replacing their entire cockpit. The idea came to me when one of my teammates was preparing for an Ironman and struggled to find a compatible setup. 
       Unable to find a solution, he ended up racing without clip-on bars. My goal was to create a design that required minimal modifications to the bike, which led to the decision to redesign just the faceplate and build the necessary attachments onto it.
       <br><br>
       The first model I built was replicating the existing ENVE Aero Stem faceplate in Fusion 360. This ensured the new design would integrate seamlessly with the original stem. I simplified some elements of the model during this step to make it easier to work with and prepare it for FEA simulations.
       Building on this base, I developed an attachment system to support clip-on aerobars, focusing on keeping the design as minimal and functional as possible. Using Abaqus for Finite Element Analysis, I applied realistic loads, including rider weight and forces exerted on the aerobars, 
       to test the designs durability. These simulations were key to refining the geometry and identifying areas of stress concentration. 
       <br><br>
       While the loads had to be simplified for the purposes of the class, I still wanted to ensure precision in the simplified system, iterating the mesh to ultimatey arrive have the mesh converage with around 736000 degrees of freedom, while not taking years to run.
       
       `,
       features: `- **Redesigned Faceplate for Aerobar Compatibility**  
  This project focused on reimagining the ENVE Aero Stem faceplate to make it compatible with clip-on aerobars. The redesign allows for seamless integration with flat aero handlebars, addressing the limitations of the original three-point mounting system and eliminating the need for a complete cockpit replacement.

- **Stress-Optimized Design**  
  The redesigned faceplate underwent rigorous Finite Element Analysis (FEA) to assess stress distribution and deformation under typical cycling loads. The analysis confirmed that the updated design keeps stress levels well below the aluminum yield strength while ensuring minimal deformation for a secure and reliable setup.

- **Iterative Mesh Refinement**  
  To ensure accuracy, the design process included an iterative approach to mesh refinement. This allowed for high precision in areas of critical stress while keeping computational requirements manageable. The final mesh, with over 736,000 degrees of freedom, delivered reliable insights into the faceplate's structural performance.
      `,
      additionalText: `The redesigned ENVE Aero Stem faceplate was analyzed using finite element analysis (FEA) to assess its structural integrity under typical cycling loads. The analysis revealed that the maximum principal stress observed in the simulation was 23.2 MPa, significantly lower than the 75.11 MPa 
      estimated via hand calculations. This discrepancy arises due to the hand calculations' simplified assumptions, while the FEA provides a more accurate representation by considering complex geometry and distributed forces. Similarly, the maximum displacement observed in the simulation was -1.49 × 10^-7 m, 
      much lower than the hand-calculated value of 0.0003526 m. These findings confirm the faceplate's structural soundness, ensuring it can withstand expected loads without excessive deformation. Mesh refinement was conducted iteratively, achieving convergence at 736,575 degrees of freedom (DoF), where displacement and stress values stabilized. Partitioned meshes were used to enhance accuracy in high-stress regions while maintaining efficiency in less critical areas. The study highlighted the importance of refining mesh
      density to achieve accurate stress distribution results. The FEA findings align well with the project's objective to design a faceplate that meets structural requirements, offering a practical solution for cyclists who wish to retrofit their existing ENVE Aero Stem without replacing the entire system. Future work should focus 
      on incorporating detailed fastener models and dynamic loading conditions to further refine the design.
`,
      specifications: '',
      cadFiles: '',
      extraFiles: ``,
      AddPhotos: '',
      hidden: false,
  },

    {
      id: 6,
      layout: 0,
      images: [
        images[`MustangShowdown/PXL_20241013_185741491.jpg`],
        images[`MustangShowdown/First_Place_2024.jpg`],
        images[`MustangShowdown/LOGO.jpg`],
        images[`MustangShowdown/LOGO(1).png`],
        images[`MustangShowdown/LOGO Sticker.png`],
        images[`MustangShowdown/PALLET.jpg`],
      ],
      title: 'Mustang Showdown 2024',
      carddescription: 'A super sprint triathlon race I hosted, which happened to be the first of its kind in the nation for the collegiate level.',
      date: 'Last Updated: Oct 15, 2024',
      description: `At the end of the season in April of 2024, the Cal Poly Triathlon coach, Coach Scott, approached me to see if I would be interested in hosting a new race at 
      Cal Poly in the fall. The race as described by Coach Scott and some of the other coaches was going to be a series of super short races, held over the course of one morning.
      After each race the racers would be resorted into new heats, so the races would get more competetive and faster as the day progressed. Somewhat similar to the Super Leagues style of 
      racing where each triathlete does a munch of super sprints over the course of the day. I accepted the challenge and got to work. Working through throughout the summer I was able to host
      the race on October 13th, 2024. With 54 registrants the race was a little smaller than I would have liked from a business perspective, as we were unable to make money from the event, but it was nice having a smaller field
      as we ran into quite a few problems on race day that were considerably more easy to solve since we had so few people racing. `,
      features: `- **Short Races**  
  Each race was only around 30 minutes long, having a 300m pool swim, 5km bike, and a 2km run. Both the bike and the run consisted of 4 laps, with runners turning into the finish line about halfway through their fourth lap.

- **Multiple Short Races**  
  This caused athletes to have to strategize more for each race and were unable to just go completely all out the whole time. If they did, they might not have enough left in the tank for the following rounds when they would need it more. While each race was short, the whole combined total for the men meant by the end of the day they were swimming 900m, biking 15km, and running 6km, which, while shorter than an Olympic distance race, requires very different pacing for the race.

- **Progressive Waves**  
  After each wave, I resorted the athletes into new heats for the following rounds. They started out in fully random heats, so the fastest people could be put with the slowest. This allowed everyone to have an equal chance of progressing to the next round. In the resorting process, I would take the fastest athletes from each heat and resort them into heats together. This caused the heats to have a smaller and smaller spread between the racers as the day went on, making the later races more exciting.

- **Race Manager Program**  
  I created a race manager program to help me manage the race. The program was originally designed to make it so I could auto-generate heats for upcoming rounds very quickly, but due to some unforeseen race day events (I forgot people might not race), I was unable to use the program. A project description of the program, as well as a link to the project, can be found [here](/#/projects/5). I go into more detail about the shortcomings of the program and what I want to improve as I still want to keep developing the program.

      `,
      additionalText: ` **Post Race Report**  
Mention the full report I made for USAT is linked at the bottom in the extra files section.
`,
      specifications: '',
      cadFiles: '',
      extraFiles: `<p><a href="https://docs.google.com/spreadsheets/d/10d0qrCvABImRJyWm-EiLY51QGX-v6ahU/edit?usp=sharing&ouid=112113793053301426450&rtpof=true&sd=true" target="_blank" >Full Results</a></p>
      <p><a href="_blank" target="_blank">Post Race Report to USAT</a></p>`,
      hidden: false,
    },

    {
      id: 5,
      layout: 2,
      images: [
        images[`RaceManager/RaceManagerRound1DExample.png`],
        images[`RaceManager/RaceManagerRound1Example.png`],
        images[`RaceManager/RaceManagerEntry.png`],
        images[`RaceManager/RaceManagerBoot.png`],
        images[`RaceManager/RaceManagerResultsEdit.png`],
        images[`RaceManager/RaceManagerResultsEdit_Selected.png`],
      ],
      title: 'Mustang Showdown Race Manager Program',
      carddescription: 'A small python program to manage preliminary race results for multi-round triathlon events',
      date: 'Last Updated: Oct 14, 2024',
      description: `The Mustang Showdown Race Manager is a Python-based application designed to organize multi-round triathlon events. 
      It uses Tkinter for the user interface and employs optimization techniques to create balanced race heats based on athletes' swim and run times.`,
      features: `- **Feature 1: Athlete Search**  
  Load athlete data from Excel files, including details like names, teams, bib numbers, and performance times, to automatically organize racers into heats based on swim and run times.

- **Feature 2: Racer Analysis**  
  Analyze athlete performance across multiple rounds. The program dynamically adjusts heat assignments based on real-time race results, ensuring balanced competition with top performers advancing.

- **Feature 3: Race Analysis**  
  Generate detailed race reports after each round, including heat assignments, performance results, and rankings. The program supports exporting results to text and CSV files for further review or printing.
      `,
      additionalText: `### Description:
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
      specifications: '',
      cadFiles: '',
      extraFiles: `The MockData used in the example: <a href="media/MOCK_DATA.xlsx" download> MOCK_DATA.xlsx</a>`,
      hidden: false,
    },

    {
    id: 4,
    layout: 1,
    images: [
      images['finlandbikephoto.jpg'],
    ],
    title: 'Race Results Website',
    carddescription: 'I have been frustrated for years that there is no good place to get all of the race results I want, that also provides an indepth analysis of the race results.',
    date: 'Last Updated: Oct 9, 2024',
    description: `I have been frustrated for years that there is no good place to get all of the race results I want, that also provides an indepth analysis of the race results. I do now see what 
    the difficulty of this project would be as the analysis its self is easy. The hard part is getting the results, but there are plenty of websites that already do that decently well.`,
    features: `- **Feature 1: Athlete Search**  
  Load athlete data from Excel files, including details like names, teams, bib numbers, and performance times, to automatically organize racers into heats based on swim and run times.

- **Feature 2: Racer Analysis**  
  Analyze athlete performance across multiple rounds. The program dynamically adjusts heat assignments based on real-time race results, ensuring balanced competition with top performers advancing.

- **Feature 3: Race Analysis**  
  Generate detailed race reports after each round, including heat assignments, performance results, and rankings. The program supports exporting results to text and CSV files for further review or printing.
    `,
    additionalText: `Other than my experience learning how to do React for THIS website, and using React as the basis for the Race Results website I have had basically no experience with coding everything
    that is necessary for this website. It has required me to dive into database development and storage optimization as the results documents end up taking up a lot of space if I have a seperate document for each one
    , and then the question is how do I efficiently search through the results for the data I want.`,
    specifications: 'I originally built out the basic analysis function that I wanted in a excel document as I am much more confident with it there.',
    cadFiles: '',
    extraFiles: `The original <a href='https://docs.google.com/spreadsheets/d/19zZrQdFdPiwhV3rvaIdNkJ6UEtoLKbeMjExR50L9jJY/edit?usp=sharing' target='_blank'>Google Sheet</a>`,
    AddPhotos: '',
    hidden: false,
    },
    {
    id: 3,
    layout: 2,
    images: [
      images['sandiaview.jpg'],
    ],
    title: 'Smartphone Alarm Clock',
    carddescription:' ',
    date: 'Last Updated: Sept 9, 2024',
    description: 'Project 3 Description',
    features: `- **Feature 1:**  
    Feature 1 Description

- **Feature 2:**  
  Feature 2 Description

- **Feature 3:**  
  Feature 3 Description
    `,
    additionalText: 'This can be an area to add key information that does not need to be highlighted in any other section',
    specifications: 'This is more for the technical projects that actually have specifications',
    cadFiles: 'I need to find a way to hold any cad files i need for the project here',
    extraFiles: `This is where written reports can go`,
    AddPhotos: 'What is the most optimal way to share a photo gallery?',
    hidden: true,
    },

    {
    id: 1,
    layout: 0,
    images: [
      images['TrainerTable/TrainerTable1.png'],
      images['TrainerTable/TableMountV3_3.jpg'],
      images['TrainerTable/TableMountV1_2.jpg'],
      images['TrainerTable/TrainerTable2.png'],
      images['TrainerTable/TableMountV1_1.jpg'],
      images['TrainerTable/TableMountV2_1.jpg'],
      images['TrainerTable/TableMountV2_2.jpg'],
      images['TrainerTable/TableMountV3_1.jpg'],
      images['TrainerTable/TableMountV3_2.jpg'],
  
    ],
    title: 'Indoor Trainer Table',
    carddescription:'A small table for indoor training.',
    date: 'Last Updated: Sept 15, 2024',
    description: `One common problem I have been running into while doing indoor rides on my trainer I am just far enough away from the table that I cannot reach things
    like my phone or the tv remote. Companies like Wahoo have a solution for this with products like the
    <a href="https://www.wahoofitness.com/devices/indoor-cycling/accessories/kickr-desk-buy" target="_blank"> Kickr Desk</a>
    , which I personally do not want to pay $200 for; and is probably overkill in terms of size for most of what I need to store on it during a workout. I have seen a few products
    That are a little similar to this product, but all cost close to the same as the Kickr Desk. This lead me to wanting to make something that could be manufactured quickly
    and cheaply, and could be adjusted as needed based on the users requirements.`,
    features: `This section is highlighting key points of the project that make it stand out from other related projects/products`,
    additionalText: 'This can be an area to add key information that does not need to be highlighted in any other section',
    specifications: 'This is more for the technical projects that actually have specifications',
    cadFiles: 'I need to find a way to hold any cad files i need for the project here',
    extraFiles: `This is where written reports can go`,
    AddPhotos: 'What is the most optimal way to share a photo gallery?',
    hidden: false,
    },
 
 
    {
    id: 2,
    layout: 0,
    images: [
      images['WildlandResporator/Wildfire_1.jpg'],
    ],
    title: 'WUI Firefighter Respirator',
    carddescription: 'A respritory protective device for wildland and wildland urban interface firefighters',
    date: 'Last Updated: June 27, 2024',
    description: `This project aims to address the critical and long-standing need for effective respiratory protection for wildland firefighters, as current options, 
    such as N95 masks and bandanas, fall far short of offering adequate defense against the harmful smoke, toxic materials, and gases they are exposed to on the job. 
    Wildland firefighters, who regularly endure long shifts in extreme environments, face significantly higher risks of developing lung cancer, cardiovascular disease, 
    chronic obstructive pulmonary disease (COPD), and other serious health conditions. A mortality study by the National Institute for Occupational Safety & Health (NIOSH) 
    has demonstrated that career firefighters have notably higher rates of cancer-related deaths compared to the general population, further underscoring the urgency of providing 
    reliable respiratory protection. Unfortunately, previous efforts to design respirators for wildland firefighting have been unsuccessful in meeting the National Fire Protection 
    Association (NFPA) 1984 standards or withstanding the physical demands of wildland firefighting conditions, which include high heat, rough terrain, and long durations of use. 
    Through the collaboration between the Wildfire Conservancy, the WUI Fire Institute at Cal Poly, and CAL FIRE, a team of students, myself included, came together to design an an innovative 
    air-respirator designed to provide continuous airflow while effectively filtering out harmful particulates and gases. This new device aims to bridge the gap between safety and practicality, 
    ensuring that it not only meets strict safety standards but is also durable, comfortable, and capable of withstanding the rigors of wildland firefighting.
    Although the team made a lot of progress we were unable to reach a final product that we felt happy with and were confident that would meet the NFPA standards and would protect the firefighters
    as was our goal.`,
    features: ` While working on this project we developed a series of goals/features for the final product.
    
- **Feature 1:**  
    Feature 1 Description

- **Feature 2:**  
  Feature 2 Description

- **Feature 3:**  
  Feature 3 Description
  `,
  
    additionalText: 'This can be an area to add key information that does not need to be highlighted in any other section',
    specifications: 'This is more for the technical projects that actually have specifications',
    cadFiles: 'I need to find a way to hold any cad files i need for the project here',
    extraFiles: `Our full final report: <a href='${pdfs['WildlandResporator/Final Design Report.pdf']}' target='_blank'>Wildland Firefighter Respiratory Protection Device</a>`,
    AddPhotos: 'What is the most optimal way to share a photo gallery?',
    hidden: false,
    },

]
export default cardData;
