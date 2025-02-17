import { app, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
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

export const getUserProfile = async (userId: string) => {
  //   console.log("getUserProfile() called");
  //   const docRef = doc(db, "users", userId!);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     return docSnap.data();
  //   } else {
  //     // docSnap.data() will be undefined in this case
  //     return null;
  //   }
};

export const getHouseData = async (userId: string) => {
  const q = query(
    collection(db, "houses"),
    where("members", "array-contains", userId)
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const houseDoc = querySnapshot.docs[0]; // Get only the first document
    return {
      id: houseDoc.id,
      ...houseDoc.data(),
    };
  } else {
    return null; // No house found
  }
};
