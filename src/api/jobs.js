export default getJobs = async () => {
  const response = await fetch(
    "https://spreadsheets.google.com/feeds/list/1cNWOxv5M_NSV_ucf4ywLemWgu6r0Z3h2HHDyiDGrTho/default/public/full?alt=json"
  );

  return response.json();
};
