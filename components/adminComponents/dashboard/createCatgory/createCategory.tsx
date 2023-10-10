"use client"

const CreateCategory: React.FC<any> = ({
  formData,
  handleChange,
  handleSubmit,
  decisionPoint,
  categories,
}) => {
  console.log("formdata", formData.type)
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Create New Category</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-60">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
              </div>

              <div className="py-30 px-30">
                <form
                  className="contact-form row y-gap-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Category Title*
                    </label>

                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Course Title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="category">Decisionpoint:</label>
                    <select
                      id="decisionPointId"
                      name="decisionPointId"
                      value={
                        formData.decisionPointId ? formData.decisionPointId : ""
                      }
                      onChange={handleChange}
                    >
                      <option value="">All Decisionpoints</option>
                      {decisionPoint.map((descisonpoint: any) => (
                        <option key={descisonpoint.id} value={descisonpoint.id}>
                          {descisonpoint.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="category">Category Type:</label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type ? formData.type : ""}
                      onChange={handleChange}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category: any) => (
                        <option key={category.id} value={category.type}>
                          {category.type}
                          {console.log("type", category.type)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit" // This makes it a submit button
                      className="button -md -purple-1 text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCategory
