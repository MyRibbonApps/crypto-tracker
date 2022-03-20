import "./SkeletonComponent.scss";
const SkeletonComponent = () => {
  return (
    <>
      <div className="searchbar-skeleton">
        <span className="searchbar-skeleton-leftcontent">
          <span className="searchbar-skeleton-leftcontent__img--skeleton"></span>
          <span className="searchbar-skeleton-leftcontent__name--skeleton"></span>
          <span className="searchbar-skeleton-leftcontent__symbol--skeleton"></span>
        </span>
        <span className="searchbar-skeleton-rightcontent">
          <p className="searchbar-skeleton-rightcontent__cap--skeleton"></p>
        </span>
      </div>
    </>
  );
};

export default SkeletonComponent;
