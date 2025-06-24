The Mustang Showdown Race Manager is a Python application built with Tkinter to simplify the organization of multi‑round collegiate triathlon events. By importing an Excel roster containing each athlete’s name, team, bib number, and swim/run times, the program uses an optimization algorithm to minimize variance in average performance across heats, ensuring fair and balanced competition.

<figure class="left large" style="margin-right:2rem">
  <img
    src="/projects_details/media/race-manager/RaceManagerRound1DExample.png"
    alt="Round 1 Heat Layout"
  />
  <figcaption>
    Round 1 Heat Layout.
  </figcaption>
</figure> <br><br>

Key features include automated athlete search, loading names and split times from XLSX files, and dynamic heat assignment that adapts to real‑time results. After the first round, finish‑line bib numbers are entered and displayed in a popup table for manual review and corrections. Two “lucky losers” are selected to fill remaining slots when needed. Detailed race reports can be exported as text or CSV for printing or deeper analysis. 

In Round 1, heats are created in advance so participants know their starting groups. Men are divided into three heats and women into two, with both CSV and TXT export options. Round 2 assignments depend on Round 1 performance: the top two‑thirds of men advance to the semi‑final heats (with the remaining third in a consolation heat), while the top half of women move to their final and the rest to a consolation heat. Round 3 merges the top finishers from the semi‑finals into a single men’s final heat. After each round concludes, results are saved automatically to text files following user verification in a pop‑up review window. After each round a dialog box allows you to review and edit entries prior to saving saving as a .txt file.
<br><br><br><br><br><br><br><br>

<figure class="left large" style="margin-right:2rem;">
  <img
    src="/projects_details/media/race-manager/RaceManagerRound1Example.png"
    alt="Heat Assignment Window"
  />
  <figcaption>
    Heat Assignment Window 
  </figcaption>
</figure>

#### Issues
I know there are a lot of issues with the program, and I want to keep improving this.
1. There is no way to handle if someone doesnt show up for the race/doesn't finish (DNS/DNF).
2. Currently the womens program cannot properly load in the heats generated in the mens start up sequence.
3. The current save format is not great as it does not print in a visually clear way and needs to be first printed to pdf before actually being printed.

#### Future Plans:
1. Combine Mens and Womens programs into one
2. Allow for heats to be loaded into the program, so it doesnt have to stay running the whole time prior to a race
3. Have a way to handle DNS's and DNF's
4. Record a finishing timestamp to help later with results processing.
5. Add a way to input start time in order to calculate full finish time.<br><br> <br><br>

The full code for both programs can be found on my [GitHub](https://github.com/Pilon2020/Mustang-Showdown-Race-Manager)

#### Project Files
Example data: [MOCK_DATA.xlsx](/projects_details/media/RaceManager/MOCK_DATA.xlsx)

