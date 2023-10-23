"use client"

const CreateCourse: React.FC<any> = ({
  formData,
  handleChange,
  handleSubmit,
  categories,
  decisionPoint,
}) => {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
            <div className="mt-10">
             Please create a new course
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
                      Course Title*
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
                    <label htmlFor="category">Category:</label>
                    <select
                      id="courseCategoryId"
                      name="courseCategoryId"
                      value={
                        formData.courseCategoryId
                          ? formData.courseCategoryId
                          : ""
                      }
                      onChange={handleChange}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category: any) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Short Description*
                    </label>

                    <textarea
                      required
                      placeholder="Short Description"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      rows={7}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Description*
                    </label>

                    <textarea
                      required
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={7}
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Level*
                    </label>
                    <input
                      required
                      type="text"
                      name="level"
                      placeholder="Course Level"
                      value={formData.level}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Duration*
                    </label>
                    <input
                      required
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Course Duration"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Povider Name*
                    </label>
                    <input
                      required
                      type="text"
                      name="providerName"
                      value={formData.providerName}
                      onChange={handleChange}
                      placeholder="Provider Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Provider Url*
                    </label>
                    <input
                      required
                      type="text"
                      name="providerUrl"
                      value={formData.providerUrl}
                      onChange={handleChange}
                      placeholder="Provider Url"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Provider Description*
                    </label>

                    <textarea
                      required
                      name="providerDescription"
                      placeholder="Provider Description"
                      value={formData.providerDescription}
                      onChange={handleChange}
                      rows={7}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Upload Image*
                    </label>
                    <input
                      required
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Course Image Url"
                    />
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

export default CreateCourse
