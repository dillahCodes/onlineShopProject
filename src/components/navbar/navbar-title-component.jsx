import PropTypes from "prop-types";

const NavbarTitle = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h1>Online Shoping</h1>
    </div>
  );
};

export default NavbarTitle;

NavbarTitle.propTypes = {
  className: PropTypes.string,
};
