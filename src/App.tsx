import Payment from './components/payment/payment';

function App() {
  return (
    <section className="flex items-center justify-center h-screen w-full">
      <Payment amount={100} />
    </section>
  );
}

export default App;
