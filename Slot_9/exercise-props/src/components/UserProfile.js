import { Card } from "react-bootstrap";
import studentImg from "../assets/student2.png";
const UserProfile = ({ user }) => (
  <div>
    <Card style={{ width: "18rem" }} className="mb-4">
      <Card.Img
        variant="top"
        src={studentImg}
        alt={`${user.name}'s avatar`}
      />
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>{user.age}</Card.Text>
    </Card>
  </div>
);
export default UserProfile;
