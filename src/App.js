
const tournamentList = [
  {
    id: 0,
    name: "Jason's Birthday Tournament",
    date: "5/17/2025",
    start_time: "9:00am",
    location: "Zilker Park",
    tournament_type: "BYO4",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 2,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  },
  {
    id: 1,
    name: "First Tournament",
    date: "4/20/2025",
    start_time: "9:00am",
    location: "Zilker Park - first",
    tournament_type: "BYO3",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 1,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  },
  {
    id: 2,
    name: "End of Year Tournament",
    date: "11/18/2024",
    start_time: "9:00am",
    location: "Zilker Park",
    tournament_type: "BYO4",
    playoff_elimination_type: "Single",
    playoff_bracket_number: 1,
    prizes: {
      first_place: "$1000 and gift card",
      second_place: "$500 and gift card",
      third_place: "$100"
    },
    additional_notes: "We will be in the far side of Zilker park, parking is available in the lot across the park or accross the street"
  }
]

function App() {
  return (
    <div>
      <h1>Select Tourney</h1>
      {
        tournamentList.map((tournament)=>(
          <div className="bg-light border">
            <p><b>{tournament.name}</b></p>
            <p>{tournament.location} || {tournament.start_time}</p>
          </div>
          
        ))
      }
    </div>
  );
}

export default App;
