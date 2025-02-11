// export default const schedule = () => {
//   let people = ["Shi", "Vy", "Tjeerd", "Vera", "Kamil"];

//   function getScheduleForWeek(year: number, week: number) {
//     let activePeople = [...people];

//     // // Handle removals/additions for specific weeks
//     // if (year === 2025 && week >= 42) {
//     //   activePeople = activePeople.filter((person) => person !== "Charlie"); // Charlie leaves
//     // }
//     // if (year === 2025 && week >= 45) {
//     //   activePeople.push("Eve"); // Eve joins
//     // }

//     let len = activePeople.length;

//     return {
//       year,
//       week,
//       assignments: [
//         { task: "Bathroom", person: activePeople[week % len] },
//         { task: "Kitchen", person: activePeople[(week + 2) % len] },
//         { task: "Planten water", person: activePeople[(week + 3) % len] },
//       ],
//     };
//   }

//   // Example: Check who has tasks for week 41, 42, and 45 of 2025
//   console.log(getScheduleForWeek(2025, 49));
//   console.log(getScheduleForWeek(2025, 50));
//   console.log(getScheduleForWeek(2025, 51));
//   console.log(getScheduleForWeek(2025, 52)); // Charlie leaves
//   console.log(getScheduleForWeek(2026, 1)); // Eve joins
//   // console.log(getScheduleForWeek(2028, 1)); // Eve joins
// };
