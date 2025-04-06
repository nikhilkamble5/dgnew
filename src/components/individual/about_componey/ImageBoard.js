import styles from "../../styles/imageboard.module.css"
import leadership1 from "../../../assets/images/Anant Sir.jpg";
import leadership2 from "../../../assets/images/Gautam Sir.jpg";
import leadership3 from "../../../assets/images/leadership3.jpg";
import leadership4 from "../../../assets/images/leadership4.webp";
import leadership5 from "../../../assets/images/leadership5.jpeg";



const ImageBoard = () => {
  const boardMembers = [
    {
      id: 1,
      name: "Mr. Anand Shiralkar",
      position: "CEO and Founder",
      image: leadership1, 
    },
    {
      id: 2,
      name: "Mr. Gautam Kulkarni",
      position: "COO and Co - Founder",
      image: leadership2, 
    },
    {
      id: 3,
      name: "Kohei Akao ",
      position: "Director",
      image:leadership3,
    },
    {
      id: 4,
      name: " Hiroshi Shino",
      position: " COO and Co - Founder",
      image:leadership4,
    },
    {
      id: 5,
      name: "Rakesh Shembekar",
      position: "COO and Co - Founder",
      image:leadership5,
    },
  ]

  return (
    <div className={styles["board-container"]}>
      <h1 className={styles["board-title"]}>
        Board
   
        Members
      </h1>
      <div className={styles["board-grid"]}>
        <div className={styles["board-row-three"]}>
          {boardMembers.slice(0, 3).map((member) => (
            <div key={member.id} className={styles["board-card"]}>
              <div className={styles["image-container"]}>
                <img 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name} 
                  className={styles["board-image"]} 
                  loading="lazy"
                  width="250"
                  height="250"
                  decoding="async"
                />
              </div>
              <h2 className={styles["member-name"]}>{member.name}</h2>
              <p className={styles["member-position"]}>{member.position}</p>
            </div>
          ))}
        </div>
        <div className={styles["board-row-two"]}>
          {boardMembers.slice(3, 5).map((member) => (
            <div key={member.id} className={styles["board-card"]}>
              <div className={styles["image-container"]}>
                <img 
                  src={member.image || "/placeholder.svg"} 
                  alt={member.name} 
                  className={styles["board-image"]} 
                  loading="lazy"
                  width="250"
                  height="250"
                  decoding="async"
                />
              </div>
              <h2 className={styles["member-name"]}>{member.name}</h2>
              <p className={styles["member-position"]}>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageBoard

