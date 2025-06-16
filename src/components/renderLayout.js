// renderLayout.js
const renderLayout = (card, descriptionComponent, additionalComponent) => {
  return (
    <div className="layout-wrapper">
      <h1>{card.title}</h1>
      <p>{card.carddescription}</p>
      <div>{descriptionComponent}</div>
      <ul>
        {card.features.map((feature, i) => (
          <li key={i}>
            <strong>{feature.title}:</strong> {feature.text}
          </li>
        ))}
      </ul>
      <div>{additionalComponent}</div>
    </div>
  );
};

export default renderLayout;
