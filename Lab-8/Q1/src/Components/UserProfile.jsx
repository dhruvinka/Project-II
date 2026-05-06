function UserProfile() {
  const name = "Virat";
  const age = 34;
  const state = "Punjab";

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>State: {state}</p>
    </div>
  );
}

export default UserProfile;