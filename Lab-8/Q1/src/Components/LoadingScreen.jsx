function LoadingScreen() {
  const isLoading = true;

  return (
    <h2>
      {isLoading ? "Loading..." : "Data Loaded Successfully!"}
    </h2>
  );
}

export default LoadingScreen;