import { Card, Badge } from "antd";
import Link from "next/link";

const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;

  return (
    <Link href={`/course/${slug}`}>
      <a>
        <Card
          className="mb-4"
          cover={
            <img
              src={image}
              alt={name}
              style={{ height: "200px", objectFit: "cover" }}
              className="p-1"
            />
          }
        >
          <h2 className="font-weight-bold">{name}</h2>
          <p>By {instructor.name}</p>
          <Badge
            count={category}
            style={{ backgroundColor: "#2596be" }}
            className="pb-2 mr-2"
          />
          <h4 className="pt-2" style={{ color: "#2596be" }}>
            {paid ? price + " TND" : "For free"}
          </h4>
        </Card>
      </a>
    </Link>
  );
};

export default CourseCard;
