import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './components/Card/Card';
import ExcerciseDetails from './components/ExcerciseDetails/ExcerciseDetails';
import FooterComponent from './components/Footer/Footer';
import Header from './components/Header/Header';
import Questions from './components/Questions/Questions';
import data from './data/data.json';

function App() {
  const [exerciseTime, setExerciseTime] = useState(0);

  const handleAddToList = (min) => {
    setExerciseTime((prevMins) => prevMins + min);
  };

  const notify = (e) => {
    if (e.target.innerText === 'Activity Completed') {
      toast.success('Activity is completed!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.success(
        'New activity is set! I like your "Never Give Up" attitude.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
        }
      );
    }
  };

  return (
    <div className="container mx-auto relative">
      <Header />
      <div className="py-4">
        <h2 className="text-center text-xl font-semibold text-cyan-500">
          Select Today's Exercise(s)
        </h2>
      </div>
      <main className="mb-7 flex gap-3">
        <section>
          <div
            id="cards"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {data.map((card) => {
              return (
                <Card
                  key={Math.random()}
                  card={card}
                  handleAddToList={handleAddToList}
                />
              );
            })}
          </div>
        </section>
        <section className="w-[900px] sticky top-0 bg-cyan-200/90 text-black rounded p-2">
          <ExcerciseDetails exerciseTime={exerciseTime} notify={notify} />
        </section>
      </main>
      <Questions />
      <FooterComponent />
      <ToastContainer />
    </div>
  );
}

export default App;
