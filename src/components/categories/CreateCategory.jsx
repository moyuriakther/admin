const CreateCategory = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <form>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_image" className="form-label">
            Images
          </label>
          <input
            type="file"
            className="form-control"
            id="product_image"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="product_description"
            required
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary py-3">Create Category</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
