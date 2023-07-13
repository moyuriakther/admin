const SalesStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale Statistics</h5>
          <iframe
            title="statistics"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
            }}
            width="100%"
            height="350px"
            src="https://charts.mongodb.com/charts-shop-kcgba/embed/charts?id=644df760-8d2d-4727-86bb-84999c4173eb&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SalesStatistics;
