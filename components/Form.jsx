import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className=" text-left">
        <span className="blue_gradient">Track New Job</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Company Name
          </span>
          <input
            value={post.companyName}
            onChange={(e) => setPost({ ...post, companyName: e.target.value })}
            type="text"
            placeholder="Company name"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Job ID
          </span>
          <input
            value={post.jobId}
            onChange={(e) => setPost({ ...post, jobId: e.target.value })}
            type="text"
            placeholder="If there is a job id, put it here"
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Position Title
          </span>
          <input
            value={post.position}
            onChange={(e) => setPost({ ...post, position: e.target.value })}
            type="text"
            placeholder="example: software engineering"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Date Applied
          </span>
          <input
            value={post.dateApplied}
            onChange={(e) => setPost({ ...post, dateApplied: e.target.value })}
            type="date"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            location
          </span>
          <input
            value={post.city}
            onChange={(e) => setPost({ ...post, city: e.target.value })}
            type="text"
            placeholder="City"
            className="form_input"
          />
          <input
            value={post.state}
            onChange={(e) => setPost({ ...post, state: e.target.value })}
            type="text"
            placeholder="State"
            className="form_input"
          />
          <input
            value={post.country}
            onChange={(e) => setPost({ ...post, country: e.target.value })}
            type="text"
            placeholder="Country"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
