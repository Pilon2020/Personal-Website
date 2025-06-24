// renderLayout.js

const renderLayout = (card, descriptionComponent, additionalComponent) => {
  return (
    <div className="layout-wrapper">
      <h1>{card.title}</h1>
      <div>{descriptionComponent}</div>
      <div>{additionalComponent}</div>
    </div>
  );
};

export default renderLayout;
