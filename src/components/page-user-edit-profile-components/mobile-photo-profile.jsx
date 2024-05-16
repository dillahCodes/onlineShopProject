import PropTypes from "prop-types";

const MobilePhotoProfile = ({ url }) => {
  return (
    <section className="w-full py-5 border-b">
      <label htmlFor="photo" role="button" className="text-center flex flex-col gap-y-3">
        <div className="w-16 mx-auto">
          <img
            src={
              url ||
              "https://images.tokopedia.net/img/cache/300/tPxBYm/2023/1/20/757f728e-d320-4f75-91ac-cedc5f1edc42.jpg"
            }
            alt="user default image"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h1 className="font-bold text-base capitalize text-[rgb(0,_170,_91)]">ubah foto profil</h1>
        <input type="file" name="photo" id="photo" className="hidden" />
      </label>
    </section>
  );
};

export default MobilePhotoProfile;

MobilePhotoProfile.propTypes = {
  url: PropTypes.string,
};
