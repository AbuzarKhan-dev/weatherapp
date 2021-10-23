const ResultCard = ({ icon, title, value = 0, unit }) => {
  return (
    <div className="Wind info">
      {icon}
      <h1>{title}</h1>
      <h2>{value} {unit}</h2>
    </div>
  );
};

export default ResultCard;
