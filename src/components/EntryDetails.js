// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const EntryDetails = () => {
//     const { id } = useParams();
//     const [entry, setEntry] = useState([]);

//   // // console.log(entry)

//     useEffect(() => {
//       fetch(`http://localhost:8000/entries/${id}`)
//         .then((resp) => resp.json())
//         .then((data) => setEntry(data));
//     }, [id]);

//   console.log(entries)

//   return (
//     <div className="entry-details">
//       {entries && (
//           <article className="entry-details">
//             <h2>{entries.prompt}</h2>
//             <p className="entry-details">Written on {entries.date}</p>
//             <div className="entry-details">{entries.body}</div>
//           </article>
//         )}
//     </div>
//   );
// };

// export default EntryDetails;
