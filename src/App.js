// import { useRef } from 'react';
import { data } from './data';
import './styles/app.css'

const App = () => {
  const GroupRef = useRef([]);

  const onScroll = (el) => {
    const styles = GroupRef.current.map((group, i) => {
      const rect = group.getBoundingClientRect();

      return { group, rect }
    }).find((group) => group.rect.bottom >= window.innerHeight * 0.5);
  }

  return (
      <div>
        {data.map((group, i) => (
          <div className='sectionContainer'>
            <h1>{group.title}</h1>
            <p>{group.paragraph}</p>
          </div>
        ))}
      </div>
  );
}

export default App;
