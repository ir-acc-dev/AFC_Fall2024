import CardContainer from "./components/CardContainer";
import Greeting from "./components/Greeting";
import UserCard from "./components/UserCard";

function App() {

  const users = [
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Alice', age: 25 },
  ];

  const sortedUsers = users.sort((a, b) => a.age - b.age);

  return (
    <div>

      <div>
      <Greeting name = 'Irish' />  
      </div>

      <CardContainer>
        {sortedUsers.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age} />
        ))}
      </CardContainer>
    </div>
  );
}
  
  export default App;