import { useEffect, useRef } from "react";
import { data } from "./data";
import "./styles/app.css";

const App = () => {
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current
      .map((group, i) => {
        const rect = group.getBoundingClientRect();

        return { group, rect };
      })
      .find((group) => group.rect.bottom >= window.innerHeight * 0.5);

    document.body.style.backgroundColor = `${styles.group.dataset.bgcolor}`;
    document.body.style.color = styles.group.dataset.txtcolor;
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {data.map((group, i) => (
        <div
          ref={(el) => (GroupRef.current[i] = el)}
          className="sectionContainer"
          data-bgcolor={group.theme.background}
          data-textcolor={group.theme.text}
        >
          <h1>{group.title}</h1>
          <p>{group.paragraph}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
