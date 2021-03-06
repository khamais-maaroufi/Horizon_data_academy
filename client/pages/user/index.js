import { useState, useContext, useEffect } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import axios from "axios";
import { Avatar } from "antd";
import Link from "next/link";
import { SyncOutlined, PlayCircleOutlined } from "@ant-design/icons";

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/user-courses", user);
      setCourses(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <UserRoute>
      <h1 className="jumbotron text-center square">
        <pre>Horizon data Academy</pre>
      </h1>
      {loading && (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      )}
      {courses &&
        courses.map((course) => (
          <div key={course._id} className="media pt-2 pb-1">
            <Avatar size={80} shape="square" src={course.image} />
            <div className="media-body pl-2">
              <div className="row">
                <div className="col">
                  <Link href={`/course/${course.slug}.js`} className="pointer">
                    <a>
                      <h5 className="mt-5 text-primary"> {course.name}</h5>
                    </a>
                  </Link>
                  <p style={{ marginTop: "-10px" }}>
                    {" "}
                    {course.lessons.length} Lessons
                  </p>
                  <p
                    className="text-muted"
                    style={{ marginTop: "-15px", fontSize: "12px" }}
                  >
                    By {course.instructor.name}
                  </p>
                </div>
                <div className="col-md-3 mt-3 text-center"></div>
              </div>
            </div>
          </div>
        ))}
    </UserRoute>
  );
};
export default UserIndex;
