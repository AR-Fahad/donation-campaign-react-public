const HomeCard = ({ props }) => {
  const { img, title, category, category_bg, card, text } = props;
  console.log(category_bg);

  return (
    <div className={`bg-${card}`}>
      <img src={img} className="w-full" alt="" />
      <div className="p-4">
        <button
          className={`w-[74px] h-5 rounded text-xs bg-${category_bg} text-${text}`}
        >
          {category}
        </button>
        <br />
        <h3 className={`font-semibold text-xl text-${text}`}>{title}</h3>
      </div>
    </div>
  );
};

export default HomeCard;
