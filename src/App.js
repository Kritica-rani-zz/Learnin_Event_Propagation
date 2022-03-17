export default function App() {
  const Array = [
    {
      Name: "AAlo",
      id: 1
    },
    {
      Name: "Bhujiya",
      id: 2
    }
  ];
  const handleClick = (e, item) => {
    alert(`${e.id}${e.Name}`);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {Array.map((item) => {
        return (
          <div onClick={(e) => handleClick(item)}>
            <li>{item.Name}</li>
          </div>
        );
      })}
    </div>
  );
}
