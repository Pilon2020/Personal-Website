import images from '../utils/imageLoader';
import pdfs from '../utils/pdfLoader'

const cardData = [
  {
    id: 4,
    layout: 1,
    images: [
      images['finlandbikephoto.jpg'],
    ],
    title: 'Race Results Website',
    carddescription: 'I have been frustrated for years that there is no good place to get all of the race results I want, that also provides an indepth analysis of the race results.',
    date: 'Oct 9, 2024',
    description: `I have been frustrated for years that there is no good place to get all of the race results I want, that also provides an indepth analysis of the race results. I do now see what 
    the difficulty of this project would be as the analysis its self is easy. The hard part is getting the results, but there are plenty of websites that already do that decently well.`,
    features: `
      <ul>
        <li>Feature 1: Athlete Search</li>
          <p> Description of Feature 1 </p>
        <li>Feature 2: Racer Analysis</li>
          <p> Description of Feature 2 </p>
        <li>Feature 3: Race Analysis</li>
          <p> Description of Feature 3 </p>
      </ul>
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
    date: 'Sept 9, 2024',
    description: 'Project 3 Description',
    features: `
      <ul>
        <li>Feature 1: Description</li>
        <li>Feature 2: Description</li>
        <li>Feature 3: Description</li>
      </ul>
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
    date: 'Sept 15, 2024',
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
    date: 'June 27, 2024',
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
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
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
