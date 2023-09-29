import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const HomeCard = ({ props }) => {
  const { id, img, title, category, category_bg, card, text } = props;

  return (
    <>
      <Link to={`/donation/${id}`}>
        <div style={{ backgroundColor: card }} className="rounded">
          <img src={img} className="w-full" alt="" />
          <div className="p-4">
            <button
              style={{ color: text, backgroundColor: category_bg }}
              className={`w-[74px] h-5 rounded text-xs`}
            >
              {category}
            </button>
            <br />
            <h3
              style={{ color: text }}
              className={`font-semibold text-xl text-${text}`}
            >
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </>
  );
};

HomeCard.propTypes = {
  props: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  category_bg: PropTypes.string,
  card: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.number,
};

export default HomeCard;
